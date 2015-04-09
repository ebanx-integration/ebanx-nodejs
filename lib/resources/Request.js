function request(params, callback) {

	var client = require("../http/Client");

	var req = require('requestify');

	var method = "POST";

	var uri = "ws/request"

	var config = require("../Utils");

	var conf = new config(this.integrationKey,this.testMode);

	var options = {
		url : conf.getEndPoint(),
		uri : uri,
		method : method,
		params : {
			integration_key : conf.getIntegrationKey(),
		    name : params.name,
		    email : params.email,
		    currency_code : params.currency_code,
		    amount : params.amount,
		    merchant_payment_code : params.merchant_payment_code,	
		    order_number : params.order_number,	
		    payment_type_code : params.payment_type_code,	
		    bypass_boleto_screen : params.bypass_boleto_screen,
		    person_type : params.person_type,
		    birth_date : params.birth_date,
		    zipcode : params.zipcode,
		    address : params.address,	
		    street_number : params.street_number,	
		    city : params.city,
		    state : params.state,	
		    country : params.country,	
		    phone_number : params.phone_number,
		    due_date : params.due_date
		}
		

	};

	//console.log(options);

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = request;