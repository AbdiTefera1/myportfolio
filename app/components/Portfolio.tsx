import TabsComponent from './tabs/TabsComponent';
import PortfolioCard from './PortfolioCard';
import portfolioDesign from "../assets/Frame 2.jpg";
import estate from '../assets/estate.png';
import library from '../assets/smartLibrary-home.png'
import deliveryapp from '../assets/foodapp.png';
import ppt from '../assets/ppt template.png'
import pPortfolio from '../assets/portfolio.png';
import employeeProfile from '../assets/springboot.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className='bg-gradient-to-r from-[#1c1d21] to-[#2E2F34] py-10 space-y-8 text-white flex flex-col items-center px-4 md:px-10'>
      <h3 className="text-[#f0dba6] text-lg md:text-xl font-sans text-center tracking-wide">Portfolio</h3>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold font-sans text-center'>
        We transform your ideas into unique web projects <br className='hidden md:block' />
        that inspire both you and your customers.
      </h1>

      {/* Tabs Component */}
      <TabsComponent items={items} />
    </section>
  );
};

export default Portfolio;

const items = [
  {
    title: 'All',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <PortfolioCard title="Portfolio UI/UX Design" description='A UI/UX design of my portfolio created using Figma.' imageSrc={portfolioDesign} link="https://www.figma.com/proto/MvJKMETTAG6yYCSxSjhjqi/myportfolio?node-id=1-3&starting-point-node-id=1%3A3&t=J8eUtEtz7mjpKQZS-1"/>
        <PortfolioCard title="Estate web app" description='A real estate web app with property filtering options, built using the MERN stack.' imageSrc={estate} link="https://github.com/AbdiTefera1/estate"/>
        <PortfolioCard title="Smart Library" description='This small kids book library using Reactjs and google book api' imageSrc={library} link="https://github.com/AbdiTefera1/smart-teenagers-library"/>
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={deliveryapp} link="https://github.com/AbdiTefera1/deliveryApp" />
        <PortfolioCard title="Previous Portfolio" description='The previous portfolio I developed using Reactjs.' imageSrc={pPortfolio} link="https://abditefera1.github.io/"/>
        <PortfolioCard title="PowerPoint Template" description='A simple PowerPoint template designed for presentations.' imageSrc={ppt} link="https://1drv.ms/p/c/17afe677e2e15995/EYkvnTvmAzlCtkjw1I-tXDYB4giYtGUTFxcoj0oD5t2E_w?e=XXYQZF" />
        <PortfolioCard title="PowerPoint Template" description='A simple PowerPoint template designed for presentations.' imageSrc={ppt} link="https://1drv.ms/p/c/17afe677e2e15995/EYkvnTvmAzlCtkjw1I-tXDYB4giYtGUTFxcoj0oD5t2E_w?e=XXYQZF" />
        <PortfolioCard title="Microservices Backend for Employee Management" description='A Spring Boot backend using microservices architecture. The project consists of EmployeeProfile and OrganizationStructure services, each deployed independently with full REST API support.' imageSrc={employeeProfile}  link="https://github.com/AbdiTefera1/hrms-insa"/>

      </div>
    ),
  },
  {
    title: 'UI/UX',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <PortfolioCard title="My portfolio design" description='This is the UI/UX of my portfolio design by figma' imageSrc={portfolioDesign} link="https://www.figma.com/proto/MvJKMETTAG6yYCSxSjhjqi/myportfolio?node-id=1-3&starting-point-node-id=1%3A3&t=J8eUtEtz7mjpKQZS-1"/>
      </div>
    ),
  },
  {
    title: 'Web App',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <PortfolioCard title="Estate web app" description='This is Estate web app with filter by diffirent property using MERN stack' imageSrc={estate} link="https://github.com/AbdiTefera1/estate"/>
        <PortfolioCard title="Smart Library" description='This small kids book library using Reactjs and google book api' imageSrc={library} link="https://github.com/AbdiTefera1/smart-teenagers-library"/>
        <PortfolioCard title="Portfolio" description='This the portfolio I have developed before.' imageSrc={pPortfolio} link="https://abditefera1.github.io/"/>
        <PortfolioCard title="Microservices Backend for Employee Management" description='A Spring Boot backend using microservices architecture. The project consists of EmployeeProfile and OrganizationStructure services, each deployed independently with full REST API support.' imageSrc={employeeProfile}  link="https://github.com/AbdiTefera1/hrms-insa"/>
      </div>
    ),
  },
  {
    title: 'Mobile App',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
       <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={deliveryapp} link="https://github.com/AbdiTefera1/deliveryApp" />
      </div>
    ),
  },
  {
    title: 'Others',
    content: (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <PortfolioCard title="Ppt Template" description='This is ppt template for simple pressentation' imageSrc={ppt} link="https://1drv.ms/p/c/17afe677e2e15995/EYkvnTvmAzlCtkjw1I-tXDYB4giYtGUTFxcoj0oD5t2E_w?e=XXYQZF" />
      </div>
    ),
  },
];
