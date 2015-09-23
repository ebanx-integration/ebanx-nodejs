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

var currency = {currency_code : "USD", document : "853.513.468.93"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('DocumentBalance Operation', function() {
  eb.documentBalance (currency, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be GET', function(done) {
      expect(reply.method).to.be.equal("GET");
      done();
    })

    it('URI should point to ws/documentbalance', function(done) {
      expect(reply.uri).to.be.equal("ws/documentbalance");
      done();
    })

    it('Param must have currency_code', function(done) {
      expect(reply).to.have.property("currency_code");
      done();  
    })

    it('Param must have document', function(done) {
      expect(reply).to.have.property("document");
      done();  
    })
  })
});