import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductsList = dynamic(() => import('cart/Products'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function index() {
  return (
    <main className='flex flex-col bg-white'>
      <Navbar />
      <div className='h-[75vh] py-4'>
        <ProductsList />
      </div>
      <Footer />
    </main>
  );
}
