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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _insurancePool = require('../../ethereum/insurancePool');

var _insurancePool2 = _interopRequireDefault(_insurancePool);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _FundForm = require('../../components/FundForm');

var _FundForm2 = _interopRequireDefault(_FundForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yaomin/distributedInsurance/pages/insurancepools/show.js?entry';


var InsurancePoolShow = function (_Component) {
  (0, _inherits3.default)(InsurancePoolShow, _Component);

  function InsurancePoolShow() {
    (0, _classCallCheck3.default)(this, InsurancePoolShow);

    return (0, _possibleConstructorReturn3.default)(this, (InsurancePoolShow.__proto__ || (0, _getPrototypeOf2.default)(InsurancePoolShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(InsurancePoolShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumPremium = _props.minimumPremium,
          claimsCount = _props.claimsCount,
          validatorsCount = _props.validatorsCount;

      var items = [{
        header: manager,
        meta: 'Address of manager',
        description: 'Manager create this pool and can create claims on behalf of',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumPremium,
        meta: 'Minimum Premium in weis',
        description: 'To be insured you must contribute at least this much wei, also to become validator'
      }, {
        header: claimsCount,
        meta: 'Number of Claims',
        description: 'Number of claims so far on this insurance pools. Claims must be validated by validators'
      }, {
        header: validatorsCount,
        meta: 'Number of validators',
        description: 'Number of ppl that funded this pool and can act as validators'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Insurance Pool Balance(ether)',
        description: 'How much fund this pool has left'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Insurance Pool Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_FundForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_routes.Link, { route: '/insurancepools/' + this.props.address + '/claims', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'View Claims')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var insurancePool, detail;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                insurancePool = (0, _insurancePool2.default)(props.query.address);
                _context.next = 3;
                return insurancePool.methods.getDetail().call();

              case 3:
                detail = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumPremium: detail[0],
                  balance: detail[1],
                  claimsCount: detail[2],
                  validatorsCount: detail[3],
                  manager: detail[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return InsurancePoolShow;
}(_react.Component);

exports.default = InsurancePoolShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luc3VyYW5jZXBvb2xzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJJbnN1cmFuY2VQb29sIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiRnVuZEZvcm0iLCJMaW5rIiwiSW5zdXJhbmNlUG9vbFNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bVByZW1pdW0iLCJjbGFpbXNDb3VudCIsInZhbGlkYXRvcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJpbnN1cmFuY2VQb29sIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0RGV0YWlsIiwiY2FsbCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztrQ0FnQlU7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFVixpQkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJVix3QkFKVSxBQUlWO1VBSlUsQUFLVixxQkFMVSxBQUtWO1VBTFUsQUFNVix5QkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FMQyxBQUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFwQlUsQUFpQlosQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7Y0FGRixBQUVRLEFBQ047cUJBekJKLEFBQWMsQUFzQlosQUFHZSxBQUlqQjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx3Q0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0c7QUFESDtjQURGLEFBQ0UsQUFDRyxBQUFLLEFBR1IsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsb0NBQVMsU0FBUyxLQUFBLEFBQUssTUFBeEIsQUFBOEI7b0JBQTlCO3NCQVBOLEFBQ0UsQUFLRSxBQUNFLEFBSUo7QUFKSTs0QkFJSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyw0QkFBMEIsS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFVBQTNDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWxCZCxBQUNFLEFBRUUsQUFXRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBUWY7Ozs7OzJHLEFBbkY0Qjs7Ozs7bUJBQ3JCO0EsZ0NBQWdCLDZCQUFjLE1BQUEsQUFBTSxNLEFBQXBCLEFBQTBCOzt1QkFFM0IsY0FBQSxBQUFjLFFBQWQsQUFBc0IsWSxBQUF0QixBQUFrQzs7bUJBQWpEO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO2tDQUFnQixPQUZYLEFBRVcsQUFBTyxBQUN2QjsyQkFBUyxPQUhKLEFBR0ksQUFBTyxBQUNoQjsrQkFBYSxPQUpSLEFBSVEsQUFBTyxBQUNwQjttQ0FBaUIsT0FMWixBQUtZLEFBQU8sQUFDeEI7MkJBQVMsTyxBQU5KLEFBTUksQUFBTztBQU5YLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRk4sQSxBQXZGZ0M7O2tCQXVGaEMsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy95YW9taW4vZGlzdHJpYnV0ZWRJbnN1cmFuY2UifQ==