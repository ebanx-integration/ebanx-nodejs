function exchange(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "GET";

	var uri = "ws/exchange"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			currency_code : params.currency_code,
			currency_base : params.currency_base
		}
		

	};

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = exchange;