import Products from '@/components/Products';
// import dynamic from 'next/dynamic';

// const Navbar = dynamic(() => import('ecommerce/Navbar'), {
//   loading: () => <p>Loading...</p>,
//   ssr: true,
// });

// const Footer = dynamic(() => import('ecommerce/Footer'), {
//   loading: () => <p>Loading...</p>,
//   ssr: true,
// });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Products />
      {/* <Footer /> */}
    </>
  );
}
