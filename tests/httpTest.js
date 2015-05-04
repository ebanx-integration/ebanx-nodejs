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

var config = require('../lib/Config');

var hash = {hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f"};

var should = require('chai').should();
var expect = require('chai').expect;

describe('HTTP Client test', function() {
  var ebanx = require('../lib/ebanx');
  var eb = ebanx();
  
  it('Should return error', function(done) {
    
    eb.configure({
      integrationKey : "integration_key",
      testMode : true
    });

    eb.settings.usingHttp = true;
    eb.query (hash, function(err, reply) {
      should.exist(err);
      should.not.exist(reply); 
    })
    done();
  })

  it('Should return another error', function(done) {
    eb.query (hash, function(err, reply) {
      should.not.exist(reply); 
    })
    done();
  })

  it('Should test direct method', function(done) {
    var direct = {
      name : "carlos test",
      email : "carlos@test.com",
      birth_date : "12/04/1979",
      document : "853.513.468.93",
      address : "Rua e",
      street_number : "1040",
      city : "Curitiba",
      state : "PR",
      zipcode : "82530000",
      country : "br",
      phone_number : "32329913",
      payment_type_code : "itau",
      merchant_payment_code : "123141dafefesf",
      currency_code : "BRL",
      amount_total : 423.00
    }
    eb.direct (direct, function(err, reply) {
      console.log(err);
      should.not.exist(reply); 
    })
    done();
  })
});