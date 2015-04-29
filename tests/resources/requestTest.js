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

request = {
	name : "carlos test",
	email : "carlos@test.com",
	country : "br",
	payment_type_code : "boleto",
	merchant_payment_code : "123141dafefesf",
	currency_code : "BRL",
	amount : 423.00
}

exports.testRequest = function(test){
  eb.request (request, function(err, reply) {
    test.equal ("object", typeof(reply));
    test.equal (reply.method,"POST");
    test.equal (reply.uri,"ws/request");
    test.done();
  });
};

exports.testRequestParamName = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.name, request.name);
    test.done();
  });
};

exports.testRequestParamEmail = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.email, request.email);
    test.done();
  });
};

exports.testRequestParamCountry = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.country, request.country);
    test.done();
  });
};

exports.testRequestParamPaymentTypeCode = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.payment_type_code, request.payment_type_code);
    test.done();
  });
};

exports.testRequestParamMerchantPaymentCode = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.merchant_payment_code, request.merchant_payment_code);
    test.done();
  });
};

exports.testRequestParamCurrencyCode = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.currency_code, request.currency_code);
    test.done();
  });
};

exports.testRequestParamAmount = function(test){
  eb.request (request, function(err, reply) {
    test.equal (reply.params.amount, request.amount);
    test.done();
  });
};