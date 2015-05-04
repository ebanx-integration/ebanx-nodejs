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

var utils = require('../lib/Config');
var ebanx = require('../lib/ebanx');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

eb.settings.usingHttp = false;

var refund = {
	hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
    description : "Lorem ipsum dolor sit amet.",
    amount : "1.00",
    operation : "request"
};

var should = require('chai').should();
var expect = require('chai').expect;

describe('Refund Operation', function() {
  eb.refund (refund, function(err, reply) {
    it('Should return object', function(done) {
      reply.should.be.an('object');
      done();   
    })
    
    it('Method should be POST', function(done) {
      expect(reply.method).to.be.equal("POST");
      done();
    })

    it('URI should point to ws/refund', function(done) {
      expect(reply.uri).to.be.equal("ws/refund");
      done();
    })

    it('Params should have hash', function(done) {
      expect(reply.params).to.have.property("hash");
      done();  
    })

    it('Params should have description', function(done) {
      expect(reply.params).to.have.property("description");
      done();  
    })

    it('Params should have amount', function(done) {
      expect(reply.params).to.have.property("amount");
      done();  
    })

    it('Params should have operation', function(done) {
      expect(reply.params).to.have.property("operation");
      done();  
    })
  })
});

describe('Refund Operation Cancel', function() {
  var refund = {
    hash : "552c21d21c55dd815c92ca69d937603913f1e69153916b0f",
    description : "Lorem ipsum dolor sit amet.",
    amount : "1.00",
    operation : "cancel",
    refund_id : "123"
  };
  eb.refund (refund, function(err, reply) {
    it('Should test operation', function(done) {
      expect(reply.params).to.have.property("refund_id");
      done();  
    })
  })
});