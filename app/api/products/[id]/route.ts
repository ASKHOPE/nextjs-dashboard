import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';



export async function GET(
    request: Request,
    { params }: { params: { id: string } }
    
) {
    try {
        const productId = await params;

        const client = await db.connect();

        const result = await client.sql`
            SELECT * FROM products
            WHERE id = ${productId.id}
        `;

        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0], { status: 200 });
    } catch (error) {
        let retries = 3;
        retries -= 1;   
        console.error('Error connecting to DB, retrying...', error);
        if (retries === 0) {
            return NextResponse.json(
                { error: 'Database connection failed' },
                { status: 500 }
            );
        }
}}
