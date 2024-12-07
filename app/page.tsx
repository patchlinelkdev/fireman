import React from 'react';
import GetStartedBtn from './components/HomePage/GetStartedBtn';
import LoginBtn from './components/HomePage/LoginBtn';
import ProfileBtn from './components/HomePage/ProfileBtn';
import SignupBtn from './components/HomePage/SignupBtn';

export default function Home() {
  return (
    <>
      <div className="hidden lg:block md:block">
        {/* Top 10vh empty space for the buttons */}
        <div className="absolute top-0 left-0 w-screen h-[10vh] flex justify-end items-center pr-2 gap-3">
          <LoginBtn />
          <SignupBtn />
          <ProfileBtn />
        </div>

        {/* Background container */}
        <div className="absolute bg-[url('/images/background.png')] w-screen h-[80vh] top-[10vh] left-0 bg-center bg-cover bg-no-repeat filter brightness-50 z-[1]"></div>

        {/* Text content */}

        <div className="absolute w-screen h-[80vh] top-[10vh] left-0 flex justify-center items-center z-20">
          <div className="text-white text-[10rem] font-bold tracking-[0.3rem]">
            FIREMAN
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden">
        <div className="flex justify-center items-end h-screen w-screen bg-gradient-bg-m bg-center bg-cover bg-no-repeat">
          <div className="text-center mx-10 mb-12 text-white">
            <div className='px-6'>
              <h1 className="text-3xl font-bold">One Stop Home Services</h1>
            </div>
            <div>
              <GetStartedBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
