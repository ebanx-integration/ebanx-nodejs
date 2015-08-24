/* Copyright 2015 EBANX */
'use strict';

function cancel(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/documentbalance";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("document");

  var options = {
    uri : uri,
    method : method,
    params : {
      currency_code : params.currency_code,
      document : params.document
    }
  };

  client.send(options, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = cancel;