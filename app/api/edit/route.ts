//This is for the home page where it will show all the products in the home page 

// import { NextResponse } from 'next/server';
import { fetchProducts } from '../../lib/data';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
    try {
        const products = await fetchProducts();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

// export async function GET(req: NextRequest, context: { params: { id: string } }) {
//     try {
//         const { id } = context.params; // ✅ Get product ID

//         if (!id) {
//             return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
//         }

//         const product = await fetchProducts(id); // ✅ Fetch product by ID

//         if (!product) {
//             return NextResponse.json({ error: 'Product not found' }, { status: 404 });
//         }

//         return NextResponse.json(product, { status: 200 }); // ✅ Return product
//     } catch (error) {
//         console.error('Database Fetch Error:', error);
//         return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
//     }
// }










////pasted from [id] it was there before 


// // @ts-ignore
// export async function PUT(req: NextRequest, context: { params: { id: string } }) {
//     try {
//         const id = context.params?.id; // ✅ Ensure params are awaited
//         if (!id) return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });

//         const data = await req.json(); // ✅ Get update data from request body
//         if (Object.keys(data).length === 0) {
//             return NextResponse.json({ error: 'No fields provided for update' }, { status: 400 });
//         }

//         const updatedProduct = await updateProduct(id, data); // ✅ Call update function
//         return NextResponse.json(updatedProduct, { status: 200 });
//     } catch (error) {
//         console.error('Update Error:', error);
//         return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
//     }
// }



// // @ts-ignore
// export async function GET(req: NextRequest, context: { params: { id: string } }) {
//     try {
//         const { id } = context.params; // ✅ Get product ID from URL

//         if (!id) {
//             return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
//         }

//         // ✅ Fetch product by ID from the database
//         const result = await sql`SELECT * FROM product WHERE id = ${id};`;

//         if (result.rows.length === 0) {
//             return NextResponse.json({ error: 'Product not found' }, { status: 404 });
//         }

//         return NextResponse.json(result.rows[0], { status: 200 }); // ✅ Return first item
//     } catch (error) {
//         console.error('Database Fetch Error:', error);
//         return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
//     }
// }