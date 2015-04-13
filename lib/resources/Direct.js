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
		params : {
			integration_key : conf.getIntegrationKey(),
			operation: "request",
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
		},
		direct : true
		
		}

		if(params.hasOwnProperty('creditcard')){
			options.params.payment.creditcard = {
				card_number : params.creditcard.card_number,
		    	card_name : params.creditcard.card_name,
		    	card_due_date : params.creditcard.card_due_date,
		    	card_cvv : params.creditcard.card_cvv
			};
		}

		if(params.hasOwnProperty('directdebit')){
			options.params.payment.directdebit = {
				bank_code : params.bank_code,
				bank_agency : params.bank_agency,
				bank_account : params.bank_account
			};
		}

	client.send(options, function(reply){

		callback(reply);


	});


}

module.exports = direct;