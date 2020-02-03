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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function TodoTable() {
  var _this = this;

  var context = Object(react__WEBPACK_IMPORTED_MODULE_15__["useContext"])(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_16__["TodoContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      addTodoName = _useState2[0],
      setAddTodoName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      addTodoDescription = _useState4[0],
      setAddTodoDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      editIsShown = _useState6[0],
      setEditIsShown = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      editTodoName = _useState8[0],
      setEditTodoName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      editTodoDescription = _useState10[0],
      setEditTodoDescription = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      deleteConfirmationIsShown = _useState12[0],
      setDeleteConfirmationIsShown = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      todoToBeDeleted = _useState14[0],
      setTodoToBeDeleted = _useState14[1];

  var onCreateSubmit = function onCreateSubmit(event) {
    event.preventDefault();
    context.createTodo(event, {
      name: addTodoName,
      description: addTodoDescription
    });
    setAddTodoName('');
    setAddTodoDescription('');
  };

  var onEditSubmit = function onEditSubmit(todoId, event) {
    event.preventDefault();
    context.updateTodo({
      id: todoId,
      name: editTodoName,
      description: editTodoDescription
    });
    setEditIsShown(false);
  };

  var clear = function clear() {
    setEditIsShown(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Table"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Task"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, "Description"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], {
    align: "right"
  }, "Actions"))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
    onSubmit: onCreateSubmit
  }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
    type: "text",
    value: addTodoName,
    onChange: function onChange(event) {
      setAddTodoName(event.target.value);
    },
    label: "New Task",
    fullWidth: true
  }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
    type: "text",
    value: addTodoDescription,
    onChange: function onChange(event) {
      setAddTodoDescription(event.target.value);
    },
    label: "Description",
    fullWidth: true,
    multiline: true
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
      value: editTodoName,
      onChange: function onChange(event) {
        setEditTodoName(event.target.value);
      } // InputProps={{
      //     //endAdornment: //<InputAdornment position="start"><IconButton><DoneIcon/></IconButton></InputAdornment>
      //     endAdornment: <Fragment>
      //         <IconButton
      //             onClick={
      //                 () => {
      //                     setEditIsShown(false);
      //                 }
      //             }><CloseIcon/></IconButton>
      //         <IconButton
      //             type='submit'
      //         ><DoneIcon/></IconButton>
      //     </Fragment>
      // }}

    })) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], null, " ", todo.name, " ")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], null, editIsShown === todo.id ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["TextField"], {
      type: "text",
      fullWidth: true,
      multiline: true,
      value: editTodoDescription,
      onChange: function onChange(event) {
        setEditTodoDescription(event.target.value);
      }
    }) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], {
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, " ", todo.description, " ")), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_21__["default"], {
      align: "right"
    }, editIsShown === todo.id ? react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: onEditSubmit.bind(_this, todo.id)
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_26___default.a, null)), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: function onClick() {
        setEditIsShown(false);
      }
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_27___default.a, null))) : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: function onClick() {
        setEditIsShown(todo.id);
        setEditTodoName(todo.name);
        setEditTodoDescription(todo.description);
      }
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default.a, null)), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
      onClick: function onClick() {
        setDeleteConfirmationIsShown(true);
        setTodoToBeDeleted(todo);
      }
    }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_24___default.a, null)))));
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
        if (response.data.message.level === 'error') {
          _this4.setState({
            message: response.data.message
          });
        } else {
          console.log(response.data);

          var todos = _toConsumableArray(_this4.state.todos);

          var todo = todos.find(function (todo) {
            return todo.id === data.id;
          });
          todo.name = response.data.todo.name;
          todo.description = response.data.todo.description;

          _this4.setState({
            todos: todos,
            message: response.data.message
          });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9BcHBTbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9EZWxldGVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0NvbXBvbmVudHMvVG9kb1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db250ZXh0cy9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbImNoZWNrTGV2ZWwiLCJsZXZlbCIsIkFwcFNuYWNrYmFyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsIm1lc3NhZ2UiLCJ0ZXh0IiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZENvbG9yIiwic2V0TWVzc2FnZSIsIkRlbGV0ZURpYWxvZyIsInByb3BzIiwiaGlkZSIsInNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24iLCJvcGVuIiwidG9kbyIsIm5hbWUiLCJkZWxldGVUb2RvIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsIlRvZG9UYWJsZSIsInVzZVN0YXRlIiwiYWRkVG9kb05hbWUiLCJzZXRBZGRUb2RvTmFtZSIsImFkZFRvZG9EZXNjcmlwdGlvbiIsInNldEFkZFRvZG9EZXNjcmlwdGlvbiIsImVkaXRJc1Nob3duIiwic2V0RWRpdElzU2hvd24iLCJlZGl0VG9kb05hbWUiLCJzZXRFZGl0VG9kb05hbWUiLCJlZGl0VG9kb0Rlc2NyaXB0aW9uIiwic2V0RWRpdFRvZG9EZXNjcmlwdGlvbiIsImRlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24iLCJ0b2RvVG9CZURlbGV0ZWQiLCJzZXRUb2RvVG9CZURlbGV0ZWQiLCJvbkNyZWF0ZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUb2RvIiwiZGVzY3JpcHRpb24iLCJvbkVkaXRTdWJtaXQiLCJ0b2RvSWQiLCJ1cGRhdGVUb2RvIiwiY2xlYXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZG9zIiwic2xpY2UiLCJyZXZlcnNlIiwibWFwIiwiaW5kZXgiLCJiaW5kIiwid2hpdGVTcGFjZSIsImNyZWF0ZUNvbnRleHQiLCJUb2RvQ29udGV4dFByb3ZpZGVyIiwic3RhdGUiLCJyZWFkVG9kbyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsInNldFN0YXRlIiwiZXJyb3IiLCJnZXQiLCJwdXQiLCJmaW5kIiwic3BsaWNlIiwiaW5kZXhPZiIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBcHAiLCJSZWFjdERvbSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFDdEIsVUFBUUEsS0FBUjtBQUNJLFNBQUssU0FBTDtBQUNJLGFBQU8sT0FBUDs7QUFDSixTQUFLLE9BQUw7QUFDSSxhQUFPLEtBQVA7O0FBQ0o7QUFDSSxhQUFPLE9BQVA7QUFOUjtBQVFIOztBQUdELFNBQVNDLFdBQVQsR0FBdUI7QUFFbkIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUExQjtBQUVBLFNBQ0csMkRBQUMsMERBQUQ7QUFDSSxvQkFBZ0IsRUFBRSxJQUR0QjtBQUVJLFFBQUksRUFBRUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxJQUFoQixLQUF5QkM7QUFGbkMsS0FJTUwsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxJQUFoQixJQUNFLDJEQUFDLHlFQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVFLHFCQUFlLEVBQUVULFVBQVUsQ0FB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QUFoQixDQUFxQixJQUFyQixDQUZXO0FBR3ZCVCxvQkFBVSxFQUFFLEtBQUtBLFVBQUwsQ0FBZ0JTLElBQWhCLENBQXFCLElBQXJCLENBSFc7QUFJdkJ6QyxvQkFBVSxFQUFFLEtBQUtBLFVBQUwsQ0FBZ0J5QyxJQUFoQixDQUFxQixJQUFyQixDQUpXO0FBS3ZCakQsb0JBQVUsRUFBRSxvQkFBQ0osT0FBRDtBQUFBLG1CQUFhLE1BQUksQ0FBQ21FLFFBQUwsQ0FBYztBQUFFbkUscUJBQU8sRUFBQ0E7QUFBVixhQUFkLENBQWI7QUFBQTtBQUxXO0FBQTNCLFNBT00sS0FBS00sS0FBTCxDQUFXb0UsUUFQakIsQ0FESjtBQVdIOzs7O0VBeEk2QkMsNkNBQUssQ0FBQ0MsUzs7QUEySXpCcEIsa0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1xQixHOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQ0wsYUFDSSw0REFBQyw4REFBRCxRQUNJLDREQUFDLDhEQUFELFFBQ0ksNERBQUMsOERBQUQsT0FESixFQUVJLDREQUFDLGdFQUFELE9BRkosQ0FESixDQURKO0FBUUg7Ozs7RUFWYUYsNkNBQUssQ0FBQ0MsUyxHQWF4Qjs7O0FBRUFFLGlEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsNERBQUMsR0FBRCxPQUFoQixFQUF3QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXhCLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTbmFja2Jhcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudFwiO1xyXG5pbXBvcnQge1RvZG9Db250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2tMZXZlbChsZXZlbCl7XHJcbiAgICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiAnZ3JlZW4nO1xyXG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnd2hpdGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQXBwU25hY2tiYXIoKSB7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgICAgIG9wZW49e2NvbnRleHQubWVzc2FnZS50ZXh0ICE9PSB1bmRlZmluZWR9XHJcbiAgICAgICA+XHJcbiAgICAgICAgICAgeyBjb250ZXh0Lm1lc3NhZ2UudGV4dCAmJiAoXHJcbiAgICAgICAgICAgICAgIDxTbmFja2JhckNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY2hlY2tMZXZlbChjb250ZXh0Lm1lc3NhZ2UubGV2ZWwpIH19XHJcbiAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtjb250ZXh0Lm1lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y29udGV4dC5zZXRNZXNzYWdlKHt9KX0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSdkaXNtaXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID5kaXNtaXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICApIH1cclxuICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBTbmFja2JhcjsiLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1RvZG9Db250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZURpYWxvZyhwcm9wcykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICBvbkNsb3NlPXtoaWRlfVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIG1heFdpZHRoPSdzbSdcclxuICAgICAgICAgICAgb3Blbj17cHJvcHMub3Blbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5BcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHRoaXMgdG8tZG8/PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7IHByb3BzLnRvZG8ubmFtZSB9XHJcbiAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBoaWRlIH0+Q2FuY2VsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlbGV0ZVRvZG8oe2lkOiBwcm9wcy50b2RvLmlkICwgbmFtZTogcHJvcHMudG9kby5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoKVxyXG4gICAgICAgICAgICAgICAgfSB9PkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICApO1xyXG59XHJcblxyXG5EZWxldGVEaWFsb2cucHJvcFR5cGVzID0ge1xyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB0b2RvOiBQcm9wVHlwZXMuc2hhcGUgPSAoeyBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLCBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZURpYWxvZzsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRzL1RvZG9Db250ZXh0XCI7XHJcbmltcG9ydCB7VGFibGUsIEljb25CdXR0b24sIFRleHRGaWVsZH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBEb25lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBEZWxldGVEaWFsb2cgZnJvbSBcIi4vRGVsZXRlRGlhbG9nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gVG9kb1RhYmxlKCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG4gICAgY29uc3QgW2FkZFRvZG9OYW1lLCBzZXRBZGRUb2RvTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWRkVG9kb0Rlc2NyaXB0aW9uLCBzZXRBZGRUb2RvRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VkaXRJc1Nob3duLCBzZXRFZGl0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZWRpdFRvZG9OYW1lLCBzZXRFZGl0VG9kb05hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VkaXRUb2RvRGVzY3JpcHRpb24sIHNldEVkaXRUb2RvRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24sIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvZG9Ub0JlRGVsZXRlZCwgc2V0VG9kb1RvQmVEZWxldGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkNyZWF0ZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29udGV4dC5jcmVhdGVUb2RvKGV2ZW50LCB7bmFtZTogYWRkVG9kb05hbWUsIGRlc2NyaXB0aW9uOiBhZGRUb2RvRGVzY3JpcHRpb259KTtcclxuICAgICAgICBzZXRBZGRUb2RvTmFtZSgnJyk7XHJcbiAgICAgICAgc2V0QWRkVG9kb0Rlc2NyaXB0aW9uKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25FZGl0U3VibWl0ID0gKHRvZG9JZCwgZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnRleHQudXBkYXRlVG9kbyh7aWQ6IHRvZG9JZCwgbmFtZTogZWRpdFRvZG9OYW1lLCBkZXNjcmlwdGlvbjogZWRpdFRvZG9EZXNjcmlwdGlvbn0pO1xyXG4gICAgICAgIHNldEVkaXRJc1Nob3duKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdElzU2hvd24oZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICB7LypIRUFEKi99XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYXNrPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5BY3Rpb25zPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7LypCT0RZKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypBREQqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkNyZWF0ZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkVG9kb05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkZFRvZG9OYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1wiTmV3IFRhc2tcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkVG9kb0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGRUb2RvRGVzY3JpcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJEZXNjcmlwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvbkNyZWF0ZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKkRBVEEqL31cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC50b2Rvcy5zbGljZSgpLnJldmVyc2UoKS5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9eyd0b2RvJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKk5BTUUqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXNTaG93biA9PT0gdG9kby5pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25FZGl0U3VibWl0LmJpbmQodGhpcywgdG9kby5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0VG9kb05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRUb2RvTmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2VuZEFkb3JubWVudDogLy88SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPjxJY29uQnV0dG9uPjxEb25lSWNvbi8+PC9JY29uQnV0dG9uPjwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBlbmRBZG9ybm1lbnQ6IDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBzZXRFZGl0SXNTaG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0+PENsb3NlSWNvbi8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA+PERvbmVJY29uLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4ge3RvZG8ubmFtZX0gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qREVTQ1JJUFRJT04qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXNTaG93biA9PT0gdG9kby5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0VG9kb0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0VG9kb0Rlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7d2hpdGVTcGFjZTogJ3ByZS13cmFwJ319PiB7dG9kby5kZXNjcmlwdGlvbn0gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249e1wicmlnaHRcIn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0SXNTaG93biA9PT0gdG9kby5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25FZGl0U3VibWl0LmJpbmQodGhpcywgdG9kby5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9uZUljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyBzZXRFZGl0SXNTaG93bihmYWxzZSkgfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdElzU2hvd24odG9kby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRUb2RvTmFtZSh0b2RvLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0VG9kb0Rlc2NyaXB0aW9uKHRvZG8uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2RvVG9CZURlbGV0ZWQodG9kbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuXHJcbiAgICAgICAgICAgIHtkZWxldGVDb25maXJtYXRpb25Jc1Nob3duICYmIChcclxuICAgICAgICAgICAgICAgIDxEZWxldGVEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICB0b2RvPXt0b2RvVG9CZURlbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17ZGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bn1cclxuICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duPXtzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9UYWJsZTsiLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jbGFzcyBUb2RvQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvZG9zOiBbXSxcclxuICAgICAgICAgICAgbWVzc2FnZToge30sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWFkVG9kbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY3JlYXRlXHJcbiAgICBjcmVhdGVUb2RvKGV2ZW50LCB0b2RvKXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8qbGV0IGRhdGEgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcbiAgICAgICAgZGF0YS5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHtcclxuICAgICAgICAgICAgdG9kb3M6IGRhdGEsXHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b2RvL2NyZWF0ZScsIHRvZG8pXHJcbiAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5tZXNzYWdlLmxldmVsID09PSAnc3VjY2Vzcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHJlc3BvbnNlLmRhdGEudG9kbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9zOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHttZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3JlYWRcclxuICAgIHJlYWRUb2RvKCl7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RvZG8vcmVhZCcpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGVcclxuICAgIHVwZGF0ZVRvZG8oZGF0YSkge1xyXG4gICAgICAgIC8vIGxldCB0b2RvcyA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRvZG8uaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB0b2RvLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IHRvZG9zOiB0b2RvcyB9KTtcclxuXHJcbiAgICAgICAgYXhpb3MucHV0KCcvYXBpL3RvZG8vdXBkYXRlLycgKyBkYXRhLmlkLCBkYXRhIClcclxuICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5tZXNzYWdlLmxldmVsID09PSAnZXJyb3InKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgge21lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB0b2RvLm5hbWUgPSByZXNwb25zZS5kYXRhLnRvZG8ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IHJlc3BvbnNlLmRhdGEudG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3M6IHRvZG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGRlbGV0ZVRvZG8oZGF0YSl7XHJcbiAgICAgICAgLy8gbGV0IHRvZG9zID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG8pLCAxKTtcclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG5cclxuICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvdG9kby9kZWxldGUvJyArIGRhdGEuaWQsIGRhdGEgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG9kb0NvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG86IHRoaXMuY3JlYXRlVG9kby5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG9kbzogdGhpcy51cGRhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkZWxldGVUb2RvOiB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2U6IChtZXNzYWdlKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTptZXNzYWdlIH0pLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvVG9kb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0NvbnRleHRQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRvZG9Db250ZXh0UHJvdmlkZXIgZnJvbSBcIi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuaW1wb3J0IFRvZG9UYWJsZSBmcm9tIFwiLi9Db21wb25lbnRzL1RvZG9UYWJsZVwiO1xyXG5pbXBvcnQge0Nzc0Jhc2VsaW5lfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFwcFNuYWNrYmFyIGZyb20gXCIuL0NvbXBvbmVudHMvQXBwU25hY2tiYXJcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRvZG9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvZG9UYWJsZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcFNuYWNrYmFyLz5cclxuICAgICAgICAgICAgICAgIDwvQ3NzQmFzZWxpbmU+XHJcbiAgICAgICAgICAgIDwvVG9kb0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyJdLCJzb3VyY2VSb290IjoiIn0=