import Link from 'next/link';
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export function CreateProduct() {
  return (
    <Button asChild>
      <Link
        href="/admin/products/createproduct"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Create Product</span>
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    </Button>
  );
}

export function EditProductButton({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/products/editproduct/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}