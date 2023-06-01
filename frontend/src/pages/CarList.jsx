import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function CarList() {
    const [cars, setCars] = useState([])

    const getPets = async () => {
        try {
            // with fetch
            // const response = await fetch('http://localhost:3333/cars')
            // const data = await response.json()
            // if (response.status === 200) setPets(data)

            // with axios
            const response = await axios.get('http://localhost:3333/cars')
            if (response.status === 200) setCars(response.data)
        } catch (err) {
            console.error('Error', err)
        }
    }

    useEffect(() => { getPets() }, [])

    return (
        <>
            <h2>Car List</h2>
            {cars?.map(car => {
                return (
                    <div key={car?.id}>
                        <p>#{car?.id}: {car?.make} {car?.model} ({car?.year}){' '} 
                        <Link to={`/${car?.id}`}>Car details</Link>
                        </p>
                    </div>
                )
            })}
        </>
    )
}

export default CarList