/* Copyright 2015 EBANX */
'use strict';

function zipcode(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/zipcode";  

  validator.params = params;
  validator.validatePresence("zipcode");

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

module.exports = zipcode;