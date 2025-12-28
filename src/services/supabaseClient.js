import { createClient } from '@supabase/supabase-js'

// const supabaseUrl =  vai achar nada aqui não, otario ✨😜
// const supabaseAnonKey = 

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// console.log('ENV', import.meta.env);


export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);