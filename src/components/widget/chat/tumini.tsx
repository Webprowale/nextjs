import React from "react";
import Chatinput from "./chatinput";

function Tumini() {
  return (
    <div className="mt-[-490px] w-full">
      <div className="flex flex-col pt-5">
        <div className="bg-[#F7F9FC] w-full p-5 mb-8">
          <div className="flex">
            <img src="/assets/c_icon.png" alt="icon" width={50} height={50} />
            <p className="ms-5">
              Hi Tommy, it’s Tumini. <br />
              How can I help?
            </p>
          </div>
        </div>
        <div className=" w-full p-5">
          <div className="flex items-center">
            <img src="/assets/avatar2.png" alt="icon" width={80} height={80} />
            <p className="ms-5">
              Hi Tumini, please I would like to change my email address. I lost
              access to the current one.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <div className="border-t">
          <Chatinput />
        </div>
      </div>
    </div>
  );
}

export default Tumini;
