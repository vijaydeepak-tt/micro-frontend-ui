import { createSignal, createEffect, Show } from 'solid-js';

import { jwt, addToCart } from 'cart_app/cartApi';

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((token) => {
      setLoggedIn(!!token);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        className="bg-red-900 text-white py-2 px-5 rounded-mg text-center"
      >
        Add to Cart
      </button>
    </Show>
  );
};
