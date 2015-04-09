function zipcode(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "GET";

	var uri = "ws/zipcode"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			zipcode : params.zipcode
		}
		

	};

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = zipcode;