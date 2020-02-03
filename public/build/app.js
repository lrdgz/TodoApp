(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/Components/AppSnackbar.js":
/*!*********************************************!*\
  !*** ./assets/js/Components/AppSnackbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js");
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");







function checkLevel(level) {
  switch (level) {
    case 'success':
      return 'green';

    case 'error':
      return 'red';

    default:
      return 'white';
  }
}

function AppSnackbar() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_4__["TodoContext"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    autoHideDuration: 6000,
    open: context.message.text !== undefined
  }, context.message.text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      backgroundColor: checkLevel(context.message.level)
    },
    message: context.message.text.map(function (text, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: index + ' ' + text
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
    }),
    action: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        context.setMessage({});
      },
      key: "dismiss",
      color: "inherit"
    }, "dismiss")]
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AppSnackbar);

/***/ }),

/***/ "./assets/js/Components/DeleteDialog.js":
/*!**********************************************!*\
  !*** ./assets/js/Components/DeleteDialog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");







function DeleteDialog(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_5__["TodoContext"]);

  var hide = function hide() {
    props.setDeleteConfirmationIsShown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    onClose: hide,
    fullWidth: true,
    maxWidth: "sm",
    open: props.open
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], null, "Are you sure you wish to delete this to-do?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], null, props.todo.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: hide
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      context.deleteTodo({
        id: props.todo.id,
        name: props.todo.name
      });
      hide();
    }
  }, "Delete")));
}

DeleteDialog.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  setDeleteConfirmationIsShown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  todo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape = {
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DeleteDialog);

/***/ }),

/***/ "./assets/js/Components/TodoTable.js":
/*!*******************************************!*\
  !*** ./assets/js/Components/TodoTable.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./DeleteDialog */ "./assets/js/Components/DeleteDialog.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function TodoTable() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_14__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_15__["TodoContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      addTodo = _useState2[0],
      setAddTodo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editIsShown = _useState4[0],
      setEditIsShown = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      editTodo = _useState6[0],
      setEditTodo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      deleteConfirmationIsShown = _useState8[0],
      setDeleteConfirmationIsShown = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      todoToBeDeleted = _useState10[0],
      setTodoToBeDeleted = _useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
    onSubmit: function onSubmit(event) {
      context.createTodo(event, {
        name: addTodo
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Table"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_18__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], null, "Task"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "right"
  }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_21__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"], {
    value: addTodo,
    onChange: function onChange(event) {
      setAddTodo(event.target.value);
    },
    label: "New Task",
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
    align: "right"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["IconButton"], {
    type: "submit"
  }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_24___default.a, null)))), context.todos.slice().reverse().map(function (todo, index) {
    return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: 'todo' + index
    }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], null, editIsShown === todo.id ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["TextField"], {
      fullWidth: true,
      value: editTodo,
      onChange: function onChange(event) {
        setEditTodo(event.target.value);
      },
      InputProps: {
        //endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
        endAdornment: react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["IconButton"], {
          onClick: function onClick() {
            setEditIsShown(false);
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_26___default.a, null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["IconButton"], {
          onClick: function onClick() {
            context.updateTodo({
              id: todo.id,
              name: editTodo
            });
            setEditIsShown(false);
          }
        }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_25___default.a, null)))
      }
    }) : todo.name), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__["default"], {
      align: "right"
    }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["IconButton"], {
      onClick: function onClick() {
        setEditIsShown(todo.id);
        setEditTodo(todo.name);
      }
    }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_22___default.a, null)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["IconButton"], {
      onClick: function onClick() {
        setDeleteConfirmationIsShown(true);
        setTodoToBeDeleted(todo);
      }
    }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23___default.a, null))));
  })))), deleteConfirmationIsShown && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_DeleteDialog__WEBPACK_IMPORTED_MODULE_27__["default"], {
    todo: todoToBeDeleted,
    open: deleteConfirmationIsShown,
    setDeleteConfirmationIsShown: setDeleteConfirmationIsShown
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TodoTable);

/***/ }),

/***/ "./assets/js/Contexts/TodoContext.js":
/*!*******************************************!*\
  !*** ./assets/js/Contexts/TodoContext.js ***!
  \*******************************************/
/*! exports provided: TodoContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoContext", function() { return TodoContext; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_28__);




























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TodoContext = Object(react__WEBPACK_IMPORTED_MODULE_27__["createContext"])();

var TodoContextProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoContextProvider, _React$Component);

  function TodoContextProvider(props) {
    var _this;

    _classCallCheck(this, TodoContextProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoContextProvider).call(this, props));
    _this.state = {
      todos: [],
      message: {}
    };

    _this.readTodo();

    return _this;
  } //create


  _createClass(TodoContextProvider, [{
    key: "createTodo",
    value: function createTodo(event, todo) {
      var _this2 = this;

      event.preventDefault();
      /*let data = [...this.state.todos];
      data.push(todo);
      this.setState( {
          todos: data,
      });*/

      axios__WEBPACK_IMPORTED_MODULE_28___default.a.post('/api/todo/create', todo).then(function (response) {
        console.log(response.data);

        if (response.data.message.level === 'success') {
          var data = _toConsumableArray(_this2.state.todos);

          data.push(response.data.todo);

          _this2.setState({
            todos: data,
            message: response.data.message
          });
        } else {
          _this2.setState({
            message: response.data.message
          });
        }
      })["catch"](function (error) {
        console.error(error);
      });
    } //read

  }, {
    key: "readTodo",
    value: function readTodo() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_28___default.a.get('/api/todo/read').then(function (response) {
        _this3.setState({
          todos: response.data
        });
      })["catch"](function (error) {
        console.error(error);
      });
    } //update

  }, {
    key: "updateTodo",
    value: function updateTodo(data) {
      var _this4 = this;

      // let todos = [...this.state.todos];
      //
      // let todo = todos.find(todo => {
      //     return todo.id === data.id;
      // });
      //
      // todo.name = data.name;
      // this.setState({ todos: todos });
      axios__WEBPACK_IMPORTED_MODULE_28___default.a.put('/api/todo/update/' + data.id, data).then(function (response) {
        console.log(response.data);

        var todos = _toConsumableArray(_this4.state.todos);

        var todo = todos.find(function (todo) {
          return todo.id === data.id;
        });
        todo.name = data.name;

        _this4.setState({
          todos: todos
        });
      })["catch"](function (error) {
        console.error(error);
      });
    } //delete

  }, {
    key: "deleteTodo",
    value: function deleteTodo(data) {
      var _this5 = this;

      // let todos = [...this.state.todos];
      //
      // let todo = todos.find(todo => {
      //     return todo.id === data.id;
      // });
      //
      // todos.splice(todos.indexOf(todo), 1);
      // this.setState({ todos: todos });
      axios__WEBPACK_IMPORTED_MODULE_28___default.a["delete"]('/api/todo/delete/' + data.id, data).then(function (response) {
        console.log(response.data);

        var todos = _toConsumableArray(_this5.state.todos);

        var todo = todos.find(function (todo) {
          return todo.id === data.id;
        });
        todos.splice(todos.indexOf(todo), 1);

        _this5.setState({
          todos: todos
        });
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(TodoContext.Provider, {
        value: _objectSpread({}, this.state, {
          createTodo: this.createTodo.bind(this),
          updateTodo: this.updateTodo.bind(this),
          deleteTodo: this.deleteTodo.bind(this),
          setMessage: function setMessage(message) {
            return _this6.setState({
              message: message
            });
          }
        })
      }, this.props.children);
    }
  }]);

  return TodoContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_27___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoContextProvider);

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");
/* harmony import */ var _Components_TodoTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/TodoTable */ "./assets/js/Components/TodoTable.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Components_AppSnackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/AppSnackbar */ "./assets/js/Components/AppSnackbar.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["CssBaseline"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_TodoTable__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_AppSnackbar__WEBPACK_IMPORTED_MODULE_16__["default"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component); // export default App;


react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.render(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(App, null), document.getElementById("root"));

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9BcHBTbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9EZWxldGVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0NvbXBvbmVudHMvVG9kb1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db250ZXh0cy9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImNoZWNrTGV2ZWwiLCJsZXZlbCIsIkFwcFNuYWNrYmFyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsIm1lc3NhZ2UiLCJ0ZXh0IiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiaW5kZXgiLCJzZXRNZXNzYWdlIiwiRGVsZXRlRGlhbG9nIiwicHJvcHMiLCJoaWRlIiwic2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93biIsIm9wZW4iLCJ0b2RvIiwibmFtZSIsImRlbGV0ZVRvZG8iLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwiVG9kb1RhYmxlIiwidXNlU3RhdGUiLCJhZGRUb2RvIiwic2V0QWRkVG9kbyIsImVkaXRJc1Nob3duIiwic2V0RWRpdElzU2hvd24iLCJlZGl0VG9kbyIsInNldEVkaXRUb2RvIiwiZGVsZXRlQ29uZmlybWF0aW9uSXNTaG93biIsInRvZG9Ub0JlRGVsZXRlZCIsInNldFRvZG9Ub0JlRGVsZXRlZCIsImV2ZW50IiwiY3JlYXRlVG9kbyIsInRhcmdldCIsInZhbHVlIiwidG9kb3MiLCJzbGljZSIsInJldmVyc2UiLCJlbmRBZG9ybm1lbnQiLCJ1cGRhdGVUb2RvIiwiY3JlYXRlQ29udGV4dCIsIlRvZG9Db250ZXh0UHJvdmlkZXIiLCJzdGF0ZSIsInJlYWRUb2RvIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInB1c2giLCJzZXRTdGF0ZSIsImVycm9yIiwiZ2V0IiwicHV0IiwiZmluZCIsInNwbGljZSIsImluZGV4T2YiLCJiaW5kIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLFVBQVFBLEtBQVI7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFPLE9BQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxLQUFQOztBQUNKO0FBQ0ksYUFBTyxPQUFQO0FBTlI7QUFTSDs7QUFFRCxTQUFTQyxXQUFULEdBQXVCO0FBRW5CLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBMUI7QUFFQSxTQUNHLDJEQUFDLDBEQUFEO0FBQ0ksb0JBQWdCLEVBQUUsSUFEdEI7QUFFSSxRQUFJLEVBQUVGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFBaEIsS0FBeUJDO0FBRm5DLEtBSU1MLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFBaEIsSUFDRSwyREFBQyx5RUFBRDtBQUNJLFNBQUssRUFBRTtBQUFFRSxxQkFBZSxFQUFFVCxVQUFVLENBQUNHLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkwsS0FBakI7QUFBN0IsS0FEWDtBQUVJLFdBQU8sRUFBRUUsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxJQUFoQixDQUFxQkcsR0FBckIsQ0FBeUIsVUFBQ0gsSUFBRCxFQUFPSSxLQUFQO0FBQUEsYUFDOUIsMkRBQUMsOENBQUQ7QUFBVSxXQUFHLEVBQUVBLEtBQUssR0FBRyxHQUFSLEdBQWNKO0FBQTdC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O0FBSXZCbEQsb0JBQVUsRUFBRSxLQUFLQSxVQUFMLENBQWdCa0QsSUFBaEIsQ0FBcUIsSUFBckIsQ0FKVztBQUt2QjFELG9CQUFVLEVBQUUsb0JBQUNOLE9BQUQ7QUFBQSxtQkFBYSxNQUFJLENBQUN5RCxRQUFMLENBQWM7QUFBRXpELHFCQUFPLEVBQUNBO0FBQVYsYUFBZCxDQUFiO0FBQUE7QUFMVztBQUEzQixTQU9NLEtBQUtRLEtBQUwsQ0FBV3lELFFBUGpCLENBREo7QUFXSDs7OztFQWhJNkJDLDZDQUFLLENBQUNDLFM7O0FBbUl6QnRCLGtGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNdUIsRzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0ksNERBQUMsOERBQUQsUUFDSSw0REFBQyw4REFBRCxRQUNJLDREQUFDLDhEQUFELE9BREosRUFFSSw0REFBQyxnRUFBRCxPQUZKLENBREosQ0FESjtBQVFIOzs7O0VBVmFGLDZDQUFLLENBQUNDLFMsR0FheEI7OztBQUVBRSxpREFBUSxDQUFDQyxNQUFULENBQWdCLDREQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF4QixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU25hY2tiYXJDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhckNvbnRlbnRcIjtcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRzL1RvZG9Db250ZXh0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGV2ZWwobGV2ZWwpe1xyXG4gICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gJ2dyZWVuJztcclxuICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgIHJldHVybiAncmVkJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ3doaXRlJztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcFNuYWNrYmFyKCkge1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRvZG9Db250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuICAgICAgICAgICBvcGVuPXtjb250ZXh0Lm1lc3NhZ2UudGV4dCAhPT0gdW5kZWZpbmVkfVxyXG4gICAgICAgPlxyXG4gICAgICAgICAgIHsgY29udGV4dC5tZXNzYWdlLnRleHQgJiYgKFxyXG4gICAgICAgICAgICAgICA8U25hY2tiYXJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrTGV2ZWwoY29udGV4dC5tZXNzYWdlLmxldmVsKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgbWVzc2FnZT17Y29udGV4dC5tZXNzYWdlLnRleHQubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4ICsgJyAnICsgdGV4dCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29udGV4dC5zZXRNZXNzYWdlKHt9KX0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdkaXNtaXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID5kaXNtaXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICApIH1cclxuICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBTbmFja2JhcjsiLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1RvZG9Db250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZURpYWxvZyhwcm9wcykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXtoaWRlfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG1heFdpZHRoPSdzbSdcclxuICAgICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5BcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHRoaXMgdG8tZG8/PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7IHByb3BzLnRvZG8ubmFtZSB9XHJcbiAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBoaWRlIH0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlbGV0ZVRvZG8oe2lkOiBwcm9wcy50b2RvLmlkICwgbmFtZTogcHJvcHMudG9kby5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoKVxyXG4gICAgICAgICAgICAgICAgfSB9PkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICApO1xyXG59XHJcblxyXG5EZWxldGVEaWFsb2cucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB0b2RvOiBQcm9wVHlwZXMuc2hhcGUgPSAoeyBpZDogUHJvcFR5cGVzLm51bWJlciwgbmFtZTogUHJvcFR5cGVzLnN0cmluZyB9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVEaWFsb2c7IiwiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7VG9kb0NvbnRleHR9IGZyb20gXCIuLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5pbXBvcnQge1RhYmxlLCBJY29uQnV0dG9uLCBUZXh0RmllbGR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5pbXBvcnQgRG9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgRGVsZXRlRGlhbG9nIGZyb20gXCIuL0RlbGV0ZURpYWxvZ1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFRvZG9UYWJsZSgpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRvZG9Db250ZXh0KTtcclxuICAgIGNvbnN0IFthZGRUb2RvLCBzZXRBZGRUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlZGl0SXNTaG93biwgc2V0RWRpdElzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VkaXRUb2RvLCBzZXRFZGl0VG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGVsZXRlQ29uZmlybWF0aW9uSXNTaG93biwgc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdG9kb1RvQmVEZWxldGVkLCBzZXRUb2RvVG9CZURlbGV0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNyZWF0ZVRvZG8oZXZlbnQsIHtuYW1lOiBhZGRUb2RvfSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYXNrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPXtcInJpZ2h0XCJ9PkFjdGlvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZFRvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkZFRvZG8oZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJOZXcgVGFza1wifSBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRleHQudG9kb3Muc2xpY2UoKS5yZXZlcnNlKCkubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17J3RvZG8nICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRJc1Nob3duID09PSB0b2RvLmlkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0VG9kbyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZW5kQWRvcm5tZW50OiAvLzxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+PEljb25CdXR0b24+PERvbmVJY29uLz48L0ljb25CdXR0b24+PC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRJc1Nob3duKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT48Q2xvc2VJY29uLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC51cGRhdGVUb2RvKHtpZDogdG9kby5pZCwgbmFtZTogZWRpdFRvZG99KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0SXNTaG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PERvbmVJY29uLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRJc1Nob3duKHRvZG8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdFRvZG8odG9kby5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2RvVG9CZURlbGV0ZWQodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIHsgZGVsZXRlQ29uZmlybWF0aW9uSXNTaG93biAmJiAoXHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlRGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kbz17dG9kb1RvQmVEZWxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e2RlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd259XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bj17c2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvVGFibGU7IiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY2xhc3MgVG9kb0NvbnRleHRQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0b2RvczogW10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHt9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVhZFRvZG8oKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZVxyXG4gICAgY3JlYXRlVG9kbyhldmVudCwgdG9kbyl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvKmxldCBkYXRhID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgIGRhdGEucHVzaCh0b2RvKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgICAgIHRvZG9zOiBkYXRhLFxyXG4gICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdG9kby9jcmVhdGUnLCB0b2RvKVxyXG4gICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEubWVzc2FnZS5sZXZlbCA9PT0gJ3N1Y2Nlc3MnKXtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcbiAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChyZXNwb25zZS5kYXRhLnRvZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvczogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7bWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZWFkXHJcbiAgICByZWFkVG9kbygpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvL3JlYWQnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvczogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICB1cGRhdGVUb2RvKGRhdGEpIHtcclxuICAgICAgICAvLyBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0b2RvLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdG9kby5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcblxyXG4gICAgICAgIGF4aW9zLnB1dCgnL2FwaS90b2RvL3VwZGF0ZS8nICsgZGF0YS5pZCwgZGF0YSApXHJcbiAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIGxldCB0b2RvcyA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgdG9kby5uYW1lID0gZGF0YS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG5cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgZGVsZXRlVG9kbyhkYXRhKXtcclxuICAgICAgICAvLyBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBsZXQgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0b2RvLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcblxyXG4gICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS90b2RvL2RlbGV0ZS8nICsgZGF0YS5pZCwgZGF0YSApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b2RvcyA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG8uaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2Rvcy5zcGxpY2UodG9kb3MuaW5kZXhPZih0b2RvKSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZG9zOiB0b2RvcyB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUb2RvQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbzogdGhpcy5jcmVhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUb2RvOiB0aGlzLnVwZGF0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG86IHRoaXMuZGVsZXRlVG9kby5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZTogKG1lc3NhZ2UpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOm1lc3NhZ2UgfSksXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9Ub2RvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVG9kb0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5pbXBvcnQgVG9kb1RhYmxlIGZyb20gXCIuL0NvbXBvbmVudHMvVG9kb1RhYmxlXCI7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQXBwU25hY2tiYXIgZnJvbSBcIi4vQ29tcG9uZW50cy9BcHBTbmFja2JhclwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG9kb0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9kb1RhYmxlLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwU25hY2tiYXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Dc3NCYXNlbGluZT5cclxuICAgICAgICAgICAgPC9Ub2RvQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblJlYWN0RG9tLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==