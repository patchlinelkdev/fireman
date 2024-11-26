"use client";
import React from "react";
import Link from "next/link";

const SignupBtn = () => {
  return (
    <Link href="/signup">
      <button className="px-5 py-2.5 bg-[#6AA84F] text-white text-base border-none rounded-md cursor-pointer">
        Sign up
      </button>
    </Link>
  );
};

export default SignupBtn;
