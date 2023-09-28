import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { requireAuth, supabase } from './api-supabase'

import Layout from './components/Layout'
import Login, {
  action as loginAction,
  loader as loginLoader,
} from './pages/Login'
import Signup, { action as signupAction } from './pages/Signup'
import CarList, { loader as carListLoader } from './pages/CarList'
import CarDetail, {
  loader as carDetailLoader,
  action as deleteCarAction,
} from './pages/CarDetail'
import EditCar, {
  loader as editCarLoader,
  action as editCarAction,
} from './pages/EditCar'
import AddCar, { action as addCarAction } from './pages/AddCar'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const router = createBrowserRouter([
    {
      element: <Layout session={session} />,
      children: [
        {
          path: '/',
          element: <CarList />,
          loader: carListLoader,
        },
        {
          path: 'login',
          element: <Login />,
          action: loginAction,
          loader: loginLoader,
        },
        {
          path: 'signup',
          element: <Signup />,
          action: signupAction,
        },
        {
          path: 'add',
          element: <AddCar />,
          action: addCarAction,
          loader: async ({ request }) => await requireAuth(request, session),
        },
        {
          path: ':carId',
          element: <CarDetail />,
          loader: carDetailLoader,
          action: deleteCarAction,
        },
        {
          path: ':carId/edit',
          element: <EditCar />,
          loader: editCarLoader,
          action: editCarAction,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
