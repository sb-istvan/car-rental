import { Suspense } from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getCars } from '../api-supabase'
import LoadingAnimation from '../components/LoadingAnimation'

export function loader() {
  return defer({ cars: getCars() })
}

export default function CarList() {
  const carsPromise = useLoaderData()

  function renderCarList(cars) {
    return cars.map((car) => {
      return (
        <div key={car.id}>
          <p>
            #{car.id}: {car.make} {car.model} ({car.year}){' '}
            <Link to={`/${car.id}`}>Details</Link>
          </p>
        </div>
      )
    })
  }

  return (
    <>
      <h2>Car List</h2>
      <Suspense fallback={<LoadingAnimation />}>
        <Await resolve={carsPromise.cars}>{renderCarList}</Await>
      </Suspense>
      <Link to="/add">Add new car</Link>
    </>
  )
}
