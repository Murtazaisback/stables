// Checkout.js

import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PYVhBCakG4dId7vmnWsjnDRBoh0i1vD698hmZqXk9c1RKOGHUWBlJYK3AtTcyxd6ywGTvisrqHTcTdlZS8eVyM100nZSn553x');

const Checkout = () => {
  const { user } = useClerk();

  const handleUpgrade = async () => {
    const stripe = await stripePromise;

    try {
      // Call your backend to initiate a Stripe Checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Error redirecting to checkout:', result.error.message);
        // Handle error
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      // Handle error
    }
  };

  return (
    <div className="checkout-container">
      <h2>Upgrade Your Plan</h2>
      <button onClick={handleUpgrade}>Upgrade to Standard Plan</button>
    </div>
  );
};

export default Checkout;
