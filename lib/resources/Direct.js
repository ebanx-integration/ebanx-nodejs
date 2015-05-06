/**
 * Copyright (c) 2015, EBANX Tecnologia da Informação Ltda.
 *  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of EBANX nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function direct(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "POST";
  var uri = "ws/direct";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("amount_total");
  validator.validatePresence("merchant_payment_code");
  validator.validatePresence("name");
  validator.validatePresence("email");
  validator.validatePresence("payment_type_code");

  var options = {
    uri : uri,
    method : method,
    params : {
      operation: "request",
      mode : "full",
      payment : {
        merchant_payment_code : params.merchant_payment_code,
        amount_total : params.amount_total,
        currency_code : params.currency_code,
        name : params.name,
        email : params.email,
        birth_date : params.birth_date,
        document : params.document,
        address : params.address,
        street_number : params.street_number,
        street_complement : params.street_complement,
        city : params.city,
        state : params.state,
        zipcode : params.zipcode,
        country : params.country,
        phone_number : params.phone_number,
        payment_type_code : params.payment_type_code
      }
    },
    direct : true
  };

  if(params.hasOwnProperty('creditcard')) {
    if(params.creditcard.hasOwnProperty('token')) {
      options.params.payment.creditcard = {
        token : params.creditcard.token
      }
    } else {
      options.params.payment.creditcard = {
        card_number : params.creditcard.card_number,
        card_name : params.creditcard.card_name,
        card_due_date : params.creditcard.card_due_date,
        card_cvv : params.creditcard.card_cvv
      }
    }
  }

  if(params.hasOwnProperty('directdebit')) {
    options.params.payment.directdebit = {
      bank_code : params.directdebit.bank_code,
      bank_agency : params.directdebit.bank_agency,
      bank_account : params.directdebit.bank_account
    }
  }

  if(params.hasOwnProperty('person_type') && params.person_type == 'business') {
    options.params.payment.person_type = 'business';
    options.params.payment.responsible = {
      name : params.responsible.name,
      birth_date : params.responsible.birth_date,
      document : params.responsible.document
    }
  }

  client.send(options, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = direct;