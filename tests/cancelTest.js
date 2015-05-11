/* Copyright 2015 EBANX */
'use strict';

var utils = require('../lib/Config');
var ebanx = require('../lib/ebanx');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

eb.settings.usingHttp = false;

var hash = {hash:"1234"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Cancel Operation', function() {
  eb.cancel (hash, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/cancel', function(done) {
      expect(reply.uri).to.be.equal("ws/cancel");
      done();
    })

    it('Params must be hash', function(done) {
      expect(reply.params).to.have.property("hash");
      done();  
    })
  })
});