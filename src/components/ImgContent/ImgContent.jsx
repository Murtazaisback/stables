import React from "react";
import { useParams } from "react-router-dom";
import demoData from "../roots/Demodata";
import { FaLeaf } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";



const ImgContent = () => {
  const { id } = useParams();
  const item = demoData.find((item) => item.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <seaction className="img_box_warp">
    <div className="container">
      <div className="single_img_warp">
        <img src={item.mainImg} alt="" className="post_img_p" />
        <div className="images_bio_page">
          <div className="img_porfile">
            <img src={item.profileImg} alt="" className="img_bio" />
            <p>{item.name}</p>
          </div>
          <div className="img_info_tags">

          <div className="img_tags_single">
            {item.tags.map((tag, index) => (
              <div className="img_tag_single" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div className="img_more-Info">
            <a><FaLeaf/> Create </a>
            <a><FaRegCopy/> copy </a>

          </div>
          </div>
        </div>
      </div>
    </div>
    </seaction>
  );
};

export default ImgContent;