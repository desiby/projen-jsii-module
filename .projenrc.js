const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'desiby',
  authorAddress: 'desiby@hotmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-jsii-module',
  repositoryUrl: 'https://github.com/desiby/projen-jsii-module.git',

  deps: ['projen'],
  peerDeps: ['projen'],
  // description:
  devDeps: [
    'fs-extra',
    '@types/fs-extra@^8',
    'projen'
  ],
  packageName: '@desiby/projen-github-demo',
  dependabot: false, // Disabling because it is a demo project
  mergify: false, // Disabling because it is a demo project

  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
});
project.synth();