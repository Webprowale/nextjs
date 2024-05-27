import Image from "next/image";
import React from "react";

function History() {
  return (
    <div className="bg-white w-full pt-3 pb-10">
      <div className="flex mx-2 flex-col">
        <div className="flex justify-between mb-2">
          <h3 className="text-[20px] font-[700]">Chat history</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#F0F2F5] text-[#0D6EFD] rounded-lg focus:outline-none">
            <Image
              src="/assets/Trash.png"
              alt="Delete Icon"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <span>Delete</span>
          </button>
        </div>
        <form className="flex items-center space-x-3 p-4 bg-[#F0F2F5]  shadow-md">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="w-full pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">Today</h5>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
        </div>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">Yesterday</h5>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/assets/avatar2.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
        </div>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">17 April 2024</h5>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
          <div className="col flex flex-col p-2">
           <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-2">
            <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
            <p>Paddi</p>
           </div>
           <Image src="/assets/Trash.png" width={15} height={15} alt="iocn" />
           </div>
           <p><span className="text-gray-500">You prompted</span>: I need a round trip flight from Lagos to Paris on May 6th. I will be traveling alone.</p>
          <div className="flex space-x-2">
            <p className="text-gray-500">7:15AM</p>
            <span>|</span>
            <p className="text-[#0D6EFD]">Details</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
