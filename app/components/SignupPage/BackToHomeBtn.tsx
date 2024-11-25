"use client";
import React from 'react';
import Link from 'next/link';

const BackToHomeBtn = () => {
  return (
    <Link href="/">
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
            Back to Home
          </button>
    </Link>
  )
}

export default BackToHomeBtn