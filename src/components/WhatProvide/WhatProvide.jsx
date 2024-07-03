import React from "react";
import Headings from "../roots/Headings";
import { demoimg10, img9 } from "../../Assets";
import { motion } from 'framer-motion';
import useAnimateOnView from "../animations/motions"

const WhatProvide = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const [ref1, inView1] = useAnimateOnView();
  const [ref2, inView2] = useAnimateOnView();
  const [ref3, inView3] = useAnimateOnView();
  const [ref4, inView4] = useAnimateOnView();
  const [ref5, inView5] = useAnimateOnView();

  return (
    <div className="WhatProvide_sec">
      <div className="container">
        <div className="WhatProvide_sec_warp">
          <Headings
            title="Make the Most Artificial Intelligence AI Image"
            spanhead="Welcome To Ai"
            highlighted="Generate Features"
          />
          <div className="WhatProvide_box">
            <div className="WhatProvide_content">
            <div className="lists_boxs">
                <motion.div ref={ref1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="list_box">
                  <div className="list_box_content">
                    <h3>Best NSFW Image Generator</h3>
                    <p>We offer the most advanced NSFW image generator on the market, producing high-quality and realistic images that cater to a wide range of preferences.</p>
                  </div>
                </motion.div>
                <motion.div ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="list_box">
                  <div className="list_box_content">
                    <h3>Tag-Based Prompts</h3>
                    <p>Users can easily generate images by using tags as prompts, allowing for precise control over the content and style of the images.</p>
                  </div>
                </motion.div>
                <motion.div ref={ref3}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="list_box">
                  <div className="list_box_content">
                    <h3>Save Images</h3>
                    <p> Once you've created your desired image, you can save it directly to your device.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="WhatProvide_img">
              <div className="WhatProvide_img_box">
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatProvide;
