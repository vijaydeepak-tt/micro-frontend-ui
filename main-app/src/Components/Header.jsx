import React from 'react';
import { Link } from 'react-router-dom';

import { useLoggedIn } from 'cart_app/cartApi';

import MiniCart from 'cart_app/MiniCart';
import Login from 'cart_app/Login';

export default function Header() {
  const loggedIn = useLoggedIn();
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Fidget Spinner World</Link>
          {loggedIn && (
            <>
              <div className="mx-5">|</div>
              <Link to="/cart">Cart</Link>
            </>
          )}
        </div>
        <div className="flex-end relative">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
