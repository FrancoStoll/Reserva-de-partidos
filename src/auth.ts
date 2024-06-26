import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import prisma from './lib/prisma';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            // Config next global interface
            async authorize(credentials) {
                const parsedCredentials = z.object({
                    email: z.string().email(),
                    password: z.string().min(6)
                }).safeParse(credentials);


                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await prisma.user.findFirst({ where: { email: email } })
                    if (!user) return null
                    // TODO: ADD PASSWORD VALIDATION

                    return user
                }
                console.log('Invalid credentials')
                return null
            }
        })
    ],
});