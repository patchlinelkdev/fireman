"use client";
import React from 'react';

const LoginForm = () => {
  return (
    <form>
          <div
            style={{
              position: 'relative',
              zIndex: '2',
              background: 'linear-gradient(145deg, #e0e0e0, #c2c2c2)', // Gradient background
              borderRadius: '20px',
              padding: '30px',
              width: '300px',
              textAlign: 'center',
            }}
          >
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

            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                fontSize: '1rem',
                textAlign: 'center',
                border: '1px solid #D9D9D9',
                borderRadius: '5px',
                backgroundColor: '#F8F8F8',
                boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)', // Inner shadow for depth
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
                textAlign: 'center',
                border: '1px solid #D9D9D9',
                borderRadius: '5px',
                backgroundColor: '#F8F8F8',
                boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)', // Inner shadow for depth
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
              Log in
            </button>
          </div>
    </form>
  )
}

export default LoginForm