import { connect } from "@/app/dbConfig/index.ts";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


connect()

export async function POST (request:NextRequest){
    try {

        const reqBody = await request.json()
        const {username, email, password} = reqBody
        const user =  await User.findOne({email})
       if(user){
        return NextResponse.json({error: "user already exists"}, {status:400})
       }

       //hash password
       const salt = await bcryptjs.genSalt(10)
       const hashedPassword = await bcryptjs.hash
       (password, salt)

       const newUser = new User({
        username,
        email,
        password: hashedPassword})

      const savedUser = await newUser.save()
      console.log(savedUser)

      return NextResponse.json({
        message:"user saved successfuly",
        success:true,
        savedUser
      })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message }, {status:500})
    }
}