'use client';
import { useState, useEffect, useRef } from 'react';

interface TabItem {
  title: string;
  content: JSX.Element;
}

interface TabsComponentProps {
  items: TabItem[];
}

const TabsComponent = ({ items }: TabsComponentProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    firstBtnRef.current?.focus(); // Optional chaining for safety
  }, []);

  return (
    <div className='max-w-full flex flex-col items-center gap-y-4 w-full'>
      {/* Tab buttons */}
      <div className='bg-[#3C3D44] p-2 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto rounded-full font-bold text-white'>
      {/* Dropdown for smaller screens */}
      <div className='block sm:hidden'>
        <select
          onChange={(e) => setSelectedTab(Number(e.target.value))}
          value={selectedTab}
          className='w-full p-2 rounded-full bg-[#373944] text-white focus:outline-none focus:ring-2 focus:border-[#CEB67D]'
        >
          {items.map((item, index) => (
            <option key={index} value={index}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for larger screens */}
      <div className='hidden sm:flex gap-x-2'>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`outline-none flex-1 p-2 hover:border-[#cea547] rounded-full text-center focus:ring-2 focus:bg-[#373944] focus:text-[#CEB67D] whitespace-nowrap transition-colors duration-200 ease-in-out ${
              selectedTab === index ? 'ring-2 border-2 border-[#CEB67D]' : ''
            } ${item.title === 'All' ? 'ring-2' : ''}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>

      {/* Tab content */}
      <div className='bg-[#2E2F34] p-4 rounded-xl w-full'>
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
