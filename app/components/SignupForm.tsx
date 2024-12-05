'use client';
import React from 'react';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignupForm = () => {
  {
    /* checks if email is correct */
  }
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;

    if (email === '') {
      setEmailError('This field is required');
      valid = false;
    } else if (
      !email.includes('@') ||
      (email.match(/@/g) || []).length !== 1 ||
      !email.endsWith('.com')
    ) {
      setEmailError('Invalid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('This field is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if(confirmPassword !== password){
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else{
      setConfirmPasswordError('');
    }

    return valid;
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(validateForm()){
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }
    } 
  };

  return (
    <form>
      {/* Circle with Person Icon */}
      <div className="w-24 h-24 mx-auto bg-gray-100 border-2 border-gray-300 rounded-full flex justify-center items-center text-5xl mb-5">
        👤 {/* Person icon */}
      </div>

      {/* prints emailError if invalid email */}
      {formSubmitted && emailError && (
        <div className="text-red-500 text-xs mb-1.5 text-left">
          {emailError}
        </div>
      )}
      {/* Email Input */}
      <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2.5 mb-3.5 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
      />

      {/* prints PasswordError if password field not filled */}
      {formSubmitted && passwordError && (
        <div className="text-red-500 text-xs mb-1.5 text-left">
          {passwordError}
        </div>
      )}
      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2.5 mb-5 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-inner-shadow-input box-border"
      />

      {/* prints error if passwords dont match */}
      {formSubmitted && confirmPasswordError && (
        <div className="text-red-500 text-xs mb-1.5 text-left">
          {confirmPasswordError}
        </div>
      )}
      {/* confirm password Input */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2.5 mb-3.5 text-base text-center border border-gray-300 rounded-md bg-gray-100 box-border shadow-inner-shadow-input focus:outline-none focus:ring-1 focus:ring-blue-400"
      />

      {/* Login Button */}
      <button
        onClick={signIn}
        className="w-full p-2.5 text-base text-white bg-green-600 hover:bg-green-400 rounded-md shadow-green-btn-shadow cursor-pointer focus:outline-none"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
