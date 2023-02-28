import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import Header from 'main_app/Header';
import Footer from 'main_app/Footer';
import HomeContent from 'main_app/HomeContent';
import ProductContent from 'product_app/ProductContent';
import CartContent from 'cart_app/CartContent';
import Blog from 'blogs/Blog';
import BlogDetail from 'blogs/BlogDetail';
import Garage from 'cra_app/Garage';

const Root = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="m-10">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeContent />,
      },
      {
        path: '/product/:id',
        element: <ProductContent />,
      },
      {
        path: '/cart',
        element: <CartContent />,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
      {
        path: '/blogdetail/:blogid',
        element: <BlogDetail />,
      },
      {
        path: '/garage',
        element: <Garage />,
      },
    ],
  },
]);
