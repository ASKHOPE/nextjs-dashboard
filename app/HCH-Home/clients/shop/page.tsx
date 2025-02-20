'use client';
import "@/styles/globals.css"; // No need for a separate CSS module
import { productcard } from '../../../lib/definitions';
import React, { useEffect, useState } from 'react';
import Pagination from '../../../ui/products/pagination';
import Link from 'next/link';

export default function ShopPage() {
    const [products, setProducts] = useState<productcard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`/api/products?page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
                setTotalPages(data.totalPages);
            } catch (error) {
                setError('Error fetching products');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <div class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading products...</p>
    </div>;
    if (error) return <p>{error}</p>;

    return (
        <div className="shop-container">
            <div className="shop-grid">
                {products.map((product) => (
                    <Link key={product.id} href={`/HCH-Home/product/${product.id}`} className="shop-card">
                        <div>
                            <img src={product.image_url} alt={product.product_name} className="shop-image" />
                            <h2 className="shop-title">{product.product_name}</h2>
                            <p className="shop-rating">⭐ {product.rating}</p>
                            <p className="shop-price">${product.price}</p>
                            <p className={`shop-status ${product.status === 'On Sale' ? 'on-sale' : 'default-status'}`}>
                                {product.status}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
}
