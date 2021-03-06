'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listStyle = (0, _extends3.default)({}, _theme.baseFonts, {
  marginTop: '20px'
});

var kindStyle = {
  borderTop: '1px solid #3a4048',
  color: '#e0e0e0',
  cursor: 'pointer',
  fontSize: 15,
  padding: '10px 15px'
};

var styleSelected = {
  background: '#363f49',
  color: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  fontWeight: 'bold',
  padding: '10px 15px'
};

var styleStoryState = {
  // background: '#2a323d',
  borderLeft: '3px solid #363f49',
  color: '#e0e0e0',
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 'normal',
  margin: '0 10px',
  padding: '10px 0 10px 15px'
};

var styleStoryStateSelected = (0, _extends3.default)({}, styleStoryState, {
  borderLeft: '3px solid #46e48d',
  color: '#46e48d',
  margin: '0 0 0 10px'
});

var Stories = function (_React$Component) {
  (0, _inherits3.default)(Stories, _React$Component);

  function Stories() {
    var _Object$getPrototypeO;

    (0, _classCallCheck3.default)(this, Stories);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Stories)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.renderKind = _this.renderKind.bind(_this);
    _this.renderStory = _this.renderStory.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Stories, [{
    key: 'fireOnKind',
    value: function fireOnKind(kind) {
      var onSelectStory = this.props.onSelectStory;

      if (onSelectStory) onSelectStory(kind, null);
    }
  }, {
    key: 'fireOnStory',
    value: function fireOnStory(story) {
      var _props = this.props;
      var onSelectStory = _props.onSelectStory;
      var selectedKind = _props.selectedKind;

      if (onSelectStory) onSelectStory(selectedKind, story);
    }
  }, {
    key: 'renderStory',
    value: function renderStory(story) {
      var selectedStory = this.props.selectedStory;

      var style = styleStoryState;
      var props = {
        key: story,
        onClick: this.fireOnStory.bind(this, story)
      };

      if (story === selectedStory) {
        style = styleStoryStateSelected;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: style, className: 'sb-story-container' }, props),
        story
      );
    }
  }, {
    key: 'renderKind',
    value: function renderKind(_ref) {
      var kind = _ref.kind;
      var stories = _ref.stories;
      var selectedKind = this.props.selectedKind;

      var style = (0, _extends3.default)({}, kindStyle);

      if (kind === selectedKind) {
        return _react2.default.createElement(
          'div',
          { key: kind },
          _react2.default.createElement(
            'div',
            {
              className: 'sb-story--selected',
              style: styleSelected,
              onClick: this.fireOnKind.bind(this, kind)
            },
            kind
          ),
          _react2.default.createElement(
            'div',
            { className: 'sb-story-render' },
            stories.map(this.renderStory)
          )
        );
      }

      return _react2.default.createElement(
        'div',
        {
          key: kind,
          style: style,
          onClick: this.fireOnKind.bind(this, kind, null),
          className: 'sb-story--not-selected'
        },
        kind
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var stories = this.props.stories;

      return _react2.default.createElement(
        'div',
        { className: 'sb-stories-list', style: listStyle },
        stories.map(this.renderKind)
      );
    }
  }]);
  return Stories;
}(_react2.default.Component);

Stories.propTypes = {
  stories: _react2.default.PropTypes.array.isRequired,
  selectedKind: _react2.default.PropTypes.string.isRequired,
  selectedStory: _react2.default.PropTypes.string.isRequired,
  onSelectStory: _react2.default.PropTypes.func
};

exports.default = Stories;