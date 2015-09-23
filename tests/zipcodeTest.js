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

var zipcode = {zipcode : "82530000"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Zipcode Operation', function() {
  eb.zipcode (zipcode, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be GET', function(done) {
      expect(reply.method).to.be.equal("GET");
      done();
    })

    it('URI should point to ws/zipcode', function(done) {
      expect(reply.uri).to.be.equal("ws/zipcode");
      done();
    })

    it('Params must be zipcode', function(done) {
      expect(reply).to.have.property("zipcode");
      done();  
    })
  })
});