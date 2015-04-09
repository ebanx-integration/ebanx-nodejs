
var req = require('requestify');

var Client = function () {};

Client.prototype.send = function (options, callback) {
	//console.log(options);
	// req.request(options.url + options.uri, {
	// 	method : options.method,
	// 	body : {
	// 		integration_key : options.integrationKey
	// 	}
	// )}
	// .then(function(response) {
	// 	console.log(response.getBody());

	// });
 //******************************************************

// req.request(options.url + options.uri, {
//     method: options.method,
//     body: {
//         integration_key: options.integrationKey,
//         bar: 'foo'
//     },
//     headers: {
//         'X-Forwarded-By': 'me'
//     }     
// })

	var request_body = options.body
	options.headers = {
					   'User-Agent'     : 'EBANX NodeJS Module'
					  };
	//options.dataType = 'json';

	//console.log(options.data);

//********************************
return req.post(options.url + options.uri, request_body, callback)
.then(function(response) {

		console.log(request_body)
		callback(response.getBody());


	
    // get the response body 
    //console.log(response.body);
 
    // // get the response headers 
    // response.getHeaders();
 
    // // get specific response header 
    // response.getHeader('Accept');
 
    // // get the code 
    // response.getCode();
    
    // get the raw response body
    
    //console.log(response.getBody());
    //console.log(this.response);
  
});


};


module.exports = new Client();