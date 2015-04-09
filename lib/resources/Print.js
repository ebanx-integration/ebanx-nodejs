function print(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "GET";

	var uri = "print"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			//integration_key : conf.getIntegrationKey(),
			hash : params.hash
		}
		

	};

	console.log(options)

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = print;