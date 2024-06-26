import React from "react";
import Headings from "../roots/Headings";
import { demoimg10 } from "../../Assets";

const WhatProvide = () => {
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
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Open Photo Editor</h3>
                    <p>Use the online picture editor for quick and easy photo enhancement such as adding text to photos. </p>
                  </div>
                </div>
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Create Videos From Photos</h3>
                    <p>MunAi’s photo video maker allows you to edit your videos effortlessly and seamlessly </p>
                  </div>
                </div>
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Customize image</h3>
                    <p> Photo Editor lets you apply photo effects, edit photos and create photo collages with collage maker </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="WhatProvide_img">
              <div className="WhatProvide_img_box">
                <img src={demoimg10} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatProvide;
