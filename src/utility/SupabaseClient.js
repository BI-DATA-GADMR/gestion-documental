import { createClient } from '@supabase/supabase-js';

console.log(process.env.REACT_APPLICATION_SUPABASE_URL)
const supabaseURL = 'https://jzucmlyhvfgoriwpqbhg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dWNtbHlodmZnb3Jpd3BxYmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMDcwMDEsImV4cCI6MjAxMTg4MzAwMX0.JhcyCeeKp69I4anJ8Q-SDf_sAWRWvw6SmjtsfZicV-o';

export const supabase = createClient(supabaseURL, supabaseAnonKey);