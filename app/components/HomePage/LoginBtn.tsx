"use client";
import React from 'react';
import Link from 'next/link';

const LoginBtn = () => {
  return (
    <Link href="/login">
          <button className="px-5 py-2.5 bg-gray-300 text-black text-base border-none rounded-md cursor-pointer">
            Log in
          </button>
    </Link>
  )
}

export default LoginBtn