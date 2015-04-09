// function utils() {

// 	// function utils(integrationKey) {
// 	//   this.integrationKey = integrationKey;
// 	//   return integrationKey;
// 	// }

// 	this.getConfig = function() {
// 		return this.integrationKey;
// 	}

// 	this.getTestMode = function() {
// 		return this.testMode;
// 	}

// 	this.getEndPoint = function() {
// 		if(this.getTestMode()) {
// 			return 'https://sandbox.ebanx.com/ws/';
// 		}
// 		else {
// 			return 'https://api.ebanx.com/ws';
// 		}
// 	}

// 	return this;
// }

// module.exports = new utils();

// Generated by CoffeeScript 1.6.3
(function() {
  var config;

  config = (function() {
    function config(integrationKey, testMode) {
      this.integrationKey = integrationKey;
      this.testMode = testMode;
      return this;
    }

    config.prototype.getTestMode = function() {
      return this.testMode;
    };

    config.prototype.getIntegrationKey = function() {
      return this.integrationKey;
    };

    config.prototype.getEndPoint = function() {
    	if (this.getTestMode()) {
    		return 'https://sandbox.ebanx.com/';
    	}
    	else {
    		return 'https://api.ebanx.com/';
    	}
    }

   
    return config;

  })();

  module.exports = config;

}).call(this);