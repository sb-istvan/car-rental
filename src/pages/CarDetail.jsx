import { Suspense } from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getCarDetails } from '../api-supabase'

export function loader({ params }) {
  return defer({ car: getCarDetails(params.carId) })
}

export default function CarDetail() {
  const carPromise = useLoaderData()

  const deleteCar = async () => {
    try {
      const response = await supabase.from('cars').delete().eq('id', carId)
      if (response.status === 204) window.location.href = '/'
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>Car Details</h2>
      <Suspense fallback={<p>Loading car details...!!44!</p>}>
        <Await resolve={carPromise.car}>
          {(car) => {
            return (
              <>
                <p>Car make: {car.make}</p>
                <p>Car model: {car.model}</p>
                <p>Car year: {car.year}</p>
                <p>Car color: {car.color}</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Link to={'edit'}>
                    <button style={{ marginRight: 10 }}>Edit car</button>
                  </Link>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => deleteCar()}
                  >
                    Delete car
                  </button>
                </div>
              </>
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
}
