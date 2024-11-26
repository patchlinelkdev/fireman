'use client';
import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className="relative z-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl p-7 w-[300px] text-center">
        {/* Circle with Person Icon */}
        <div className="w-[100px] h-[100px] mx-auto bg-gray-100 border-2 border-gray-300 rounded-full flex justify-center items-center text-5xl mb-5">
          👤 {/* Person icon */}
        </div>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2.5 mb-4 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2.5 mb-5 text-center text-base border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
        />

        {/* Login Button */}
        <button className="w-full p-2.5 bg-green-600 text-white text-base rounded-md cursor-pointer shadow-green-btn-shadow focus:outline-none">
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
