import { createClient } from '@supabase/supabase-js'
import { Database } from "@/supabase/supabase-types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export default createClient<Database>(supabaseUrl, supabaseAnonKey);
