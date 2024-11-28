import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="flex bg-[url('/images/whitebg.jpg')] bg-cover bg-no-repeat bg-center w-full h-auto rounded-b-[3.5rem]">
        <div className="py-8 px-12">
          <Image
            alt="profile pic"
            src="/images/PrettyPfp.jpg"
            className="rounded-full w-24 h-24 border border-black"
            width={96}
            height={96}
          ></Image>
        </div>

        <div className="flex justify-center flex-col">
          <h1 className="text-3xl font-bold">Lets find your Fireman</h1>
          <h2 className="text-xl">Mr/Ms name entered</h2>
        </div>
      </div>
    </>
  );
};

export default page;
