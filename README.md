EBANX NodeJs Module
==============
EBANX is the market leader in e-commerce payment solutions for International Merchants selling online to Brazil. This module enables you to integrate EBANX with NodeJs.

Continuous integration status:

[![Build Status](https://travis-ci.org/hdolinski/ebanx-nodejs.svg?branch=master)](https://travis-ci.org/hdolinski/ebanx-nodejs)

NPM status:

[![NPM version](https://badge.fury.io/js/ebanx.svg)](https://badge.fury.io/js/ebanx)

Installation
----------

### npm

npm install ebanx

Usage
---------
```javascript
    //Require the module
    var ebanx;
    var ebanxMod;
    ebanxMod = require('ebanx');
    ebanx = new ebanxMod();

    //Configure the integration key and test mode
    ebanx.configure({
      integrationKey : '1231000',
      testMode : true
    });
```

    You can change the following settings:
    *integrationKey: your integration key. It will be different in test and production modes.
    *testMode: enable or disable the test mode. The default value is _true_.

    To create a new API request, just call one of the following functions 
    on the ebanx object and supply it with the request parameters:
    * ebanx.cancel()
    * ebanx.capture()
    * ebanx.direct()
    * ebanx.exchange()
    * ebanx.print()
    * ebanx.query()
    * ebanx.refund()
    * ebanx.refundOrCancel()
    * ebanx.request()
    * ebanx.token()
    * ebanx.zipcode()

    You can check your settings by accessing the settings module:
    * ebanx.settings
    * ebanx.settings.integrationKey
    * ebanx.settings.testMode

#Examples:

```javascript

    var ebanx;
    var ebanxMod;
    ebanxMod = require('ebanx');
    ebanx = new ebanxMod();
    
    //Configuring the module
    ebanx.configure({
      integrationKey : '1231000',
      testMode : true
    });

    //Creating new checkout payment

    var params = {
      currency_code       : 'USD',
      'amount'            : '22.00',
      'name'              : 'Jose da Silva',
      'email'             : 'jose@example.org',
      'payment_type_code' : '_all',
      'merchant_payment_code' : "example123" //must be unique
    };

    ebanx.request(params, function(error, reply) {
      if(error) {
        console.log(error);
      } else {
        console.log(reply);
      }
    });
    
```

## Changelog
* **1.2.5**: Changed require capital letter for Validator
* **1.2.4**: Corrected unit testings
* **1.2.3**: Changed require capital letter
* **1.2.2**: Added validation on "testMode".
* **1.2.1**: Calling Config module in Client only.
* **1.2.0**: Refactored coding. Changed Config module.
* **1.1.2**: Corrected double params in certain requests. Corrected Client module.
* **1.1.1**: Saved integration_key on file for tests.
* **1.1.0**: Implemented error first callbacks.
* **1.0.0**: Using Request Module. Added Test Cases.
* **0.2.1**: Added Validator module.
* **0.1.1**: Structured Client code.
* **0.1.0**: Added Direct and Token operations.
* **0.0.1**: Beta release.