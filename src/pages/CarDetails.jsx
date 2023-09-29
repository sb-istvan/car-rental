import { Suspense } from 'react'
import {
  Link,
  useLoaderData,
  defer,
  Await,
  Form,
  redirect,
} from 'react-router-dom'
import { supabase, requireAuth, getCarDetails } from '../api-supabase'
import LoadingAnimation from '../components/LoadingAnimation'

export function loader({ params }) {
  return defer({ car: getCarDetails(params.carId) })
}

export async function action({ params, request }, session) {
  await requireAuth(request, session)
  const { error } = await supabase.from('cars').delete().eq('id', params.carId)
  if (error) {
    alert(error.error_description || error.message)
  } else {
    alert(`Car #${params.carId} is now deleted!`)
    return redirect('/')
  }
  return null
}
export default function CarDetail() {
  const carPromise = useLoaderData()

  return (
    <>
      <h2>Car Details</h2>
      <Suspense fallback={<LoadingAnimation />}>
        <Await resolve={carPromise.car}>
          {(car) => {
            return (
              <div className="car-details">
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Color: {car.color}</p>
                <div className="button-group">
                  <Link to="edit">Edit car</Link>

                  <Form method="post" replace>
                    <button>Delete car</button>
                  </Form>
                </div>
              </div>
            )
          }}
        </Await>
      </Suspense>
    </>
  )
}
