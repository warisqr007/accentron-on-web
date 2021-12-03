webpackHotUpdate("main",{

/***/ "./frontend/src/containers/LandingPage.js":
/*!************************************************!*\
  !*** ./frontend/src/containers/LandingPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.module.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/example */ \"./frontend/src/redux/example.js\");\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar LandingPage = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (store) {\n  return {\n    // linking the redux store with this component\n    examples: store.example.exampleList\n  };\n}), _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(LandingPage, _React$Component);\n\n  function LandingPage() {\n    _classCallCheck(this, LandingPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));\n  }\n\n  _createClass(LandingPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.dispatch(Object(_redux_example__WEBPACK_IMPORTED_MODULE_3__[\"getExamples\"])());\n    }\n  }, {\n    key: \"pageHeader\",\n    value: function pageHeader() {\n      var pageHeader = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          backgroundColor: \"black\",\n          //backgroundImage:\n          //  \"url(\" + backgroundImageUrl + \")\",\n          backgroundPosition: \"center center\",\n          backgroundSize: \"cover\",\n          minHeight: \"30vh\",\n          maxHeight: \"120px\",\n          overflow: \"hidden\",\n          position: \"relative\",\n          width: \"100%\",\n          zIndex: \"1\",\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"center\"\n        },\n        \"data-parallax\": true,\n        ref: pageHeader\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n        className: \"mx-auto text-center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        sm: \"10\",\n        md: \"10\",\n        lg: \"9\",\n        xl: \"9\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        style: {\n          color: \"white\"\n        }\n      }, \"Accentron\")))));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.pageHeader());\n    }\n  }]);\n\n  return LandingPage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9zcmMvY29udGFpbmVycy9MYW5kaW5nUGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL3NyYy9jb250YWluZXJzL0xhbmRpbmdQYWdlLmpzPzY1NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgeyBnZXRFeGFtcGxlcyB9IGZyb20gXCIuLi9yZWR1eC9leGFtcGxlXCJcblxuQGNvbm5lY3Qoc3RvcmUgPT4gKHtcbiAgICAvLyBsaW5raW5nIHRoZSByZWR1eCBzdG9yZSB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAgZXhhbXBsZXM6IHN0b3JlLmV4YW1wbGUuZXhhbXBsZUxpc3QsXG59KSlcblxuY2xhc3MgTGFuZGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0RXhhbXBsZXMoKSlcbiAgICB9XG5cbiAgICBwYWdlSGVhZGVyKCl7XG4gICAgICAgIGxldCBwYWdlSGVhZGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFwidXJsKFwiICsgYmFja2dyb3VuZEltYWdlVXJsICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCIzMHZoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJhbGxheD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtwYWdlSGVhZGVyfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIiBtZD1cIjEwXCIgbGc9XCI5XCIgeGw9XCI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+QWNjZW50cm9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3RoaXMucGFnZUhlYWRlcigpfVxuXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2VcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQWxCQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7OztBQUVBO0FBQ0E7QUFNQTs7OztBQWhEQTtBQW1EQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/src/containers/LandingPage.js\n");

/***/ })

})