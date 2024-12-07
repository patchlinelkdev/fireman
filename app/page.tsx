import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-end h-screen w-screen bg-gradient-bg-m bg-center bg-cover bg-no-repeat">
        <div className="text-center mx-10 mb-12 text-white">
          <div className="px-6">
            <h1 className="text-3xl font-bold">One Stop Home Services</h1>
          </div>

          <div className="pt-7 pb-12">
            <p className="text-wrap text-sm">
              Your one-stop solution for all home services needs! From plumbing
              repairs to cleaning services, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
