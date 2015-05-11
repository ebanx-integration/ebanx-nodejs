/* Copyright 2015 EBANX */
'use strict';

function request(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "POST";
  var uri = "ws/request";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("amount");
  validator.validatePresence("merchant_payment_code");
  validator.validatePresence("name");
  validator.validatePresence("email");
  validator.validatePresence("payment_type_code");

  var options = {
    uri : uri,
    method : method,
    params : {
      name : params.name,
      email : params.email,
      currency_code : params.currency_code,
      amount : params.amount,
      merchant_payment_code : params.merchant_payment_code,	
      order_number : params.order_number,	
      payment_type_code : params.payment_type_code,	
      bypass_boleto_screen : params.bypass_boleto_screen,
      person_type : params.person_type,
      birth_date : params.birth_date,
      zipcode : params.zipcode,
      address : params.address,	
      street_number : params.street_number,	
      city : params.city,
      state : params.state,	
      country : params.country,	
      phone_number : params.phone_number,
      due_date : params.due_date
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

module.exports = request;