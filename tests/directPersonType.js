/*
  Copyright (c) 2015, EBANX Tecnologia da Informação Ltda.
   All rights reserved.
 
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:
 
  Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
 
  Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
 
  Neither the name of EBANX nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.
 
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
  CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
  OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var utils = require('../lib/Config');
var ebanx = require('../lib/ebanx');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

eb.settings.usingHttp = false;

var direct = {
  name : "Fabricas Branco Ltda.",
  email : "fabricasbranco@example.com",
  birth_date : "12/04/1979",
  document : "01/03/1985",
  address :"Rua E",
  street_number : "1040",
  city : "Maracanaú",
  state : "CE",
  zipcode : "61919-230",
  country : "br",
  person_type: "business",
  responsible: {
    name: "José Silva",
    birth_date: "12/04/1979",
    document: "853.513.468-93"
  },
  phone_number : "8522847035",
  payment_type_code : "boleto",
  merchant_payment_code : "0efa347229e",
  currency_code : "BRL",
  amount_total : "100.00"
};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Direct Operation Person Type', function() {
  eb.direct (direct, function(err, reply) {
    it('Should test person_type="business"', function(done) {
      expect(reply.params.payment.person_type).to.be.equal("business");
      done();   
    })

    it('Should test responsible object for person_type="business"', function(done) {
      expect(reply.params.payment).to.have.property("responsible");
      done();   
    })
  })
});