EBANX NodeJs Module
==============
EBANX is the market leader in e-commerce payment solutions for International Merchants selling online to Brazil. This library enables you to integrate EBANX with any PHP application.


Installation
----------

### npm

npm install ebanx

Usage
---------
```javascript
    //Require the module
    var ebanx, ebanxMod;
    ebanxMod = require('ebanx');
    ebanx = new ebanxMod();

    //Configure the integration key and test mode
    ebanx.integrationKey = "1231000";
    ebanx.testMode = true;
```

    You can change the following settings:
    *integrationKey: your integration key. It will be different in test and production modes.
    *testMode: enable or disable the test mode. The default value is _true_.

    To create a new API request, just call one of the following functions on the ebanx object and supply it with the request parameters:
    * ebanx.cancel()
    * ebanx.capture()
    * ebanx.direct()
    * ebanx.exchange()
    * ebanx.print()
    * ebanx.query()
    * ebanx.refund()
    * ebanx.refund_or_cancel()
    * ebanx.request()
    * ebanx.token()
    * ebanx.zipcode()

#Examples:

```javascript

    var ebanx;
    var ebanxMod;
    ebanxMod = require('ebanx');
    ebanx = new ebanxMod();
    
    //Configuring the module
    ebanx.integrationKey = "1231000";
    ebanx.testMode = true;

    //Creating new checkout payment

    var code = new Date(); 
    var params = {
      currency_code       : 'USD',
      'amount'            : '22.00',
      'name'              : 'Jose da Silva',
      'email'             : 'jose@example.org',
      'payment_type_code' : '_all',
      'merchant_payment_code' : code.getUTCMinutes() + code.getUTCMilliseconds() //this creates a unique code, required for creating the payment

    };

    ebanx.request(params, function(reply) {
      console.log(reply);
    });
    
```

## Changelog
* **0.1.0**: added Direct and Token operations.
* **0.0.1**: beta release.