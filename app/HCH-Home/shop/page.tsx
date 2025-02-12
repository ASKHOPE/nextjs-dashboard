'use client';
import "@/styles/globals.css";
import {productcard} from '../../lib/definitions';
import React, { useEffect, useState } from 'react';

export default function ShopPage() {
    const [products, setProducts] = useState<productcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError('Error fetching products');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
                    <img src={product.image_url} alt={product.product_name} className="w-full h-40 object-cover rounded" />
                    <h2 className="text-lg font-bold mt-2">{product.product_name}</h2>
                    <p className="text-gray-500">{product.rating}</p>
                    <p className="text-green-600 font-semibold">${product.price}</p>
                    <p className={`text-sm ${product.status === 'On Sale' ? 'text-blue-500' : 'text-gray-500'}`}>{product.status}</p>
                </div>
            ))}
        </div>
    );
}
