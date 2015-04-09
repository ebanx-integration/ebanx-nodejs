function cancel(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/cancel"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			hash : params.hash
		}
		

	};

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = cancel;