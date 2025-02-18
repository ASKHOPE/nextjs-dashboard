import Form from '@/app/ui/products/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  // Fetch product by id
  const product = await fetchProductById(params.id);

  // Handle not found product
  if (!product) {
    notFound();
  }

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'Products', href: '/admin/products' },
    { label: 'Edit Product', href: `/admin/products/editproduct/${params.id}`, active: true },
  ];

  return (
    <main className="edit-product-page">
      {/* Render breadcrumbs */}
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {/* Render product edit form */}
      <Form product={product} />
    </main>
  );
}
