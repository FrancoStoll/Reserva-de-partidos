import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            if (isOnDashboard || isOnAdmin) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                if (auth?.user.role === "admin") {
                    return Response.redirect(new URL('/admin', nextUrl))
                }
                return Response.redirect(new URL('/dashboard', nextUrl));
            } 
            return true;
        },
        // Le paso la infromacion del user al json web token
        // El usuario que recibo aca es el que retorno en la function authorize usando prisma
        jwt({ token, user }) {

            if (user) {
                token.data = user;
            }
            return token
        },
        // y luego se la paso a la funcion
        session({ session, token, user }) {
            session.user = token.data as any;
            return session
        },

    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;