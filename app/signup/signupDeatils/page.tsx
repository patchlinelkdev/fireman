import BackToHomeBtn from '@/app/components/SignupDeatilsPage/BackToHomeBtn';
import SignUpDetailsForm from '@/app/components/SignupDeatilsPage/SignUpDetailsForm';
import React from 'react';

const page = () => {
  return (
    <>
      <div
        className="bg-gradient-bg w-full h-[200vh] bg-cover bg-no-repeat bg-center"
        
      >
        <div className="p-4 fixed top-0 right-0 w-full flex justify-end bg-gradient-to-r from-gray-500 to-white">
          <BackToHomeBtn />
        </div>

        <div className="ml-14 mt-16">
          <div className="text-2xl font-bold">
            <h1 className="underline">Choose a profile image</h1>
          </div>

          <SignUpDetailsForm />
        </div>
      </div>
    </>
  );
};

export default page;
