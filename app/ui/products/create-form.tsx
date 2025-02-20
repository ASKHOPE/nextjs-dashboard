'use client';
import { useState } from 'react';
import { Button } from '@/app/ui/button';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation after submission
import Link from 'next/link';
// import Link from '../../api/products/route';


export default function Form() {
    const [formData, setFormData] = useState({
        product_name: '',
        image_url: '',
        rating: '',
        age: '',
        artist: '',
        style: '',
        category: '',
        price: '',
        status: 'On Sale', // Default value
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Optionally, navigate the user to the product list page after successful submission
            router.push('HCH-Home/seller/products/createproduct');
            console.error('Added product');

        } else {
            console.error('Failed to create product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Product Name */}
                <div className="mb-4">
                    <label htmlFor="product_name" className="mb-2 block text-sm font-medium">
                        Product Name
                    </label>
                    <div className="relative">
                        <input
                            id="product_name"
                            name="product_name"
                            type="text"
                            value={formData.product_name}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Image URL */}
                <div className="mb-4">
                    <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
                        Image URL
                    </label>
                    <div className="relative">
                        <input
                            id="image_url"
                            name="image_url"
                            type="text"
                            value={formData.image_url}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Rating Slider */}
                <div className="mb-4">
                    <label htmlFor="rating" className="mb-2 block text-sm font-medium">
                        Rating: {formData.rating}/5
                    </label>
                    <div className="relative">
                        <input
                            id="rating"
                            name="rating"
                            type="range"
                            value={formData.rating}
                            onChange={handleChange}
                            min="0"
                            max="5"
                            step="1"
                            className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="mb-2 block text-sm font-medium">
                        Age
                    </label>
                    <div className="relative">
                        <input
                            id="age"
                            name="age"
                            type="number"
                            value={formData.age}
                            onChange={handleChange}
                            min="0"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Artist */}
                <div className="mb-4">
                    <label htmlFor="artist" className="mb-2 block text-sm font-medium">
                        Artist
                    </label>
                    <div className="relative">
                        <input
                            id="artist"
                            name="artist"
                            type="text"
                            value={formData.artist}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Style */}
                <div className="mb-4">
                    <label htmlFor="style" className="mb-2 block text-sm font-medium">
                        Style
                    </label>
                    <div className="relative">
                        <input
                            id="style"
                            name="style"
                            type="text"
                            value={formData.style}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="mb-2 block text-sm font-medium">
                        Category
                    </label>
                    <div className="relative">
                        <input
                            id="category"
                            name="category"
                            type="text"
                            value={formData.category}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Price
                    </label>
                    <div className="relative">
                        <input
                            id="price"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label htmlFor="status" className="mb-2 block text-sm font-medium">
                        Status
                    </label>
                    <div className="relative">
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            // onChange={handleChange}
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        >
                            <option value="On Sale">On Sale</option>
                            <option value="Out of Stock">Out of Stock</option>
                            <option value="Discontinued">Discontinued</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/products"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Product</Button>
            </div>
        </form>
    );
}
