import { Suspense } from 'react'
import { Form, redirect, Await, useLoaderData } from 'react-router-dom'
import { supabase } from '../api-supabase'
import LoadingAnimation from '../components/LoadingAnimation'

export async function action({ request, params }) {
  const formData = await request.formData()
  const updatedCarData = {
    make: formData.get('make'),
    model: formData.get('model'),
    year: formData.get('year'),
    color: formData.get('color'),
  }
  const { error } = await supabase
    .from('cars')
    .update(updatedCarData)
    .eq('id', params.carId)
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return redirect(`/${params.carId}`)
  }
  return null
}

export default function EditCar() {
  const carPromise = useLoaderData()

  return (
    <Form method="post" id="editcar">
      <h2>Edit Car Details</h2>
      <Suspense fallback={<LoadingAnimation />}>
        <Await resolve={carPromise.car}>
          {(car) => {
            return (
              <>
                <div>
                  <label>Make</label>
                  <input name="make" type="text" defaultValue={car.make} />
                </div>
                <div>
                  <label>Model</label>
                  <input name="model" type="text" defaultValue={car.model} />
                </div>
                <div>
                  <label>Year</label>
                  <input name="year" type="text" defaultValue={car.year} />
                </div>
                <div>
                  <label>Color</label>
                  <input name="color" type="text" defaultValue={car.color} />
                </div>

                <button>Edit Car</button>
              </>
            )
          }}
        </Await>
      </Suspense>
    </Form>
  )
}
