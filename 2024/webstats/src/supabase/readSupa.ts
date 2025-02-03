'use server'
import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import dotenv from "dotenv"
dotenv.config()

// supabase initialization ------------------------------------------
const SUPABASE_URL = process.env.SUPABASE_URL||"__none__"
const SUPABASE_KEY = process.env.SUPABASE_KEY||"__none__"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


// read from supabase -----------------------------------------------
export async function readSupabase({tableName}:{tableName:string}) {
    const DB_TABLES = ["portfolio-mails","traffic-portfolio","traffic-services","traffic-stats"]
    const LIMIT = 200
    const REQUIRED_TABLE_COLUMNS = ["date","time","country","region","city","org","network","platform","height","width","aspect","is_mobile","cpu_cores","browser","battery","architecture","model"]
    
    revalidatePath('/[site]','page')
    revalidatePath('/[site]','layout')
    
    if(!tableName || !DB_TABLES.includes(tableName))
        return [] 

    const response = async ({tableName,limit}:{tableName:string,limit:number}) => {  
        const { data, error } = await supabase.from(tableName).select(REQUIRED_TABLE_COLUMNS.join()).limit(limit)
        if(error){
            console.log(error)
            return []
        }
        return data
    }

    return await response({tableName:tableName,limit:LIMIT})
            .then(data=>{
                return( data )
            })
            .catch(err=>console.error(err))
}

