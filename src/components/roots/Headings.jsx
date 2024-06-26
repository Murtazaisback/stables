import React from "react";

const Headings = ({ title = "", highlighted = "", spanhead = "" }) => {
  return (
    <div className="heading_warp">
      <p className="spanhead">{spanhead}</p>
        <h2 className="uni_heading">{title}<span className="highlighted_text">{highlighted}</span></h2>
        
    </div>
  );
};

export default Headings;
