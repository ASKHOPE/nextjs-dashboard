import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/HCH-Home/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/HCH-Home');
            const isOnShopPage = nextUrl.pathname.startsWith('/shop');
            const isOnLoginPage = nextUrl.pathname === '/HCH-Home/login';

            // Allow login page for unauthenticated users
            if (isOnLoginPage) return true;

            // Protect dashboard routes
            if (isOnDashboard) return isLoggedIn;

            // Redirect logged-in users from public pages to shop
            if (isLoggedIn && !isOnShopPage) {
                return Response.redirect(new URL('/shop', nextUrl));
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