/* Copyright 2015 EBANX */
'use strict';

var Validator = function (params) {
  this.params = params;
};

Validator.prototype = {
  exists : function(key) {
    if (key.indexOf(".") > 0) {
      var keys = key.split(".");
      var levels = keys.length;
      var params = this.params;

      if (levels === 4) {
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
};

module.exports = new Validator();