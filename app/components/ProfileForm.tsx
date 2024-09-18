import { useState } from 'react'

interface ProfileFormProps {
  user: any
  onSubmit: (updatedData: any) => void
}

export default function ProfileForm({ user, onSubmit }: ProfileFormProps) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, dateOfBirth })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      <button type="submit" className="w-full p-2 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]">
        Update Profile
      </button>
    </form>
  )
}