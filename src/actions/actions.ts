'use server'

import { auth } from "@/auth";
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"



export const createOrder = async (date: Date, selectedTime: string) => {


    const session = await auth();

    const clientEmail = session?.user?.email!

    if (!selectedTime) {
        return {
            ok: false,
            message: "Select a hour"
        }
    }


    await prisma.order.create({
        data: {
            date: date,
            hour: selectedTime,
            clienteEmail: clientEmail
        }
    })
    revalidatePath('/dashboard')
    return {
        ok: true,
        message: 'Reserve created succesfully'
    }
}



export const searchOrder = async () => {


    const session = await auth();


    const reserves = await prisma.order.findMany({
        where: {
            clienteEmail: session?.user?.email
        }, 

    })
  
    return {
        ok: true,
        reserves: reserves

    }
}