import { Suspense } from 'react';
import { Metadata } from 'next';
import React from 'react';
// import Link from 'next/link';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: 'Login',
};

import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
    return (
        <Suspense>
            <LoginForm />
        </Suspense>
    );
}