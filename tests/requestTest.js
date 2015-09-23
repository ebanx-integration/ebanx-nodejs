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

var request = {
	name : "carlos test",
	email : "carlos@test.com",
	country : "br",
	payment_type_code : "boleto",
	merchant_payment_code : "123141dafefesf",
	currency_code : "BRL",
	amount : 423.00
}

var should = require('chai').should();
var expect = require('chai').expect;

describe('Request Operation With Hash', function() {
  eb.request (request, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/request', function(done) {
      expect(reply.uri).to.be.equal("ws/request");
      done();
    })

    it('Params should have name', function(done) {
      expect(reply).to.have.property("name");
      done();  
    })

    it('Params should have email', function(done) {
      expect(reply).to.have.property("email");
      done();  
    })

    it('Params should have country', function(done) {
      expect(reply).to.have.property("country");
      done();  
    })

    it('Params should have payment_type_code', function(done) {
      expect(reply).to.have.property("payment_type_code");
      done();  
    })

    it('Params should have merchant_payment_code', function(done) {
      expect(reply).to.have.property("merchant_payment_code");
      done();  
    })

    it('Params should have currency_code', function(done) {
      expect(reply).to.have.property("currency_code");
      done();  
    })

    it('Params should have amount', function(done) {
      expect(reply).to.have.property("amount");
      done();  
    })
  })
});