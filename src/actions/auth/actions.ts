'use server'
import { signIn } from '@/auth';
import prisma from '@/lib/prisma';
import { AuthError } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation';
import { revalidatePath } from 'next/cache';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function createUser(prevState: string, formData: FormData) {
    try {



        // Hago el arreglo de formData un objecto para poder desestrucutrar lo que necesito
        // y evitar realizar formData.get('.....') en varias lineas
        // const formDataObject = Object.fromEntries(formData)
        // const { email, password, name, phoneNumber } = formDataObject;

        const email = formData.get('email')?.toString()
        const password = formData.get('password')?.toString()
        const name = formData.get('name')?.toString()
        const phoneNumber = formData.get('phoneNumber')?.toString()

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            throw new Error("Este emial ya esta en usp")
        }
        await prisma.user.create({
            data: {
                email: email!, password: password!, name: name!, telefono: phoneNumber!
            }
        })
    } catch (error) {
        console.log(error)
        return "Error al crear la cuenta prueba mas tarde o prueba con otro correo"
    }


    redirect('/auth/login', RedirectType.push)
}