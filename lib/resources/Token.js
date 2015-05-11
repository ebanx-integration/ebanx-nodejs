/* Copyright 2015 EBANX */
'use strict';

function token(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "POST";
  var uri = "ws/token";  

  validator.params = params;
  validator.validatePresence("payment_type_code");
  validator.validatePresence("creditcard.card_number");
  validator.validatePresence("creditcard.card_name");
  validator.validatePresence("creditcard.card_due_date");
  validator.validatePresence("creditcard.card_cvv");
 
  var options = {
    uri : uri,
    method : method,
    params: {
      payment_type_code : params.payment_type_code,
      token : params.token,
      creditcard : {
        card_number : params.creditcard.card_number,
        card_name : params.creditcard.card_name,
        card_due_date : params.creditcard.card_due_date,
        card_cvv : params.creditcard.card_cvv
      }
    },
    direct : true
  };

  client.send(options, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = token;