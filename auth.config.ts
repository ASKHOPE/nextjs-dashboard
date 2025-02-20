import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/HCH-Home/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/HCH-Home');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('HCH-Home/clients/shop', nextUrl));
            }

            return true;
        },
    },
    providers: [],
    session: {  // Add session configuration
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
} satisfies NextAuthConfig;