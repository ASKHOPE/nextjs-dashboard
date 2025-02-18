import Form from '@/app/ui/products/create-form';
import Breadcrumbs from '@/app/ui/products/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Product',
};

export default function Page() {
    // You don't need to fetch existing products here, as you're creating a new product
    return (
        <main>
            {/* Breadcrumbs for navigation */}
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Products', href: '/HCH-Home/admin/products' },
                    { label: 'Create Product', href: '/HCH-Home/admin/products/createproduct', active: true },
                ]}
            />

            {/* Render the form to create a new product */}
            <Form />
        </main>
    );
}
