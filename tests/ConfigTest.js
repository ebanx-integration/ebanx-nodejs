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

var ebanx = require('../lib/ebanx');
var utils = require('../lib/Config');
var eb = ebanx();

eb.configure({
	integrationKey : "integration_key",
	testMode : true
});

var should = require('chai').should();
var expect = require('chai').expect;

describe('Configuration', function() {
  it('Integration Key should be setted', function(done) {
    expect(eb.settings.integrationKey).to.be.equal(utils.getIntegrationKey());
    done();  	
  })

  it('Test Mode Should be Setted', function(done) {
    expect(eb.settings.testMode).to.be.equal(utils.getTestMode());
    done();   
  })

  it('EndPoint return for testMode false and true', function(done) {
    expect(utils.getEndPoint()).to.be.equal("https://sandbox.ebanx.com/");
    eb.configure({
      testMode : false
    })
    expect(utils.getEndPoint()).to.be.equal("https://api.ebanx.com/");
    done();   
  })
});