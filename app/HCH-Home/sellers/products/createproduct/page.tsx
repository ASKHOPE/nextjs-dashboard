import Form from '@/app/ui/products/create-form';
import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import { fetchProducts } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Product',
};
export default async function Page() {
    const products = await fetchProducts();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Products', href: '/HCH-Home/admin/products' },
                    {
                        label: 'Create Product',
                        href: '/HCH-Home/admin/products/createproduct',
                        active: true,
                    },
                ]}
            />
            <Form products={products} />
        </main>
    );
}