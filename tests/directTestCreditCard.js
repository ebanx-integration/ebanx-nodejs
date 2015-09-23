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
  payment : {
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
    payment_type_code : "visa",
    merchant_payment_code : "123141dafefesf",
    currency_code : "BRL",
    amount_total : 423.00,
    creditcard : {
      card_number : "4111111111111111",
      card_name : "Jose da Silva",
      card_due_date : "10/2018",
      card_cvv : "123"
    }    
  }
};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Direct Operation Credit Card', function() {
  eb.direct (direct, function(err, reply) {
    it('Should test creditcard object', function(done) {
      expect(reply.payment).to.have.property("creditcard");
      done();   
    })
  })
});