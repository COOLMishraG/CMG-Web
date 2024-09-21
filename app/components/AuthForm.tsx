import { useState } from 'react'

interface AuthFormProps {
  onSubmit: (email: string, username: string, password: string) => void
  isSignUp: boolean
}

export default function AuthForm({ onSubmit, isSignUp }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    onSubmit(email, username, password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSignUp && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded bg-white text-[#1C1678]"
        />
      )}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded bg-white text-[#1C1678]"
      />
      {isSignUp && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-2 border rounded bg-white text-[#1C1678]"
        />
      )}
      <div className="text-superBlue text-xl">Forgot Password?</div>
      <button type="submit" className="w-full p-2 bg-[#7BC9FF] text-[#1C1678] rounded-xl hover:bg-[#F4FF7B] text-xl">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <button type="submit" className="w-full p-2  text-[#1C1678] rounded-xl hover:bg-[#ffffff] text-superBlue text-xl text-center">New user? SignUp</button>
    </form>
  )
}