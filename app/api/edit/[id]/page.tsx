// // This page will be responsible for showing individual product details and editing the product details
export default function Page() {
    return <div></div>;
}


// import Form from '@/app/ui/products/edit-form';
// import Breadcrumbs from '@/app/ui/invioces/breadcrumbs';
// import { fetchProductById, fetchCategories } from '@/app/lib/data';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Edit Product',
// };

// export default async function Page(props: { params: Promise<{ id: string }> }) {
//     const params = await props.params;
//     const id = params.id;
//     const [product, categories] = await Promise.all([
//         fetchProductById(id),
//         fetchCategories(),
//     ]);

//     if (!product) {
//         notFound();
//     }

//     return (
//         <main>
//         <Breadcrumbs
//           breadcrumbs= {
//             [
//             { label: 'Products', href: '/dashboard/products' },
//             {
//                 label: 'Edit Product',
//                 href: `/dashboard/products/${id}/edit`,
//                 active: true,
//             },
//           ]}
//         />
//         <Form product={ product } categories = { categories } />
//             </main>
//     );
// }
