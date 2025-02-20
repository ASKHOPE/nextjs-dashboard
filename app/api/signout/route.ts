// app/api/signout/route.ts
import { NextResponse } from 'next/server';
import { signOut } from '@/auth';

export async function GET() {
    try {
        await signOut(); // Call the signOut function
        return NextResponse.json({ message: 'Signed out successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to sign out:', error);
        return NextResponse.json({ error: 'Failed to sign out' }, { status: 500 });
    }
}