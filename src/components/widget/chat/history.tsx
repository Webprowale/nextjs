import Image from "next/image";
import React, { useState } from "react";

function History() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  type ActiveSRelationship =
    | "none"
    | "all time"
    | "yesterday"
    | "today"
    | "last hour";
  const [activeState, setActiveState] = useState<ActiveSRelationship>("none");
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <div className="bg-white w-full pt-3 pb-10 relative">
      <div className="flex mx-2 flex-col">
        <div className="flex justify-between mb-2">
          <h3 className="text-[20px] font-[700]">Chat history</h3>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-[#F0F2F5] text-[#0D6EFD] rounded-lg focus:outline-none"
          >
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
        {isModalOpen && (
          <div
            className="absolute top-[60px] right-4 flex flex-col items-center justify-center z-10 w-[276px] bg-white py-4 px-3  shadow-lg"
            onClick={() => setIsModalOpen(false)}
          >
            <h2 className="text-lg font-semibold mb-4">Choose delete option</h2>

            <button
              className="w-full px-4 py-2 text-start text-[16px] font-medium hover:text-[#0D6EFD] hover:bg-gray-200"
              onClick={() => {
                setActiveState("last hour");
                setClicked(true);
              }}
            >
              Last hour
            </button>
            <button
              className="w-full px-4 py-2 text-start text-[16px] font-medium hover:text-[#0D6EFD] hover:bg-gray-200"
              onClick={() => {
                setActiveState("today");
                setClicked(true);
              }}
            >
              Today
            </button>
            <button
              className="w-full px-4 py-2 text-start text-[16px] font-medium hover:text-[#0D6EFD]  hover:bg-gray-200"
              onClick={() => {
                setActiveState("yesterday");
                setClicked(true);
              }}
            >
              Yesterday
            </button>
            <button
              className="w-full px-4 py-2 text-start text-[16px] font-medium hover:text-[#0D6EFD] hover:bg-gray-200"
              onClick={() => {
                setActiveState("all time");
                setClicked(true);
              }}
            >
              All time
            </button>
          </div>
        )}
        {isClicked && (
          <div className="absolute top-[200px] w-[461px] bg-white flex flex-col items-center justify-center rounded-md z-10 py-4 px-5 mx-10  shadow-lg">
            <div className="flex flex-col text-center justify-center px-12">
              <h5 className=" font-bold ">
                Confirm you would like to delete this chat from history.
              </h5>
              <p className="text-[14px]">
                You will not be able to undo this action
              </p>
              <div className="px-12 space-y-2 flex flex-col mt-4">
              <button className="bg-[#FBEAE9] border-none outline-none text-[14px] p-3 text-[#9E0A05]">
                Delete
              </button>
              <button className="bg-[#E7F0FF] border-none outline-none text-[14px] p-3 text-[#0D6EFD]" onClick={()=>{
                setActiveState("none");
                setClicked(false);
                setIsModalOpen(false);
              }}>
                Cancel
              </button>
              </div>
            </div>
          </div>
        )}
        <form className="flex items-center space-x-3 p-4 bg-[#F0F2F5] shadow-md">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">
            Today
          </h5>
          <div className="col flex flex-col p-2">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
                <p>Paddi</p>
              </div>
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
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
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-500">7:15AM</p>
              <span>|</span>
              <p className="text-[#0D6EFD]">Details</p>
            </div>
          </div>
        </div>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">
            Yesterday
          </h5>
          <div className="col flex flex-col p-2">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/avatar2.png"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <p>Paddi</p>
              </div>
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
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
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-500">7:15AM</p>
              <span>|</span>
              <p className="text-[#0D6EFD]">Details</p>
            </div>
          </div>
        </div>
        <div className="today flex flex-col mx-3">
          <h5 className="text-[16px] pb-2 border-b font-[500] mt-4 mb-3">
            17 April 2024
          </h5>
          <div className="col flex flex-col p-2">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <Image src="/chat-icon.png" width={20} height={20} alt="icon" />
                <p>Paddi</p>
              </div>
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
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
              <Image
                src="/assets/Trash.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p>
              <span className="text-gray-500">You prompted</span>: I need a
              round trip flight from Lagos to Paris on May 6th. I will be
              traveling alone.
            </p>
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
