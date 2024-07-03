import React from "react";
import { LuFolders } from "react-icons/lu";
import { FaTag, FaRegImages  } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";




const CardsInfo = () => {
  return (
    <section className="about_cards_box">

    <div className="container">
      <div className="about_cards">
        <div className="about_card">
        <LuFolders  className="about_card_i"/>
        <span>AI Copyrighting</span>
        <p>we give users to be creative and have fun around, people can use your images, tags</p>
        <div className="oder_in">01</div>
        <a href="/Generate" className="about_card_btn">Generate Now</a>
        </div>
        <div className="about_card">
        <FaTag  className="about_card_i"/>
        <span>tags assistant</span>
        <p>we provide our user to get random tags to generate best images for you.</p>
        <div className="oder_in">02</div>
        <a href="/Generate" className="about_card_btn">Generate Now</a>
        </div>
        <div className="about_card">
        <FaRegImages  className="about_card_i"/>
        <span>Image generator</span>
        <p>We got best simple easy Image generator so use can use it's freely.</p>
        <div className="oder_in">03</div>
        <a href="/Generate" className="about_card_btn">Generate Now</a>
        </div>
        <div className="about_card">
        <IoShareSocialOutline  className="about_card_i"/>
        <span>Social Media</span>
        <p>You can save your images and use them in your Social meadia and everywhere you want.</p>
        <div className="oder_in">04</div>
        <a href="/Generate" className="about_card_btn">Generate Now</a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CardsInfo;
