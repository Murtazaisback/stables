import React from 'react'
import Headings from '../roots/Headings'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



const Pricing = () => {
  return (
    <div className='Packages_section'>
        <div className="container">
        <Headings
            spanhead="Pricing Package"
            title="Choose The Best AI Image Generate"
            highlighted=" Packages"
          />
          <div className="plan_warp">
            <div className="basic_plan">
              <h4>Basic Plan</h4>
              <p>Best For Authors, Coaches, Solopreneurs</p>
              <p  style={{marginTop: "10px"}}><span className='blue'>25600+</span> <b> People Use package</b></p>
              <p className='plan_sec_heading'>What you will get</p>
              <div className="lists_checks">
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>15,853 Monthly Word Limit</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue"  size={28}/>
                <p>12+ Templates</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>35+ Languages</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Advance Editor Tool</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Custom Managements</p>
              </div>
            </div>
            <div className="plan_ctr">
              <div className="plan_price">$19.99</div>
              <div className="plan_btn">Get Started <FaArrowRight/></div>
            </div>

            </div>
            <div className="Standard_plan">
            <h4>Standard Plan</h4>
              <p>Best For Startups And Small Businesses</p>
              <p  style={{marginTop: "10px"}}><span className='green'>25600+</span> <b> People Use package</b></p>
              <p className='plan_sec_heading'>What you will get</p>
              <div className="lists_checks">
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>15,853 Monthly Word Limit</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue"  size={28}/>
                <p>12+ Templates</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>35+ Languages</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Advance Editor Tool</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Custom Managements</p>
              </div>
            </div>
            <div className="plan_ctr">
              <div className="plan_price green">$19.99</div>
              <div className="plan_btn blue_btn">Get Started <FaArrowRight/></div>
            </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing
