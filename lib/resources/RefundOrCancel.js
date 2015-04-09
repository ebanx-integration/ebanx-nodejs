function refundorcancel(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/refundOrCancel"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params: {
			integration_key : conf.getIntegrationKey(),
			hash : params.hash,
			description : params.description,
			merchant_refund_code : params.merchant_refund_code,
		}
		

	};

	client.send(options, function(reply){
		//this.rep = reply;
		callback(reply);


	});


}

module.exports = refundorcancel;