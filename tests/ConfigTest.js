/* Copyright 2015 EBANX */
'use strict';

var ebanx = require('../lib/ebanx');
var utils = require('../lib/Config');
var eb = ebanx();

eb.configure({
	integrationKey : "integration_key",
	testMode : true
});

var should = require('chai').should();
var expect = require('chai').expect;

describe('Configuration', function() {
  it('Integration Key should be setted', function(done) {
    expect(eb.settings.integrationKey).to.be.equal(utils.getIntegrationKey());
    done();  	
  })

  it('Test Mode Should be Setted', function(done) {
    expect(eb.settings.testMode).to.be.equal(utils.getTestMode());
    done();   
  })

  it('EndPoint return for testMode false and true', function(done) {
    expect(utils.getEndPoint()).to.be.equal("https://sandbox.ebanx.com/");
    eb.configure({
      testMode : false
    })
    expect(utils.getEndPoint()).to.be.equal("https://api.ebanx.com/");
    done();   
  })
});