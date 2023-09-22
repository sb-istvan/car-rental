import { supabase } from '../api-supabase'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) {
    alert(error.error_description || error.message)
  } else {
    alert('Signup successful! Check your email inbox for confirmation.')
    return redirect('/login')
  }
  return null
}

export default function Signup() {
  const { state } = useNavigation()

  // async function loginMagicLink(e) {
  //   e.preventDefault()
  //   setLoading(true)
  //   const { error } = await supabase.auth.signInWithOtp({ email })
  //   if (error) {
  //     alert(error.error_description || error.message)
  //   } else {
  //     alert('Check your email for the login link!')
  //   }
  //   setLoading(false)
  // }

  return (
    <>
      {/* <h2>Login with magic link</h2>
      <form onSubmit={loginMagicLink}>
        <p>Email address:</p>
        <input
          type="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={loading}>
          {loading ? 'Loading...' : 'Send magic link'}
        </button>
      </form> */}

      <h2>Sign up with email and password</h2>
      <Form method="post" replace>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" required={true} />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" required={true} />
        <button disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Sign up...' : 'Sign up'}
        </button>
      </Form>
      <p>
        Already signed up? <Link to="/login">Login here</Link>.
      </p>
    </>
  )
}
