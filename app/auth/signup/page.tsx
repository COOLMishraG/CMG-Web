'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthForm from '../../components/AuthForm'

export default function SignUp() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignUp = async (email: string, username: string, password: string) => {
    // In a real app, you'd send this data to a backend
    const user = { email, username }
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/dashboard/ticketing')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
      <AuthForm onSubmit={handleSignUp} isSignUp={true} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}