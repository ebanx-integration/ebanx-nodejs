function token(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/token"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			payment_type_code : params.payment_type_code,
			token : params.token

		}
		

	};

	console.log(options.url);

	client.send(options, function(reply){
		//this.rep = reply;
		callback(reply);


	});


}

module.exports = token;