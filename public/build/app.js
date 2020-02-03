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
      todos: []
    };

    _this.readTodo();

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
    value: function readTodo() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_28___default.a.get('/api/todo/read').then(function (response) {
        _this2.setState({
          todos: response.data
        });
      })["catch"](function (error) {
        console.error(error);
      });
    } //update

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9EZWxldGVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0NvbXBvbmVudHMvVG9kb1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db250ZXh0cy9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIkRlbGV0ZURpYWxvZyIsInByb3BzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsImhpZGUiLCJzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duIiwib3BlbiIsInRvZG8iLCJuYW1lIiwiZGVsZXRlVG9kbyIsImlkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciLCJUb2RvVGFibGUiLCJ1c2VTdGF0ZSIsImFkZFRvZG8iLCJzZXRBZGRUb2RvIiwiZWRpdElzU2hvd24iLCJzZXRFZGl0SXNTaG93biIsImVkaXRUb2RvIiwic2V0RWRpdFRvZG8iLCJkZWxldGVDb25maXJtYXRpb25Jc1Nob3duIiwidG9kb1RvQmVEZWxldGVkIiwic2V0VG9kb1RvQmVEZWxldGVkIiwiZXZlbnQiLCJjcmVhdGVUb2RvIiwidGFyZ2V0IiwidmFsdWUiLCJ0b2RvcyIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsImluZGV4IiwiZW5kQWRvcm5tZW50IiwidXBkYXRlVG9kbyIsImNyZWF0ZUNvbnRleHQiLCJUb2RvQ29udGV4dFByb3ZpZGVyIiwic3RhdGUiLCJyZWFkVG9kbyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInB1c2giLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiZmluZCIsInNwbGljZSIsImluZGV4T2YiLCJiaW5kIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN6QixNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQTFCOztBQUVBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkosU0FBSyxDQUFDSyw0QkFBTixDQUFtQyxLQUFuQztBQUNILEdBRkQ7O0FBSUEsU0FDSSwyREFBQyx3REFBRDtBQUNJLFdBQU8sRUFBRUQsSUFEYjtBQUVJLGFBQVMsRUFBRSxJQUZmO0FBR0ksWUFBUSxFQUFDLElBSGI7QUFJSSxRQUFJLEVBQUVKLEtBQUssQ0FBQ007QUFKaEIsS0FNSSwyREFBQyw2REFBRCxzREFOSixFQU9JLDJEQUFDLCtEQUFELFFBQ01OLEtBQUssQ0FBQ08sSUFBTixDQUFXQyxJQURqQixDQVBKLEVBVUksMkRBQUMsK0RBQUQsUUFDSSwyREFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBR0o7QUFBbEIsY0FESixFQUVJLDJEQUFDLGdFQUFEO0FBQVEsV0FBTyxFQUFHLG1CQUFLO0FBQ25CSCxhQUFPLENBQUNRLFVBQVIsQ0FBbUI7QUFBQ0MsVUFBRSxFQUFFVixLQUFLLENBQUNPLElBQU4sQ0FBV0csRUFBaEI7QUFBcUJGLFlBQUksRUFBRVIsS0FBSyxDQUFDTyxJQUFOLENBQVdDO0FBQXRDLE9BQW5CO0FBQ0FKLFVBQUk7QUFDUDtBQUhELGNBRkosQ0FWSixDQURKO0FBb0JIOztBQUVETCxZQUFZLENBQUNZLFNBQWIsR0FBeUI7QUFDckJMLE1BQUksRUFBRU0saURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQURBO0FBRXJCVCw4QkFBNEIsRUFBRU8saURBQVMsQ0FBQ0csSUFBVixDQUFlRCxVQUZ4QjtBQUdyQlAsTUFBSSxFQUFF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Qyw4REFBRCxPQURKLENBREosQ0FESjtBQU9IOzs7O0VBVGFGLDZDQUFLLENBQUNDLFMsR0FZeEI7OztBQUVBRSxpREFBUSxDQUFDQyxNQUFULENBQWdCLDREQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF4QixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50LCBEaWFsb2dUaXRsZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7VG9kb0NvbnRleHR9IGZyb20gXCIuLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlRGlhbG9nKHByb3BzKSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGV9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgbWF4V2lkdGg9J3NtJ1xyXG4gICAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlPkFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyB0by1kbz88L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMudG9kby5uYW1lIH1cclxuICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IGhpZGUgfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVsZXRlVG9kbyh7aWQ6IHByb3BzLnRvZG8uaWQgLCBuYW1lOiBwcm9wcy50b2RvLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9IH0+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICk7XHJcbn1cclxuXHJcbkRlbGV0ZURpYWxvZy5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHRvZG86IFByb3BUeXBlcy5zaGFwZSA9ICh7IGlkOiBQcm9wVHlwZXMubnVtYmVyLCBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nIH0pXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZURpYWxvZzsiLCJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSBcIi4uL0NvbnRleHRzL1RvZG9Db250ZXh0XCI7XHJcbmltcG9ydCB7VGFibGUsIEljb25CdXR0b24sIFRleHRGaWVsZH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FZGl0XCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI7XHJcbmltcG9ydCBEb25lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVcIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBEZWxldGVEaWFsb2cgZnJvbSBcIi4vRGVsZXRlRGlhbG9nXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gVG9kb1RhYmxlKCkge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVG9kb0NvbnRleHQpO1xyXG4gICAgY29uc3QgW2FkZFRvZG8sIHNldEFkZFRvZG9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VkaXRJc1Nob3duLCBzZXRFZGl0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZWRpdFRvZG8sIHNldEVkaXRUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkZWxldGVDb25maXJtYXRpb25Jc1Nob3duLCBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b2RvVG9CZURlbGV0ZWQsIHNldFRvZG9Ub0JlRGVsZXRlZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuY3JlYXRlVG9kbyhldmVudCwge25hbWU6IGFkZFRvZG99KVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRhc2s8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249e1wicmlnaHRcIn0+QWN0aW9uczwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRkVG9kb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWRkVG9kbyhldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcIk5ldyBUYXNrXCJ9IGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPXtcInJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC50b2Rvcy5zbGljZSgpLnJldmVyc2UoKS5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXsndG9kbycgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdElzU2hvd24gPT09IHRvZG8uaWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdFRvZG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRUb2RvKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbmRBZG9ybm1lbnQ6IC8vPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj48SWNvbkJ1dHRvbj48RG9uZUljb24vPjwvSWNvbkJ1dHRvbj48L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50OiA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdElzU2hvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PjxDbG9zZUljb24vPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnVwZGF0ZVRvZG8oe2lkOiB0b2RvLmlkLCBuYW1lOiBlZGl0VG9kb30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVkaXRJc1Nob3duKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48RG9uZUljb24vPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvZG8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPXtcInJpZ2h0XCJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdElzU2hvd24odG9kby5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0VG9kbyh0b2RvLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZG9Ub0JlRGVsZXRlZCh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgeyBkZWxldGVDb25maXJtYXRpb25Jc1Nob3duICYmIChcclxuICAgICAgICAgICAgICAgIDxEZWxldGVEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICB0b2RvPXt0b2RvVG9CZURlbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17ZGVsZXRlQ29uZmlybWF0aW9uSXNTaG93bn1cclxuICAgICAgICAgICAgICAgICAgICBzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3duPXtzZXREZWxldGVDb25maXJtYXRpb25Jc1Nob3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9UYWJsZTsiLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jbGFzcyBUb2RvQ29udGV4dFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRvZG9zOiBbXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlYWRUb2RvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jcmVhdGVcclxuICAgIGNyZWF0ZVRvZG8oZXZlbnQsIHRvZG8pe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcbiAgICAgICAgZGF0YS5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHtcclxuICAgICAgICAgICAgdG9kb3M6IGRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZWFkXHJcbiAgICByZWFkVG9kbygpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvL3JlYWQnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvczogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICB1cGRhdGVUb2RvKGRhdGEpIHtcclxuICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgIGxldCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG8uaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvZG8ubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgZGVsZXRlVG9kbyhkYXRhKXtcclxuICAgICAgICBsZXQgdG9kb3MgPSBbLi4udGhpcy5zdGF0ZS50b2Rvc107XHJcblxyXG4gICAgICAgIGxldCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG8uaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRvZG9zLnNwbGljZSh0b2Rvcy5pbmRleE9mKHRvZG8pLCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9kb3M6IHRvZG9zIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRvZG9Db250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge3tcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUb2RvOiB0aGlzLmNyZWF0ZVRvZG8uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRvZG86IHRoaXMudXBkYXRlVG9kby5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlVG9kbzogdGhpcy5kZWxldGVUb2RvLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuICAgICAgICAgICAgPC9Ub2RvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udGV4dFByb3ZpZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVG9kb0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi9Db250ZXh0cy9Ub2RvQ29udGV4dFwiO1xyXG5pbXBvcnQgVG9kb1RhYmxlIGZyb20gXCIuL0NvbXBvbmVudHMvVG9kb1RhYmxlXCI7XHJcbmltcG9ydCB7Q3NzQmFzZWxpbmV9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VG9kb0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9kb1RhYmxlLz5cclxuICAgICAgICAgICAgICAgIDwvQ3NzQmFzZWxpbmU+XHJcbiAgICAgICAgICAgIDwvVG9kb0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5SZWFjdERvbS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyJdLCJzb3VyY2VSb290IjoiIn0=