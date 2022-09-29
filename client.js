import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://fndnkiseothtahipisqa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZG5raXNlb3RodGFoaXBpc3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0NzUzNjQsImV4cCI6MTk3MDA1MTM2NH0.fPXLzC4rl-dz1HtAYqBmDkDsg-3h_ad-XDHxV7rSq1o',
)

export { supabase }