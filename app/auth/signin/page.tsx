'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthForm from '../../components/AuthForm'
import { Bungee } from 'next/font/google'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
})

export default function SignIn() {
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = async (email: string, username: string, password: string) => {
    // In a real app, you'd validate credentials against a backend
    const user = { email, username }
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/dashboard/ticketing')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-right primarygradient">
      <h1 className={`text-5xl font-bold whitespace-pre-wrap mb-8 text-superBlue ${bungee.className}`}>{`Hello there,\nWelcome back!`}</h1>
      <AuthForm onSubmit={handleSignIn} isSignUp={false} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}