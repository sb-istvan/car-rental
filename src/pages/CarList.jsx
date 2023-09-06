import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../api-supabase'

export default function CarList() {
  const [cars, setCars] = useState([])

  async function getCars() {
    try {
      const { data } = await supabase.from('cars').select('*')
      setCars(data)
    } catch (error) {
      console.error('Data fetching error:', error)
    }
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <>
      <h2>Car List</h2>
      {cars?.map((car) => {
        return (
          <div key={car?.id}>
            <p>
              #{car?.id}: {car?.make} {car?.model} ({car?.year}){' '}
              <Link to={`/${car?.id}`}>Car details</Link>
            </p>
          </div>
        )
      })}
    </>
  )
}
