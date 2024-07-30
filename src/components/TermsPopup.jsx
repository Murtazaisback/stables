// src/components/TermsPopup.jsx
import React from 'react';

const TermsPopup = ({ onAccept, onDecline }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Welcome to forbiddenpixels</h2>
        <p className='warning_p'>age verification and disclaimer</p>
        <p>This website generates 18+ images that are purely fictional and not of real people. Any resemblance to real persons, living or dead, is purely coincidental. By entering this site, you confirm that you are at least 18 years old.</p>
        
        <p>By proceeding, you acknowledge and certify that:</p>
        <ol>
          <li>your are 18 years of age or older.</li>
          <li>you understand that the images are generated and any resemblance to real indiviual is coincidental.</li>
        </ol>
        <div className='popups_btn'>

        <button onClick={onAccept}>I am 18 years or older</button>
        <button onClick={onDecline}>I am under 18</button>
        </div>
      </div>
    </div>
  );
};

export default TermsPopup;
