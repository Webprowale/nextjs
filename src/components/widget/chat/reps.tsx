import Image from 'next/image';
import React, { useState, FormEvent } from 'react';
import ChatInput from './chatinput';

function Reps() {
  const [isNext, setNext] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNext(true);
  };

  return (
    <div className='w-full bg-white pt-5'>
      {isNext ? (
        <div className="mt-[-500px]">
         <div className=" flex flex-col pt-5">
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
          <ChatInput />
        </div>
      </div>
       </div>
      ) : (
        <>
          <h3 className='text-center font-bold mb-5 text-[1.2rem]'>Who would you like to talk to?</h3>
          <div className="flex space-x-2 justify-center mb-5">
            <Image src="/assets/box (1).png" alt='icon' width={248} height={237} />
            <Image src="/assets/box.png" alt='icon' width={248} height={237} />
          </div>
          <div className="flex flex-col justify-center mb-40 pt-10">
            <p className='text-[#1D2433] text-[13px] ms-3'>
              To provide you with our best service, kindly tell us a little about your request
            </p>
            <form className="flex flex-col px-5" onSubmit={handleSubmit}>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Reps;
