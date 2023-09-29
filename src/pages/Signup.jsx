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

  return (
    <>
      <h2>User sign up</h2>
      <Form method="post" replace className="login-form">
        <div className="input-container">
          <label htmlFor="email">Email address:</label>
          <input name="email" type="email" required={true} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" required={true} />
        </div>
        <button disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Signing up...' : 'Sign up'}
        </button>
      </Form>
      <p>
        Already signed up? <Link to="/login">Login here</Link>.
      </p>
    </>
  )
}
