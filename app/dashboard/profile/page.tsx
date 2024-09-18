'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import ProfileForm from '../../components/ProfileForm'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      router.push('/auth/signin')
    }
  }, [router])

  const handleUpdateProfile = async (updatedData: any) => {
    const updatedUser = { ...user, ...updatedData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-[#A3FFD6]">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#1C1678]">Your Profile</h1>
        {isEditing ? (
          <ProfileForm user={user} onSubmit={handleUpdateProfile} />
        ) : (
          <div>
            <p className="text-[#1C1678]">Name: {user.name || 'Not set'}</p>
            <p className="text-[#1C1678]">Email: {user.email}</p>
            <p className="text-[#1C1678]">Date of Birth: {user.dateOfBirth || 'Not set'}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-[#7BC9FF] text-[#1C1678] rounded hover:bg-[#F4FF7B]"
            >
              Edit Profile
            </button>
          </div>
        )}
      </main>
    </div>
  )
}