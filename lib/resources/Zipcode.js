/* Copyright 2015 EBANX */
'use strict';

function zipcode(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/zipcode";  

  validator.params = params;
  validator.validatePresence("zipcode");

  var options = {
    uri : uri,
    method : method,
    params: {
      zipcode : params.zipcode
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

module.exports = zipcode;