import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CMG Travels',
  description: 'Book your train tickets with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#A3FFD6]`}>
        {/* <Navbar/> */}
      {children}</body>
    </html>
  )
}
