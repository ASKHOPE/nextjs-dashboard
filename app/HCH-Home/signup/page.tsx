import { Suspense } from 'react';
import { Metadata } from 'next';
import React from 'react';
// import Link from 'next/link';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: 'SignUp',
};

import SignUpForm from '@/app/ui/signup-form';

export default function SignUpPage() {
    return (
        <Suspense>
            <SignUpForm />
        </Suspense>
    );
}