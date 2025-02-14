// import Pagination from '@/app/ui/products/pagination';
// import Search from '@/app/ui/search';
// import { CreateProduct } from '@/app/ui/products/buttons';
// import { roboto } from '@/app/ui/fonts';
// import { Suspense } from 'react';
// // import { ProductsTableSkeleton } from '@/app/ui/skeletons';
// // import { fetchProductsPages } from '@/app/lib/data';
// import { Metadata } from 'next';
// import ProductsTable from '@/app/ui/products/table';

// export const metadata: Metadata = {
//   title: 'Products',
// };

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;
//   const totalPages = await fetchProductsPages(query);

//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className={`${roboto.className} text-2xl`}>Products</h1>
//       </div>
//       <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
//         <Search placeholder="Search products..." />
//         <CreateProduct />
//       </div>
//       <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
//         <ProductsTable query={query} currentPage={currentPage} />
//       </Suspense>
//       <div className="mt-5 flex w-full justify-center">
//         <Pagination totalPages={totalPages} />
//       </div>
//     </div>
//   );
// }

"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchFilteredProducts } from '@/app/lib/data';
// import fetchFilteredProducts from '@/app/ui/products/table';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const currentpage = Number(searchParams.get('page')) || 1;
  
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadTotalPages() {
      const pages = await fetchProductsPages(query);
      setTotalPages(pages);
    }
    loadTotalPages();
  }, [query]);

  return (
    <div className="w-full">
      <fetchFilteredProducts query={query} currentpage={currentpage} />
    </div>
  );
}
