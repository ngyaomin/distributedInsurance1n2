'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _InsurancePoolFactory = require('./build/InsurancePoolFactory.json');

var _InsurancePoolFactory2 = _interopRequireDefault(_InsurancePoolFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
//const deployedTo = fs.readFileSync(".deployedTo").toString().trim();


// we are getting the instance from web3.js not the constructor
var instance = new _web2.default.eth.Contract(JSON.parse(_InsurancePoolFactory2.default.interface),
//deployedTo
'0xb237d488Da554ffadA191038c31A8d585d2aa1F1'
//'0x133474fEA1a837D9706B15B01A54E7BF92493278'
//'0xc7A9e3Eac2dA6a5D1Dd5a6058a8b0DC530c5f41A' // use this if shit happens
//'0xC82E40B9053Ae8FEB3851e2D4837601D3029A910'
//'0x216418ED2c677cbD4f237cdD87603331fe7aC8af'
//'0x6a88f066e2178b84a39eCaAd7313d28dB7d82390'
//'0xE776D98A50b28a91F6EAA57272815922d818c02E'
//'0x675eA93065Db6f6A3e60AF77a50937b52529BEE3'
//'0x935A6A54cB1ff4E4fBA2E4fe3e6afce51138D155'
//'0x78604DC95eF02E72D75AA3864794ad567918d397'
//'0xe03F5B704DFb9876aa4e0DcB99D0bc8370fFf3EC' // something wrong, might not work
//'0x82bF4BA376837189f6959872d7E0B62e3faC57dd' // this is my deloyed address replace this
// with urs, else u will just be running my deployed contract :P
// i have keep the previous contract address here so that u can referecne, or i can ref
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBSUEsS0FBS0MsT0FBTCxNQUFKO0FBQ0E7OztBQUgyQjtBQU0zQixJQUFJQyxXQUFXLElBQUksY0FBS0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxLQUFLQyxLQUFMLENBQVcsK0JBQXFCQyxTQUFoQyxDQUF0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZlLENBQWY7O2tCQWtCZUwsUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJzsgLy8gd2UgYXJlIGdldHRpbmcgdGhlIGluc3RhbmNlIGZyb20gd2ViMy5qcyBub3QgdGhlIGNvbnN0cnVjdG9yXG5pbXBvcnQgSW5zdXJhbmNlUG9vbEZhY3RvcnkgZnJvbSAnLi9idWlsZC9JbnN1cmFuY2VQb29sRmFjdG9yeS5qc29uJztcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4vL2NvbnN0IGRlcGxveWVkVG8gPSBmcy5yZWFkRmlsZVN5bmMoXCIuZGVwbG95ZWRUb1wiKS50b1N0cmluZygpLnRyaW0oKTtcblxuXG52YXIgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoSlNPTi5wYXJzZShJbnN1cmFuY2VQb29sRmFjdG9yeS5pbnRlcmZhY2UpLFxuLy9kZXBsb3llZFRvXG4nMHhiMjM3ZDQ4OERhNTU0ZmZhZEExOTEwMzhjMzFBOGQ1ODVkMmFhMUYxJ1xuLy8nMHgxMzM0NzRmRUExYTgzN0Q5NzA2QjE1QjAxQTU0RTdCRjkyNDkzMjc4J1xuLy8nMHhjN0E5ZTNFYWMyZEE2YTVEMURkNWE2MDU4YThiMERDNTMwYzVmNDFBJyAvLyB1c2UgdGhpcyBpZiBzaGl0IGhhcHBlbnNcbi8vJzB4QzgyRTQwQjkwNTNBZThGRUIzODUxZTJENDgzNzYwMUQzMDI5QTkxMCdcbi8vJzB4MjE2NDE4RUQyYzY3N2NiRDRmMjM3Y2REODc2MDMzMzFmZTdhQzhhZidcbi8vJzB4NmE4OGYwNjZlMjE3OGI4NGEzOWVDYUFkNzMxM2QyOGRCN2Q4MjM5MCdcbi8vJzB4RTc3NkQ5OEE1MGIyOGE5MUY2RUFBNTcyNzI4MTU5MjJkODE4YzAyRSdcbi8vJzB4Njc1ZUE5MzA2NURiNmY2QTNlNjBBRjc3YTUwOTM3YjUyNTI5QkVFMydcbi8vJzB4OTM1QTZBNTRjQjFmZjRFNGZCQTJFNGZlM2U2YWZjZTUxMTM4RDE1NSdcbi8vJzB4Nzg2MDREQzk1ZUYwMkU3MkQ3NUFBMzg2NDc5NGFkNTY3OTE4ZDM5Nydcbi8vJzB4ZTAzRjVCNzA0REZiOTg3NmFhNGUwRGNCOTlEMGJjODM3MGZGZjNFQycgLy8gc29tZXRoaW5nIHdyb25nLCBtaWdodCBub3Qgd29ya1xuLy8nMHg4MmJGNEJBMzc2ODM3MTg5ZjY5NTk4NzJkN0UwQjYyZTNmYUM1N2RkJyAvLyB0aGlzIGlzIG15IGRlbG95ZWQgYWRkcmVzcyByZXBsYWNlIHRoaXNcbi8vIHdpdGggdXJzLCBlbHNlIHUgd2lsbCBqdXN0IGJlIHJ1bm5pbmcgbXkgZGVwbG95ZWQgY29udHJhY3QgOlBcbi8vIGkgaGF2ZSBrZWVwIHRoZSBwcmV2aW91cyBjb250cmFjdCBhZGRyZXNzIGhlcmUgc28gdGhhdCB1IGNhbiByZWZlcmVjbmUsIG9yIGkgY2FuIHJlZlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBSUEsS0FBS0MsT0FBTCxNQUFKO0FBQ0E7OztBQUgyQjtBQU0zQixJQUFJQyxXQUFXLElBQUksY0FBS0MsR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxLQUFLQyxLQUFMLENBQVcsK0JBQXFCQyxTQUFoQyxDQUF0QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZlLENBQWY7O2tCQWtCZUwsUSIsImZpbGUiOiJ1bmtub3duIn0=