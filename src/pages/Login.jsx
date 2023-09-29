import { supabase } from '../api-supabase'
import {
  Link,
  Form,
  redirect,
  useNavigation,
  useLoaderData,
} from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'

export async function action({ request }) {
  const pathname = new URL(request.url).searchParams.get('redirectTo') || '/'
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const loginButton = formData.get('button')
  if (loginButton === 'withPassword') {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      alert(error.error_description || error.message)
    } else {
      console.log(pathname)
      return redirect('/') // TODO: redirecting to `pathname` does not work, find the reason
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

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

export default function Login() {
  const { state } = useNavigation()
  const message = useLoaderData()

  return (
    <>
      <ErrorMessage message={message} />
      <h2>User login</h2>
      <Form method="post" replace className="login-form">
        <div className="input-container">
          <label htmlFor="email">Email address:</label>
          <input name="email" type="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" />
        </div>
        <button
          name="button"
          value="withPassword"
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
        <p>or</p>
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
