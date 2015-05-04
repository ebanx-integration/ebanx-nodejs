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

var validator = require('../lib/resources/Validator');

var should = require('chai').should();
var expect = require('chai').expect;

describe('Validator module', function() {
  var token = {
    payment_type_code : "visa",
    creditcard : {
      card_number : "4111111111111111",
      card_name : "eita teste",
      card_due_date : "10/2020",
      card_cvv : "123",
      levelThree : {
        thisIsLevelThree : {
          yetAnotherLevel : "test"
        }
      }
    }
  }
  
  it('Should have hash', function(done) {
    validator.params = {hash : "LoremIpsum"};
    expect(validator.validatePresence("hash")).to.be.ok;
    done();  
  })
  
  it('Should have creditcard.card_number', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.card_number")).to.be.ok;
    done();
  })
  
  it('Should have creditcard.levelThree.thisIsLevelThree', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree")).to.be.ok;
    done();
  })

  it('Should have creditcard.levelThree.thisIsLevelThree.yetAnotherLevel', function(done) {
    validator.params = token;
    expect(validator.validatePresence("creditcard.levelThree.thisIsLevelThree.yetAnotherLevel")).to.be.ok;
    done();
  })

  it('Should test integrationKey config error', function(done) {
    var err = new Error('Config value integrationKey not informed');
    config = {
      integrationKey : "",
      testMode : true
    }    
    expect(function() {
      validator.validateConfig(config);
    }).to.throw('Config value integrationKey not informed');

    done();
  })

  it('Should test testMode config error', function(done) {
    config = {
      integrationKey : "integration_key",
      testMode : "true"
    }    
    expect(function() {
      validator.validateConfig(config);
    }).to.throw('Config key testMode not boolean value');

    done();
  })

  it('Should test presence error', function(done) {
    var params = {};
    
    validator.params = params;
    expect(function() {
      validator.validatePresence("hash");
    }).to.throw('The parameter hash was not supplied.');

    done();
  })

  it('Should test presenceOr error: absence', function(done) {
    var params = {};
    
    validator.params = params;
    expect(function() {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either the parameter hash or merchant_payment_code must be supplied.');

    done();
  })

  it('Should test presenceOr error: double presence', function(done) {
    var params = {hash : "foo", merchant_payment_code : "bar"};
    
    validator.params = params;
    expect(function() {
      validator.validatePresenceOr("hash", "merchant_payment_code");
    }).to.throw('Either parameter hash or merchant_payment_code must be supplied, but not both.');

    done();
  })
});