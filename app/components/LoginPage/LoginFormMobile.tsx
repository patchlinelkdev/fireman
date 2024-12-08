'use client';
import React from 'react';

const LoginFormMobile = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 mb-8 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
      />
    </form>
  );
};

export default LoginFormMobile;
