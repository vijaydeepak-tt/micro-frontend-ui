import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogDetail from 'blogs/BlogDetail';
import Blog from 'blogs/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
  {
    path: '/blogs',
    element: <Blog />,
  },
  {
    path: '/blogdetail/:blogid',
    element: <BlogDetail />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
