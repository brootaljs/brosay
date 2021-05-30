#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const brosay = require('.');

require('taketalk')({
  init(input, options) {
    console.log(brosay(input, options));
  },
  help() {
    console.log(`
  ${pkg.description}

  Usage
    $ brosay <string>
    $ brosay <string> --maxLength 8
    $ echo <string> | brosay

  Example
    $ brosay 'Sindre is a horse'
    ${brosay('Sindre is a horse')}`);
  },
  version: pkg.version
});
