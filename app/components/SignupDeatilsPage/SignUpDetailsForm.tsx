"use client";
import React from 'react';
import Image from 'next/image';

const SignUpDetailsForm = () => {
  return (
    <form>
            <div className="py-5 px-14">
                <Image 
                src="../images/PrettyPfp.jpg"
                alt="Profile Pic"
                className="w-32 h-32 rounded-full border-2 border-black"
                ></Image>
            </div>

            <label htmlFor="FirstName" className="block text-lg font-medium">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              className="w-72 py-1 px-3 border-b-4 border-dashed border-black focus:outline-none focus:border-blue-500"
            ></input>

            <label htmlFor="LastName" className="block text-lg font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              className="w-72 py-1 px-3 border-b-4 border-dashed border-black focus:outline-none focus:border-blue-500"
            ></input>

            <label htmlFor="City" className="block text-lg font-medium">
              City
            </label>
            <input
              type="text"
              id="City"
              className="w-72 py-1 px-3 border-b-4 border-dashed border-black focus:outline-none focus:border-blue-500"
            ></input>

            <label htmlFor="Address" className="block text-lg font-medium">
              Address
            </label>
            <textarea
              id="Address"
              rows={2}
              className="w-72 py-1 px-3 border-b-4 border-dashed border-black focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <label htmlFor="Occupation" className="block text-lg font-medium">
              Occupation
            </label>
            <input
              type="text"
              id="Occupation"
              className="w-72 py-1 px-3 border-b-4 border-dashed border-black focus:outline-none focus:border-blue-500"
            ></input>

            <label
              htmlFor="YearsOfExperience"
              className="block text-lg font-medium mt-5"
            >
              Years of Experience
            </label>
            <input
              type="text"
              id="YearsOfExperience"
              className="py-2 px-5 w-64 mt-2 bg-gray-300 focus:outline-none"
            ></input>

            <label htmlFor="AboutYou" className="block text-lg font-medium my-5">
              About You
            </label>
            <textarea
              id="AboutYou"
              rows={10}
              className="w-96 bg-gray-300 p-3 resize-none focus:outline-none"
            ></textarea>
    </form>
  )
}

export default SignUpDetailsForm