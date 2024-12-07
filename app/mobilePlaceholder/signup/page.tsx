import SignupForm from '@/app/components/SignupFormMobile';
import React from 'react';

const page = () => {
  return (
    <div className="flex justify-center h-full w-screen bg-gradient-bg-m-i bg-center bg-cover bg-no-repeat lg:hidden md:hidden">
      <div className="text-center mx-10 mt-8 text-white">
        <div className='text-wrap px-10'>
          <h1 className='text-3xl font-semibold'>Get Started with Fireman</h1>
        </div>
        <div className='pt-6'>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default page;
