import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const data = await prisma.task.findUnique({
        where: {
            id: Number(res.params.id)
        }
    })
    return NextResponse.json(data)
}
export function PUT(req, { params }) {
    return NextResponse.json("actualizando tareas " + params.id)
}
export async function DELETE(req, { params }) {
    try {

        const data = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        console.log('task removed')
        return NextResponse.json(data)

    } catch (error) {
       return NextResponse.json(error.message)
    }
}
