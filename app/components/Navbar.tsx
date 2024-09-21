// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { Bungee } from 'next/font/google';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 mx-40 mt-4 mb-8 bg-[#FDFEFE] shadow-md z-50 rounded-xl h-32 w-auto"> {/* Adjusted width of the navbar to fit content */}
      <div className="container mx-auto px-4 flex items-center h-full"> {/* Added h-full to center items vertically */}
        <div className="flex items-center space-x-4 flex-grow">
          <Link href="/" passHref>
            <div className="relative h-32 w-32 rounded-full overflow-hidden cursor-pointer"> {/* Increased size of the logo to make it larger */}
              <Image
                src="/cmg.png"
                alt="CMG Travels Logo"
                layout="fill" // Make the image fill the container
                objectFit="contain" // Maintain aspect ratio
              />
            </div>
          </Link>
          <div className={`text-4xl font-bold text-[#1C1678] ${bungee.className}`}>
            <Link href="/">CMG Travels</Link>
          </div>
        </div>
        <ul className="flex space-x-8 text-2xl ml-auto"> {/* Increased text size of links to be larger */}
          <li>
            <Link href="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-blue-500">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
