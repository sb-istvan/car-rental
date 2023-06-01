import React, { useState } from 'react'
import axios from 'axios'

function EditCar({ carToEdit }) {
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
                color: carColor
            }

            // fetch
            // const response = await fetch(`http://localhost:333/cars/${carToEdit.id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application-json'
            //     },
            //     body: JSON.stringify(carData)
            // })

            // axios
            const response = await axios.put(
                `http://localhost:3333/cars/${carToEdit.id}`,
                carData,
                { headers: { 'Content-Type': 'application/json' }}
                )
                if (response.status === 200) window.location.href = `/${carToEdit.id}`
            } catch (error) {
                console.error('Error', error)
            }
    }
            
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Edit Car Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Car Make</label>
                <input type='text' value={carMake} onChange={e => setCarMake(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Car Model</label>
                <input type='text' value={carModel} onChange={e => setCarModel(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Car Year</label>
                <input type='text' value={carYear} onChange={e => setCarYear(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Car Color</label>
                <input type='text' value={carColor} onChange={e => setCarColor(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30}}
                onClick={() => editCar()}
            >
                Edit Car
            </button>
        </div>
    )
}

export default EditCar