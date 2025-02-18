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

// import { db } from '@vercel/postgres'; // Correct import for database
// import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const product = await req.json(); // Get the product data from the request body

        // Insert the new product into the database
        const result = await db.sql`
            INSERT INTO product (product_name, image_url, rating, age, artist, style, category, price, status)
            VALUES (${product.product_name}, ${product.image_url}, ${product.rating}, ${product.age}, ${product.artist}, ${product.style}, ${product.category}, ${product.price}, ${product.status})
            RETURNING *;  // Return the inserted product to confirm
        `;

        return NextResponse.json(result[0], { status: 201 }); // Return the created product
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
