"use client";
import React from 'react'
import { useState } from 'react';

const SignupForm = () => {

{/* checks if email is correct */}
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if(value === '') {
      setError('this feild is required');
    }
    else if (!value.includes('@') || (value.match(/@/g) || []).length !== 1) {
      // Check for exactly one '@'
      setError('Email must contain exactly one "@" symbol');
    } else if(!value.endsWith('.com')) {
      setError('Email must end with ".com"');
    } else {
      setError('');
    }
  }

  return (
    <form>
        {/* Circle with Person Icon */}
        <div
        style={{
            width: '100px',
            height: '100px',
            margin: '0 auto',
            backgroundColor: '#F0F0F0',
            border: '3px solid #D9D9D9',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            marginBottom: '20px',
        }}
        >
        👤 {/* Person icon */}
        </div>

        {/* prints error if invalid email */}
        {error && (
        <div style={{
            color: 'red',
            fontSize: '0.8rem',
            marginBottom: '0.3rem',
            textAlign: 'left',
        }}
        >
            {error}
        </div>
        )}

        {/* Email Input */}
        <input
        type="text"
        placeholder="Email address"
        value={email}
        onChange={handleEmailChange}
        style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            fontSize: '1rem',
            textAlign: 'center', // Center the placeholder
            border: '1px solid #D9D9D9',
            borderRadius: '5px',
            backgroundColor: '#F8F8F8',
            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
            boxSizing: 'border-box',
        }}
        />

        {/* Username Input */}
        <input
        type="text"
        placeholder="Username"
        style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            fontSize: '1rem',
            textAlign: 'center', // Center the placeholder
            border: '1px solid #D9D9D9',
            borderRadius: '5px',
            backgroundColor: '#F8F8F8',
            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
            boxSizing: 'border-box',
        }}
        />

        {/* Password Input */}
        <input
        type="password"
        placeholder="Password"
        style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            fontSize: '1rem',
            textAlign: 'center', // Center the placeholder
            border: '1px solid #D9D9D9',
            borderRadius: '5px',
            backgroundColor: '#F8F8F8',
            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)',
            boxSizing: 'border-box',
        }}
        />

        {/* Login Button */}
        <button
        style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#6AA84F',
            color: 'white',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
        >
        Sign up
        </button>
    </form>
  )
}

export default SignupForm