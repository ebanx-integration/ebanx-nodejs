/* Copyright 2015 EBANX */
'use strict';

function refundOrCancel(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "POST";
  var uri = "ws/refundOrCancel";

  validator.params = params;
  validator.validatePresence("hash");
  validator.validatePresence("description");
  
  var options = {
    uri : uri,
    method : method,
    params: {
      hash : params.hash,
      description : params.description,
      merchant_refund_code : params.merchant_refund_code,
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

module.exports = refundOrCancel;