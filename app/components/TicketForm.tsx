import { useState } from 'react'

interface TicketFormProps {
  onSubmit: (from: string, to: string, date: string) => void
}

export default function TicketForm({ onSubmit }: TicketFormProps) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(from, to, date)
  }

  const handleSwap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          className="flex-grow p-2 border rounded bg-white text-[#1C1678]"
        />
        <button
          type="button"
          onClick={handleSwap}
          className="p-2 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]"
        >
          ⇄
        </button>
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          className="flex-grow p-2 border rounded bg-white text-[#1C1678]"
        />
      </div>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      <button type="submit" className="w-full p-2 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]">
        Search Buses
      </button>
    </form>
  )
}