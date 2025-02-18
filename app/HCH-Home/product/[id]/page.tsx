'use client';
// app/product/[id]/page.tsx
import { product } from '../../../lib/definitions';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';


export default function ArtworkPage() {
    const [product, setProduct] = useState<product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const params = useParams();
    const router = useRouter();

    // In your ProductPage component
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`/api/products/${params.id}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setError('Product not found');
                    } else {
                        throw new Error('Failed to fetch product');
                    }
                }

                const data = await response.json();
                if ('error' in data) {
                    setError(data.error);
                } else {
                    setProduct(data);
                }
            } catch (error) {
                setError('Error loading product');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [params.id]);

    if (loading) return <div className="loading">Loading artwork details...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!product) return <div className="no-product">Artwork not found</div>;

    return (
        <main className="artwork-page">
            <button onClick={() => router.back()} className="back-button">
                ← Back to Gallery
            </button>

            <article className="product-details">
                <div className="grid">
                    <div className="image-container">
                        <img
                            src={product.image_url}
                            alt={product.product_name}
                            className="product-image"
                        />
                    </div>

                    <div className="product-info">
                        <h1 className="product-name">
                            {product.product_name}
                        </h1>

                        <div className="details-grid">
                            <div>
                                <p className="label">Artist</p>
                                <p className="value">{product.artist}</p>
                            </div>
                            <div>
                                <p className="label">Year</p>
                                <p className="value">{product.age}</p>
                            </div>
                            <div>
                                <p className="label">Style</p>
                                <p className="value">{product.style}</p>
                            </div>
                            <div>
                                <p className="label">Category</p>
                                <p className="value">{product.category}</p>
                            </div>
                        </div>

                        <div className="price-and-status">
                            <span className="price">
                                ${product.price.toFixed(2)}
                            </span>
                            <span className={`status ${product.status}`}>
                                {product.status}
                            </span>
                        </div>

                        <div className="rating">
                            <span className="star">⭐</span>
                            <span className="rating-value">{product.rating}</span>
                        </div>

                        <div className="description">
                            <h2>Description</h2>
                            <p>{product.description}</p>
                        </div>

                        {product.reviews && (
                            <div className="reviews">
                                <h2>Reviews</h2>
                                <p>{product.reviews}</p>
                            </div>
                        )}

                        {product.status !== 'Sold' && (
                            <button className={`purchase-button ${product.status}`}>
                                {product.status === 'On Sale' ? 'Purchase Artwork' : 'Not Available'}
                            </button>
                        )}
                    </div>
                </div>
            </article>
        </main>
    );
}
