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

var creditcard = {
  payment_type_code : "visa",
  creditcard : {
    card_number : "4111111111111111",
    card_name : "Jose da Silva",
    card_due_date : "10/2018",
    card_cvv : "123"
  }
};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Token Operation', function() {
  eb.token (creditcard, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/token', function(done) {
      expect(reply.uri).to.be.equal("ws/token");
      done();
    })

    it('Params should have payment_type_code', function(done) {
      expect(reply).to.have.property("payment_type_code");
      done();  
    })

    it('Params should have creditcard.card_number', function(done) {
      expect(reply.creditcard).to.have.property("card_number");
      done();  
    })

    it('Params should have creditcard.card_name', function(done) {
      expect(reply.creditcard).to.have.property("card_name");
      done();  
    })

    it('Params should have creditcard.card_due_date', function(done) {
      expect(reply.creditcard).to.have.property("card_due_date");
      done();  
    })

    it('Params should have creditcard.card_cvv', function(done) {
      expect(reply.creditcard).to.have.property("card_cvv");
      done();  
    })
  })
});