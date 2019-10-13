import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  namespace: 'mik',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: 'global' }
  ]
};
