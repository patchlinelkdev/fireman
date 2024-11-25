"use client";
import React from 'react';
import Link from 'next/link';

const BackToHomeBtn = () => {
  return (
    <Link href="/signup">
          <button className="px-7 py-1 bg-gray-300 text-black text-lg rounded cursor-pointer border-none">
            Back
          </button>
    </Link>
  )
}

export default BackToHomeBtn