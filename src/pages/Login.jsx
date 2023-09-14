import { useState } from 'react'
import { supabase } from '../api-supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <>
      <h2>Login with magic link</h2>
      <form onSubmit={handleLogin}>
        <p>Your email:</p>
        <input
          type="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={loading}>
          {loading ? 'Loading...' : 'Send magic link'}
        </button>
      </form>
    </>
  )
}
