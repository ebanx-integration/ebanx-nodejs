function direct(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/direct"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	
		var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		body : {request_body : {
			integration_key : conf.getIntegrationKey(),
			operation: "direct",
		    mode : "full",
		    payment : {
		    	merchant_payment_code : params.merchant_payment_code,
		    	amount_total : params.amount_total,
		    	currency_code : params.currency_code,
		    	name : params.name,
		    	email : params.email,
		    	birth_date : params.birth_date,
		    	document : params.document,
		    	address : params.address,
		    	street_number : params.street_number,
		    	street_complement : params.street_complement,
		    	city : params.city,
		    	state : params.state,
		    	zipcode : params.zipcode,
		    	country : 'br',
		    	phone_number : params.phone_number,
		    	payment_type_code : params.payment_type_code
			}
		}
		}
		}
		

		//var data = '{"name": ' + request_body.request_body.integration_key + ',"age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

	// var options = {
	// 	url : conf.getEndPoint(),
	// 	uri : uri,
	// 	method : method,
	// 	body : request_body
	// };

	
	//var options = request_body;
    //var options2 = JSON.parse(data);
	//console.log(data + ' EITA ' + options2.name);
	

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = direct;