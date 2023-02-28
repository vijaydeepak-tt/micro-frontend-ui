import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';

const router = createBrowserRouter([
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

export default function Root() {
  return <Blog />;
}

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
