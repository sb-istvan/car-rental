import { createClient } from '@supabase/supabase-js'
import { redirect } from 'react-router-dom'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN
)

export async function getCars() {
  try {
    const { data } = await supabase
      .from('cars')
      .select('id, make, model, year')
      .order('id', { ascending: true })
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

export async function requireAuth(request, session) {
  const pathname = new URL(request.url).pathname
  if (!session) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    )
  }
  return null
}
