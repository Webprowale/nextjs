import Image from 'next/image'
import React from 'react'

function Chatinput() {
  return (
    <div className="flex  px-0 py-3 ">
    <input
      type="text"
      className="ps-2 border-0 outline-none flex-grow"
    />
    <div className="vectors flex gap-[5px] flex-1 justify-end pe-3">
      <Image
        src="/assets/vector (1).png"
        alt="input-icon"
        className="mx-1"
        width={24}
        height={24}
      />
      <Image
        src="/assets/vector (2).png"
        alt="input-icon"
        className="mx-1"
        width={24}
        height={24}
      />
      <Image
        src="/assets/vector.png"
        alt="input-icon"
        className="mx-1"
        width={24}
        height={24}
      />
    </div>
  </div>
  )
}

export default Chatinput