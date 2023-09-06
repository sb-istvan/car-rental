import { useState } from 'react'
import { supabase } from '../api-supabase'

export default function AddCar() {
  const [carMake, setCarMake] = useState('')
  const [carModel, setCarModel] = useState('')
  const [carYear, setCarYear] = useState('')
  const [carColor, setCarColor] = useState('')

  const addCar = async () => {
    try {
      const carData = {
        make: carMake,
        model: carModel,
        year: carYear,
        color: carColor,
      }

      const response = await supabase.from('cars').insert(carData)
      if (response.status === 201) {
        window.location.href = `/`
      }
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div id="addcar">
      <h2>Add Car</h2>
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div>
        <label>Year of manufacture:</label>
        <input
          type="text"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="text"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
        />
      </div>

      <button onClick={() => addCar()}>Add Car</button>
    </div>
  )
}
