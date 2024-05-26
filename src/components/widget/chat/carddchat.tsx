import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const  Carddchat: React.FC = () => {
  return (
    <div className="min-w-[320px] max-w-[320px] pb-[12px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 pt-4 flex flex-col space-y-1">
          <h5 className="mb-2 text-[18px] text-center font-bold  text-gray-900 dark:text-white">
          Lagos to New York - ₦1,200,000
          </h5>
        <p className='text-[14px] font-[400] text-[#6F7481]'>✈️ Round trip | KLM</p>
        <p  className='text-[14px] font-[400] text-[#6F7481]'>➡️ Thu 6th May | 10h 16m | One stop</p>
        <p  className='text-[14px] font-[400] text-[#6F7481]'>⬅️ Fri 7th May | 9h 50m | One stop</p>
      </div>
      <Link href="#" className='flex justify-center mt-3'>
        <Image className="rounded-t-lg" src="/assets/Image.png" alt="con" width={288} height={120}  />
      </Link>
    </div>
  );
};

export default Carddchat;
