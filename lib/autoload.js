/* Copyright 2015 EBANX */
'use strict';

var config = require("./Config");

module.exports = function() {

  function configure(options) {
    config.integrationKey = options.integrationKey;
    config.testMode = options.testMode;
    config.usingHttp = true;
  }

  return {
    configure : configure,
    cancel : require("./resources/Cancel"),
    capture : require("./resources/Capture"),
    direct : require("./resources/Direct"),
    documentBalance : require("./resources/DocumentBalance"),
    exchange : require("./resources/Exchange"),
    print : require("./resources/Print"),
    query : require("./resources/Query"),
    refund : require("./resources/Refund"),
    refundOrCancel : require("./resources/RefundOrCancel"),
    request : require("./resources/Request"),
    token : require("./resources/Token"),
    zipcode : require("./resources/Zipcode"),
    settings : config
  };
};