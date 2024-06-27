import { loadRemote, init } from '@module-federation/runtime';
// if i have remotes in my federation plugin, i can pass the name of the remote
// loadRemote('ecommerce/exposedModule');
// if i want to load a custom remote not known at build time.
init({
  name: 'cart',
  remotes: [
    {
      name: 'ecommerce',
      entry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
    },
  ],
  force: true, // may be needed to sideload remotes after the fact.
});
loadRemote('ecommerce/exposedModule');
