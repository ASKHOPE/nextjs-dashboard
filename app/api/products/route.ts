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