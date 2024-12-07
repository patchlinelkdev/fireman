"use client";
import React from "react";
import Link from "next/link";

const GetStartedBtn = () => {
  return (
    <Link href="/mobilePlaceholder/signup">
      <button className="w-full bg-white text-black text-xl rounded-lg py-2.5 font-semibold">
        Get Started ►
      </button>
    </Link>
  );
};

export default GetStartedBtn;