import Image, {StaticImageData} from 'next/image'
import pointer from '../assets/Iconn.svg'
import Link from 'next/link';
interface PortfolioCardProps {
    title: string;
    description: string;
    imageSrc: StaticImageData | string;
    link: string;
  }
  
  const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageSrc, link }) => {
    return (
        <div className='relative w-full md:w-auto h-auto shadow-lg rounded-lg overflow-hidden bg-cover bg-center transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#ceb67d]'>
          <Image src={imageSrc} alt='delivery app' layout='responsive' height={100} width={100} className='object-cover transition-opacity duration-500 hover:opacity-90 rounded-t-lg' />
          <div className='bg-black bg-opacity-60 absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 md:p-5 rounded-b-lg transition-all duration-500'>
            <div className='space-y-2'>
              <h3 className='text-base md:text-lg lg:text-xl font-sans font-semibold text-[#ceb67d]'>{title}</h3>
              <p className='text-xs md:text-sm font-serif text-white font-light'>{description}</p>
            </div>
            <Link href={link} className='bg-[#e4b74d] hover:bg-[#ceb67d] rounded-full p-3 md:p-4 transform hover:scale-110 hover:rotate-12 transition-all duration-300 relative'>
              <Image src={pointer} height={20} width={20} alt='pointer' />
              <span className='absolute top-0 left-0 w-full h-full bg-[#e4b74d] opacity-20 blur-xl transition-opacity duration-500 hover:opacity-50 rounded-full'></span>
            </Link>
          </div>
        </div>
    );
  };
  
  export default PortfolioCard;
  