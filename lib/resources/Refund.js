function refund(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/refund"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			operation : params.operation,
			hash : params.hash,
			amount : params.amount,
			description : params.description,
			merchant_refund_code : params.merchant_refund_code,
			refund_id : params.refund_id
		}
		

	};

	client.send(options, function(reply){
		//this.rep = reply;
		callback(reply);


	});


}

module.exports = refund;