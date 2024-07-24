// src/components/TermsPopup.jsx
import React from 'react';

const TermsPopup = ({ onAccept, onDecline }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Welcome to forbiddenpixels</h2>
        <p className='warning_p'>Warning, this site is for adults only. It contains AI-generated adult imagery.</p>
        <p>By entering this website, I recognize that I am 18 years old or more. By using the site, you agree to our Terms of Service. Our privacy policy details how we collect and use your data. We use cookies for basic analytics and spam detection.</p>
        <p>Any generations of content on this website that resemble real people are purely coincidental.</p>
        <div className='popups_btn'>

        <button onClick={onAccept}>Accept</button>
        <button onClick={onDecline}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default TermsPopup;
