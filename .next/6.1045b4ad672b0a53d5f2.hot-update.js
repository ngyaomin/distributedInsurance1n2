webpackHotUpdate(6,{

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(917);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1175).config();
var infuraLink = process.env.infuraLink;

var web3 = void 0;
var testCondition = typeof window !== 'undefined' && typeof window.web3 !== 'undefined';

if (testCondition) {
  web3 = new _web2.default(window.web3.currentProvider);
  //  ethereum.enable();
} else if (testCondition) {
  var provider = new _web2.default.providers.HttpProvider(infuraLink);
  web3 = new _web2.default(provider);
} else if (testCondition) {
  var _provider = new _web2.default.providers.HttpProvider('HTTP://127.0.0.1:8545');
  web3 = new _web2.default(_provider);
} else if (testCondition) {
  var _provider2 = new _web2.default.providers.HttpProvider('HTTP://127.0.0.1:7545');
  web3 = new _web2.default(_provider2);
} else {
  alert("pls connect a web3 provider such as metamask, ganache or infura");
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52Iiwid2ViMyIsInRlc3RDb25kaXRpb24iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsIl9wcm92aWRlciIsIl9wcm92aWRlcjIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUNBQSxrQkFBa0JDLE1BQWxCO0FBQ0EsSUFBSUMsYUFBYUMsUUFBUUMsR0FBUixDQUFZRixVQUE3Qjs7QUFFQSxJQUFJRyxPQUFPLEtBQUssQ0FBaEI7QUFDQSxJQUFJQyxnQkFBZ0IsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRixJQUFkLEtBQXVCLFdBQTVFOztBQUVBLElBQUlDLGFBQUosRUFBbUI7QUFDakJELFNBQU8sa0JBQVNFLE9BQU9GLElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBO0FBQ0QsQ0FIRCxNQUdPLElBQUlGLGFBQUosRUFBbUI7QUFDeEIsTUFBSUcsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NULFVBQWhDLENBQWY7QUFDQUcsU0FBTyxrQkFBU0ksUUFBVCxDQUFQO0FBQ0QsQ0FITSxNQUdBLElBQUlILGFBQUosRUFBbUI7QUFDeEIsTUFBSU0sWUFBWSxJQUFJLGNBQUtGLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsdUJBQWhDLENBQWhCO0FBQ0FOLFNBQU8sa0JBQVNPLFNBQVQsQ0FBUDtBQUNELENBSE0sTUFHQSxJQUFJTixhQUFKLEVBQW1CO0FBQ3hCLE1BQUlPLGFBQWEsSUFBSSxjQUFLSCxTQUFMLENBQWVDLFlBQW5CLENBQWdDLHVCQUFoQyxDQUFqQjtBQUNBTixTQUFPLGtCQUFTUSxVQUFULENBQVA7QUFDRCxDQUhNLE1BR0E7QUFDTEMsUUFBTSxpRUFBTjtBQUNEOztrQkFFY1QsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbnZhciBpbmZ1cmFMaW5rID0gcHJvY2Vzcy5lbnYuaW5mdXJhTGluaztcblxudmFyIHdlYjMgPSB2b2lkIDA7XG52YXIgdGVzdENvbmRpdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmlmICh0ZXN0Q29uZGl0aW9uKSB7XG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuICAvLyAgZXRoZXJldW0uZW5hYmxlKCk7XG59IGVsc2UgaWYgKHRlc3RDb25kaXRpb24pIHtcbiAgdmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihpbmZ1cmFMaW5rKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn0gZWxzZSBpZiAodGVzdENvbmRpdGlvbikge1xuICB2YXIgX3Byb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignSFRUUDovLzEyNy4wLjAuMTo4NTQ1Jyk7XG4gIHdlYjMgPSBuZXcgV2ViMyhfcHJvdmlkZXIpO1xufSBlbHNlIGlmICh0ZXN0Q29uZGl0aW9uKSB7XG4gIHZhciBfcHJvdmlkZXIyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcignSFRUUDovLzEyNy4wLjAuMTo3NTQ1Jyk7XG4gIHdlYjMgPSBuZXcgV2ViMyhfcHJvdmlkZXIyKTtcbn0gZWxzZSB7XG4gIGFsZXJ0KFwicGxzIGNvbm5lY3QgYSB3ZWIzIHByb3ZpZGVyIHN1Y2ggYXMgbWV0YW1hc2ssIGdhbmFjaGUgb3IgaW5mdXJhXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52Iiwid2ViMyIsInRlc3RDb25kaXRpb24iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsIl9wcm92aWRlciIsIl9wcm92aWRlcjIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUNBQSxrQkFBa0JDLE1BQWxCO0FBQ0EsSUFBSUMsYUFBYUMsUUFBUUMsR0FBUixDQUFZRixVQUE3Qjs7QUFFQSxJQUFJRyxPQUFPLEtBQUssQ0FBaEI7QUFDQSxJQUFJQyxnQkFBZ0IsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRixJQUFkLEtBQXVCLFdBQTVFOztBQUVBLElBQUlDLGFBQUosRUFBbUI7QUFDakJELFNBQU8sa0JBQVNFLE9BQU9GLElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBO0FBQ0QsQ0FIRCxNQUdPLElBQUlGLGFBQUosRUFBbUI7QUFDeEIsTUFBSUcsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NULFVBQWhDLENBQWY7QUFDQUcsU0FBTyxrQkFBU0ksUUFBVCxDQUFQO0FBQ0QsQ0FITSxNQUdBLElBQUlILGFBQUosRUFBbUI7QUFDeEIsTUFBSU0sWUFBWSxJQUFJLGNBQUtGLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsdUJBQWhDLENBQWhCO0FBQ0FOLFNBQU8sa0JBQVNPLFNBQVQsQ0FBUDtBQUNELENBSE0sTUFHQSxJQUFJTixhQUFKLEVBQW1CO0FBQ3hCLE1BQUlPLGFBQWEsSUFBSSxjQUFLSCxTQUFMLENBQWVDLFlBQW5CLENBQWdDLHVCQUFoQyxDQUFqQjtBQUNBTixTQUFPLGtCQUFTUSxVQUFULENBQVA7QUFDRCxDQUhNLE1BR0E7QUFDTEMsUUFBTSxpRUFBTjtBQUNEOztrQkFFY1QsSSIsImZpbGUiOiJ1bmtub3duIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/yaomin/distributedInsurance/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yaomin/distributedInsurance/ethereum/web3.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ })

})