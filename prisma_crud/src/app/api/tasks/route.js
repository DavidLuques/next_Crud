import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(){

    const taskk= await prisma.task.findMany()
    // console.log(taskk)
    return NextResponse.json(taskk)
}

export async function POST(req){
    try{
        
    const data =await  req.json()
    const {title,description}=data
    const newTask= await prisma.task.create({
        data:{
            title,
            description
        }
    })
    return NextResponse.json(newTask)
    }
    catch(e){
        return NextResponse.json(e.message)
}}