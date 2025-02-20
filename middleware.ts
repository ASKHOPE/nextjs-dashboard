// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import { authConfig } from './auth.config';

// export async function middleware(request: NextRequest) {
//     const token = await getToken({ req: request, secret: authConfig.secret });
//     const isLoggedIn = !!token;
//     const isOnDashboard = request.nextUrl.pathname.startsWith('/HCH-Home');
//     const isOnShopPage = request.nextUrl.pathname.startsWith('/shop');

//     console.log("Middleware - Auth token:", token); // Debugging
//     console.log("Middleware - Is logged in:", isLoggedIn); // Debugging
//     console.log("Middleware - Current path:", request.nextUrl.pathname); // Debugging

//     // If the user is on the dashboard and not logged in, redirect to login
//     if (isOnDashboard && !isLoggedIn) {
//         console.log("Middleware - Redirecting to login");
//         return NextResponse.redirect(new URL('/HCH-Home/login', request.url));
//     }

//     // If the user is logged in and not on the shop page, redirect to /shop
//     if (isLoggedIn && !isOnShopPage) {
//         console.log("Middleware - Redirecting to /shop");
//         return NextResponse.redirect(new URL('/shop', request.url));
//     }

//     // Allow access to all other pages
//     console.log("Middleware - Allowing access to:", request.nextUrl.pathname);
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };


import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};