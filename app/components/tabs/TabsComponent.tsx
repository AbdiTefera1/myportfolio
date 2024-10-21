'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    firstBtnRef.current?.focus(); // Optional chaining for safety
  }, []);

  return (
    <div className='max-w-full flex flex-col items-center gap-y-2 w-full'>
      <div className='bg-[#3C3D44] p-1 mx-40 rounded-full flex w-full max-w-md gap-x-2 font-bold text-white'>
        {items.map((item, index) => (
          <button
            ref={index === 0 ? firstBtnRef : null}
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`outline-none flex-1 p-2 hover:border-[#cea547] rounded-full text-center focus:ring-2 focus:bg-[#373944] focus:text-[#CEB67D] whitespace-nowrap ${
              selectedTab === index ? 'ring-2 border-2 border-[#CEB67D]' : ''
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className='bg-[#2E2F34] p-2 rounded-xl'>
        {items.map((item, index) => (
          <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
