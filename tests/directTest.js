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

var direct = {
  name : "carlos test",
  email : "carlos@test.com",
  birth_date : "12/04/1979",
  document : "853.513.468.93",
  address : "Rua e",
  street_number : "1040",
  city : "Curitiba",
  state : "PR",
  zipcode : "82530000",
  country : "br",
  phone_number : "32329913",
  payment_type_code : "itau",
  merchant_payment_code : "123141dafefesf",
  currency_code : "BRL",
  amount_total : 423.00
}

var should = require('chai').should();
var expect = require('chai').expect;

describe('Direct Operation Boleto', function() {
  eb.direct (direct, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/direct', function(done) {
      expect(reply.uri).to.be.equal("ws/direct");
      done();
    })

    it('Params should contain "direct"', function(done) {
      expect(reply.direct).to.be.ok;
      done();  
    })

    it('Param "mode" should be "full"', function(done) {
      expect(reply.params.mode).to.be.equal("full");
      done();  
    })

    it('Param "currency_code" should be passed', function(done) {
      expect(reply.params.payment.currency_code).to.be.equal(direct.currency_code);
      done();  
    })

    it('Param "merchant_payment_code" should be passed', function(done) {
      expect(reply.params.payment.merchant_payment_code).to.be.equal(direct.merchant_payment_code);
      done();  
    })

    it('Param "phone_number" should be passed', function(done) {
      expect(reply.params.payment.phone_number).to.be.equal(direct.phone_number);
      done();  
    })

    it('Param "country" should be passed', function(done) {
      expect(reply.params.payment.country).to.be.equal(direct.country);
      done();  
    })

    it('Param "zipcode" should be passed', function(done) {
      expect(reply.params.payment.zipcode).to.be.equal(direct.zipcode);
      done();  
    })

    it('Param "state" should be passed', function(done) {
      expect(reply.params.payment.state).to.be.equal(direct.state);
      done();  
    })

    it('Param "city" should be passed', function(done) {
      expect(reply.params.payment.city).to.be.equal(direct.city);
      done();  
    })

    it('Param "street_number" should be passed', function(done) {
      expect(reply.params.payment.street_number).to.be.equal(direct.street_number);
      done();  
    })

    it('Param "address" should be passed', function(done) {
      expect(reply.params.payment.address).to.be.equal(direct.address);
      done();  
    })

    it('Param "document" should be passed', function(done) {
      expect(reply.params.payment.document).to.be.equal(direct.document);
      done();  
    })

    it('Param "birth_date" should be passed', function(done) {
      expect(reply.params.payment.birth_date).to.be.equal(direct.birth_date);
      done();  
    })

    it('Param "email" should be passed', function(done) {
      expect(reply.params.payment.email).to.be.equal(direct.email);
      done();  
    })

    it('Param "name" should be passed', function(done) {
      expect(reply.params.payment.name).to.be.equal(direct.name);
      done();  
    })

    it('Param "payment_type_code" should be passed', function(done) {
      expect(reply.params.payment.payment_type_code).to.be.equal(direct.payment_type_code);
      done();  
    })

    it('Param "amount_total" should be passed', function(done) {
      expect(reply.params.payment.amount_total).to.be.equal(direct.amount_total);
      done();  
    })
  })
});