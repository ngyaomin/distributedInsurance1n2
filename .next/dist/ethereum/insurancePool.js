'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _InsurancePool = require('./build/InsurancePool.json');

var _InsurancePool2 = _interopRequireDefault(_InsurancePool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_InsurancePool2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2luc3VyYW5jZVBvb2wuanMiXSwibmFtZXMiOlsid2ViMyIsIkluc3VyYW5jZVBvb2wiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUEwQixBQUExQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyx3QkFBYyxBQUF6QixBQURLLFlBRUwsQUFGSyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJpbnN1cmFuY2VQb29sLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW9taW4vZGlzdHJpYnV0ZWRJbnN1cmFuY2UifQ==