import { Suspense } from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getCars } from '../api-supabase'

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
            <Link to={`/${car.id}`}>Car details</Link>
          </p>
        </div>
      )
    })
  }

  return (
    <>
      <h2>Car List</h2>
      <Suspense fallback={<p>Loading cars...!!44!</p>}>
        <Await resolve={carsPromise.cars}>{renderCarList}</Await>
      </Suspense>
    </>
  )
}
