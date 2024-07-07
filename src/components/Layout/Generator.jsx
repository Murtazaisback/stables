import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaImages } from "react-icons/fa6";
import { useClerk, useUser } from '@clerk/clerk-react';

const Generator = ({ addPrediction }) => {
  const { user, isSignedIn, isLoaded } = useUser();
  const { openSignIn, session } = useClerk();
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
  const [imageGenerationCount, setImageGenerationCount] = useState(0);
  const [isProUser, setIsProUser] = useState(false);
  let intervalId;


  useEffect(() => {
    // Fetch user subscription status and image generation count
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://ai-e.eba-ydxtv9fh.us-east-1.elasticbeanstalk.com/api/user/${user.id}`);
        setIsProUser(response.data.subscribed);
        setImageGenerationCount(response.data.imageGenerationCount);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const categories = {
    "Base": ["model", "miss universe model", "milf", "celebrity", "bodybulider", "cyborg", "bimbo", "bollywood diva"],
    "Number of people": ["one", "two", "several"],
    "Body": ["big boobs", "busty", "perfect boobs", "small boobs", "abs", "big ass", "glasses", "tattos", "perfect body"],
    "Age": ["18", "20s", "30s", "40s","50s", "60s", "70s", "80s"],
    "Face": ["smiling", "serious", "laughing","happy", "sad", "angry", "shocked", "ahegao", "orgasm"],
    "Hair Color": ["blonde", "brunette", "redhead", "white hair", "black hair", "green hair","purple hair", "pink hair", "ginger"],
    "Hair Style": ["short", "long", "curly", "straight"],
    "Ethnicity": [
    "asian", "caucasian", "african", "hispanic",
     "arabic",  "black", "brazilian", "british", "chinese", "czech", 
    "dutch", "egyptian", "ethiopian", "filipina", "french", "german", "greek", "hungarian",
    "indian", "indonesian", "irish", "italian", "japanese", "jewish", "korean", "latina", 
    "malaysian", "middle eastern", "mongolian", "native american", "nigerian", "nilotic",
    "persian", "polynesian", "portuguese", "russian", "scandinavian", "spanish", "swedish",
    "thai", "turkish", "vietnamese", "white"
],
    "Style": [
    "casual", "formal", "sporty",
    "mirror selfie", "painting", "black and white", "vintage", "film photo", "soft anime",
    "crisp anime", "soft + warm", "illustration", "dark fantasy", "warm anime", "cyberpunk",
    "skin detail", "charcoal", "3d", "watercolor", "comic"
],
    "Setting": [
    "indoor", "outdoor", "studio",
    "bar", "bathroom", "beach", "bedroom", "bus", "cafe", "car", "casino", "cave",
    "changing room", "church", "club", "couch", "desert", "forest", "grocery", "gym",
    "hospital", "hot tub", "jungle", "kitchen", "lake", "locker room", "mall", "meadow",
    "moon", "mountains", "oasis", "office", "onsen", "party", "pool", "prison",
    "restaurant", "sauna", "shower", "snow", "stage", "street", "strip club", "tent",
    "train", "underwater", "wedding", "yacht"
],
    "View": ["close-up", "front view", "side view"],
    "Action": ["standing", "sitting", "walking", "yoga", "sleeping", "squatting", "cooking", "eating", "jumping", "working out", "t-pose", "bathing", "gaming", "plank", "massage", "bending over", "spreading legs", "cumshot", "on back", "straddling"],

    "Clothing": [
    "dress", "suit", "casual wear",
    "nude", "60s", "70s", "80s", "90s", "angel", "apron", "basketball", "bathrobe", "bdsm",
    "beach volleyball", "bikini", "blouse", "bodypaint", "bomber", "boots", "bow tie", "bra", "casual",
    "cheerleader", "chemise", "choker", "clown", "construction worker", "corset", "cosplay", "crop top",
    "daisy dukes", "devil", "dirndl", "doctor", "dominatrix", "dress", "face mask", "fantasy armor",
    "firefighter", "fishnet", "flight attendant", "fur", "geisha", "gloves", "golf", "goth", "halloween",
    "harem pants", "harlequin", "hat", "high heels", "high socks", "hijab", "hip hop", "jacket", "jeans",
    "jumpsuit", "kilt", "kimono", "lab coat", "latex", "leather", "lingerie", "long skirt", "lumberjack", "maid",
    "martial arts", "mech suit", "medieval", "mesh", "micro skirt", "microkini", "military", "mini skirt",
    "nightgown", "ninja", "niqab", "nun", "nurse", "one piece swimsuit", "onesie", "pajamas", "panties",
    "pantyhose", "parka", "pilot", "pirate", "police", "polo", "professor", "push-up bra", "race driver",
    "roman", "sailor", "salwar", "santa", "sari", "satin", "scarf", "sci-fi armor", "secretary", "shirt",
    "short shorts", "soccer", "space suit", "spandex", "sports", "sports bra", "steampunk", "stockings",
    "stylish", "suit", "sundress", "superhero", "suspender belt", "sweater", "tailcoat", "tank top", "teacher",
    "tennis", "tie", "tracksuit", "tuxedo", "underwear", "vest", "wedding dress", "witch"
],
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

    // Check if the user can generate more images
    if (!isProUser && imageGenerationCount >= 10) {
      setError("You have reached the limit of 10 image generations. Please upgrade to pro for unlimited access.");
      setIsLoading(false);
      return;
    }

    const { seed } = e.target.elements;

    // Filter out invalid tags and join into a single string
    const validTags = selectedTags.filter(tag => tag !== "neked" && tag !== "vagina" && tag !== "seductive" && tag !== "Sharpdetails");
    const prompt = `${typeOfImage}, ${validTags.join(', ')}, naked, vagina, seductive, Sharpdetails`;

    try {
      const response = await axios.post("https://ai-e.eba-ydxtv9fh.us-east-1.elasticbeanstalk.com/api/predictions", {
        prompt: prompt,
        seed: parseInt(seed.value),
        width: parseInt(width),
        height: parseInt(height),
        num_outputs: parseInt(numOutputs),
        userId: user.id,
      });

      console.log("Prediction Response:", response.data);

      setPrediction(response.data);
      intervalId = setInterval(() => pollPrediction(response.data.id), 2000);

      // Update the image generation count
      setImageGenerationCount(prevCount => prevCount + 1);
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false);
    }
  };

  const pollPrediction = async (id) => {
    try {
      const response = await axios.get(`https://ai-e.eba-ydxtv9fh.us-east-1.elasticbeanstalk.com/api/predictions/${id}`);
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
      const prompt = `${typeOfImage}, ${validTags.join(', ')}, naked, vagina, seductive, Sharpdetails`;

      if (typeof imageUrls === "string") {
        imageUrls = [imageUrls];
      }

      for (const url of imageUrls) {
        await axios.post("https://ai-e.eba-ydxtv9fh.us-east-1.elasticbeanstalk.com/api/predictions/save-images", {
          prompt: prompt,
          seed: parseInt(seed.value),
          width: parseInt(width),
          height: parseInt(height),
          imageUrls: [url],
          userId: user.id,
        });
      }
    } catch (error) {
      console.error("Error saving images:", error.response ? error.response.data : error.message);
      setError(error.response?.data.detail || "Failed to save images.");
    }
  };

  

  
  const handleDownload = async (event, url, filename) => {
    event.stopPropagation();
  
    // Create a canvas element
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Needed to avoid CORS issues when drawing the image on the canvas
    img.src = url;
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      // Set canvas dimensions to the image dimensions
      canvas.width = img.width;
      canvas.height = img.height;
  
      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);
  
      // Add watermark text with background
      const watermarkText = 'forbiddenpixels.com';
      ctx.font = '19px Arial';
      const textWidth = ctx.measureText(watermarkText).width;
      const padding = 10;
  
      // Draw background rectangle
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Black with transparency
      ctx.fillRect(canvas.width - textWidth - padding * 2, 10, textWidth + padding * 2, 30);
  
      // Draw watermark text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // White with transparency
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillText(watermarkText, canvas.width - 10, 10 + padding / 2);
  
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png');
  
      // Trigger download
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
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
            <button type="submit" className="image_generate_btn"  disabled={isLoading}>{isLoading ? "Generating" : "Generate image"}</button>
           
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
  ) : (
    <>
      {prediction.status === "succeeded" && prediction.output.length > 0 ? (
        <div className="generated_images">
          {Array.isArray(prediction.output)
            ? prediction.output.map((imageUrl, index) => (
                <div className="generated_image" key={index}>
                  <img src={imageUrl} alt={`Generated ${index}`} />
                  <div className="watermark">forbiddenpixels.com</div>
                  {/* <a onClick={(e) => handleDownload(e, imageUrl, `Generated_${index}.png`)} className="menu_btn" target="_blank">Download</a> */}
                  <div
                    className="menu_btn"
                    onClick={(e) => handleDownload(e, prediction.output, "Generated.png")}
                  >
                    Download
                  </div>
                </div>
              ))
            : (
                <div className="generated_image">
                  <img src={prediction.output} alt="Generated" />
                  <div className="watermark">forbiddenpixels.com</div>
                  {/* <a onClick={(e) => handleDownload(e, prediction.output, "Generated.png")} className="menu_btn" target="_blank">Download</a> */}
                  <div
                    className="menu_btn"
                    onClick={(e) => handleDownload(e, prediction.output, "Generated.png")}
                  >
                    Download
                  </div>
                </div>
              )}
        </div>
      ) : (
        <React.Fragment>
          <FaImages size={100} className="placeholder_icon" />
          <p>Your generated images will appear here... Try generating one!</p>
        </React.Fragment>
      )}
    </>
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
            {/* <button onClick={() => handleDownload(imageUrl)}>Download image</button> */}
            {/* {prediction.output && (
            <button onClick={handleDownload}>Download image</button>
          )} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Generator;
