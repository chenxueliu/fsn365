webpackHotUpdate("static\\development\\pages\\asset.js",{

/***/ "./pages/asset/index.jsx":
/*!*******************************!*\
  !*** ./pages/asset/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Assets; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./pages/asset/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");




var _jsxFileName = "E:\\2020\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\asset\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var columns = [{
  id: "asset",
  label: "Asset",
  minWidth: 100
}, {
  id: "assetid",
  label: "Asse tId",
  minWidth: 200
}, {
  id: "quantity",
  label: "Quantity",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}];

function createData(asset, assetid, quantity) {
  return {
    asset: asset,
    assetid: assetid,
    quantity: quantity
  };
}

var rows = [createData("India", "IN", 1324171354, 3287263), createData("China", "CN", 1403500365, 9596961), createData("Italy", "IT", 60483973, 301340), createData("United States", "US", 327167434, 9833520), createData("Canada", "CA", 37602103, 9984670), createData("Australia", "AU", 25475400, 7692024), createData("Germany", "DE", 83019200, 357578), createData("Ireland", "IE", 4857000, 70273), createData("Mexico", "MX", 126577691, 1972550), createData("Japan", "JP", 126317000, 377973), createData("France", "FR", 67022000, 640679), createData("United Kingdom", "GB", 67545757, 242495), createData("Russia", "RU", 146793744, 17098246), createData("Nigeria", "NG", 200962417, 923768), createData("Brazil", "BR", 210147125, 8515767)];
function Assets() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      intval = _React$useState2[0],
      setvalue = _React$useState2[1]; // 请求数据


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var datares = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://api.fsn365.com/blocks");

              case 2:
                res = _context.sent;
                console.log(res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function datares() {
        return _ref.apply(this, arguments);
      };
    }();
  }, []);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(10),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      rowsPerPage = _React$useState6[0],
      setRowsPerPage = _React$useState6[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "tablecontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Assets"), __jsx("div", {
    className: "tablebox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, columns.map(function (column) {
      var value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: column.id,
        align: column.align,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 31
        }
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  })))));
}

_s(Assets, "yXcBt2/lam3uA9OMfsTmBGHZJm8=");

_c = Assets;

var _c;

$RefreshReg$(_c, "Assets");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsImNyZWF0ZURhdGEiLCJhc3NldCIsImFzc2V0aWQiLCJxdWFudGl0eSIsInJvd3MiLCJBc3NldHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW50dmFsIiwic2V0dmFsdWUiLCJ1c2VFZmZlY3QiLCJkYXRhcmVzIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicGFnZSIsInNldFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwibWFwIiwiY29sdW1uIiwic2xpY2UiLCJyb3ciLCJjb2RlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsT0FBTjtBQUFlQyxPQUFLLEVBQUUsT0FBdEI7QUFBK0JDLFVBQVEsRUFBRTtBQUF6QyxDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLFNBQU47QUFBaUJDLE9BQUssRUFBRSxVQUF4QjtBQUFvQ0MsVUFBUSxFQUFFO0FBQTlDLENBRmMsRUFHZDtBQUNFRixJQUFFLEVBQUUsVUFETjtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsT0FKVDtBQUtFQyxRQUFNLEVBQUUsZ0JBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGNBQU4sQ0FB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QUFLLEVBQUwsRUFBUyxHQUFULENBRHRCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUVNLElBQUksQ0FBQzJCLE1BSGQ7QUFJRSxlQUFXLEVBQUVaLFdBSmY7QUFLRSxRQUFJLEVBQUVGLElBTFI7QUFNRSxnQkFBWSxFQUFFSSxnQkFOaEI7QUFPRSx1QkFBbUIsRUFBRUcsdUJBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERixDQUZGLENBRkYsQ0FERjtBQStERDs7R0FuRnVCbkIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXNzZXQuanMuZmFhNGY2MWE4ODE2ODRhMGI4ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBOYXZpbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50L25hdmlucHV0L2luZGV4XCI7XHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBpZDogXCJhc3NldFwiLCBsYWJlbDogXCJBc3NldFwiLCBtaW5XaWR0aDogMTAwIH0sXHJcbiAgeyBpZDogXCJhc3NldGlkXCIsIGxhYmVsOiBcIkFzc2UgdElkXCIsIG1pbldpZHRoOiAyMDAgfSxcclxuICB7XHJcbiAgICBpZDogXCJxdWFudGl0eVwiLFxyXG4gICAgbGFiZWw6IFwiUXVhbnRpdHlcIixcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF0YShhc3NldCwgYXNzZXRpZCwgcXVhbnRpdHkpIHtcclxuICByZXR1cm4geyBhc3NldCwgYXNzZXRpZCwgcXVhbnRpdHkgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKFwiSW5kaWFcIiwgXCJJTlwiLCAxMzI0MTcxMzU0LCAzMjg3MjYzKSxcclxuICBjcmVhdGVEYXRhKFwiQ2hpbmFcIiwgXCJDTlwiLCAxNDAzNTAwMzY1LCA5NTk2OTYxKSxcclxuICBjcmVhdGVEYXRhKFwiSXRhbHlcIiwgXCJJVFwiLCA2MDQ4Mzk3MywgMzAxMzQwKSxcclxuICBjcmVhdGVEYXRhKFwiVW5pdGVkIFN0YXRlc1wiLCBcIlVTXCIsIDMyNzE2NzQzNCwgOTgzMzUyMCksXHJcbiAgY3JlYXRlRGF0YShcIkNhbmFkYVwiLCBcIkNBXCIsIDM3NjAyMTAzLCA5OTg0NjcwKSxcclxuICBjcmVhdGVEYXRhKFwiQXVzdHJhbGlhXCIsIFwiQVVcIiwgMjU0NzU0MDAsIDc2OTIwMjQpLFxyXG4gIGNyZWF0ZURhdGEoXCJHZXJtYW55XCIsIFwiREVcIiwgODMwMTkyMDAsIDM1NzU3OCksXHJcbiAgY3JlYXRlRGF0YShcIklyZWxhbmRcIiwgXCJJRVwiLCA0ODU3MDAwLCA3MDI3MyksXHJcbiAgY3JlYXRlRGF0YShcIk1leGljb1wiLCBcIk1YXCIsIDEyNjU3NzY5MSwgMTk3MjU1MCksXHJcbiAgY3JlYXRlRGF0YShcIkphcGFuXCIsIFwiSlBcIiwgMTI2MzE3MDAwLCAzNzc5NzMpLFxyXG4gIGNyZWF0ZURhdGEoXCJGcmFuY2VcIiwgXCJGUlwiLCA2NzAyMjAwMCwgNjQwNjc5KSxcclxuICBjcmVhdGVEYXRhKFwiVW5pdGVkIEtpbmdkb21cIiwgXCJHQlwiLCA2NzU0NTc1NywgMjQyNDk1KSxcclxuICBjcmVhdGVEYXRhKFwiUnVzc2lhXCIsIFwiUlVcIiwgMTQ2NzkzNzQ0LCAxNzA5ODI0NiksXHJcbiAgY3JlYXRlRGF0YShcIk5pZ2VyaWFcIiwgXCJOR1wiLCAyMDA5NjI0MTcsIDkyMzc2OCksXHJcbiAgY3JlYXRlRGF0YShcIkJyYXppbFwiLCBcIkJSXCIsIDIxMDE0NzEyNSwgODUxNTc2NylcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2V0cygpIHtcclxuICBjb25zdCBbaW50dmFsLCBzZXR2YWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgLy8g6K+35rGC5pWw5o2uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGFyZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBpLmZzbjM2NS5jb20vYmxvY2tzXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSBldmVudCA9PiB7XHJcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhZ2UoMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlucHV0IC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRhYmxlY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5Bc3NldHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVib3hcIj5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0ICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9