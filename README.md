# Typescript and esm modules

This repo shows two ways of configuring typescript to work well with importing ESM modules.

## ES modules

If you are want to use typescript and output es modules this is the required setup.

This is the recommended way going forward.

In the `esm` folder you have a package with `"type": "module"` in the `package.json` file.

The `tsconfig.json` file contains the necessary configuration for emitting esm compatible modules. Also `ts-node` configuration to work with esm modules.

## Commonjs

If you are want to use typescript and output commonjs modules this is the required setup.

In the `commonjs` folder you have a package with `"type": "commonjs"` in the `package.json` file.

This is to show that if you in your typescript project compile to commonjs you have to use dynamic imports. This might be a little confusing not to be able to use the `import something from 'some-es-module'` since the syntax between typescript and esm modules are the same. The problem however is that it will output commonjs syntax `const something = require('some-es-module')` And this will fail since `some-es-module` is an ES module.
