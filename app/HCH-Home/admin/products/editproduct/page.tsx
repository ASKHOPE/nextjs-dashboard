"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
    PhotoIcon,
    StarIcon,
    CalendarIcon,
    PaintBrushIcon,
    TagIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function EditProduct() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/products/${id}`) // Replace with your actual API endpoint
                .then((res) => res.json())
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedProduct = Object.fromEntries(formData.entries());

        await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct),
        });

        router.push('/dashboard/products');
    };

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this product?')) {
            await fetch(`/api/products/${id}`, { method: 'DELETE' });
            router.push('/dashboard/products');
        }
    };

    if (!product) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="product_name" className="mb-2 block text-sm font-medium">Product Name</label>
                    <input id="product_name" name="product_name" type="text" defaultValue={product.product_name} className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                    <UserCircleIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="image_url" className="mb-2 block text-sm font-medium">Image URL</label>
                    <input id="image_url" name="image_url" type="text" defaultValue={product.image_url} className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
                    <PhotoIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                </div>

                {/* Add the rest of the fields here, following the same structure */}

            </div>
            <div className="mt-6 flex justify-between">
                <Button type="button" className="bg-red-500 text-white" onClick={handleDelete}>Delete</Button>
                <div className="flex gap-4">
                    <Link href="/dashboard/products" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 hover:bg-gray-200">Cancel</Link>
                    <Button type="submit">Update Product</Button>
                </div>
            </div>
        </form>
    );
}