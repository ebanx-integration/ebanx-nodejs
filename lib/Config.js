/* Copyright 2015 EBANX */
'use strict';

var Config = function (integrationKey, testMode) {
  this.integrationKey = integrationKey;
  this.testMode = testMode;
  this.usingHttp = true;
};

Config.prototype = {
  getTestMode : function() {
    return this.testMode;    
  },
  getIntegrationKey : function() {
    return this.integrationKey;
  },

  getEndPoint : function() {
    if (this.getTestMode()) {
      return 'https://sandbox.ebanxpay.com/';
    } else {
      return 'https://api.ebanxpay.com/';
    }
  }
};

module.exports = new Config();