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