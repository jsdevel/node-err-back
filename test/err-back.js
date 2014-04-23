'use strict';

describe('err-back', function(){
  var sut = require('../lib/err-back');

  it('is a function', function(){
    sut.should.be.type('function');
  });

  it('supplies an Error to cb asynchronously', function(done){
    sut('foo', function(err){
      err.should.be.an.instanceOf(Error);
      err.message.should.equal('foo');
      done();
    });
  });
});
