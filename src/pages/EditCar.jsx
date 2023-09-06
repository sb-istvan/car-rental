import React, { useState } from 'react'
import { supabase } from '../api-supabase'

export default function EditCar({ carToEdit }) {
  const [carMake, setCarMake] = useState(carToEdit?.make)
  const [carModel, setCarModel] = useState(carToEdit?.model)
  const [carYear, setCarYear] = useState(carToEdit?.year)
  const [carColor, setCarColor] = useState(carToEdit?.color)

  const editCar = async () => {
    try {
      const carData = {
        id: carToEdit.id,
        make: carMake,
        model: carModel,
        year: carYear,
        color: carColor,
      }

      const response = await supabase
        .from('cars')
        .update(carData)
        .eq('id', carToEdit.id)
      if (response.status === 204) window.location.href = `/${carToEdit.id}`
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div id="editcar">
      <h2>Edit Car Details</h2>
      <div>
        <label>Car Make</label>
        <input
          type="text"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
      </div>
      <div>
        <label>Car Model</label>
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div>
        <label>Car Year</label>
        <input
          type="text"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        />
      </div>
      <div>
        <label>Car Color</label>
        <input
          type="text"
          value={carColor}
          onChange={(e) => setCarColor(e.target.value)}
        />
      </div>

      <button onClick={() => editCar()}>Edit Car</button>
    </div>
  )
}
