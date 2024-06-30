import React from "react";
import Headings from "../roots/Headings";
import { demoimg1 ,demoimg2,demoimg3, demoimg4, img10, img5, img6,img7,img8,img9} from "../../Assets";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useAnimateOnView from "../animations/motions"

const HowGenerate = () => {
  

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
    <section className="container">
      <div className="howItwork">
        <motion.div  ref={ref1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.75 }} className="heading_warp">
          <p className="spanhead">How It Works</p>
          <div>
            <h2 className="_heading">How to Generate AI images</h2>
            <span className="highlighted_text">in Any Project</span>
          </div>
        </motion.div>
        <div className="howit_main">
            <div className="howit_imgs">
                <div className="howit_imgs_rows">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                </div>
                <img src={img10} alt=""className="howit_imgs_bottom" />
            </div>
            <div className="howit_content">
              <div className="lists_boxs">
                <motion.div ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.25 }}   className="list_box">
                  <div className="list_box_content">
                    <h3>Open Photo Editor</h3>
                    <p>Use the online picture editor for quick and easy photo enhancement such as adding text to photos. </p>
                  </div>
                  <div className="list_box_no">1</div>
                </motion.div>
                <motion.div ref={ref3}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.25 }}   className="list_box">
                  <div className="list_box_content">
                    <h3>Generate AI image</h3>
                    <p>Create beautiful images and videos for free from a few words. AI art better than midjourney and stable diffusion</p>
                  </div>
                  <div className="list_box_no">2</div>
                </motion.div>
                <motion.div ref={ref4}
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.25 }}   className="list_box">
                  <div className="list_box_content">
                    <h3>Customize image</h3>
                    <p> Photo Editor lets you apply photo effects, edit photos and create photo collages with collage maker </p>
                  </div>
                  <div className="list_box_no">3</div>
                </motion.div>
                <motion.div  ref={ref5}
            initial="hidden"
            animate={inView5 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.25 }}  className="list_box">
                  <div className="list_box_content">
                    <h3>Download design</h3>
                    <p>Explore millions of royalty free vectors, images, photos, and videos! Find the perfect graphic, background.</p>
                  </div>
                  <div className="list_box_no">4</div>
                </motion.div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowGenerate;
