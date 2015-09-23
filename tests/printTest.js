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

var hash = {hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Print Operation', function() {
  eb.print (hash, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be GET', function(done) {
      expect(reply.method).to.be.equal("GET");
      done();
    })

    it('URI should point to print', function(done) {
      expect(reply.uri).to.be.equal("print");
      done();
    })

    it('Param must have hash', function(done) {
      expect(reply).to.have.property("hash");
      done();  
    })
  })
});