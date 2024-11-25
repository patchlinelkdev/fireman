"use client";
import React from 'react';
import Link from 'next/link';

const SignupBtn = () => {
  return (
    <Link href="/signup">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#6AA84F',
              color: 'white',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign up
          </button>
    </Link>
  )
}

export default SignupBtn