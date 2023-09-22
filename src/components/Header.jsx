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
    <>
      <Link to="/">
        <h1>Car Rental</h1>
      </Link>
      <Link to="/add">
        <p>Add new car</p>
      </Link>

      <div>
        {session ? (
          <p>
            Logged in with {session.user.email} |{' '}
            <Link to="/" onClick={loggingOut}>
              Logout
            </Link>
          </p>
        ) : (
          <p>
            Not logged in | <Link to="/login">Log in</Link> or{' '}
            <Link to="/signup">sign up</Link>
          </p>
        )}
      </div>
    </>
  )
}
