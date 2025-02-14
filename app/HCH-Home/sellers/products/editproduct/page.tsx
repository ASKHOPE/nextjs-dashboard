import Form from '@/app/ui/products/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/admin/products' },
          {
            label: 'Edit Product',
            href: `/admin/products/editproduct/${id}`,
            active: true,
          },
        ]}
      />
      <Form product={product} />
    </main>
  );
}