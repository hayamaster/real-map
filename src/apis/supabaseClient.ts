import { createClient } from '@supabase/supabase-js'

const realMapUrl = import.meta.env.VITE_REALMAP_URL
const realMapAnonKey = import.meta.env.VITE_REALMAP_ANON_KEY

const supabase = createClient(realMapUrl, realMapAnonKey)

export default supabase
