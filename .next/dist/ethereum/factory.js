'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _InsurancePoolFactory = require('./build/InsurancePoolFactory.json');

var _InsurancePoolFactory2 = _interopRequireDefault(_InsurancePoolFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config(); // we are getting the instance from web3.js not the constructor

var deployedTo = process.env.deployedTo;

var instance = new _web2.default.eth.Contract(JSON.parse(_InsurancePoolFactory2.default.interface), '0x82bF4BA376837189f6959872d7E0B62e3faC57dd' // this is my deloyed address replace this
// with urs, else u will just be running my deployed contract :P
//JSON.stringify(deployedTo)
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkluc3VyYW5jZVBvb2xGYWN0b3J5IiwicmVxdWlyZSIsImNvbmZpZyIsImRlcGxveWVkVG8iLCJwcm9jZXNzIiwiZW52IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0EsQUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUEyQjs7Ozs7O0FBQ2xDLGtCQUFBLEFBQWtCLFVBRlM7O0ksQUFHbkIsYUFBZSxRLEFBQVEsSSxBQUF2Qjs7QUFFUixJQUFNLGVBQWUsY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM1QixLQUFBLEFBQUssTUFBTSwrQkFESSxBQUNmLEFBQWdDLFlBRGpCLEFBRWYsNkNBQTZDO0FBQzdDO0FBSEYsQUFBaUIsQUFJZixBQUdGO0FBUGlCOztrQkFPakIsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW9taW4vZGlzdHJpYnV0ZWRJbnN1cmFuY2UifQ==