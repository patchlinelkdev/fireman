"use client";
import React from 'react';
import Link from 'next/link';

const LoginBtn = () => {
  return (
    <Link href="/login">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#CECECE',
              color: 'black',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Log in
          </button>
    </Link>
  )
}

export default LoginBtn