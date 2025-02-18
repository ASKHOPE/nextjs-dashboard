// import { fetchProducts } from '../lib/data';
// import { NextRequest, NextResponse } from 'next/server';


// export async function GET() {
//     try {
//         const products = await fetchProducts();
//         return NextResponse.json(products);
//     } catch (error) {
//         return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
//     }
// }

// app/api/products/route.js
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    const client = await db.connect();

    try {
        const result = await client.sql`SELECT * FROM products`;
        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    } finally {
        client.release();
    }
}