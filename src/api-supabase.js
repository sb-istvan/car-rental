import { createClient } from '@supabase/supabase-js'
import { redirect } from 'react-router-dom'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_TOKEN
)

export async function getCars() {
  const { data, error } = await supabase
    .from('cars')
    .select('id, make, model, year')
    .order('id', { ascending: true })
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return data
  }
}

export async function getCarDetails(carId) {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', carId)
  if (error) {
    alert(error.error_description || error.message)
  } else {
    return data[0]
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
