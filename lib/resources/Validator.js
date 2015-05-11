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

var Validator = function (params) {
  this.params = params;
};

Validator.prototype = {
  exists : function(key) {
    if (key.indexOf(".") > 0) {
      var keys = key.split(".");
      var levels = keys.length;
      var params = this.params;

      if (levels == 4) {
        if (params[keys[0]][keys[1]][keys[2]][keys[3]]) {
          return params[keys[0]][keys[1]][keys[2]][keys[3]];
        }
      }
      else if (levels == 3) {
        if (params[keys[0]][keys[1]][keys[2]]) {
          return params[keys[0]][keys[1]][keys[2]];
        }

      }
      else {
        if (params[keys[0]][keys[1]]) {
          return params[keys[0]][keys[1]];
        }
      }
    }

    if (this.params.hasOwnProperty(key)) {
      return true;
    }

    return false;
  },
  validatePresence : function(key) {
    if(this.exists(key)) {
      return true;
    }
    throw new Error("The parameter " + key + " was not supplied.");
  },

  validatePresenceOr : function(key1, key2) {
    if(this.exists(key1)) {
      if(this.exists(key2)) {
        throw new Error("Either parameter " + key1 + " or " + key2 + " must be supplied, but not both.");
      }

      return true;
    }
    else if(this.exists(key2)) {
      return true;
    }

    throw new Error("Either the parameter " + key1 + " or " + key2 + " must be supplied.");
  },

  validateConfig : function(config) {
    if (!config.integrationKey) {
      throw new Error("Config value integrationKey not informed");
    }
    if (typeof(config.testMode) !== "boolean") {
      throw new Error("Config key testMode not boolean value");
    }
  }  
}

module.exports = new Validator();