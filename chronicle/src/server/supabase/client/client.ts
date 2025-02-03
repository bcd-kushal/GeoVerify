import dotenv from 'dotenv'
import { createClient } from "@supabase/supabase-js"
dotenv.config()

const SUPA_URL: string = process.env.SUPABASE_URL || ""
const SUPA_SECRET: string = process.env.SUPABASE_SECRET_KEY || ""

export const supa = createClient(SUPA_URL, SUPA_SECRET)
