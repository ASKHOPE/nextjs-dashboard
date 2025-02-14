// app/api/products/route.js
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const ITEMS_PER_PAGE = 8; // Number of items per page

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;

    const client = await db.connect();

    try {
        const offset = (page - 1) * ITEMS_PER_PAGE;
        const result = await client.sql`
      SELECT * FROM products
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
        const totalProducts = await client.sql`SELECT COUNT(*) FROM products`;
        const totalPages = Math.ceil(totalProducts.rows[0].count / ITEMS_PER_PAGE);

        return NextResponse.json(
            { products: result.rows, totalPages },
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    } finally {
        client.release();
    }
}