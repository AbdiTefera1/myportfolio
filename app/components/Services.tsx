"use client"
import React from 'react'
import Image from 'next/image'
import q from '../assets/q.svg'
import vector from '../assets/Vectorr.svg'
const Services = () => {
  return (
    <section className='bg-[#34353A] py-3 space-y-2 text-white flex items-center flex-col'>
        <h3 className="text-[#ceb67d] text-lg font-sans">Service</h3>
        <h1 className='text-4xl font-bold font-sans'>Pick a service that’s <br /> &nbsp; right for you</h1>
        <Image src={q} alt='undeline svg'></Image>
        <div className='flex justify-between space-x-7 py-7'>
        {/* card-1 */}
        <div className='border-2 border-[#ceb67d] p-3 rounded-md space-y-3 bg-[#2E2F34]'>
            <h3 className='bg-[#373841] px-2 rounded-md font-sans font-bold py-1'>Simple</h3>
            <p className='font-serif font-light text-sm'>Perfect for individuals and small businesses. <br /> Simple, functional solutions.</p>
            <div className='border-[#ceb67d] border w-full'></div>
            <div>
            <span className='text-[#ceb67d] font-bold text-3xl'>Free - 5000birr</span>
            <p className='font-serif'>For Simple Software</p>
            </div>
            <div className='border-[#ceb67d] border w-full'></div>
            <ul className='text-sm font-serif font-light space-y-2'>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Web and mobile app design </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Personal websites no backend</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Small mobile app</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Research services</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> API integration</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Software component dev</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Document editing, and Powerpoint preparation</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Logo design</li>
            </ul>
            <button className='border-2 border-[#ceb67d] px-2 py-1 rounded-md text-[#ceb67d] font-sans font-bold'>Contact here</button>
        </div>
        {/* card-2 */}
         
        <div className='border-2 border-[#ceb67d] p-3 rounded-md space-y-3 bg-[#2E2F34]'>
            <h3 className='bg-[#373841] px-2 rounded-md font-sans font-bold py-1'>Medium</h3>
            <p className='font-serif font-light text-sm'>Tailored for growing businesses. <br /> Dynamic features and more robust systems.</p>
            <div className='border-[#ceb67d] border w-full'></div>
            <div>
            <span className='text-[#ceb67d] font-bold text-3xl'>5000 - 10,000birr</span>
            <p className='font-serif'>For Medium Software</p>
            </div>
            <div className='border-[#ceb67d] border w-full'></div>
            <ul className='text-sm font-serif font-light space-y-2'>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Software Customization</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Blog websites</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Simple inventory mngt system</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Contact management system</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Simple E-commerce</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> Simple delivery app</li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> More functionality, User interaction,<br /> and Backend integration</li>
            </ul>
            <button className='border-2 border-[#ceb67d] px-2 py-1 rounded-md text-[#ceb67d] font-sans font-bold'>Contact here</button>
        </div>
        {/* card-3 */}
        <div className='border-2 border-[#ceb67d] p-3 rounded-md space-y-3 bg-[#2E2F34]'>
            <h3 className='bg-[#373841] px-2 rounded-md font-sans font-bold py-1'>Large</h3>
            <p className='font-serif font-light text-sm'>Suitable for enterprise solutions or complex <br /> mobile apps with multiple integrations.</p>
            <div className='border-[#ceb67d] border w-full'></div>
            <div>
            <span className='text-[#ceb67d] font-bold text-3xl'>10,000 - Above</span>
            <p className='font-serif'>For Large Software</p>
            </div>
            <div className='border-[#ceb67d] border w-full'></div>
            <ul className='text-sm font-serif font-light space-y-2'>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> We build organization level system </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
                <li className='flex items-center'><Image src={vector} className='w-4 h-4 pr-1' alt="check box"></Image> </li>
            </ul>
            <button className='border-2 border-[#ceb67d] px-2 py-1 rounded-md text-[#ceb67d] font-sans font-bold'>Coming Soon</button>
        </div>
        </div>
    </section>
  )
}

export default Services