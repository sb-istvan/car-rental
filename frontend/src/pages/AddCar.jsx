import React, { useState } from 'react'
import axios from 'axios'

function AddCar() {
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

      // fetch
      // const response = await fetch('http://localhost:3333/cars', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(carData)
      // })
      // if (response.status === 200) {
      //     const data = await response.json()
      //     window.location.href = `/${data.id}`
      // }

      // axios
      const response = await axios.post(
        'http://localhost:3333/cars/',
        carData,
        { headers: { 'Content-Type': 'application/json' } }
      )
      if (response.status === 200) {
        window.location.href = `/${response.data.id}`
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

export default AddCar
