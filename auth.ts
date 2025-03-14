import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcryptjs from 'bcryptjs';

type User = {
    id: string;
    email: string;
    password: string;
    name?: string;
};

async function getUser(email: string): Promise<User | undefined> {
    try {
        const result = await sql<User>`
      SELECT * FROM users WHERE email=${email}
    `;
        return result.rows[0];
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
                const parsed = z.object({
                    email: z.string().email(),
                    password: z.string().min(6)
                }).safeParse(credentials);

                if (parsed.success) {
                    const { email, password } = parsed.data;
                    const user = await getUser(email);
                    

                    if (!user) { 
                        
                        return null;
                    }

                    const passwordsMatch = await bcryptjs.compare(password, user.password);

                    if (passwordsMatch) { 
                        return user;
                    }
                }
                console.log('Invalid credentials');
                return null;

            },
        }),
    ],
});