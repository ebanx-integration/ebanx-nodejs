/* Copyright 2015 EBANX */
'use strict';

var ebanx = require('../lib/ebanx');
var utils = require('../lib/Config');

var eb = ebanx();
eb.configure({
	integrationKey : "integration_key",
	testMode : true
});

exports.testIntegrationKey = function(test) {
    test.equal( eb.settings.integrationKey, utils.getIntegrationKey());
    test.done();
};

exports.testTestMode = function(test) {
	test.equal( eb.settings.testMode, utils.getTestMode());
	test.done();
};

exports.testEndPoint = function(test) {
	test.equal( utils.getEndPoint(), "https://sandbox.ebanx.com/");
	eb.configure({
	  testMode : false
    });
	test.equal( utils.getEndPoint(), "https://api.ebanx.com/");
	test.done();
};