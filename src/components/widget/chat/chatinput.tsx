import Image from 'next/image';
import React, { useState } from 'react';

function ChatInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex px-0 ps-6 py-3">
      <input
        type="text"
        className="ps-2 border-0 outline-none flex-grow"
        placeholder='Ask me anything'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="vectors flex gap-[5px] flex-1 justify-end pe-3">
        {isFocused ? (
          <button className="submit-button">
            <Image
              src="/assets/send.png"
              alt="submit-icon"
              className="mx-1"
              width={40}
              height={40}
            />
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default ChatInput;
