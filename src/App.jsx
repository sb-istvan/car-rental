import {
  createBrowserRouter,
  RouterProvider,
  defer,
  redirect,
} from 'react-router-dom'
import { requireAuth, supabase, getCarDetails } from './api-supabase'

import Layout from './components/Layout'
import Login, {
  action as loginAction,
  loader as loginLoader,
} from './pages/Login'
import Signup, { action as signupAction } from './pages/Signup'
import CarList, { loader as carListLoader } from './pages/CarList'
import CarDetails, { loader as carDetailsLoader } from './pages/CarDetails'
import EditCar, { action as editCarAction } from './pages/EditCar'
import AddCar, { action as addCarAction } from './pages/AddCar'
import useAuth from './components/Auth'

export default function App() {
  const session = useAuth(null)

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
          element: <CarDetails />,
          loader: carDetailsLoader,
          action: async ({ request, params }) => {
            await requireAuth(request, session)
            const { error } = await supabase
              .from('cars')
              .delete()
              .eq('id', params.carId)
            if (error) {
              alert(error.error_description || error.message)
            } else {
              alert(`Car #${params.carId} is now deleted!`)
              return redirect('/')
            }
            return null
          },
        },
        {
          path: ':carId/edit',
          element: <EditCar />,
          loader: async ({ request, params }) => {
            await requireAuth(request, session)
            return defer({ car: getCarDetails(params.carId) })
          },
          action: editCarAction,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
