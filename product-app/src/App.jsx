import React from 'react';
import ReactDOM from 'react-dom';

import 'remixicon/fonts/remixicon.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.scss';

import Header from 'main_app/Header';
import Footer from 'main_app/Footer';

import ProductContent from './Components/ProductContent';

const Root = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="m-10">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/product/:id',
        element: <ProductContent />,
      },
    ],
  },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('app'));
