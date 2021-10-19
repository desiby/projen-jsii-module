const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'desiby',
  authorAddress: 'desiby@hotmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-jsii-module',
  repositoryUrl: 'https://github.com/desiby/projen-jsii-module.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();