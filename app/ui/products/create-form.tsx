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

export default function Form() {

    return (
        <form>
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
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-4">
                    <label htmlFor="rating" className="mb-2 block text-sm font-medium">
                        Rating
                    </label>
                    <div className="relative">
                        <input
                            id="rating"
                            name="rating"
                            type="text"
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <StarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            type="text"
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <PaintBrushIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <PaintBrushIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            step="0.01"
                            defaultValue=""
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Status */}
                <fieldset>
                    <legend className="mb-2 block text-sm font-medium">
                        Status
                    </legend>
                    <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    id="on_sale"
                                    name="status"
                                    type="radio"
                                    value="On Sale"
                                    defaultChecked={false}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="on_sale"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                >
                                    On Sale <ClockIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="Not For Sale"
                                    name="status"
                                    type="radio"
                                    value="Sold"
                                    defaultChecked={false}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="Not For Sale"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Not For Sale <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="sold"
                                    name="status"
                                    type="radio"
                                    value="Sold"
                                    defaultChecked={false}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                />
                                <label
                                    htmlFor="sold"
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                >
                                    Sold <CheckIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
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