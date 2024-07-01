import React, { useState } from 'react';
import axios from 'axios';
import { FaImages } from "react-icons/fa6";

// import './App.css';



const availableTags = {
    Base: ['model', 'portrait', 'scenery'],
    NumberOfPeople: ['one person', 'two people'],
    Body: ['full body', 'half body'],
    Age: ['child', 'teenager', '20s', '30s'],
    Face: ['smiling', 'laughing'],
    HairColor: ['blonde', 'brunette', 'black hair', 'red hair']
    // Add more categories and tags as needed
  };

const Generator = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [prediction, setPrediction] = useState({ status: null });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const pollPrediction = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/predictions/${id}`);
      setPrediction(response.data);

      if (response.data.status === 'succeeded' || response.data.status === 'failed') {
        clearInterval(intervalId);
        setIsLoading(false); // Set loading state to false when prediction is done
      }
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false); // Set loading state to false on error
    }
  };

  let intervalId;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submitting

    const { prompt, seed } = e.target.elements;

    try {
      const response = await axios.post("https://stable-e-1.onrender.com/api/predictions", {
        prompt: prompt.value,
        seed: parseInt(seed.value),
      });

      setPrediction(response.data);

      // Poll the prediction status every 2 seconds
      intervalId = setInterval(() => pollPrediction(response.data.id), 2000);
    } catch (error) {
      setError(error.response?.data.detail || "Something went wrong");
      setIsLoading(false); // Set loading state to false on error
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };


  return (
    <div className="generation_page">
      {/* <form action="" id='combinedForm' onSubmit={onSubmit}> */}
      <div className="generation_page_warp">
        <div className="generation_tags">
          <form action="" onSubmit={onSubmit}>
            <div className='generation_inp'>
            <label htmlFor="">SELECT A MODEL</label>
              <select name="" id="">
              <option value="">Default - General purpose NSFW</option>
              <option value="">anime: Base model</option>
              <option value="">anime: Detailed</option>
              <option value="">anime: HD (SDXL)</option>
              <option value="">Women: Base Model</option>
              <option value="">Women: Detailed</option>
              <option value="">Women: HD (SDXL)</option>
              <option value="">Women: Realistic</option>
            </select>
            </div>
            <div className='generation_inp'>
              <label htmlFor="prompt">prompt</label>
              <p className='propt_warn'>Input the tags that you want the model to use as a reference or inspiration for generating the final output image.</p>
              <textarea name="prompt" />

            </div>
            <div className='generation_inp'>
              <label htmlFor="seed">seed</label>
              <p className='propt_warn'>Used to limit randomness. Generations with the same prompt, params and seed will result in the same image.</p>
              <input type="number" min={1} placeholder='Seed' className='input_main'  name='seed'/>
            </div>

            <button type="submit" >Generte image</button>

          </form>
        </div>


        <div className="generated_area">
            {isLoading ? (
              <div>
                <div className="loader"></div>
                {/* <p>status: {prediction.status}</p>
            {error && <p>Error: {error}</p>} */}

              </div>
              
            ) : (
              prediction && prediction.output ? (
                  <img src={prediction.output[0]} alt="Generated" width={512} height={512} />
                  
                
              ) : (
                <React.Fragment>
                  <FaImages size={100} className='placeholder_icon'/>
                  <p>Your generated images will show up here... Try generating one!</p>
                </React.Fragment>
              )
            )}
          </div>


        <div className="generated_details">
          <form action="">
          <div className='generation_inp'>
              <label htmlFor="">WIDTH</label>
              <select name="" id="">
              <option value="">128</option>
              <option value="">256</option>
              <option value="">384</option>
              <option value="" selected>512</option>
              <option value="" >576</option>
              <option value="" >640</option>
              <option value="" >768</option>
              <option value="" >768</option>
              <option value="" >832</option>
              <option value="" >896</option>
              <option value="" >960</option>
              <option value="" >1024</option>
            </select>
            </div>
          <div className='generation_inp'>
              <label htmlFor="">HEIGHT</label>
              <select name="" id="">
              <option value="">128</option>
              <option value="">256</option>
              <option value="">384</option>
              <option value="" selected>512</option>
              <option value="" >576</option>
              <option value="" >640</option>
              <option value="" >768</option>
              <option value="" >768</option>
              <option value="" >832</option>
              <option value="" >896</option>
              <option value="" >960</option>
              <option value="" >1024</option>
            </select>
            </div>
          <div className='generation_inp'>
              <label htmlFor="">NUMBER OF INFERENCE STEPS</label>
              <p className='propt_warn'>More steps means more generation time, but doesn't necessarily mean more quality.</p>
              <input type="range" max={50} />
            </div>
          <div className='generation_inp'>
              <label htmlFor="">GUIDANCE SCALE</label>
              <p className='propt_warn'>How strictly should the resulting image follow your prompt?</p>
              <input type="range" max={50} />
            </div>
          {/* <div className='generation_inp'>
              <label htmlFor="seed">seed</label>
              <p className='propt_warn'>Used to limit randomness. Generations with the same prompt, params and seed will result in the same image.</p>
              <input type="number" min={1} placeholder='Seed' className='input_main'  name='seed'/>
            </div> */}
            
          </form>

        </div>
      </div>
      {/* </form> */}

      {/* <div className='test_form'>
            <form onSubmit={onSubmit}>
                <label htmlFor="prompt">prompt</label>
                <textarea name="prompt" />
                <label htmlFor="seed">seed</label>
                <input type="number" name='seed' />
                <button type="submit">Generate</button>
            </form>
            {prediction && prediction.output && (
                <img src={prediction.output[0]} width={512} height={512} />
            )}
            <p>status: {prediction.status}</p>
            {error && <p>Error: {error}</p>}
        </div> */}

  </div>
  
  )
}

export default Generator
