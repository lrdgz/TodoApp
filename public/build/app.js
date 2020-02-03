(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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
      todos: [{
        id: 1,
        name: 'test1'
      }, {
        id: 2,
        name: 'test2'
      }, {
        id: 3,
        name: 'test3'
      }, {
        id: 4,
        name: 'test4'
      }, {
        id: 5,
        name: 'test5'
      }, {
        id: 6,
        name: 'test6'
      }]
    };
    return _this;
  } //create


  _createClass(TodoContextProvider, [{
    key: "createTodo",
    value: function createTodo(event, todo) {
      event.preventDefault();

      var data = _toConsumableArray(this.state.todos);

      data.push(todo);
      this.setState({
        todos: data
      });
    } //read

  }, {
    key: "readTodo",
    value: function readTodo() {} //update

  }, {
    key: "updateTodo",
    value: function updateTodo(data) {
      var todos = _toConsumableArray(this.state.todos);

      var todo = todos.find(function (todo) {
        return todo.id === data.id;
      });
      todo.name = data.name;
      this.setState({
        todos: todos
      });
    } //delete

  }, {
    key: "deleteTodo",
    value: function deleteTodo(data) {
      var todos = _toConsumableArray(this.state.todos);

      var todo = todos.find(function (todo) {
        return todo.id === data.id;
      });
      todos.splice(todos.indexOf(todo), 1);
      this.setState({
        todos: todos
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_27___default.a.createElement(TodoContext.Provider, {
        value: _objectSpread({}, this.state, {
          createTodo: this.createTodo.bind(this),
          updateTodo: this.updateTodo.bind(this),
          deleteTodo: this.deleteTodo.bind(this)
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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Contexts_TodoContext__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["CssBaseline"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_TodoTable__WEBPACK_IMPORTED_MODULE_14__["default"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component); // export default App;


react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.render(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(App, null), document.getElementById("root"));

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9EZWxldGVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0NvbXBvbmVudHMvVG9kb1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db250ZXh0cy9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIkRlbGV0ZURpYWxvZyIsInByb3BzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsImhpZGUiLCJzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duIiwib3BlbiIsInRvZG8iLCJuYW1lIiwiZGVsZXRlVG9kbyIsImlkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJUb2RvVGFibGUiLCJ1c2VTdGF0ZSIsImFkZFRvZG8iLCJzZXRBZGRUb2RvIiwiZWRpdElzU2hvd24iLCJzZXRFZGl0SXNTaG93biIsImVkaXRUb2RvIiwic2V0RWRpdFRvZG8iLCJkZWxldGVDb25maXJtYXRpb25Jc1Nob3duIiwidG9kb1RvQmVEZWxldGVkIiwic2V0VG9kb1RvQmVEZWxldGVkIiwiZXZlbnQiLCJjcmVhdGVUb2RvIiwidGFyZ2V0IiwidmFsdWUiLCJ0b2RvcyIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsImluZGV4IiwiZW5kQWRvcm5tZW50IiwidXBkYXRlVG9kbyIsImNyZWF0ZUNvbnRleHQiLCJUb2RvQ29udGV4dFByb3ZpZGVyIiwic3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwdXNoIiwic2V0U3RhdGUiLCJmaW5kIiwic3BsaWNlIiwiaW5kZXhPZiIsImJpbmQiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQXBwIiwiUmVhY3REb20iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVs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UUFDSSw0REFBQyw4REFBRCxPQURKLENBREosQ0FESjtBQU9IOzs7O0VBVGFGLDZDQUFLLENBQUNDLFMsR0FZeEI7OztBQUVBRSxpREFBUSxDQUFDQyxNQUFULENBQWdCLDREQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF4QixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7VG9kb0NvbnRleHR9IGZyb20gXCIuLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgb25DbG9zZT17aGlkZX1cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICBtYXhXaWR0aD0nc20nXHJcbiAgICAgICAgICAgIG9wZW49e3Byb3BzLm9wZW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGU+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIHRvLWRvPzwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgeyBwcm9wcy50b2RvLm5hbWUgfVxyXG4gICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgaGlkZSB9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWxldGVUb2RvKHtpZDogcHJvcHMudG9kby5pZCAsIG5hbWU6IHByb3BzLnRvZG8ubmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlKClcclxuICAgICAgICAgICAgICAgIH0gfT5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgKTtcclxufVxyXG5cclxuRGVsZXRlRGlhbG9nLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdG9kbzogUHJvcFR5cGVzLnNoYXBlID0gKHsgaWQ6IFByb3BUeXBlcy5udW1iZXIsIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcgfSlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRGlhbG9nOyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RvZG9Db250ZXh0fSBmcm9tIFwiLi4vQ29udGV4dHMvVG9kb0NvbnRleHRcIjtcclxuaW1wb3J0IHtUYWJsZSwgSWNvbkJ1dHRvbiwgVGV4dEZpZWxkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IERlbGV0ZURpYWxvZyBmcm9tIFwiLi9EZWxldGVEaWFsb2dcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvVGFibGUoKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvQ29udGV4dCk7XHJcbiAgICBjb25zdCBbYWRkVG9kbywgc2V0QWRkVG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZWRpdElzU2hvd24sIHNldEVkaXRJc1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlZGl0VG9kbywgc2V0RWRpdFRvZG9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24sIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvZG9Ub0JlRGVsZXRlZCwgc2V0VG9kb1RvQmVEZWxldGVkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5jcmVhdGVUb2RvKGV2ZW50LCB7bmFtZTogYWRkVG9kb30pXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGFzazwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj17XCJyaWdodFwifT5BY3Rpb25zPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRUb2RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGRUb2RvKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1wiTmV3IFRhc2tcIn0gZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249e1wicmlnaHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZXh0LnRvZG9zLnNsaWNlKCkucmV2ZXJzZSgpLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9eyd0b2RvJyArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SXNTaG93biA9PT0gdG9kby5pZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0VG9kb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdFRvZG8oZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VuZEFkb3JubWVudDogLy88SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPjxJY29uQnV0dG9uPjxEb25lSWNvbi8+PC9JY29uQnV0dG9uPjwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0SXNTaG93bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+PENsb3NlSWNvbi8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQudXBkYXRlVG9kbyh7aWQ6IHRvZG8uaWQsIG5hbWU6IGVkaXRUb2RvfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdElzU2hvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxEb25lSWNvbi8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kby5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249e1wicmlnaHRcIn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0SXNTaG93bih0b2RvLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRUb2RvKHRvZG8ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9kb1RvQmVEZWxldGVkKHRvZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICB7IGRlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZURpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG89e3RvZG9Ub0JlRGVsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtkZWxldGVDb25maXJtYXRpb25Jc1Nob3dufVxyXG4gICAgICAgICAgICAgICAgICAgIHNldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd249e3NldERlbGV0ZUNvbmZpcm1hdGlvbklzU2hvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb1RhYmxlOyIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNsYXNzIFRvZG9Db250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdG9kb3M6IFtcclxuICAgICAgICAgICAgICAgIHtpZDogMSwgbmFtZTogJ3Rlc3QxJ30sXHJcbiAgICAgICAgICAgICAgICB7aWQ6IDIsIG5hbWU6ICd0ZXN0Mid9LFxyXG4gICAgICAgICAgICAgICAge2lkOiAzLCBuYW1lOiAndGVzdDMnfSxcclxuICAgICAgICAgICAgICAgIHtpZDogNCwgbmFtZTogJ3Rlc3Q0J30sXHJcbiAgICAgICAgICAgICAgICB7aWQ6IDUsIG5hbWU6ICd0ZXN0NSd9LFxyXG4gICAgICAgICAgICAgICAge2lkOiA2LCBuYW1lOiAndGVzdDYnfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vY3JlYXRlXHJcbiAgICBjcmVhdGVUb2RvKGV2ZW50LCB0b2RvKXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gWy4uLnRoaXMuc3RhdGUudG9kb3NdO1xyXG4gICAgICAgIGRhdGEucHVzaCh0b2RvKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgICAgIHRvZG9zOiBkYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVhZFxyXG4gICAgcmVhZFRvZG8oKXt9XHJcblxyXG4gICAgLy91cGRhdGVcclxuICAgIHVwZGF0ZVRvZG8oZGF0YSkge1xyXG4gICAgICAgIGxldCB0b2RvcyA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuXHJcbiAgICAgICAgbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kby5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRlXHJcbiAgICBkZWxldGVUb2RvKGRhdGEpe1xyXG4gICAgICAgIGxldCB0b2RvcyA9IFsuLi50aGlzLnN0YXRlLnRvZG9zXTtcclxuXHJcbiAgICAgICAgbGV0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9kby5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodG9kbyksIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2RvczogdG9kb3MgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG9kb0NvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG86IHRoaXMuY3JlYXRlVG9kby5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVG9kbzogdGhpcy51cGRhdGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBkZWxldGVUb2RvOiB0aGlzLmRlbGV0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L1RvZG9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Db250ZXh0UHJvdmlkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBUb2RvQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuL0NvbnRleHRzL1RvZG9Db250ZXh0XCI7XHJcbmltcG9ydCBUb2RvVGFibGUgZnJvbSBcIi4vQ29tcG9uZW50cy9Ub2RvVGFibGVcIjtcclxuaW1wb3J0IHtDc3NCYXNlbGluZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUb2RvQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2RvVGFibGUvPlxyXG4gICAgICAgICAgICAgICAgPC9Dc3NCYXNlbGluZT5cclxuICAgICAgICAgICAgPC9Ub2RvQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblJlYWN0RG9tLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==