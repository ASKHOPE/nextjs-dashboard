import { Suspense } from 'react';
import { Metadata } from 'next';
import React from 'react';
// import Link from 'next/link';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: 'SignUp',
};

import SellerSignUpForm from '@/app/ui/sellersignup-form';

export default function SellerSignUpPage() {
    return (
        <Suspense>
            <SellerSignUpForm />
        </Suspense>
    );
}