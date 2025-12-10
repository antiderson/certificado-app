import { createClient } from '@supabase/supabase-js'

// const supabaseUrl =  vai achar nada aqui não, otario ✨😜
// const supabaseAnonKey = 

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || supabaseUrl,
    import.meta.env.VITE_SUPABASE_ANON_KEY || supabaseAnonKey
)
