import { supabase } from '../api-supabase'
import { Form, redirect, useNavigation } from 'react-router-dom'

export async function action({ request }) {
  const formData = await request.formData()
  const newCarData = {
    make: formData.get('make'),
    model: formData.get('model'),
    year: formData.get('year'),
    color: formData.get('color'),
  }
  const { error } = await supabase.from('cars').insert(newCarData)
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return redirect('/')
  }
  return null
}

export default function AddCar() {
  const { state } = useNavigation()
  return (
    <Form method="post" id="addcar">
      <h2>Add Car</h2>
      <div>
        <label>Make:</label>
        <input name="make" type="text" required={true} />
      </div>
      <div>
        <label>Model:</label>
        <input name="model" type="text" required={true} />
      </div>
      <div>
        <label>Year of manufacture:</label>
        <input name="year" type="text" required={true} />
      </div>
      <div>
        <label>Color:</label>
        <input name="color" type="text" required={true} />
      </div>

      <button disabled={state === 'submitting'}>
        {state === 'submitting' ? 'Adding new car...' : 'Add new car'}
      </button>
    </Form>
  )
}
