import { Link } from 'react-router-dom'
import { supabase } from '../api-supabase'

import { UserIcon } from '../assets/svgs'

export default function Header({ session }) {
  async function loggingOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <header>
      <h1>
        <Link to="/">Car Rental Imagined*</Link>
      </h1>
      <div id="login-container">
        <UserIcon />
        {session ? (
          <div id="login-info">
            <p>{session.user.email}</p>
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
