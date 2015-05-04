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

var req = require("request");
var config = require("../Config");
var validator = require("../resources/Validator");
var Client = function () {};

Client.prototype.send = function (options, callback) {
  var url = config.getEndPoint() + options.uri;
  var method = options.method;

  if (!config.usingHttp) {
    callback(null, options);
  } else {
    validator.validateConfig(config);
    options.params.integration_key = config.integrationKey;

    // If is Direct operation, change some parameters
    if (options.direct) {
      var request = { request_body : JSON.stringify(options.params)};

      req({
        url: url,
        headers: {
          'User-Agent': 'EBANX NodeJS Module Direct'
        },
        method: method,
        form : request
      }, function(error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          callback(null, body);
        }
      });
    }	else {
      req({
        url: url,
        headers: {
          'User-Agent': 'EBANX NodeJS Module'
        },
        method: method,
        qs : options.params
      }, function(error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          callback(null, body);
        }
      });
    }
  }
};

module.exports = new Client();