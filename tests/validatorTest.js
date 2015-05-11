/* Copyright 2015 EBANX */
'use strict';

var validator = require('../lib/resources/Validator');

var should = require('chai').should();
var expect = require('chai').expect;

describe('Validator module', function() {
  var token = {
    payment_type_code : "visa",
    creditcard : {
      card_number : "4111111111111111",
      card_name : "eita teste",
      card_due_date : "10/2020",
      card_cvv : "123",
      levelThree : {
        thisIsLevelThree : {
          yetAnotherLevel : "test"
        }
      }
    }
  }
  
  it('Should have hash', function(done) {
    validator.params = {hash : "LoremIpsum"};
    expect(validator.validatePresence("hash")).to.be.ok;
    done();  
  })
  
  it('Should have creditcard.card_number', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.card_number")).to.be.ok;
    done();
  })
  
  it('Should have creditcard.levelThree.thisIsLevelThree', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree")).to.be.ok;
    done();
  })

  it('Should have creditcard.levelThree.thisIsLevelThree.yetAnotherLevel', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree.yetAnotherLevel")).to.be.ok;
    done();
  })

  it('Should test integrationKey config error', function(done) {
    var err = new Error('Config value integrationKey not informed');
    var config = {
      integrationKey : "",
      testMode : true
    }    
    expect(function() {
      validator.validateConfig(config);
    }).to.throw('Config value integrationKey not informed');

    done();
  })

  it('Should test testMode config error', function(done) {
    var config = {
      integrationKey : "integration_key",
      testMode : "true"
    }    
    expect(function() {
      validator.validateConfig(config);
    }).to.throw('Config key testMode not boolean value');

    done();
  })

  it('Should test presence error', function(done) {
    var params = {};
    
    validator.params = params;
    expect(function() {
      validator.validatePresence("hash");
    }).to.throw('The parameter hash was not supplied.');

    done();
  })

  it('Should test presenceOr error: absence', function(done) {
    var params = {};
    
    validator.params = params;
    expect(function() {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either the parameter hash or merchant_payment_code must be supplied.');

    done();
  })

  it('Should test presenceOr error: double presence', function(done) {
    var params = {hash : "foo", merchant_payment_code : "bar"};
    
    validator.params = params;
    expect(function() {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either parameter hash or merchant_payment_code must be supplied, but not both.');

    done();
  })
});