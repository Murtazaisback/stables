import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ClerkProvider, RedirectToSignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { GalleryPage, HomePage, GenerateImg, AboutUs, ContactUs, Pricing } from "./Routes.js";
import "./App.css";
import SingleImg from "./pages/SingleImg.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import TermsPopup from './components/TermsPopup.jsx'; 

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Check local storage for acceptance status
    const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
    if (!hasAcceptedTerms) {
      setIsPopupVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasAcceptedTerms', 'true');
    setIsPopupVisible(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };
  return (
    <ClerkProvider publishableKey="pk_test_c2VjdXJlLXNwb25nZS03Mi5jbGVyay5hY2NvdW50cy5kZXYk">
       {isPopupVisible && (
        <TermsPopup onAccept={handleAccept} onDecline={handleDecline} />
      )}
      <div className={isPopupVisible ? 'blur' : ''}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Gallery" element={<GalleryPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/pricing" element={
              <>
                <SignedIn>
                  <Pricing />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignUp/>
                </SignedOut>
              </>
            } />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/singlePage/:id" element={<SingleImg />} />
            <Route path="/Generate" element={
              <>
                <SignedIn>
                  <GenerateImg />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignUp/>
                </SignedOut>
              </>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ClerkProvider>
    
  );
}

export default App;
