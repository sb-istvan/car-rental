import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import './App.css'

const CarList = lazy(() => import ('./pages/CarList.jsx'))
const CarDetail = lazy(() => import ('./pages/CarDetail.jsx'))
const EditCar = lazy(() => import ('./pages/EditCar.jsx'))
const AddCar = lazy(() => import ('./pages/AddCar.jsx'))

function App() {
  const [carToEdit, setCarToEdit] = useState(null)

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>Car Rental</h1>
        </Link>
        <Link to='/add'>
          <button>Add new car</button>
        </Link>
        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><CarList /></Suspense>}/>
          <Route path='/:carId' element={<Suspense fallback={<></>}><CarDetail setCarToEdit={setCarToEdit} /></Suspense>}/>
          <Route path='/:carId/edit' element={<Suspense fallback={<></>}><EditCar carToEdit={carToEdit} /></Suspense>}/>
          <Route path='/add' element={<Suspense fallback={<></>}><AddCar /></Suspense>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App