'use strict';

module.exports = errBack;

function errBack(msg, cb){
  process.nextTick(cb.bind(null, new Error(msg)));
}
