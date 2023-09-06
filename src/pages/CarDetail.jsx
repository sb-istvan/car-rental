import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../api-supabase'

function CarDetail({ setCarToEdit }) {
  const [car, setCar] = useState([])
  const { carId } = useParams()

  async function getCar() {
    try {
      const { data } = await supabase.from('cars').select('*').eq('id', carId)
      setCar(data[0])
      setCarToEdit(data[0])
    } catch (error) {
      console.error('Data fetching error: ', error)
    }
  }

  useEffect(() => {
    getCar()
  }, [])

  const deleteCar = async () => {
    try {
      // fetch
      // const response = await fetch(`http://localhost:3333/cars/${carId}`, { method: 'DELETE'})

      // axios
      const response = await supabase.from('cars').delete().eq('id', carId)
      if (response.status === 204) window.location.href = '/'
    } catch (error) {
      console.error('Error', error)
    }
  }

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
      {car && (
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
            <Link to={`/${car?.id}/edit`}>
              <button style={{ marginRight: 10 }}>Edit car</button>
            </Link>
            <button style={{ marginLeft: 10 }} onClick={() => deleteCar()}>
              Delete car
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CarDetail
