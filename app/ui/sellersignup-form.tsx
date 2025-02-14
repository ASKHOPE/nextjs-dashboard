'use client';

import { inter } from '@/app/ui/fonts';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../../app/lib/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SellerSignUpForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/home';
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    return (
        <div className="login-continer">
            <form action={dispatch} className="login-form">
                <h1 className={`${inter.className} mb-3 text-2xl`}>
                    Sign Up : Please fill in to continue signup.
                </h1>
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                    />
                </div>
                <LoginButton />
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
            </form>
            <p className="signup-link">
                Seller use the same login link for accessing their account? <Link href="../HCH-Home/login">Login</Link>
            </p>
        </div>

    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="login-button" aria-disabled={pending} type="submit">
            {pending ? 'Logging in...' : 'Log in'}
        </Button>
    );
}