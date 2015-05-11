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

var should = require('chai').should();
var expect = require('chai').expect;

var refund = {
	hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
    description : "Lorem ipsum dolor sit amet."
};

describe('RefundOrCancel Operation', function() {
  eb.refundOrCancel (refund, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/refundOrCancel', function(done) {
      expect(reply.uri).to.be.equal("ws/refundOrCancel");
      done();
    })

    it('Params should have hash', function(done) {
      expect(reply.params).to.have.property("hash");
      done();  
    })

    it('Params should have description', function(done) {
      expect(reply.params.description).to.be.equal(refund.description);
      done();  
    })
  })
});