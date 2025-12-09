// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tplkvfmzvdzmgrmdazqa.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGt2Zm16dmR6bWdybWRhenFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODk2ODksImV4cCI6MjA4MDI2NTY4OX0.NMIfQp51mXCH7uWThMs5Cn7LVv4ElgUySrrpjmYPQeg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
