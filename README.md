# TypeScript and ESM Modules

This repository demonstrates two methods for configuring TypeScript to work seamlessly with ECMAScript Modules (ESM).

## ES Modules

To use TypeScript and output ESM modules, this setup is necessary.

This is the recommended approach for the future.

In the `esm` folder, you will find a `package.json` file with `"type": "module"` specified.

The `tsconfig.json` file contains the essential settings for emitting ESM-compatible modules, as well as `ts-node` configurations to work with ESM modules.

## CommonJS

To use TypeScript and output CommonJS modules, this setup is necessary.

In the `commonjs` folder, you will find a `package.json` file with `"type": "commonjs"` specified.

This shows that in your TypeScript project, when compiling to CommonJS, you must use dynamic imports. You might find it confusing that you can't use the `import something from 'some-es-module'` syntax, as it's identical to the ESM modules. However, the problem occurs when TypeScript compiles to CommonJS, resulting in the syntax `const something = require('some-es-module')`. This will fail because `some-es-module` is an ES module.
