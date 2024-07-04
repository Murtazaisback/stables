import React from 'react'
import Headings from '../roots/Headings'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useClerk } from '@clerk/clerk-react';




const Pricingblock = () => {
  const { navigate } = useClerk();

  const handleUpgrade = async () => {
    try {
      // Redirect to Stripe checkout or use Stripe Elements for payment handling
      // Example: navigate to a checkout page
      navigate('/checkout');
    } catch (error) {
      console.error('Error navigating to checkout:', error);
    }
  };
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
              <h4>Free Plan</h4>
              <p>Best to explore our community</p>
              <p  style={{marginTop: "10px"}}><span className='blue'>25600+</span> <b> People Use package</b></p>
              <p className='plan_sec_heading'>What you will get</p>
              <div className="lists_checks">
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Free basic generations</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue"  size={28}/>
                <p>Slower generations</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Limited search results</p>
              </div>
            </div>
            <div className="plan_ctr">
              <div className="plan_price">Free</div>
              {/* <a className="plan_btn" href='/generate'>Get Started <FaArrowRight/></a> */}
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
                <p>Unlimited generations</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue"  size={28}/>
                <p>Consistent Characters</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Faster generations</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>SDXL Generators</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Commercial rights</p>
              </div>
              <div className="list_item_check">
                <IoIosCheckmarkCircle className="blue" size={28} />
                <p>Higher quality</p>
              </div>
            </div>
            <div className="plan_ctr">
              <div className="plan_price green">$19.99</div>
              <div className="plan_btn blue_btn" onClick={handleUpgrade} disabled>Get Started <FaArrowRight/></div>
            </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricingblock
