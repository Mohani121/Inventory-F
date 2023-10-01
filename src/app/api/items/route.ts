import { connectDB } from "@/app/dbConfig"
import prisma from "../../../../prisma"
import { NextResponse } from "next/server";


export const GET = async (req:Request)=>{
    try {
        await connectDB()
        const users = await prisma.user.findMany();
        return NextResponse.json({users}, {status:200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }finally{
        await prisma.$disconnect()
    }

}