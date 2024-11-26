"use client";
import React from 'react';
import Link from 'next/link';

const ProfileBtn = () => {
  return (
    <Link href="/setup_account">
          <button className="p-2 bg-white text-black text-2xl border-none rounded-full cursor-pointer flex justify-center items-center">
            <span className="text-2xl">👤</span>
          </button>
    </Link>
  )
}

export default ProfileBtn