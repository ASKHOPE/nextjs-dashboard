'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { signIn } from '../../auth';
import { AuthError } from 'next-auth';
// import { signIn } from 'next-auth/react';
import bcryptjs from 'bcryptjs';
import { sql } from '@vercel/postgres';


// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer.',

    }),
    amount: z.coerce.number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status.',
    }),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
    const validatedFields = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;

    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
    //VALIDATE FORM FIELDS USING ZOD
    const validatedFields = UpdateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    //prepare data for update and insertion.
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;

    try {
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
export async function deleteInvoice(id: string) {
    throw new Error('Failed to Delete Invoice');
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
}

// import { signIn } from 'next-auth/react';


//commented to test
// export async function authenticate(prevState: any, formData: { get: (arg0: string) => any; }) {
//     try {
//         const result = await signIn('credentials', {
//             redirect: false,
//             email: formData.get('email'),
//             password: formData.get('password'),
//         });

//         if (result?.error) {
//             return { success: false, error: result.error };
//         }

//         // Fetch the user's privilege (role) after successful login
//         const user = await getUserByEmail(formData.get('email'));
//         if (!user) {
//             return { success: false, error: 'User not found.' };
//         }

//         // Return the user's privilege for redirection
//         return { success: true, privilege: user.privilege };
//     } catch (error) {
//         console.error('Authentication error:', error);
//         return { success: false, error: 'An error occurred during authentication.' };
//     }
// }

async function getUserByEmail(email: string | number | boolean | null | undefined) {
    try {
        const result = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;
        return result.rows[0]; // Return the first matching user
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw error;
    }
}


// 'use server';

// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}