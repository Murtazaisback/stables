import React, { useState } from "react";
import axios from "axios";
import { FaImages } from "react-icons/fa";

const Generator = ({ addPrediction }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [defaultTags] = useState(["naked nsfw"]);
  const [prediction, setPrediction] = useState({ status: null, output: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState("512");
  const [height, setHeight] = useState("512");
  const [numOutputs, setNumOutputs] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState(null);
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

  const toggleCategory = (category) => {
    setExpandedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { seed, model } = e.target.elements;
    const promptTags = [...defaultTags, ...selectedTags].join(", ");

    try {
      const response = await axios.post("https://stable-e-2.onrender.com/api/predictions", {
        prompt: promptTags,
        seed: parseInt(seed.value),
        width: parseInt(width),
        height: parseInt(height),
        num_outputs: parseInt(numOutputs),
        model: model.value,
      });

      console.log("API Response:", response.data); // Log API response for debugging
      setPrediction(response.data);
      intervalId = setInterval(() => pollPrediction(response.data.id), 2000);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message); // Log error for debugging
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false);
    }
  };

  const pollPrediction = async (id) => {
    try {
      const response = await axios.get(`https://stable-e-2.onrender.com/api/predictions/${id}`);
      setPrediction(response.data);

      if (response.data.status === "succeeded" || response.data.status === "failed") {
        clearInterval(intervalId);
        setIsLoading(false);
        if (response.data.status === "succeeded") {
          await sendGeneratedImages(response.data.output);
        }
      }
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false);
    }
  };

  const sendGeneratedImages = async (imageUrls) => {
    try {
      const { seed } = document.forms[0];
      for (const url of imageUrls) {
        await axios.post("https://stable-e-2.onrender.com/api/predictions/save-images", {
          prompt: [...defaultTags, ...selectedTags].join(", "),
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
              <label htmlFor="model">SELECT A MODEL</label>
              <select name="model" id="model" onChange={(e) => handleTagSelect(e.target.value)}>
                <option value="Women: Photography" selected>Women: Photography</option>
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
              </select>
            </div>
            <div className="selected_tags">
              <h4>Selected Tags</h4>
              <div className="tags_container">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="tag selected"
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag}
                    <div className="remove_tag">X</div>
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
            {/* <p>Status: {prediction.status}</p>
            {error && <p>Error: {error}</p>} */}
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
            ) : prediction.output && prediction.output.length > 0 ? (
              prediction.output.map((img, index) => (
                <div className="main_rendered_img" key={index}>
                  <img
                    src={img}
                    alt={`Generated ${index}`}
                    width={width}
                    height={height}
                  />
                </div>
              ))
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
            </div>
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
                defaultValue="39287"
              />
            </div>
            <p>Status: {prediction.status}</p>
            {error && <p>Error: {error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generator;