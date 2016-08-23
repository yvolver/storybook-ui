'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapperStyle = {
  margin: '0 10px 10px'
};

var headingStyle = (0, _extends3.default)({}, _theme.baseFonts, {
  background: '#40464e',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#fff',
  border: '1px solid #40464e',
  textAlign: 'center',
  borderRadius: '2px',
  padding: '5px',
  cursor: 'pointer',
  margin: 0,
  float: 'none',
  overflow: 'hidden'
});

var shortcutIconStyle = {
  textTransform: 'uppercase',
  background: '#40464e',
  letterSpacing: '3.5px',
  fontSize: 12,
  fontWeight: 'normal',
  color: '#fff',
  border: '1px solid #40464e',
  textAlign: 'center',
  borderRadius: 2,
  padding: 5,
  cursor: 'pointer',
  margin: 0,
  display: 'inlineBlock',
  paddingLeft: 8,
  float: 'right',
  marginLeft: 5,
  outline: 0
};

var linkStyle = {
  textDecoration: 'none'
};

var Header = function Header(_ref) {
  var openShortcutsHelp = _ref.openShortcutsHelp;
  var name = _ref.name;
  var url = _ref.url;
  return _react2.default.createElement(
    'div',
    { style: wrapperStyle },
    _react2.default.createElement(
      'button',
      { className: 'sb-shortcuts', style: shortcutIconStyle, onClick: openShortcutsHelp },
      '⌘'
    ),
    _react2.default.createElement(
      'a',
      { style: linkStyle, href: url, target: '_blank' },
      _react2.default.createElement(
        'h3',
        { className: 'sb-header', style: headingStyle },
        name
      )
    )
  );
};

Header.propTypes = {
  openShortcutsHelp: _react2.default.PropTypes.func,
  name: _react2.default.PropTypes.string,
  url: _react2.default.PropTypes.string
};

exports.default = Header;