webpackHotUpdate("main",{

/***/ "./frontend/src/containers/LandingPage.js":
/*!************************************************!*\
  !*** ./frontend/src/containers/LandingPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/example */ \"./frontend/src/redux/example.js\");\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar LandingPage = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (store) {\n  return {\n    // linking the redux store with this component\n    examples: store.example.exampleList\n  };\n}), _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LandingPage, _React$Component);\n\n  function LandingPage() {\n    _classCallCheck(this, LandingPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));\n  }\n\n  _createClass(LandingPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_redux_example__WEBPACK_IMPORTED_MODULE_2__[\"getExamples\"])());\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          backgroundColor: \"black\",\n          //backgroundImage:\n          //  \"url(\" + backgroundImageUrl + \")\",\n          backgroundPosition: \"center\",\n          backgroundSize: \"cover\",\n          minHeight: \"30vh\",\n          maxHeight: \"120px\",\n          overflow: \"hidden\",\n          position: \"relative\",\n          width: \"100%\",\n          zIndex: \"1\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        \"data-parallax\": true,\n        ref: pageHeader\n      }, \"LandingPage\"));\n    }\n  }]);\n\n  return LandingPage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9zcmMvY29udGFpbmVycy9MYW5kaW5nUGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9jb250YWluZXJzL0xhbmRpbmdQYWdlLmpzPzY1NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGdldEV4YW1wbGVzIH0gZnJvbSBcIi4uL3JlZHV4L2V4YW1wbGVcIlxuXG5AY29ubmVjdChzdG9yZSA9PiAoe1xuICAgIC8vIGxpbmtpbmcgdGhlIHJlZHV4IHN0b3JlIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICBleGFtcGxlczogc3RvcmUuZXhhbXBsZS5leGFtcGxlTGlzdCxcbn0pKVxuXG5jbGFzcyBMYW5kaW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRFeGFtcGxlcygpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gIFwidXJsKFwiICsgYmFja2dyb3VuZEltYWdlVXJsICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjMwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJhbGxheD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwYWdlSGVhZGVyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTGFuZGluZ1BhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBbEJBO0FBeUJBOzs7O0FBbENBO0FBcUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/src/containers/LandingPage.js\n");

/***/ })

})