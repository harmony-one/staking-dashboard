'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

var dotenvFiles = [`${resolveApp('.env')}.${NODE_ENV}`].filter(Boolean);

console.log('dotenvFiles', dotenvFiles);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      })
    );
  }
});
