import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Header = lazy(() => import('./components/Header.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const CarList = lazy(() => import('./pages/CarList.jsx'))
const CarDetail = lazy(() => import('./pages/CarDetail.jsx'))
const EditCar = lazy(() => import('./pages/EditCar.jsx'))
const AddCar = lazy(() => import('./pages/AddCar.jsx'))

export default function App() {
  const [carToEdit, setCarToEdit] = useState(null)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <CarList />
              </Suspense>
            }
          />
          <Route
            path="/:carId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <CarDetail setCarToEdit={setCarToEdit} />
              </Suspense>
            }
          />
          <Route
            path="/:carId/edit"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <EditCar carToEdit={carToEdit} />
              </Suspense>
            }
          />
          <Route
            path="/add"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <AddCar />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Login />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}
