'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import TicketForm from '../../components/TicketForm'
import BusList, { Bus, demoBuses } from '../../components/BusList'

export default function Ticketing() {
  const [buses, setBuses] = useState<Bus[]>(demoBuses)
  const [searched, setSearched] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/auth/signin')
    }
  }, [router])

  const handleSearch = async (from: string, to: string, date: string) => {
    const filteredBuses = demoBuses.filter(bus => 
      bus.from.toLowerCase().includes(from.toLowerCase()) &&
      bus.to.toLowerCase().includes(to.toLowerCase())
    )
    
    setBuses(filteredBuses)
    setSearched(true)
  }

  return (
    <div className="min-h-screen bg-[#A3FFD6]">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#1C1678]">Book Your Bus Ticket</h1>
        <TicketForm onSubmit={handleSearch} />
        <BusList buses={buses} searched={searched} />
      </main>
    </div>
  )
}