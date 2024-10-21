import TabsComponent from './tabs/TabsComponent';
import second from '../logo.png'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <section className='bg-gradient-to-r from-[#1c1d21] to-[#2E2F34] py-10 space-y-8 text-white flex flex-col items-center px-4 md:px-10'>
      <h3 className="text-[#f0dba6] text-lg md:text-xl font-sans text-center tracking-wide">Portfolio</h3>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold font-sans text-center'>
        We transform your ideas into unique web projects <br className='hidden md:block' />
        that inspire both you and your customers.
      </h1>

      {/* Tabs Component */}
      <TabsComponent items={items} />
    </section>
  )
}

export default Portfolio


const items = [
  {
    title: 'All',
    content: (
      <div className='grid grid-cols-2 gap-6'>
        {/* 1 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 2 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 3 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 4 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
      </div>
    ),
  },
  {
    title: 'UI/UX',
    content: (
      <div className='grid grid-cols-2 gap-6'>
        {/* 1 */}
        <PortfolioCard title="Delivery App UI/UX" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 2 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 3 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 4 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
      </div>
    ),
  },
  {
    title: 'Web App',
    content: (
      <div className='grid grid-cols-2 gap-6'>
        {/* 1 */}
        <PortfolioCard title="Delivery App WEB APP" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 2 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 3 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 4 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
      </div>
    ),
  },
  {
    title: 'Mobile App',
    content: (
      <div className='grid grid-cols-2 gap-6'>
        {/* 1 */}
        <PortfolioCard title="Delivery App MOBILE APP" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 2 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 3 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 4 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
      </div>
    ),
  },
  {
    title: 'Others',
    content: (
      <div className='grid grid-cols-2 gap-6'>
        {/* 1 */}
        <PortfolioCard title="Delivery App OTHERS" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 2 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 3 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
        {/* 4 */}
        <PortfolioCard title="Delivery App" description='A mobile app designed for a rapidly growing delivery company.' imageSrc={second}/>
      </div>
    ),
  },
];