import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function CarDetail({ setCarToEdit }) {
    const [car, setCar] = useState([])
    const { carId } = useParams()

    const getCar = async () => {
        try {
            // fetch
            // const response = await fetch(`http://localhost:3333/cars/${carId}`)
            // const data = await response.json()
            // if (response.status === 200) {
            //     setCar(data)
            //     setCarToEdit(data)
            // }

            // axios
            const response = await axios.get(`http://localhost:3333/cars/${carId}`)
            if (response.status === 200) {
                setCar(response.data)
                setCarToEdit(response.data)
            }
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => { getCar() }, [])

    const deleteCar = async () => {
        try {
            // fetch
            // const response = await fetch(`http://localhost:3333/cars/${carId}`, { method: 'DELETE'})

            // axios
            const response = await axios.delete(`http://localhost:3333/cars/${carId}`)
            if (response.status === 200) window.location.href = '/'
        } catch (error) {
            console.error('Error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Car Details</h2>
            {car && (
                <>
                    <p>Car make: {car.make}</p>
                    <p>Car model: {car.model}</p>
                    <p>Car year: {car.year}</p>
                    <p>Car color: {car.color}</p>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to={`/${car?.id}/edit`}>
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
            )}
        </div>
    )
}

export default CarDetail