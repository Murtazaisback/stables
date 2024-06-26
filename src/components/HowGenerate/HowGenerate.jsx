import React from "react";
import Headings from "../roots/Headings";
import { demoimg1 ,demoimg2,demoimg3, demoimg4} from "../../Assets";

const HowGenerate = () => {
  return (
    <section className="container">
      <div className="howItwork">
        <div className="heading_warp">
          <p className="spanhead">How It Works</p>
          <div>
            <h2 className="_heading">How to Generate AI images</h2>
            <span className="highlighted_text">in Any Project</span>
          </div>
        </div>
        <div className="howit_main">
            <div className="howit_imgs">
                <div className="howit_imgs_rows">
                    <img src={demoimg1} alt="" />
                    <img src={demoimg2} alt="" />
                    <img src={demoimg3} alt="" />
                </div>
                <img src={demoimg4} alt="" />
            </div>
            <div className="howit_content">
              <div className="lists_boxs">
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Open Photo Editor</h3>
                    <p>Use the online picture editor for quick and easy photo enhancement such as adding text to photos. </p>
                  </div>
                  <div className="list_box_no">1</div>
                </div>
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Generate AI image</h3>
                    <p>Create beautiful images and videos for free from a few words. AI art better than midjourney and stable diffusion</p>
                  </div>
                  <div className="list_box_no">2</div>
                </div>
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Customize image</h3>
                    <p> Photo Editor lets you apply photo effects, edit photos and create photo collages with collage maker </p>
                  </div>
                  <div className="list_box_no">3</div>
                </div>
                <div className="list_box">
                  <div className="list_box_content">
                    <h3>Download design</h3>
                    <p>Explore millions of royalty free vectors, images, photos, and videos! Find the perfect graphic, background.</p>
                  </div>
                  <div className="list_box_no">4</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowGenerate;
