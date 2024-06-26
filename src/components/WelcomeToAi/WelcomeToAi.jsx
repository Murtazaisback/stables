import React from "react";
import {
  demoimg6,
  demoimg9,
  demoimg7,
  demoimg5,
  demoimg8,
  hand,
} from "../../Assets";
import Headings from "../roots/Headings";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const WelcomeToAi = () => {
  return (
    <div className="welcome_sec">
      <div className="container">
        <div className="welcome_sec_warp">
          <div className="welcome_imges">
            <div className="welcome_img_row1">
              <img src={demoimg6} alt="" className="welcome_img_top" />
              <img src={demoimg9} alt="" className="welcome_img_bottom" />
            </div>
            <div className="welcome_img_row2">
              <img src={demoimg5} alt="" className="welcome_img_top_right" />
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
            <Headings
              title="Create Anything With "
              spanhead="Welcome To Ai"
              highlighted="AI image Generator"
            />
            <p>
              We denounce with righteous indignation and dislike men who are
              beguiled and demoralized by the charms of pleasure of the moment
              blinded desire that they cannot foresee and trouble
            </p>
            <div className="lists_checks">
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>Save time Rapid AI-driven generation.</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>No Outdates Continuous code documentation refresh.</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" />
                <p>Consistency Consistent code documentation</p>
              </div>
            </div>
            <div>
                <div>

            <a className="menu_btn">
            Generate AI Image
                            <FaArrowRight/>
                        </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToAi;
