webpackHotUpdate(5,{

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
} else {
  var provider = new _web2.default.providers.HttpProvider(infuraLink);
  web3 = new _web2.default(provider);
}

//else if (testCondition) {
//  const provider = new Web3.providers.HttpProvider(
//    'HTTP://127.0.0.1:8545'
// );
//   web3 = new Web3(provider);
// } else if (testCondition) {
//   const provider = new Web3.providers.HttpProvider(
//     'HTTP://127.0.0.1:7545'
//   );
//   web3 = new Web3(provider);
// };


exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52Iiwid2ViMyIsInRlc3RDb25kaXRpb24iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUNBQSxrQkFBa0JDLE1BQWxCO0FBQ0EsSUFBSUMsYUFBYUMsUUFBUUMsR0FBUixDQUFZRixVQUE3Qjs7QUFFQSxJQUFJRyxPQUFPLEtBQUssQ0FBaEI7QUFDQSxJQUFJQyxnQkFBZ0IsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRixJQUFkLEtBQXVCLFdBQTVFOztBQUVBLElBQUlDLGFBQUosRUFBbUI7QUFDakJELFNBQU8sa0JBQVNFLE9BQU9GLElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBO0FBQ0QsQ0FIRCxNQUdPO0FBQ0wsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NULFVBQWhDLENBQWY7QUFDQUcsU0FBTyxrQkFBU0ksUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2tCQUdlSixJIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xudmFyIGluZnVyYUxpbmsgPSBwcm9jZXNzLmVudi5pbmZ1cmFMaW5rO1xuXG52YXIgd2ViMyA9IHZvaWQgMDtcbnZhciB0ZXN0Q29uZGl0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJztcblxuaWYgKHRlc3RDb25kaXRpb24pIHtcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG4gIC8vICBldGhlcmV1bS5lbmFibGUoKTtcbn0gZWxzZSB7XG4gIHZhciBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoaW5mdXJhTGluayk7XG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbi8vZWxzZSBpZiAodGVzdENvbmRpdGlvbikge1xuLy8gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbi8vICAgICdIVFRQOi8vMTI3LjAuMC4xOjg1NDUnXG4vLyApO1xuLy8gICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuLy8gfSBlbHNlIGlmICh0ZXN0Q29uZGl0aW9uKSB7XG4vLyAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbi8vICAgICAnSFRUUDovLzEyNy4wLjAuMTo3NTQ1J1xuLy8gICApO1xuLy8gICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuLy8gfTtcblxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImluZnVyYUxpbmsiLCJwcm9jZXNzIiwiZW52Iiwid2ViMyIsInRlc3RDb25kaXRpb24iLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUNBQSxrQkFBa0JDLE1BQWxCO0FBQ0EsSUFBSUMsYUFBYUMsUUFBUUMsR0FBUixDQUFZRixVQUE3Qjs7QUFFQSxJQUFJRyxPQUFPLEtBQUssQ0FBaEI7QUFDQSxJQUFJQyxnQkFBZ0IsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRixJQUFkLEtBQXVCLFdBQTVFOztBQUVBLElBQUlDLGFBQUosRUFBbUI7QUFDakJELFNBQU8sa0JBQVNFLE9BQU9GLElBQVAsQ0FBWUcsZUFBckIsQ0FBUDtBQUNBO0FBQ0QsQ0FIRCxNQUdPO0FBQ0wsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NULFVBQWhDLENBQWY7QUFDQUcsU0FBTyxrQkFBU0ksUUFBVCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2tCQUdlSixJIiwiZmlsZSI6InVua25vd24ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/yaomin/distributedInsurance/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yaomin/distributedInsurance/ethereum/web3.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128)))

/***/ })

})