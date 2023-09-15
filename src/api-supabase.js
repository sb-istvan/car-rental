import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN
)

export async function getCars() {
  try {
    const { data } = await supabase.from('cars').select('*')
    return data
  } catch (error) {
    console.error('Data fetching error:', error)
  }
}

export async function getCarDetails(carId) {
  try {
    const { data } = await supabase.from('cars').select('*').eq('id', carId)
    return data[0]
  } catch (error) {
    console.error('Data fetching error:', error)
  }
}
