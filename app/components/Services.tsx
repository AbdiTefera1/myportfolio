"use client"
import React from 'react'
import Image from 'next/image'
import q from '../assets/q.svg'
import vector from '../assets/Vectorr.svg'

interface ServiceCardProps {
    title: string; 
    description: string; 
    priceRange: string; 
    services: string[]; 
  }
  
 
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, priceRange, services }) => {
    return (
  <div className='border-2 border-[#ceb67d] p-5 rounded-lg space-y-4 bg-[#2E2F34] transition-all duration-300 flex-1 m-2'>
    <h3 className='bg-[#373841] px-3 rounded-md font-sans font-bold py-2 text-center text-lg'>{title}</h3>
    <p className='font-serif font-light text-sm text-center'>{description}</p>
    <div className='border-[#ceb67d] border w-full'></div>
    <div className='flex justify-between items-center'>
      <span className='text-[#ceb67d] font-bold text-3xl'>{priceRange}</span>
      <p className='font-serif'>Available</p>
    </div>
    <div className='border-[#ceb67d] border w-full'></div>
    <ul className='text-sm font-serif font-light space-y-2'>
      {services.map((service, index) => (
        <li key={index} className='flex items-center'>
          <Image src={vector} className='w-4 h-4 pr-2' alt="check box" />
          {service}
        </li>
      ))}
    </ul>
  </div>
)};

const Services = () => {
  return (
    <section className='bg-[#34353A] py-8 space-y-6 text-white flex items-center flex-col'>
      <h3 className="text-[#ceb67d] text-lg font-sans">Our Services</h3>
      <h1 className='text-3xl font-bold font-sans text-center'>Choose the Right Service for You</h1>
      <Image src={q} alt='underline svg' className='mb-4' />
      <div className='flex flex-wrap justify-between max-w-6xl mx-auto'>
        {/* Card 1 */}
        <ServiceCard
          title="Simple"
          description="Perfect for individuals and small businesses. Simple, functional solutions."
          priceRange="Free - 5000birr"
          services={[
            "Web and mobile app design",
            "Personal websites (no backend)",
            "Small mobile apps",
            "Research services",
            "API integration",
            "Software component development",
            "Document editing and PowerPoint preparation",
            "Logo design"
          ]}
        />
        {/* Card 2 */}
        <ServiceCard
          title="Medium"
          description="Tailored for growing businesses. Dynamic features and more robust systems."
          priceRange="5000 - 10,000birr"
          services={[
            "Software customization",
            "Blog websites",
            "Simple inventory management systems",
            "Contact management systems",
            "Simple e-commerce solutions",
            "Simple delivery apps",
            "More functionality, user interaction, and backend integration"
          ]}
        />
        {/* Card 3 */}
        <ServiceCard
          title="Large"
          description="Suitable for enterprise solutions or complex mobile apps with multiple integrations."
          priceRange="10,000 - Above"
          services={["We build organization-level systems"]}
        />
      </div>

      {/* Fixed Contact Us Button */}
      <a href="#contact" className='fixed bottom-5 right-5 bg-[#ceb67d] text-black font-bold py-3 px-5 rounded-md shadow-lg hover:bg-[#d6c77c] transition-all duration-300'>
        Contact Us
      </a>
    </section>
  )
}

export default Services;
