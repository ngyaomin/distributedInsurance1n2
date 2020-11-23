'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yaomin/distributedInsurance/pages/index.js?entry';


var InsurancePoolIndex = function (_Component) {
  (0, _inherits3.default)(InsurancePoolIndex, _Component);

  function InsurancePoolIndex() {
    (0, _classCallCheck3.default)(this, InsurancePoolIndex);

    return (0, _possibleConstructorReturn3.default)(this, (InsurancePoolIndex.__proto__ || (0, _getPrototypeOf2.default)(InsurancePoolIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(InsurancePoolIndex, [{
    key: 'renderInsurancePools',
    value: function renderInsurancePools() {
      var items = this.props.insurancePools.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/insurancepools/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, 'View Insurance Pool')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Open Insurance Pools'), _react2.default.createElement(_routes.Link, { route: '/insurancepools/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create InsurancePool',
        icon: 'add circle' // the icon name is in document, be exact
        , primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), this.renderInsurancePools()));
    }
  }], [{
    key: 'getInitialProps',

    // creating a instance of class to get access to
    // static asign the function not to instance of the class but to class itself

    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var insurancePools;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedInsurancePools().call();

              case 2:
                insurancePools = _context.sent;
                return _context.abrupt('return', { insurancePools: insurancePools });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return InsurancePoolIndex;
}(_react.Component);

exports.default = InsurancePoolIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiSW5zdXJhbmNlUG9vbEluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImluc3VyYW5jZVBvb2xzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJJbnN1cmFuY2VQb29scyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEluc3VyYW5jZVBvb2xzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OzsyQ0FVbUIsQUFDbkI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLGVBQVgsQUFBMEIsSUFBSSxtQkFBVyxBQUNyRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUssNEJBQU4sQUFBZ0M7d0JBQWhDOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFZZCxPQVpjOzsyQ0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1Y7QUFEVTtPQUFBOzs7OzZCQUdGLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEseUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVcsQUFDVDtjQUhGLEFBR08sYUFIUCxBQUdvQjtBQUZsQixVQUdBLFNBSkY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBU0g7QUFURztpQkFQVixBQUNFLEFBQ0UsQUFjRyxBQUFLLEFBSWI7OztTQTlDRDs7QUFDQTs7Ozs7Ozs7Ozs7dUJBRytCLGtCQUFBLEFBQVEsUUFBUixBQUFnQiw0QixBQUFoQixBQUE0Qzs7bUJBQW5FO0E7aURBRUMsRUFBRSxnQixBQUFGLEFBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkM3QixBLEFBbERpQzs7a0JBa0RqQyxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW9taW4vZGlzdHJpYnV0ZWRJbnN1cmFuY2UifQ==