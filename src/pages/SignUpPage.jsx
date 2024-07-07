import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleAfterSignUp = async (user) => {
    try {
      // Send user data to your backend API for storage
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id, // Clerk's user ID
          email: user.email,
          // Add more user data fields as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to store user data');
      }

      // Navigate to the home page after successful signup
      navigate('/');
    } catch (error) {
      console.error('Error handling after sign-up:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <SignUp
        afterSignUp={(user) => handleAfterSignUp(user)}
        signInUrl="/sign-in" // Redirect to sign-in page if user needs to sign in
      />
    </div>
  );
};

export default SignUpPage;
