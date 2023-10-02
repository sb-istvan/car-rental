import { redirect } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

const supabaseFromLocalhost = true

let supabaseUrl = null
let supabaseToken = null
if (supabaseFromLocalhost) {
  supabaseUrl = import.meta.env.VITE_SUPABASE_LOCAL_URL
  supabaseToken = import.meta.env.VITE_SUPABASE_LOCAL_TOKEN
} else {
  supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  supabaseToken = import.meta.env.VITE_SUPABASE_TOKEN
}

export const supabase = createClient(supabaseUrl, supabaseToken)

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
