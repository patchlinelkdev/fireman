'use client';
import React from 'react';
import { useState } from 'react';

const SignupForm = () => {
  {
    /* checks if email is correct */
  }
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value === '') {
      setError('This feild is required');
    } else if (
      !value.includes('@') ||
      (value.match(/@/g) || []).length !== 1 ||
      !value.endsWith('.com')
    ) {
      // Check for exactly one '@'
      setError('Invalid email');
    } else {
      setError('');
    }
  };

  return (
    <form>
      {/* Circle with Person Icon */}
      <div className="w-24 h-24 mx-auto bg-gray-100 border-2 border-gray-300 rounded-full flex justify-center items-center text-5xl mb-5">
        👤 {/* Person icon */}
      </div>

      {/* prints error if invalid email */}
      {error && (
        <div className="text-red-500 text-xs mb-1.5 text-left">{error}</div>
      )}

      {/* Email Input */}
      <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={handleEmailChange}
        className="w-full p-2.5 mb-3.5 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
      />

      {/* Username Input */}
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2.5 mb-3.5 text-base text-center border border-gray-300 rounded-md bg-gray-100 box-border shadow-inner-shadow-input focus:outline-none focus:ring-1 focus:ring-blue-400"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2.5 mb-5 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-inner-shadow-input box-border"
      />

      {/* Login Button */}
      <button className="w-full p-2.5 text-base text-white bg-green-600 rounded-md shadow-green-btn-shadow cursor-pointer focus:outline-none">
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
