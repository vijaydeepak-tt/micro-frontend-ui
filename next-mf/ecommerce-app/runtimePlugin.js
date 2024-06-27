import { loadRemote, init } from '@module-federation/runtime';
// if i have remotes in my federation plugin, i can pass the name of the remote
// loadRemote('cart/exposedModule');
// if i want to load a custom remote not known at build time.
init({
  name: 'ecommerce',
  remotes: [
    {
      name: 'cart',
      entry: 'http://localhost:3001/_next/static/chunks/remoteEntry.js',
    },
  ],
  force: true, // may be needed to sideload remotes after the fact.
});
loadRemote('cart/Products');
