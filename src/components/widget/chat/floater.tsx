"use client";
import Image from "next/image";
import { useState } from "react";
import useItems from "./useItems";
import "./style.css";
import Popup from "./Popup";

function Floater() {
  const [show, setShow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { itemCount, addItem } = useItems();
  const handlepopup = ()=>{
    setShow((prev)=> !prev);
    setIsHovered(false);
  }
  const [chat, setChat] = useState(false)
  return (

    <>
    {
      chat ? <Popup show={chat} onClose={() => setChat(false)} /> : 
    <div className="fixed bottom-10 right-6">
      <div className="relative">
        {show && (
          <div className="absolute -left-[22rem] bottom-0 pr-20">
            <div className="grid gap-6">
              <div
                className="floater-popup relative bg-white w-auto  rounded-2xl shadow-md p-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="floater-popup-right-top absolute -top-10 -right-20 w-52 h-52 rounded-full"></span>
                <span className="floater-popup-left-bottom absolute -bottom-10 -left-20 w-40 h-40 rounded-full"></span>
                {isHovered && (
                <span className="rounded-full text-lg px-2 text-blue-600 bg-white absolute -top-2 right-1 z-10 cursor-pointer" onClick={handlepopup}>
                  &times;
                </span>
                )}

                <div className="p-6 w-auto text-left">
                  <p className="floater-text-gradient font-bold text-3xl my-2">
                    Howdy Tommy,
                  </p>
                  <p className="font-bold text-3xl mb-4">I&apos;m your Paddi</p>
                  <p className="text-[16px] font-[500] w-full">
                    I can plan your next trip ✈️
                  </p>
                  <p className="text-[16px] font-[500] w-full">
                    Answer visa-related queries
                  </p>
                  <p className="text-[16px] font-[500] text-nowrap mb-2 ">
                    🎫Give college recommendations 🎓
                  </p>
                  <p className=" text-[1rem] text-gray-500">
                    And much more!
                  </p>
                </div>
              </div>
                
              <div className="flex justify-end mr-5">
              {itemCount > 0 ? (
               <div className=" w-fit px-6 py-4 text-white font-semibold rounded-2xl bg-gradient-to-l from-[#F8B15A] to-[#E086EE] ">
               You have 2 unread messages 🔔
             </div>
              ):
                <div onClick={() => setChat(true)} className="widget-floater-description w-fit px-6 py-4 text-white font-semibold rounded-2xl">
                 Ask me anything..💡
                </div>
}
              </div>
            </div>
          </div>
        )}

        <Image src="/chat-icon.png" alt="chat icon" width={60} height={60} onClick={handlepopup} />
      </div>
    </div>
    }
    </>
  );
}

export default Floater;

