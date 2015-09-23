/* Copyright 2015 EBANX */
'use strict';

var config = require('../lib/Config');

var hash = {hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('HTTP Client test', function() {
  var ebanx = require('../lib/ebanx');
  var eb = ebanx();
  
  it('Should return response', function(done) {
    
    eb.configure({
      integrationKey : "integration_key",
      testMode : true
    });

    eb.settings.usingHttp = true;
    eb.query (hash, function(err, reply) {
      should.exist(reply);
      done();
    })
    
  })

  it('Should return error from API', function(done) {
    eb.query (hash, function(err, reply) {
      var reply = JSON.parse(reply);
      expect(reply.status).to.be.equal("ERROR");
      done();
    })

  })

  it('Should test direct method', function(done) {
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
        payment_type_code : "itau",
        merchant_payment_code : "123141dafefesf",
        currency_code : "BRL",
        amount_total : 423.00        
      }
    };
    
    eb.direct (direct, function(err, reply) {
      should.not.exist(err);
      should.exist(reply);
      done();
    })
  })
});