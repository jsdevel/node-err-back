# err-back [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Async error handling for arguments.

## Why?
Often you wish to validate function args before doing something expensive.  To remain
100% async, you'd do something like this:
````javascript
function myFn(path, cb){
  if(!path)return process.nextTick(cb,bind(null, new Error('path was falsey')));
  spawn(path);
  ...
}
````

`err-back` keeps the line shorter:
````javascript
var errBack = require('err-back');

function myFn(path, cb){
  if(!path)return errBack('path was falsey', cb);
  spawn(path);
  ...
}
````

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/err-back.svg
[npm-url]: https://npmjs.org/package/err-back
[npm-image]: http://img.shields.io/npm/v/err-back.svg

[travis-url]: https://travis-ci.org/jsdevel/node-err-back
[travis-image]: http://img.shields.io/travis/jsdevel/node-err-back.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-err-back
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-err-back/master.svg
