import { error } from "console";
import mongoose, { connection } from "mongoose";
import { NextResponse } from "next/server";

export async function connect() {
   
        try {

            mongoose.connect(process.env.MONGO_URI!)
            const Connection = mongoose.connection
            connection.on("connected", ()=>{
                console.log("mongodb connected successfuly")
            })

            connection.on("error", ()=>{
                console.log("mongodb connection error" + error)
                process.exit()
            })
            
        } catch (error) {
            console.log("something went wrong")
            console.log(error)
            return NextResponse.json({error:"Connection Failed"})
        }
    
}