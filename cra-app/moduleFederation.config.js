const { dependencies } = require('./package.json');

module.exports = {
  name: 'cra_app',
  filename: 'remoteEntry.js',
  exposes: {
    './Garage': `./src/Components/Garage.jsx`,
  },
  remotes: {
    blogs: 'blogs@http://localhost:3034/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
