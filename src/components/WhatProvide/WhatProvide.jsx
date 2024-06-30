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
                    <h3>Open Photo Editor</h3>
                    <p>Use the online picture editor for quick and easy photo enhancement such as adding text to photos. </p>
                  </div>
                </motion.div>
                <motion.div ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="list_box">
                  <div className="list_box_content">
                    <h3>Create Videos From Photos</h3>
                    <p>MunAi’s photo video maker allows you to edit your videos effortlessly and seamlessly </p>
                  </div>
                </motion.div>
                <motion.div ref={ref3}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="list_box">
                  <div className="list_box_content">
                    <h3>Customize image</h3>
                    <p> Photo Editor lets you apply photo effects, edit photos and create photo collages with collage maker </p>
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
