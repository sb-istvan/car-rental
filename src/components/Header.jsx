import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../api-supabase'

export default function Header() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  async function loggingOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <header>
      <h1>
        <Link to="/">Imaginary Car Rental*</Link>
      </h1>

      <div id="login-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-square-rounded"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"></path>
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
          <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05"></path>
        </svg>
        {session ? (
          <div id="login-info">
            <p>Logged in ({session.user.email})</p>
            <Link to="/" onClick={loggingOut}>
              Logout
            </Link>
          </div>
        ) : (
          <div id="login-info">
            <p>Not logged in</p>
            <Link to="/login">Log in</Link> or <Link to="/signup">sign up</Link>
          </div>
        )}
      </div>
    </header>
  )
}
