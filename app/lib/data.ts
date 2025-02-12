import postgres from 'postgres';
import { NextRequest, NextResponse } from 'next/server';
import {
  product,productcard,User
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL as string, {
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

//Gets product details for the shop page.
export async function fetchProducts(): Promise<productcard[]> {
  try {
    const result = await sql<productcard[]>`
      SELECT 
        id, 
        product_name, 
        image_url, 
        rating, 
        age, 
        artist, 
        style, 
        category, 
        price, 
        status 
      FROM product;
    `;

    console.log('Fetched Products:', result); // Debugging output for testing purposes only
    return Array.isArray(result) ? result : []; // Ensure it's an array
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product data.');
  }
}


// // Update product details as per id
// export async function updateProduct(id: string, updatedData: Partial<product>) {
//   try {
//     const keys = Object.keys(updatedData);
//     if (keys.length === 0) throw new Error('No data provided for update');

//     const setQuery = keys.map((key, index) => `${key} = $${index + 2}`).join(', ');

//     await sql`
//       UPDATE product
//       SET ${sql.unsafe(setQuery)}
//       WHERE id = ${id}
//     `;

//     return { success: true, message: 'Product updated successfully' };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to update product.');
//   }
// }

export async function updateProduct(id: string, updates: { [key: string]: any }) {
  try {
    const keys = Object.keys(updates);
    const values = Object.values(updates);

    if (keys.length === 0) {
      throw new Error('No fields to update.');
    }

    // ✅ Build dynamic update query
    const setQuery = keys.map((key, index) => `${key} = $${index + 2}`).join(', ');

    // ✅ Use correct binding for Postgres query
    const updatedProduct = await sql`
      UPDATE product
      SET ${sql.unsafe(setQuery)}
      WHERE id = ${id}
      RETURNING *;
    `;

    // ✅ Since @vercel/postgres returns an array directly
    return updatedProduct[0]; // Return first item
  } catch (error) {
    console.error('Database Update Error:', error);
    throw new Error('Failed to update product.');
  }
}







//Create Product 
export async function createProduct(newProduct: product) {
  try {
    await sql`
      INSERT INTO product ${sql(newProduct)}
    `;
    return { success: true, message: 'Product added successfully' };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add product.');
  }
}


export async function GET() {
  try {
    const data = await fetchProducts();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "error.message" }, { status: 500 });
  }
}


// export async function PUT() {
//   try {
//     const data = await updateProduct();
//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error: "error.message" }, { status: 500 });
//   }
// }