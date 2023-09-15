import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './pages/Login'
import CarList, { loader as carListLoader } from './pages/CarList'
import CarDetail, { loader as carDetailLoader } from './pages/CarDetail'
import EditCar from './pages/EditCar'
import AddCar from './pages/AddCar'

export default function App() {
  const [carToEdit, setCarToEdit] = useState(null)

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
        },
        {
          path: 'add',
          element: <AddCar />,
        },
        {
          path: ':carId',
          element: <CarDetail />,
          loader: carDetailLoader,
        },
        {
          path: ':carId/edit',
          element: <EditCar carToEdit={carToEdit} />,
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
