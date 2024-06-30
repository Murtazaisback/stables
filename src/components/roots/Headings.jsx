import React from "react";
import useAnimateOnView from "../animations/motions"
import { motion } from 'framer-motion';

const Headings = ({ title = "", highlighted = "", spanhead = "" }) => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const [ref1, inView1] = useAnimateOnView();

  return (
    <motion.div ref={ref1}
    initial="hidden"
    animate={inView1 ? 'visible' : 'hidden'}
    variants={variants}
    transition={{ duration: 0.85 }} className="heading_warp">
      <p className="spanhead">{spanhead}</p>
        <h2 className="uni_heading">{title}<span className="highlighted_text">{highlighted}</span></h2>
        
    </motion.div>
  );
};

export default Headings;
