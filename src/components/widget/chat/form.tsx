import Image from "next/image";
import React from "react";

function Form() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex p-6 items-center">
        <Image src="/chat-icon.png" width={50} height={50} alt="iocn" />
        <p className="text-[1rem] ms-5 text-gray-400 mb-1">
          Kindly fill in the details below to proceed
        </p>
      </div>
      <div className=" w-full flex justify-center">
        <form className="p-0">
          <div className="mb-4 p-0">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="sm:w-[350px]  py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-bold">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-8 flex space-x-4">
          <button
              type="reset"
              className=" bg-[#E7F0FF] text-blue-500 shadow py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
