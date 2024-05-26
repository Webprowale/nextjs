import Image from "next/image";
import React from "react";
import Carddchat from "./carddchat";
import Chatinput from "./chatinput";

function ChatScreen() {
  return (
    <div className="bg-white w-full h-full">
     
      <div className="chat flex flex-col px-5 pt-5 mb-[15px]">
        <div className="one flex items-center mb-[24px]">
          <Image src="/assets/avatar2.png" alt="icon" width={50} height={50} />
          <p className="ms-3 p-3">
            I'll be in New York for 1 day. Can you recommend what I should do to
            see the best of the city?
          </p>
        </div>
        <div className="one flex items-start flex-col gap-[8px] justify-start ">
          <div className="flex items-center gap-[12px] justify-start">
            <Image src="/chat-icon.png" alt="icon" width={50} height={50} />
            <p>I got you! Here are some flight options I collated for you…</p>
          </div>
          <div className="w-full overflow-x-auto py-4 whitespace-nowrap scroll-smooth mt-3">
            <div className="flex justify-center items-center gap-7">
              <div className="opacity-0 w-auto ml-[-500px] cursor-none">
                <Carddchat />
              </div>
              <Carddchat />
              <Carddchat />
              <Carddchat />
            </div>
          </div>
          <div className="w-full mt-20 mb-5 border-t-[2px] pt-3">
            <Chatinput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
