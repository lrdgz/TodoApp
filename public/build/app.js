(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/Components/AppSnackbar.js":
/*!*********************************************!*\
  !*** ./assets/js/Components/AppSnackbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js");
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");






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
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_3__["TodoContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    autoHideDuration: 6000,
    open: context.message.text !== undefined
  }, context.message.text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      backgroundColor: checkLevel(context.message.level)
    },
    message: context.message.text,
    action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
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
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Contexts/TodoContext */ "./assets/js/Contexts/TodoContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _DeleteDialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./DeleteDialog */ "./assets/js/Components/DeleteDialog.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function TodoTable() {
  var _this = this;

  var context = Object(react__WEBPACK_IMPORTED_MODULE_15__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_16__["TodoContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      addTodo = _useState2[0],
      setAddTodo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editIsShown = _useState4[0],
      setEditIsShown = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      editTodo = _useState6[0],
      setEditTodo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      deleteConfirmationIsShown = _useState8[0],
      setDeleteConfirmationIsShown = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      todoToBeDeleted = _useState10[0],
      setTodoToBeDeleted = _useState10[1];

  var onCreateSubmit = function onCreateSubmit(event) {
    event.preventDefault();
    context.createTodo(event, {
      name: addTodo
    });
    setAddTodo('');
  };

  var onEditSubmit = function onEditSubmit(todoId, event) {
    event.preventDefault();
    context.updateTodo({
      id: todoId,
      name: editTodo
    });
    setEditIsShown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Table"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Task"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], {
    align: "right"
  }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
    onSubmit: onCreateSubmit
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
    value: addTodo,
    onChange: function onChange(event) {
      setAddTodo(event.target.value);
    },
    label: "New Task",
    fullWidth: true
  }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], {
    align: "right"
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
    type: "submit",
    onClick: onCreateSubmit
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_25___default.a, null)))), context.todos.slice().reverse().map(function (todo, index) {
    return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], {
      key: 'todo' + index
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, editIsShown === todo.id ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
      onSubmit: onEditSubmit.bind(_this, todo.id)
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
      type: "text",
      autoFocus: true,
      fullWidth: true,
      value: editTodo,
      onChange: function onChange(event) {
        setEditTodo(event.target.value);
      },
      InputProps: {
        //endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
        endAdornment: react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
          onClick: function onClick() {
            setEditIsShown(false);
          }
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_27___default.a, null)), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
          type: "submit"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_26___default.a, null)))
      }
    })) : todo.name), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], {
      align: "right"
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: function onClick() {
        setEditIsShown(todo.id);
        setEditTodo(todo.name);
      }
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default.a, null)), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: function onClick() {
        setDeleteConfirmationIsShown(true);
        setTodoToBeDeleted(todo);
      }
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default.a, null))));
  }))), deleteConfirmationIsShown && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_DeleteDialog__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9BcHBTbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9EZWxldGVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0NvbXBvbmVudHMvVG9kb1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db250ZXh0cy9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImNoZWNrTGV2ZWwiLCJsZXZlbCIsIkFwcFNuYWNrYmFyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsIm1lc3NhZ2UiLCJ0ZXh0IiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZENvbG9yIiwic2V0TWVzc2FnZSIsIkRlbGV0ZURpYWxvZyIsInByb3BzIiwiaGlkZSIsInNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24iLCJvcGVuIiwidG9kbyIsIm5hbWUiLCJkZWxldGVUb2RvIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsIlRvZG9UYWJsZSIsInVzZVN0YXRlIiwiYWRkVG9kbyIsInNldEFkZFRvZG8iLCJlZGl0SXNTaG93biIsInNldEVkaXRJc1Nob3duIiwiZWRpdFRvZG8iLCJzZXRFZGl0VG9kbyIsImRlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24iLCJ0b2RvVG9CZURlbGV0ZWQiLCJzZXRUb2RvVG9CZURlbGV0ZWQiLCJvbkNyZWF0ZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUb2RvIiwib25FZGl0U3VibWl0IiwidG9kb0lkIiwidXBkYXRlVG9kbyIsInRhcmdldCIsInZhbHVlIiwidG9kb3MiLCJzbGljZSIsInJldmVyc2UiLCJtYXAiLCJpbmRleCIsImJpbmQiLCJlbmRBZG9ybm1lbnQiLCJjcmVhdGVDb250ZXh0IiwiVG9kb0NvbnRleHRQcm92aWRlciIsInN0YXRlIiwicmVhZFRvZG8iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInB1c2giLCJzZXRTdGF0ZSIsImVycm9yIiwiZ2V0IiwicHV0IiwiZmluZCIsInNwbGljZSIsImluZGV4T2YiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXBwIiwiUmVhY3REb20iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQ3RCLFVBQVFBLEtBQVI7QUFDSSxTQUFLLFNBQUw7QUFDSSxhQUFPLE9BQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTyxLQUFQOztBQUNKO0FBQ0ksYUFBTyxPQUFQO0FBTlI7QUFRSDs7QUFHRCxTQUFTQyxXQUFULEdBQXVCO0FBRW5CLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBMUI7QUFFQSxTQUNHLDJEQUFDLDBEQUFEO0FBQ0ksb0JBQWdCLEVBQUUsSUFEdEI7QUFFSSxRQUFJLEVBQUVGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFBaEIsS0FBeUJDO0FBRm5DLEtBSU1MLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsSUFBaEIsSUFDRSwyREFBQyx5RUFBRDtBQUNJLFNBQUssRUFBRTtBQUFFRSxxQkFBZSxFQUFFVCxVQUFVLENBQUNHLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkwsS0FBakI7QUFBN0IsS0FEWDtBQUVJLFdBQU8sRUFBRUUsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxJQUY3QjtBQUdJLFVBQU0sRUFDRixDQUNJLDJEQUFDLGdFQUFEO0FBQ0ksYUFB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IHtGcmFnbWVudCwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NuYWNrYmFyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNuYWNrYmFyQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJDb250ZW50XCI7XHJcbmltcG9ydCB7VG9kb0NvbnRleHR9IGZyb20gXCIuLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0xldmVsKGxldmVsKXtcclxuICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICAgICAgcmV0dXJuICdncmVlbic7XHJcbiAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICd3aGl0ZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBBcHBTbmFja2JhcigpIHtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcbiAgICAgICAgICAgb3Blbj17Y29udGV4dC5tZXNzYWdlLnRleHQgIT09IHVuZGVmaW5lZH1cclxuICAgICAgID5cclxuICAgICAgICAgICB7IGNvbnRleHQubWVzc2FnZS50ZXh0ICYmIChcclxuICAgICAgICAgICAgICAgPFNuYWNrYmFyQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjaGVja0xldmVsKGNvbnRleHQubWVzc2FnZS5sZXZlbCkgfX1cclxuICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2NvbnRleHQubWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjb250ZXh0LnNldE1lc3NhZ2Uoe30pfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9J2Rpc21pc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0naW5oZXJpdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPmRpc21pc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICkgfVxyXG4gICAgICAgPC9TbmFja2Jhcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFNuYWNrYmFyOyIsImltcG9ydCB7RGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7VG9kb0NvbnRleHR9IGZyb20gXCIuLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHByb3BzKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGV9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgbWF4V2lkdGg9J3NtJ1xyXG4gICAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlPkFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyB0by1kbz88L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMudG9kby5uYW1lIH1cclxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IGhpZGUgfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVsZXRlVG9kbyh7aWQ6IHByb3BzLnRvZG8uaWQgLCBuYW1lOiBwcm9wcy50b2RvLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9IH0+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICk7XHJcbn1cclxuXHJcbkRlbGV0ZURpYWxvZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHRvZG86IFByb3BUeXBlcy5zaGFwZSA9ICh7IGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRGlhbG9nOyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RvZG9Db250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuaW1wb3J0IHtUYWJsZSwgSWNvbkJ1dHRvbiwgVGV4dEZpZWxkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IERlbGV0ZURpYWxvZyBmcm9tIFwiLi9EZWxldGVEaWFsb2dcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvVGFibGUoKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvQ29udGV4dCk7XHJcbiAgICBjb25zdCBbYWRkVG9kbywgc2V0QWRkVG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZWRpdElzU2hvd24sIHNldEVkaXRJc1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlZGl0VG9kbywgc2V0RWRpdFRvZG9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24sIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvZG9Ub0JlRGVsZXRlZCwgc2V0VG9kb1RvQmVEZWxldGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkNyZWF0ZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb250ZXh0LmNyZWF0ZVRvZG8oZXZlbnQsIHtuYW1lOiBhZGRUb2RvfSk7XHJcbiAgICAgIHNldEFkZFRvZG8oJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkVkaXRTdWJtaXQgPSAodG9kb0lkLCBldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29udGV4dC51cGRhdGVUb2RvKHtpZDogdG9kb0lkLCBuYW1lOiBlZGl0VG9kb30pO1xyXG4gICAgICAgIHNldEVkaXRJc1Nob3duKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYXNrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPXtcInJpZ2h0XCJ9PkFjdGlvbnM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkNyZWF0ZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZFRvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGRUb2RvKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcIk5ldyBUYXNrXCJ9IGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17b25DcmVhdGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZXh0LnRvZG9zLnNsaWNlKCkucmV2ZXJzZSgpLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9eyd0b2RvJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXNTaG93biA9PT0gdG9kby5pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRWRpdFN1Ym1pdC5iaW5kKHRoaXMsdG9kby5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRUb2RvKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbmRBZG9ybm1lbnQ6IC8vPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj48SWNvbkJ1dHRvbj48RG9uZUljb24vPjwvSWNvbkJ1dHRvbj48L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudDogPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0SXNTaG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT48Q2xvc2VJY29uLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48RG9uZUljb24vPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRJc1Nob3duKHRvZG8uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdFRvZG8odG9kby5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2RvVG9CZURlbGV0ZWQodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcblxyXG4gICAgICAgICAgICB7IGRlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZURpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG89e3RvZG9Ub0JlRGVsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtkZWxldGVDb25maXJtYXRpb25Jc1Nob3dufVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd249e3NldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb1RhYmxlOyIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNsYXNzIFRvZG9Db250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9kb3M6IFtdLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB7fSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlYWRUb2RvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jcmVhdGVcclxuICAgIGNyZWF0ZVRvZG8oZXZlbnQsIHRvZG8pe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLypsZXQgZGF0YSA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuICAgICAgICBkYXRhLnB1c2godG9kbyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgge1xyXG4gICAgICAgICAgICB0b2RvczogZGF0YSxcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvZG8vY3JlYXRlJywgdG9kbylcclxuICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm1lc3NhZ2UubGV2ZWwgPT09ICdzdWNjZXNzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2gocmVzcG9uc2UuZGF0YS50b2RvKTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3M6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgge21lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vcmVhZFxyXG4gICAgcmVhZFRvZG8oKXtcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG9kby9yZWFkJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZVxyXG4gICAgdXBkYXRlVG9kbyhkYXRhKSB7XHJcbiAgICAgICAgLy8gbGV0IHRvZG9zID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRvZG8ubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG5cclxuICAgICAgICBheGlvcy5wdXQoJy9hcGkvdG9kby91cGRhdGUvJyArIGRhdGEuaWQsIGRhdGEgKVxyXG4gICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgICAgICAgICAgIGxldCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG8uaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHRvZG8ubmFtZSA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvZG9zOiB0b2RvcyB9KTtcclxuXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGRlbGV0ZVRvZG8oZGF0YSl7XHJcbiAgICAgICAgLy8gbGV0IHRvZG9zID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG8pLCAxKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvdG9kby9kZWxldGUvJyArIGRhdGEuaWQsIGRhdGEgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG9kb0NvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG86IHRoaXMuY3JlYXRlVG9kby5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG9kbzogdGhpcy51cGRhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkZWxldGVUb2RvOiB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2U6IChtZXNzYWdlKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTptZXNzYWdlIH0pLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvVG9kb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0NvbnRleHRQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRvZG9Db250ZXh0UHJvdmlkZXIgZnJvbSBcIi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuaW1wb3J0IFRvZG9UYWJsZSBmcm9tIFwiLi9Db21wb25lbnRzL1RvZG9UYWJsZVwiO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcFNuYWNrYmFyIGZyb20gXCIuL0NvbXBvbmVudHMvQXBwU25hY2tiYXJcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRvZG9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZG9UYWJsZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFNuYWNrYmFyLz5cclxuICAgICAgICAgICAgICAgIDwvQ3NzQmFzZWxpbmU+XHJcbiAgICAgICAgICAgIDwvVG9kb0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyJdLCJzb3VyY2VSb290IjoiIn0=