import { supabase } from '../api-supabase'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const loginButton = formData.get('button')
  console.log(formData)
  console.log(loginButton)
  if (loginButton === 'withPassword') {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      alert(error.error_description || error.message)
    } else {
      return redirect('/')
    }
  } else if (loginButton === 'withGoogle') {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
    if (error) {
      alert(error.error_description || error.message)
    }
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
        <input name="email" type="email" />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" />
        <button
          name="button"
          value="withPassword"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
        <button
          name="button"
          value="withGoogle"
          disabled={state === 'submitting'}
        >
          {state === 'submitting'
            ? 'Logging in...'
            : 'Log in with Google Account'}
        </button>
      </Form>
      <p>
        No account yet? <Link to="/signup">Sign up here</Link>.
      </p>
    </>
  )
}
