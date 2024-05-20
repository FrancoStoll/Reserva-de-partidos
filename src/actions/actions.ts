'use server'

import prisma from "@/lib/prisma"



export const createOrder = async (date: Date, selectedTime: string) => {


    if (!selectedTime) {
        return {
            ok: false,
            message: "Select a hour"
        }
    }


    await prisma.order.create({
        data: {
            date: date,
            hour: selectedTime
        }
    })

    return {
        ok: true,
        message: 'Reserve created succesfully'
    }
}