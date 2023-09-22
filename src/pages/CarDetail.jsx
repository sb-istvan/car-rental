import { Suspense } from 'react'
import {
  Link,
  useLoaderData,
  defer,
  Await,
  Form,
  redirect,
} from 'react-router-dom'
import { supabase } from '../api-supabase'
import { getCarDetails } from '../api-supabase'

export function loader({ params }) {
  return defer({ car: getCarDetails(params.carId) })
}

export async function action({ params }) {
  const { error } = await supabase.from('cars').delete().eq('id', params.carId)
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return redirect('/')
  }
  return null
}
export default function CarDetail() {
  const carPromise = useLoaderData()

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
                  <Link to="edit">
                    <button style={{ marginRight: 10 }}>Edit car</button>
                  </Link>
                  <Form method="post" replace>
                    <button style={{ marginLeft: 10 }}>Delete car</button>
                  </Form>
                </div>
              </>
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
}
