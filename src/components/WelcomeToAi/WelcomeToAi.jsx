import React from "react";
import {
  demoimg6,
  demoimg9,
  demoimg7,
  demoimg5,
  demoimg8,
  hand,
  img11,
  img12,
  img13,
} from "../../Assets";
import Headings from "../roots/Headings";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from 'framer-motion';
import useAnimateOnView from "../animations/motions"

const WelcomeToAi = ({title, spanhead, highlighted, aboutContent, AboutList1,AboutList2,AboutList3}) => {

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
    <div className="welcome_sec">
      <div className="container">
        <div className="welcome_sec_warp">
          <div className="welcome_imges">
            <div className="welcome_img_row1">
              <img src={img11} alt="" className="welcome_img_top" />
              <img src={img12} alt="" className="welcome_img_bottom" />
            </div>
            <div className="welcome_img_row2">
              <img src={img13} alt="" className="welcome_img_top_right" />
              {/* <img src={demoimg9} alt=""className='welcome_img_bottom_right'  /> */}
              <div className="welcome_img_bottom_right">
                <p>Online AI Image Generator</p>
                <img src={demoimg7} alt="" />
              </div>
            </div>
            <img src={demoimg8} alt="" className="abs_img" />
            <img src={hand} alt="" className="hand_img" />
          </div>
          <div className="welcome_content">
            <motion.div ref={ref1}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }}>

            <Headings
              title={title}
              spanhead={spanhead}
              highlighted={highlighted}
              />
              </motion.div>
            <motion.p ref={ref2}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }}>
              {aboutContent}
              
            </motion.p>
            <motion.div ref={ref3}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="lists_checks">
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>{AboutList1}</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>{AboutList2}</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>{AboutList3}</p>
              </div>
            </motion.div>
            <div>
                <div>

            <motion.a ref={ref4}
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.85 }} className="menu_btn" href="/Generate">
            Generate AI Image
                            <FaArrowRight/>
                        </motion.a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToAi;
