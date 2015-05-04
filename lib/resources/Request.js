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