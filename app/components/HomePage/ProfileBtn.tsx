"use client";
import React from 'react';
import Link from 'next/link';

const ProfileBtn = () => {
  return (
    <Link href="/setup_account">
          <button
            style={{
              padding: '10px',
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1.5rem',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>👤</span>
          </button>
    </Link>
  )
}

export default ProfileBtn