import { supabase } from '../api-supabase'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return redirect('/')
  }
  return null
}

export default function Login() {
  const { state } = useNavigation()

  return (
    <>
      <h2>Login with email and password</h2>
      <Form method="post" replace>
        <label htmlFor="email">Email address:</label>
        <input name="email" type="email" required={true} />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" required={true} />
        <button disabled={state === 'submitting'}>
          {state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
      <p>
        No account yet? <Link to="/signup">Sign up here</Link>.
      </p>
    </>
  )
}
