import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaImages } from "react-icons/fa6";

const Generator = ({ addPrediction }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [defaultTags, setDefaultTags] = useState(["neked", "nsfw"]);
  const [typeOfImage, setTypeOfImage] = useState("Women: Photography");
  const [prediction, setPrediction] = useState({ status: null, output: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState("512");
  const [height, setHeight] = useState("512");
  const [numOutputs, setNumOutputs] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [seed, setSeed] = useState(null);
  let intervalId;

  const categories = {
    "Base": ["model", "basic", "default"],
    "Number of people": ["single", "group", "couple"],
    "Body": ["slim", "athletic", "curvy"],
    "Age": ["child", "teen", "adult", "elderly"],
    "Face": ["smiling", "serious", "laughing"],
    "Hair Color": ["blonde", "brunette", "redhead"],
    "Hair Style": ["short", "long", "curly", "straight"],
    "Ethnicity": ["asian", "caucasian", "african", "hispanic"],
    "Style": ["casual", "formal", "sporty"],
    "Setting": ["indoor", "outdoor", "studio"],
    "View": ["close-up", "medium", "wide"],
    "Action": ["standing", "sitting", "walking"],
    "Clothing": ["dress", "suit", "casual wear"],
    "Clothing Modifiers": ["ripped", "designer", "vintage"],
    "Accessories/Objects": ["hat", "glasses", "jewelry", "diamond jewelry", "gold jewelry", "pearl jewelry"],
    "Modifiers/Effects": ["black and white", "sepia", "HDR"],
    "Advanced Style": ["avant-garde", "bohemian", "gothic"],
    "Character (beta)": ["heroic", "villainous", "neutral"],
  };

  const handleTagSelect = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleTypeOfImageChange = (e) => {
    setTypeOfImage(e.target.value);
  };

  const toggleCategory = (category) => {
    setExpandedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { seed } = e.target.elements;

    // Filter out invalid tags and join into a single string
    const validTags = selectedTags.filter(tag => tag !== "neked" && tag !== "vagina" && tag !== "seductive" && tag !== "Sharpdetails");
    const prompt = `${validTags.join(', ')}, naked, vagina, seductive, Sharpdetails`;

    try {
      const response = await axios.post("http://localhost:5000/api/predictions", {
        prompt: prompt,
        seed: parseInt(seed.value),
        width: parseInt(width),
        height: parseInt(height),
        num_outputs: parseInt(numOutputs),
      });

      console.log("Prediction Response:", response.data);

      setPrediction(response.data);
      intervalId = setInterval(() => pollPrediction(response.data.id), 2000);
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false);
    }
  };

  const pollPrediction = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/predictions/${id}`);
      console.log("Polling Response:", response.data);
      setPrediction(response.data);

      if (response.data.status === "succeeded" || response.data.status === "failed") {
        clearInterval(intervalId);
        setIsLoading(false);

        if (response.data.status === "succeeded") {
          await sendGeneratedImages(response.data.output);
        } else if (response.data.status === "failed") {
          setError("Image generation failed. Please try again.");
          console.error("Generation failed. API response:", response.data);
        }
      }
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false);
      console.error("Polling failed. Error:", error);
    }
  };
  const sendGeneratedImages = async (imageUrls) => {
    try {
      const { seed } = document.forms[0];

      const validTags = selectedTags.filter(tag => tag !== "neked" && tag !== "vagina" && tag !== "seductive" && tag !== "Sharpdetails");
      const prompt = `${validTags.join(', ')}, naked, vagina, seductive, Sharpdetails`;

      if (typeof imageUrls === "string") {
        imageUrls = [imageUrls];
      }

      for (const url of imageUrls) {
        await axios.post("http://localhost:5000/api/predictions/save-images", {
          prompt: prompt,
          seed: parseInt(seed.value),
          width: parseInt(width),
          height: parseInt(height),
          imageUrls: [url],
        });
      }
    } catch (error) {
      console.error("Error saving images:", error.response ? error.response.data : error.message);
      setError(error.response?.data.detail || "Failed to save images.");
    }
  };

  

  return (
    <div className="generation_page">
      <form onSubmit={onSubmit}>
        <div className="generation_page_warp">
          <div className="generation_tags">
            <div className="generation_inp">
              <label htmlFor="typeOfImage">SELECT A Generation type</label>
              <select name="typeOfImage" id="typeOfImage" onChange={handleTypeOfImageChange}>
                <option value="Women: Photography" selected>Women: Photography</option>
                {/* <option value="Women: Photography" selected>Women: Photography</option> */}
                <option value="Women: Detailed">Women: Detailed</option>
                <option value="Women: Realistic">Women: Realistic</option>
                <option value="Women: Legacy">Women: Legacy</option>
                <option value="Women: Intricate">Women: Intricate</option>
                <option value="anime_detailed">Anime: Detailed</option>
                <option value="Anime: HD">Anime: HD</option>
                <option value="Furry: Detailed">Furry: Detailed</option>
                <option value="Men: Base">Men: Base</option>
                <option value="Men: Photography">Men: Photography</option>
                <option value="Doggystyle">Doggystyle</option>
                <option value="Blowjob">Blowjob</option>
                <option value="Missionary">Missionary</option>
                <option value="Titfuck">Titfuck</option>
                {/* Add more options here if needed */}
              </select>
            </div>
            <div className="selected_tags">
              <h4>Selected Tags</h4>
              <div className="tags_container">
                {selectedTags.map((tag) => (
                  <span key={tag} className="tag selected" onClick={() => handleTagSelect(tag)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="category_names">
              {Object.keys(categories).map((category) => (
                <div key={category} className="tag_category">
                  <h5 onClick={() => toggleCategory(category)}>
                    {category}
                  </h5>
                </div>
              ))}
            </div>
            <div className="tags_section">
              {expandedCategory && (
                <div className="tags_section_wrap">
                  <h5>{expandedCategory}</h5>
                  <div className="tags_container">
                    {categories[expandedCategory].map((tag) => (
                      <span
                        key={tag}
                        className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                        onClick={() => handleTagSelect(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="image_generate_btn">Generate image</button>
            <p>Status: {prediction.status}</p>
            {error && <p>Error: {error}</p>}
            <a href="" className="go_pro_text">
              <p>You're low on credits!</p>
              <p><b>Go pro</b> to keep generating images</p>
            </a>
          </div>

          <div className="generated_area">
            {isLoading ? (
              <div className="loader_warp">
                <div className="loader"></div>
                <p>Status: {prediction.status}</p>
                {error && <p>Error: {error}</p>}
              </div>
            ) : prediction.status === "succeeded" && prediction.output.length > 0 ? (
              <div className="generated_images">
                {Array.isArray(prediction.output)
                  ? prediction.output.map((imageUrl, index) => (
                      <div className="generated_image" key={index}>
                        <img src={imageUrl} alt={`Generated ${index}`} />
                      </div>
                    ))
                  : (
                      <div className="generated_image">
                        <img src={prediction.output} alt="Generated" />
                      </div>
                    )}
              </div>
            ) : (
              <React.Fragment>
                <FaImages size={100} className="placeholder_icon" />
                <p>Your generated images will appear here... Try generating one!</p>
              </React.Fragment>
            )}
          </div>

          <div className="generated_details">
            <div className="generation_inp">
              <label htmlFor="width">Width</label>
              <select
                name="width"
                id="width"
                onChange={(e) => setWidth(e.target.value)}
                defaultValue="512"
                value={width}
              >
                <option value="128">128</option>
                <option value="256">256</option>
                <option value="384">384</option>
                <option value="512">512</option>
                <option value="576">576</option>
                <option value="640">640</option>
                <option value="768">768</option>
                <option value="832">832</option>
                <option value="896">896</option>
                <option value="960">960</option>
                <option value="1024">1024</option>
              </select>
            </div>
            <div className="generation_inp">
              <label htmlFor="height">Height</label>
              <select
                name="height"
                id="height"
                onChange={(e) => setHeight(e.target.value)}
                defaultValue="512"
                value={height}
              >
                <option value="128">128</option>
                <option value="256">256</option>
                <option value="384">384</option>
                <option value="512">512</option>
                <option value="576">576</option>
                <option value="640">640</option>
                <option value="768">768</option>
                <option value="832">832</option>
                <option value="896">896</option>
                <option value="960">960</option>
                <option value="1024">1024</option>
              </select>
            </div>
            {/* <div className="generation_inp">
              <label htmlFor="num_outputs">Number of Outputs</label>
              <input
                type="number"
                min={1}
                max={2}
                placeholder="Number of outputs"
                className="input_main"
                name="num_outputs"
                value={numOutputs}
                onChange={(e) => setNumOutputs(parseInt(e.target.value))}
                defaultValue="1"
              />
            </div> */}
            <div className="generation_inp">
              <label htmlFor="seed">Seed</label>
              <p className="propt_warn">
                Used to limit randomness. Generations with the same prompt, params, and seed will result in the same image.
              </p>
              <input
                type="number"
                min={1}
                placeholder="Seed"
                className="input_main"
                name="seed"
                value={seed}
                defaultValue="39287"
                onChange={(e) => setSeed(parseInt(e.target.value))}

              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generator;
