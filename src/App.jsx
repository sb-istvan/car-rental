import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Login, { action as loginAction } from './pages/Login'
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
  const router = createBrowserRouter([
    {
      element: <Layout />,
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
