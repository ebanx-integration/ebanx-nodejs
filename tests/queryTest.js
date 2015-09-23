/* Copyright 2015 EBANX */
'use strict';

var utils = require('../lib/Config');
var ebanx = require('../lib/ebanx');
var test = require('assert');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

eb.settings.usingHttp = false;

var hash = {hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f"};

var merchant_payment_code = {merchant_payment_code : "1428955597"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Query Operation With Hash', function() {
  eb.query ({hash : hash}, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be GET', function(done) {
      expect(reply.method).to.be.equal("GET");
      done();
    })

    it('URI should point to ws/query', function(done) {
      expect(reply.uri).to.be.equal("ws/query");
      done();
    })

    it('Params must be hash', function(done) {
      expect(reply).to.have.property("hash");
      done();  
    })
  })
});

describe('Query Operation With Hash', function() {
  eb.query ({merchant_payment_code : merchant_payment_code}, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be GET', function(done) {
      expect(reply.method).to.be.equal("GET");
      done();
    })

    it('URI should point to ws/query', function(done) {
      expect(reply.uri).to.be.equal("ws/query");
      done();
    })

    it('Params must be merchant_payment_code', function(done) {
      expect(reply).to.have.property("merchant_payment_code");
      done();  
    })
  })
});