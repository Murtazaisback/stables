import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useUser } from "@clerk/clerk-react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Headings from "../roots/Headings";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'; // Import axios for API requests

const stripePromise = loadStripe('pk_test_51PYVhBCakG4dId7vmnWsjnDRBoh0i1vD698hmZqXk9c1RKOGHUWBlJYK3AtTcyxd6ywGTvisrqHTcTdlZS8eVyM100nZSn553x'); // Replace with your Stripe publishable key

const Pricingblock = () => {
  const { user, isSignedIn } = useUser();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        if (!user || !isSignedIn) {
          return; // Exit if user is not signed in
        }
    
        const response = await axios.get(`http://localhost:5000/api/user/${user.id}`);
    
        setIsSubscribed(response.data.subscribed);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching subscription status:', error);
        setLoading(false);
      }
    };

    fetchSubscriptionStatus();
  }, [user, isSignedIn]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const productId = e.currentTarget.dataset.id;

    if (!user || !isSignedIn || !productId) {
      console.error('User or Product ID is undefined');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/create-checkout-session', {
        userId: user.id,
        productId,
        email: user.email // Include user email if needed
      });

      const sessionId = response.data.id;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe error:', error);
      } else {
        setIsSubscribed(true); // Update local state on successful subscription
        console.log('Subscription successful!');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
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
              <p style={{marginTop: "10px"}}><span className='blue'>25600+</span> <b> People Use package</b></p>
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
              <p style={{marginTop: "10px"}}><span className='green'>25600+</span> <b> People Use package</b></p>
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
              {/* <button className="plan_btn blue_btn" data-id="prod_QPKNR9eN7sXVHq" onClick={handleCheckout} >Get Started <FaArrowRight/></button> */}
              {/* {!isSubscribed ? (
                <button className="plan_btn blue_btn" data-id="prod_QPKNR9eN7sXVHq" onClick={handleCheckout}>
                  Get Started <FaArrowRight />
                </button>
              ) : (
                <button className="plan_btn blue_btn" disabled>
                  Already Subscribed
                </button>
              )} */}
               <button
                className='plan_btn blue_btn'
                data-id='price_1PYViGCakG4dId7vDIopCcx4'
                onClick={handleCheckout}
                disabled={isSubscribed}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
                <FaArrowRight className='btn_arr_icon' size={22} />
              </button>
            </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricingblock;
