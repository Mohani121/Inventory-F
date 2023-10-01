import exp from "constants";
import { NextResponse } from "next/server";
import prisma from "../../../prisma";


// export async function connect() {
   
//         try {

//             mongoose.connect(process.env.MONGO_URI!)
//             const Connection = mongoose.connection
//             connection.on("connected", ()=>{
//                 console.log("mongodb connected successfuly")
//             })

//             connection.on("error", ()=>{
//                 console.log("mongodb connection error" + error)
//                 process.exit()
//             })
            
//         } catch (error) {
//             console.log("something went wrong")
//             console.log(error)
//             return NextResponse.json({error:"Connection Failed"})
//         }
    
// }

export const connectDB = async () => {
    try {
        await prisma.$connect()
    } catch (error:any) {
        console.log("unable to connect to the database")
        return NextResponse.json({error:error.message}, {status:500})
        
        
    }
}