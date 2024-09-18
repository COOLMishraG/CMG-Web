'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <header className="bg-[#1C1678] text-[#F4FF7B] p-4">
      <nav className="flex justify-between items-center">
        <Link href="/dashboard/ticketing" className="text-2xl font-bold">CMG Travels</Link>
        <div className="space-x-4">
          <Link href="/dashboard/ticketing" className="hover:text-[#7BC9FF]">Ticketing</Link>
          <Link href="/dashboard/profile" className="hover:text-[#7BC9FF]">Profile</Link>
          <button onClick={handleLogout} className="hover:text-[#7BC9FF]">Logout</button>
        </div>
      </nav>
    </header>
  )
}