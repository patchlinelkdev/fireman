'use client';
import React from 'react';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

const SignupForm = () => {
  {
    /* checks if email is correct */
  }
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    if (fullName === '') {
      setFullNameError('This field is required');
      return false;
    } else {
      setFullNameError('');
    }

    if (email === '') {
      setEmailError('This field is required');
      return false;
    } else if (
      !email.includes('@') ||
      (email.match(/@/g) || []).length !== 1 ||
      !email.endsWith('.com')
    ) {
      setEmailError('Invalid email');
      return false;
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('This field is required');
      return false;
    } else {
      setPasswordError('');
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    } else {
      setConfirmPasswordError('');
    }

    return true;
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <form>
      <div>
        {formSubmitted && fullNameError && (
          <div className="text-red-500 text-xs mb-1.5 text-left">
            {fullNameError}
          </div>
        )}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 mb-6 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
        />

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
          className="w-full p-2 mb-6 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 box-border shadow-inner-shadow-input"
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
          className="w-full p-2 mb-6 text-base text-center border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 shadow-inner-shadow-input box-border"
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
          className="w-full p-2 mb-2.5 text-base text-center border border-gray-300 rounded-md bg-gray-100 box-border shadow-inner-shadow-input focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      <div className='text-sm text-gray-300'>
        <Link href={'/login'}>Already have an Account?</Link>
      </div>

      <div className='text-sm py-6 text-wrap mx-10 text-white'>
        <p>Create your account to book services, manage appointments, and make your home life easier.</p>
      </div>

      <div className='space-y-6'>
        <button
          onClick={signIn}
          className="w-full py-2 text-wrap text-base bg-white text-black rounded-md shadow-green-btn-shadow cursor-pointer focus:outline-none text-center"
        >
          <span className="block">Continue as a</span>
          <span className="block">homeowner</span>
        </button>

        <button
          onClick={signIn}
          className="w-full py-2 text-wrap text-base bg-black text-white rounded-md shadow-green-btn-shadow cursor-pointer focus:outline-none text-center"
        >
          <span className="block">Continue as a</span>
          <span className="block">Fireman</span>
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
