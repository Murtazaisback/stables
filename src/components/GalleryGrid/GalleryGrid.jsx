import React from "react";

import demoData from "../roots/Demodata";
import { Link } from "react-router-dom";

const GalleryGrid = () => {
  return (
    <div>
      <div class="container2">
      {demoData.map((item, index) => (
        <Link to={item.link} key={index}>
          <figure>
            <img src={item.mainImg} alt="" />
            <figcaption>
              <div className="images_bio">
                <div className="img_porfile">
                  <img src={item.profileImg} alt="" className="img_bio" />
                  <p>{item.name}</p>
                </div>
                <div className="img_tags">
                  {item.tags.map((tag, tagIndex) => (
                    <div className="img_tag" key={tagIndex}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
