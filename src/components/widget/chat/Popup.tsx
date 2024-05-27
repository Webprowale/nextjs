import Image from "next/image";
import React, { useEffect, useState } from "react";
import Chatinput from "./chatinput";
import ChatScreen from "./chatScreen";
import Form from "./form";
import Tumini from "./tumini";
import Reps from "./reps";
import History from "./history";

const Popup = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [managescreen, setSecreen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState<string>("paddi");
  const [submenus, setMenus] = useState<string>("Your Paddi");

  const handlescreen = () => {
    setSecreen(true);
  };
  useEffect(() => {
    if (currentComponent === "tumini") {
      setMenus("Your Relationship manager");
    } else if (currentComponent === "reps") {
      setMenus("GoPaddi Rep");
    } else if (currentComponent === "history") {
      setMenus("");
    } 
     else {
      setMenus("Your Paddi");
    }
  }, [currentComponent]);

  const renderComponent = () => {
    switch (currentComponent) {
      case "paddi":
        return <ChatScreen />;
      case "form":
        return <Form />;
      case "tumini":
        return <Tumini />;
      case "reps":
        return <Reps />;
      case "history":
        return <History />;
      default:
        return <ChatScreen />;
    }
  };
  if (!show) return null;
  const handleCompontent = (component: string) => {
    setCurrentComponent(component);
  };

  return (
    <div className="fixed right-0 z-[30] bottom-0 h-full bg-[#E7F0FF]  w-screen md:w-[560px] flex flex-col justify-start items-start overflow-x-hidden">
      <div className="w-full h-[60px] flex justify-between text-white mb-[-35px] z-[1] items-center">
        <div
          className="w-[68px] h-[26px] flex text-[10px] ml-[12px] justify-start items-center cursor-pointer"
          onClick={onClose}
        >
          <span className="text-black text-[0.9rem]">X</span>
          <span className="text-black ml-1 text-[0.9rem]">Close</span>
        </div>

        <div className="mr-5 flex flex-col relative gap-[2.6px] justify-start items-end group">
          <span className="w-[24px] h-[2.45px] rounded-[7px] bg-[blue]" />
          <span className="w-[18px] h-[2.45px] rounded-[7px] bg-[blue]" />
          <div className="absolute top-[12px] shadow right-[-100vw] transition-all ease-in-out duration-300 group-hover:right-[4px] rounded-[4px] p-[12px] bg-white w-[276px] h-auto">
            <ul>
              <li
                className="flex my-3 mx-3 p-3 items-center text-black bg-[#F3F7FF]"
                onClick={() => handleCompontent("history")}
              >
                <Image
                  src="/assets/question.png"
                  alt="icon"
                  className="me-2"
                  width={25}
                  height={25}
                />
                See chat history
              </li>
              <li className="flex my-3 mx-3 p-3 items-center text-black hover:bg-[#F3F7FF]">
                <Image
                  src="/assets/question.png"
                  alt="icon"
                  className="me-2"
                  width={25}
                  height={25}
                />
                What is Paddi?
              </li>
              <li className="flex my-3 mx-3 p-3 items-center text-black hover:bg-[#F3F7FF]">
                <Image
                  src="/assets/question.png"
                  alt="icon"
                  className="me-2"
                  width={25}
                  height={25}
                />
                Turn off sound
              </li>
            </ul>
          </div>
        </div>
      </div>
      {managescreen ? (
        <>
          <div className="tab w-full grid grid-cols-10 mx-3 mt-10 gap-5 pt-[20px]">
            <button
              className={`col-span-3 flex items-center p-1 cursor-pointer ${
                currentComponent === "paddi" ? "bg-white" : ""
              } justify-center`}
              onClick={() => handleCompontent("paddi")}
            >
              <Image src="/chat-icon.png" alt="icon" width={30} height={20} />
              <p className="font-bold text-[1rem] ms-2">Paddi</p>
            </button>
            <div
              className={`col-span-3 flex ${
                currentComponent === "tumini" ? "bg-white" : ""
              } items-center p-1 cursor-pointer hover:bg-white justify-center`}
              onClick={() => handleCompontent("tumini")}
            >
              <Image
                src="/assets/c_icon.png"
                alt="icon"
                width={30}
                height={20}
              />
              <p className="font-bold text-[1rem] ms-2">Tumini</p>
            </div>
            <div
              className={`col-span-4 flex items-center ${
                currentComponent === "reps" ? "bg-white" : ""
              } p-1 cursor-pointer hover:bg-white justify-center`}
              onClick={() => handleCompontent("reps")}
            >
              <Image
                src="/assets/need_icon.png"
                alt="icon"
                width={50}
                height={20}
              />
              <p className="font-bold text-[1rem] ms-1">GoPaddiReps</p>
            </div>
          </div>
          <div className="bg-white  w-full h-full">
            <div className="flex justify-between mx-5 my-5">
              <div className="flex items-center group">
                <p className="font-semibold text-[1.1rem]">{submenus}</p>
                <Image
                  src="/assets/downArrow.png"
                  alt="icon"
                  width={14}
                  height={14}
                  className={`ms-2 ${submenus === '' ? "hidden" : " "}`}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/Home.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className="ms-2"
                  onClick={() => handleCompontent("paddi")}
                />
                <Image
                  src="/assets/NewChat.png"
                  alt="icon"
                  width={40}
                  height={40}
                  className={`ms-2 ${submenus === '' ? "hidden" : " "}`}
                  onClick={() => setCurrentComponent("form")}
                />
              </div>
            </div>
          </div>
          {renderComponent()}
        </>
      ) : (
        <>
          <div className="relative w-full h-[20rem] bg-[white]">
            <Image
              src="/assets/topImage.png"
              className="w-full h-[10rem] object-cover top-0 left-0"
              alt="chat icon"
              width={99999}
              height={9999}
            />
          </div>
          <div className="w-full bg-[white] h-full flex flex-col">
            <div className="w-full flex gap-[3px] flex-col justify-center items-center topimage">
              <div className="w-full gap-[8px] flex bg-[white] justify-center items-center">
                <Image
                  src="/assets/your_personal.png"
                  alt="chat icon"
                  width={300}
                  height={100}
                />
              </div>
            </div>
            <div className="mt-[96px] w-full flex flex-col justify-start items-center">
              <span className="font-[700] text-[36px] gradient-text">
                Howdy Tommy,
              </span>
              <span className="font-[500] text-[30px] text-[#676E7E] text-center">
                I can plan your next trip
              </span>
            </div>
            <div className="border-[1px] border-[#98A2B3] p-0 md:mx-10 my-4">
              <Chatinput />
            </div>
          </div>
          <div className="downimage w-full h-[100%] bg-white pt-[5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              <Image
                src="/assets/chat_with_tumini.png"
                alt="input-icon"
                className="sm:mx-1"
                width={349}
                height={52}
                onClick={handlescreen}
              />
              <Image
                src="/assets/need_help.png"
                alt="input-icon"
                className="sm:mx-1"
                width={349}
                height={52}
                onClick={handlescreen}
              />
            </div>
            <div className="rounded-lg p-3 border border-[#0D6EFD] mx-8 mt-8 mb-3">
              <div className="flex items-center" onClick={handlescreen}>
                <Image
                  src="/assets/info.png"
                  alt="info icon"
                  width={24}
                  height={24}
                />
                <p className="text-[16px] font-semibold ms-3">
                  See what your Paddi can do for you
                </p>
              </div>
            </div>
            <div className="rounded-lg p-3 border border-[#0D6EFD] my-4 mx-8 mb-20">
              <div
                className="flex items-center"
                onClick={() => {
                  handlescreen();
                  handleCompontent("history");
                }}
              >
                <Image
                  src="/assets/history.png"
                  alt="info icon"
                  width={24}
                  height={24}
                />
                <p className="text-[16px] font-semibold ms-3">
                  See chat history
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Popup;
