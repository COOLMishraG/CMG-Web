import Link from 'next/link'
import { Bungee } from 'next/font/google';
import { Antic } from 'next/font/google';
const bungee = Bungee({subsets: ['latin'], weight: '400'});
const antic = Antic({subsets: ['latin'], weight: '400' });<div className={`text-5xl font-bold mt-16 text-[#1C1678] whitespace-pre-wrap text-center ${antic.className} font-semibold`}>
  {`Where will the road take\nyou?`}
</div>
/**
 * The main page of the CMG Travels app.
 *
 * This page displays a welcome message and two buttons to
 * sign in or sign up. The background is a gradient that
 * transitions from primaryBlue to cremeColor.
 */
export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-primaryBlue to-cremeColor">
      <div className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-3xl p-12 max-w-4xl text-center">
        <h1 className={`text-7xl font-bold mb-16 text-[#1C1678] ${bungee.className}`}>Welcome to CMG Travels</h1>
        <div className="space-x-4">
          <Link href="/auth/signin" className="text-5xl p-4 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]">
            Sign In
          </Link>
          <Link href="/auth/signup" className="text-5xl p-4 bg-[#1C1678] text-[#F4FF7B] rounded hover:bg-[#F4FF7B] hover:text-[#1C1678]">
            Sign Up
          </Link>
        </div>
        <div className={`text-5xl font-bold mt-16 text-[#1C1678] whitespace-pre-wrap text-center ${antic.className} font-bold`}>
          {`Where will the road take\nyou?`}
        </div>
      </div>
    </main>
  );
}


