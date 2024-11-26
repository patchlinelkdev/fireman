"use client";
import React from 'react';
import Link from 'next/link';

const BackToHomeBtn = () => {
  return (
    <Link href="/">
          <button
            className="px-5 py-2.5 bg-gray-300 text-black text-base border-none rounded-md cursor-pointer"
          >
            Back to Home
          </button>
    </Link>
  )
}

export default BackToHomeBtn