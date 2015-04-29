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

var utils = require('../../lib/Config');
var ebanx = require('../../lib/ebanx');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

utils.httpClient = "Mock";

var creditcard = {
  payment_type_code : "visa",
  creditcard : {
    card_number : "4111111111111111",
    card_name : "Jose da Silva",
    card_due_date : "10/2018",
    card_cvv : "123"
  }
};

exports.testToken = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal ("object", typeof(reply));
    test.equal (reply.method,"POST");
    test.equal (reply.uri,"ws/token");
    test.done();
  });
};

exports.testTokenParamsPaymentTypeCode = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal (reply.params.payment_type_code, creditcard.payment_type_code);
    test.done();
  });
};

exports.testTokenParamsCreditCardNumber = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal (reply.params.creditcard.card_number, creditcard.creditcard.card_number);
    test.done();
  });
};

exports.testTokenParamsCreditCardName = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal (reply.params.creditcard.card_name, creditcard.creditcard.card_name);
    test.done();
  });
};

exports.testTokenParamsCreditCardDueDate = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal (reply.params.creditcard.card_due_date, creditcard.creditcard.card_due_date);
    test.done();
  });
};

exports.testTokenParamsCreditCardCvv = function(test){
  eb.token (creditcard, function(err, reply) {
    test.equal (reply.params.creditcard.card_cvv, creditcard.creditcard.card_cvv);
    test.done();
  });
};