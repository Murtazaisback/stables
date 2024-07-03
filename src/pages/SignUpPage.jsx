// pages/SignUpPage.jsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  return (
    <div>
      <SignUp
        afterSignUp={() => navigate(from)}
        afterSignIn={() => navigate(from)}
      />
    </div>
  );
};

export default SignUpPage;
