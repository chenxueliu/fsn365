webpackHotUpdate("static\\development\\pages\\asset.js",{

/***/ "./pages/asset/index.jsx":
/*!*******************************!*\
  !*** ./pages/asset/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeadTable; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");


var _jsxFileName = "E:\\2020\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\asset\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var columns = [{
  id: "name",
  label: "Name",
  minWidth: 170
}, {
  id: "code",
  label: "ISO\xA0Code",
  minWidth: 100
}, {
  id: "population",
  label: "Population",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "size",
  label: "Size\xA0(km\xB2)",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "density",
  label: "Density",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toFixed(2);
  }
}];

function createData(name, code, population, size) {
  var density = population / size;
  return {
    name: name,
    code: code,
    population: population,
    size: size,
    density: density
  };
}

var rows = [createData("India", "IN", 1324171354, 3287263), createData("China", "CN", 1403500365, 9596961), createData("Italy", "IT", 60483973, 301340), createData("United States", "US", 327167434, 9833520), createData("Canada", "CA", 37602103, 9984670), createData("Australia", "AU", 25475400, 7692024), createData("Germany", "DE", 83019200, 357578), createData("Ireland", "IE", 4857000, 70273), createData("Mexico", "MX", 126577691, 1972550), createData("Japan", "JP", 126317000, 377973), createData("France", "FR", 67022000, 640679), createData("United Kingdom", "GB", 67545757, 242495), createData("Russia", "RU", 146793744, 17098246), createData("Nigeria", "NG", 200962417, 923768), createData("Brazil", "BR", 210147125, 8515767)];
function StickyHeadTable() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

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
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "tablecontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "tablebox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }
    }, columns.map(function (column) {
      var value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: column.id,
        align: column.align,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 31
        }
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 121,
      columnNumber: 13
    }
  })))));
}

_s(StickyHeadTable, "65nbIEELuFY2eeUXbED/8VsHrEQ=");

_c = StickyHeadTable;

var _c;

$RefreshReg$(_c, "StickyHeadTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsInRvRml4ZWQiLCJjcmVhdGVEYXRhIiwibmFtZSIsImNvZGUiLCJwb3B1bGF0aW9uIiwic2l6ZSIsImRlbnNpdHkiLCJyb3dzIiwiU3RpY2t5SGVhZFRhYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsIm1hcCIsImNvbHVtbiIsInNsaWNlIiwicm93IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxNQUFOO0FBQWNDLE9BQUssRUFBRSxNQUFyQjtBQUE2QkMsVUFBUSxFQUFFO0FBQXZDLENBRGMsRUFFZDtBQUFFRixJQUFFLEVBQUUsTUFBTjtBQUFjQyxPQUFLLEVBQUUsYUFBckI7QUFBc0NDLFVBQVEsRUFBRTtBQUFoRCxDQUZjLEVBR2Q7QUFDRUYsSUFBRSxFQUFFLFlBRE47QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsVUFBUSxFQUFFLEdBSFo7QUFJRUMsT0FBSyxFQUFFLE9BSlQ7QUFLRUMsUUFBTSxFQUFFLGdCQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxjQUFOLENBQXFCLE9BQXJCLENBQUo7QUFBQTtBQUxmLENBSGMsRUFVZDtBQUNFTixJQUFFLEVBQUUsTUFETjtBQUVFQyxPQUFLLEVBQUUs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RVMsSUFBSSxDQUFDaUIsTUFIZDtBQUlFLGVBQVcsRUFBRVgsV0FKZjtBQUtFLFFBQUksRUFBRUYsSUFMUjtBQU1FLGdCQUFZLEVBQUVJLGdCQU5oQjtBQU9FLHVCQUFtQixFQUFFRyx1QkFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDRixDQURGLENBREYsQ0FGRixDQURGO0FBOEREOztHQTFFdUJWLGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0LmpzLjA4ZWZhZTI2YTgzNWUxMDVjZDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgTmF2aW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZpbnB1dC9pbmRleFwiO1xyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHsgaWQ6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIsIG1pbldpZHRoOiAxNzAgfSxcclxuICB7IGlkOiBcImNvZGVcIiwgbGFiZWw6IFwiSVNPXFx1MDBhMENvZGVcIiwgbWluV2lkdGg6IDEwMCB9LFxyXG4gIHtcclxuICAgIGlkOiBcInBvcHVsYXRpb25cIixcclxuICAgIGxhYmVsOiBcIlBvcHVsYXRpb25cIixcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJzaXplXCIsXHJcbiAgICBsYWJlbDogXCJTaXplXFx1MDBhMChrbVxcdTAwYjIpXCIsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiZGVuc2l0eVwiLFxyXG4gICAgbGFiZWw6IFwiRGVuc2l0eVwiLFxyXG4gICAgbWluV2lkdGg6IDE3MCxcclxuICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvRml4ZWQoMilcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNvZGUsIHBvcHVsYXRpb24sIHNpemUpIHtcclxuICBjb25zdCBkZW5zaXR5ID0gcG9wdWxhdGlvbiAvIHNpemU7XHJcbiAgcmV0dXJuIHsgbmFtZSwgY29kZSwgcG9wdWxhdGlvbiwgc2l6ZSwgZGVuc2l0eSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoXCJJbmRpYVwiLCBcIklOXCIsIDEzMjQxNzEzNTQsIDMyODcyNjMpLFxyXG4gIGNyZWF0ZURhdGEoXCJDaGluYVwiLCBcIkNOXCIsIDE0MDM1MDAzNjUsIDk1OTY5NjEpLFxyXG4gIGNyZWF0ZURhdGEoXCJJdGFseVwiLCBcIklUXCIsIDYwNDgzOTczLCAzMDEzNDApLFxyXG4gIGNyZWF0ZURhdGEoXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVNcIiwgMzI3MTY3NDM0LCA5ODMzNTIwKSxcclxuICBjcmVhdGVEYXRhKFwiQ2FuYWRhXCIsIFwiQ0FcIiwgMzc2MDIxMDMsIDk5ODQ2NzApLFxyXG4gIGNyZWF0ZURhdGEoXCJBdXN0cmFsaWFcIiwgXCJBVVwiLCAyNTQ3NTQwMCwgNzY5MjAyNCksXHJcbiAgY3JlYXRlRGF0YShcIkdlcm1hbnlcIiwgXCJERVwiLCA4MzAxOTIwMCwgMzU3NTc4KSxcclxuICBjcmVhdGVEYXRhKFwiSXJlbGFuZFwiLCBcIklFXCIsIDQ4NTcwMDAsIDcwMjczKSxcclxuICBjcmVhdGVEYXRhKFwiTWV4aWNvXCIsIFwiTVhcIiwgMTI2NTc3NjkxLCAxOTcyNTUwKSxcclxuICBjcmVhdGVEYXRhKFwiSmFwYW5cIiwgXCJKUFwiLCAxMjYzMTcwMDAsIDM3Nzk3MyksXHJcbiAgY3JlYXRlRGF0YShcIkZyYW5jZVwiLCBcIkZSXCIsIDY3MDIyMDAwLCA2NDA2NzkpLFxyXG4gIGNyZWF0ZURhdGEoXCJVbml0ZWQgS2luZ2RvbVwiLCBcIkdCXCIsIDY3NTQ1NzU3LCAyNDI0OTUpLFxyXG4gIGNyZWF0ZURhdGEoXCJSdXNzaWFcIiwgXCJSVVwiLCAxNDY3OTM3NDQsIDE3MDk4MjQ2KSxcclxuICBjcmVhdGVEYXRhKFwiTmlnZXJpYVwiLCBcIk5HXCIsIDIwMDk2MjQxNywgOTIzNzY4KSxcclxuICBjcmVhdGVEYXRhKFwiQnJhemlsXCIsIFwiQlJcIiwgMjEwMTQ3MTI1LCA4NTE1NzY3KVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RpY2t5SGVhZFRhYmxlKCkge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYWdlKDApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpbnB1dCAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ0YWJsZWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVib3hcIj5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0ICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9