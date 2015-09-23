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
  
  var config = {
    uri : uri,
    method : method
  };

  client.send(config, params, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = refundOrCancel;