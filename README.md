# elepay_api_

ElepayApi - JavaScript client for elepay_api_
elepay APIはRESTをベースに構成された決済APIです。支払い処理、返金処理など、決済に関わる運用における様々なことができます。 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install elepay_api_ --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your elepay_api_ from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ElepayApi = require('elepay_api_');

var defaultClient = ElepayApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME'
BasicAuth.password = 'YOUR PASSWORD'

var api = new ElepayApi.ChargeApi()
var charge = new ElepayApi.ChargeReq(); // {ChargeReq} 支払リクエスト
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createCharge(charge, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.elepay.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ElepayApi.ChargeApi* | [**createCharge**](docs/ChargeApi.md#createCharge) | **POST** /charges | Create charge
*ElepayApi.ChargeApi* | [**listCharges**](docs/ChargeApi.md#listCharges) | **GET** /charges | List charges
*ElepayApi.ChargeApi* | [**retrieveCharge**](docs/ChargeApi.md#retrieveCharge) | **GET** /charges/{id} | Retrieve charge
*ElepayApi.ChargeApi* | [**revokeCharge**](docs/ChargeApi.md#revokeCharge) | **DELETE** /charges/{id} | revoke charge
*ElepayApi.RefundApi* | [**createRefund**](docs/RefundApi.md#createRefund) | **POST** /charges/{id}/refunds | Create refund
*ElepayApi.RefundApi* | [**listChargesRefunds**](docs/RefundApi.md#listChargesRefunds) | **GET** /charges/{id}/refunds | List refunds
*ElepayApi.RefundApi* | [**listRefunds**](docs/RefundApi.md#listRefunds) | **GET** /refunds | List refunds
*ElepayApi.RefundApi* | [**retrieveChargeRefund**](docs/RefundApi.md#retrieveChargeRefund) | **GET** /charges/{id}/refunds/{refundId} | Retrieve refund
*ElepayApi.RefundApi* | [**retrieveRefund**](docs/RefundApi.md#retrieveRefund) | **GET** /refunds/{refundId} | Retrieve refund


## Documentation for Models

 - [ElepayApi.BadRequestError](docs/BadRequestError.md)
 - [ElepayApi.ChargeDateTimeType](docs/ChargeDateTimeType.md)
 - [ElepayApi.ChargeDto](docs/ChargeDto.md)
 - [ElepayApi.ChargeReq](docs/ChargeReq.md)
 - [ElepayApi.ChargesResponse](docs/ChargesResponse.md)
 - [ElepayApi.ElepayError](docs/ElepayError.md)
 - [ElepayApi.ElepayRestError](docs/ElepayRestError.md)
 - [ElepayApi.InternalServerError](docs/InternalServerError.md)
 - [ElepayApi.PaymentMethodType](docs/PaymentMethodType.md)
 - [ElepayApi.RefundDto](docs/RefundDto.md)
 - [ElepayApi.RefundExtDto](docs/RefundExtDto.md)
 - [ElepayApi.RefundReq](docs/RefundReq.md)
 - [ElepayApi.RefundsResponse](docs/RefundsResponse.md)


## Documentation for Authorization



### BasicAuth

- **Type**: HTTP basic authentication

