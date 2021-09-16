"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/rhysbrame/Repositories/nextPlayerUp/pages/index.js\";\n\nconst URL = 'https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=a79947c2b7ac4db7849431550720651c';\n\nfunction Home({\n  teams\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    children: teams.map(team => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: team.FullName\n      }, team.TeamID, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: team.WikipediaLogoUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\nasync function getStaticProps() {\n  const res = await fetch(URL);\n  const teams = await res.json();\n  return {\n    props: {\n      teams\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQ1AsNEZBREY7O0FBR0EsU0FBU0MsSUFBVCxDQUFjO0FBQUVDLEVBQUFBO0FBQUYsQ0FBZCxFQUF5QjtBQUN2QixzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsOEJBQ0U7QUFBQSxrQkFBdUJBLElBQUksQ0FBQ0M7QUFBNUIsU0FBU0QsSUFBSSxDQUFDRSxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssV0FBRyxFQUFFRixJQUFJLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDVixHQUFELENBQXZCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHLE1BQU1PLEdBQUcsQ0FBQ0UsSUFBSixFQUFwQjtBQUVBLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQ0xWLE1BQUFBO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFRCxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRwbGF5ZXJ1cC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVVJMID1cbiAgJ2h0dHBzOi8vYXBpLnNwb3J0c2RhdGEuaW8vdjMvbmZsL3Njb3Jlcy9qc29uL0FsbFRlYW1zP2tleT1hNzk5NDdjMmI3YWM0ZGI3ODQ5NDMxNTUwNzIwNjUxYyc7XG5cbmZ1bmN0aW9uIEhvbWUoeyB0ZWFtcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3RlYW1zLm1hcCgodGVhbSkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsaSBrZXk9e3RlYW0uVGVhbUlEfT57dGVhbS5GdWxsTmFtZX08L2xpPlxuICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtLldpa2lwZWRpYUxvZ29Vcmx9PjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgY29uc3QgdGVhbXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRlYW1zLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiVVJMIiwiSG9tZSIsInRlYW1zIiwibWFwIiwidGVhbSIsIkZ1bGxOYW1lIiwiVGVhbUlEIiwiV2lraXBlZGlhTG9nb1VybCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();