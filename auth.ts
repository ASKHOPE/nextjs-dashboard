import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
// console.log('Before bcrypt import');
const bcryptjs = require('bcryptjs');
// console.log('After bcrypt import');

// import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                    console.log('Parsed Credentials:', parsedCredentials); //debugging

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    console.log('Fetched User:', user); //debugging

                    if (!user) { 
                        console.log('User not found');//debugging
                        return null;
                    }

                    const passwordsMatch = await bcryptjs.compare(password, user.password);
                    console.log('Passwords Match:', passwordsMatch);//debugging

                    if (passwordsMatch) { 
                        console.log('User authorized:', user);
                        return user;
                    }
                }
                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});