/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/OpenSans-Regular.ttf */ "./src/fonts/OpenSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

form,
button,
input,
textarea,
select {
  font-family: "MyFont";
  font-size: inherit;
}

:root {
  --PRIMARY-COLOR: #ed7d31;
  --SECONDARY-COLOR: #4f4a45;
  --WHITE-SHADE: #f6f1ee;
}

@font-face {
  font-family: "MyFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  background-color: var(--WHITE-SHADE);
  font-family: "MyFont";
  font-size: 20px;
}

.wrapping-ctn {
  display: grid;
  grid-template-columns: 300px 1fr;
}

/* SIDEBAR */
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--PRIMARY-COLOR);
  height: 100vh;
  padding: 15px;
  gap: 10px;
  position: sticky;
  top: 0px;
}

.sidebar-header {
  margin-bottom: 15px;
}

.sidebar-header,
.sidebar-inbox,
.sidebar-today {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar-myProjects {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-myProjects > div:first-child {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sidebar img {
  border-radius: 50%;
}

.myProjects-content {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
}

.project-card {
  display: flex;
  justify-content: space-between;
}

.sidebar-createProject {
  display: flex;
  justify-content: center;
  border: 2px solid var(--SECONDARY-COLOR);
  border-radius: 5px;
}

.sidebar-form {
  display: flex;
  gap: 5px;
}

.sidebar-form > div {
  display: flex;
  gap: 5px;
}

.projectFormTitle {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
}

/* DISPLAY CONTAINER  */

.display-ctn {
  width: 900px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 10px;
}

.blur-bg {
  filter: blur(4px);
}

.project-title {
  margin-bottom: 20px;
}

/* Inside Display Ctn > task card section starts */
.task-card {
  border: 2px solid var(--SECONDARY-COLOR);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 25px 1fr max-content;
  padding: 10px 5px;
}

.task-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-checkbox input[type="checkbox"],
.delete-btn,
.modify-btn,
.view-note-btn,
.project-addTask,
.form-cancel-btn,
.form-add-btn,
.form-setPriority,
.mod-form-cancel-btn,
.mod-form-add-btn,
.newDueDate {
  cursor: pointer;
}

.task-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
}

.task-additionals,
.view-additionals1 {
  display: flex;
  align-items: center;
  gap: 20px;
}

.priority {
  display: flex;
  align-items: center;
}

.task-dueDate {
  display: flex;
  align-items: center;
}

.task-card > .task-operation {
  align-self: center;
  display: flex;
  padding: 10px;
  gap: 20px;
}

.task-card-container {
  position: relative;
}

.overlay {
  border: 2px solid var(--SECONDARY-COLOR);
  width: 100%;
  position: absolute;
  border-radius: 5px;
  padding: 25px;
  background-color: var(--PRIMARY-COLOR);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  bottom: 0;
}

.overlay > div {
  display: flex;
  justify-content: space-between;
}

/* Inside Display Ctn > project-todos-ctn section ends */

/* Inside Display Ctn > project-addTask section starts */

.project-addTask {
  display: flex;
  align-items: center;
  border: 2px solid var(--SECONDARY-COLOR);
  border-radius: 5px;
}

/* Inside Display Ctn > project-addTask section ends */

/* ADD TASK FORM CTN */
.add-form {
  border: 2px solid var(--SECONDARY-COLOR);
  display: flex;
  flex-direction: column;
  padding: 10px 30px 20px;
  font-size: 16px;
  gap: 10px;
}

.add-task-additionals {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-task-additionals > div {
  display: flex;
  align-items: center;
  gap: 20px;
}

.add-task-name > input[type="text"] {
  width: 100%;
}

.add-task-description > textarea {
  resize: none;
  overflow: hidden;
  width: 100%;
}

.form-cancel-btn,
.form-add-btn,
.mod-form-cancel-btn,
.mod-form-add-btn,
.form-setPriority,
.close-btn {
  padding: 5px;
  width: 110px;
  border-radius: 5px;
  border: 2px solid var(--SECONDARY-COLOR);
}

.form-setDueDate > input {
  padding: 4px;
}

.form-cancel-btn,
.mod-form-cancel-btn {
  background-color: var(--PRIMARY-COLOR);
}

.active {
  color: #f6f1ee;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;;;EAKE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,4CAAuC;AACzC;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,sCAAsC;EACtC,aAAa;EACb,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA,uBAAuB;;AAEvB;EACE,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,kDAAkD;AAClD;EACE,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,2CAA2C;EAC3C,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;;;;;;;;EAWE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;EACX,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA,wDAAwD;;AAExD,wDAAwD;;AAExD;EACE,aAAa;EACb,mBAAmB;EACnB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA,sDAAsD;;AAEtD,sBAAsB;AACtB;EACE,wCAAwC;EACxC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;;;;;;EAME,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nform,\r\nbutton,\r\ninput,\r\ntextarea,\r\nselect {\r\n  font-family: \"MyFont\";\r\n  font-size: inherit;\r\n}\r\n\r\n:root {\r\n  --PRIMARY-COLOR: #ed7d31;\r\n  --SECONDARY-COLOR: #4f4a45;\r\n  --WHITE-SHADE: #f6f1ee;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(../fonts/OpenSans-Regular.ttf);\r\n}\r\n\r\nbody {\r\n  background-color: var(--WHITE-SHADE);\r\n  font-family: \"MyFont\";\r\n  font-size: 20px;\r\n}\r\n\r\n.wrapping-ctn {\r\n  display: grid;\r\n  grid-template-columns: 300px 1fr;\r\n}\r\n\r\n/* SIDEBAR */\r\n.sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--PRIMARY-COLOR);\r\n  height: 100vh;\r\n  padding: 15px;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0px;\r\n}\r\n\r\n.sidebar-header {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.sidebar-header,\r\n.sidebar-inbox,\r\n.sidebar-today {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.sidebar-myProjects {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n.sidebar-myProjects > div:first-child {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.sidebar img {\r\n  border-radius: 50%;\r\n}\r\n\r\n.myProjects-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 5px;\r\n}\r\n\r\n.project-card {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.sidebar-createProject {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n  border-radius: 5px;\r\n}\r\n\r\n.sidebar-form {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.sidebar-form > div {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.projectFormTitle {\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* DISPLAY CONTAINER  */\r\n\r\n.display-ctn {\r\n  width: 900px;\r\n  justify-self: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.blur-bg {\r\n  filter: blur(4px);\r\n}\r\n\r\n.project-title {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* Inside Display Ctn > task card section starts */\r\n.task-card {\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n  border-radius: 5px;\r\n  display: grid;\r\n  grid-template-columns: 25px 1fr max-content;\r\n  padding: 10px 5px;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.task-checkbox input[type=\"checkbox\"],\r\n.delete-btn,\r\n.modify-btn,\r\n.view-note-btn,\r\n.project-addTask,\r\n.form-cancel-btn,\r\n.form-add-btn,\r\n.form-setPriority,\r\n.mod-form-cancel-btn,\r\n.mod-form-add-btn,\r\n.newDueDate {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.task-additionals,\r\n.view-additionals1 {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.priority {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-dueDate {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-card > .task-operation {\r\n  align-self: center;\r\n  display: flex;\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.task-card-container {\r\n  position: relative;\r\n}\r\n\r\n.overlay {\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n  width: 100%;\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  padding: 25px;\r\n  background-color: var(--PRIMARY-COLOR);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  z-index: 10;\r\n  bottom: 0;\r\n}\r\n\r\n.overlay > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Inside Display Ctn > project-todos-ctn section ends */\r\n\r\n/* Inside Display Ctn > project-addTask section starts */\r\n\r\n.project-addTask {\r\n  display: flex;\r\n  align-items: center;\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Inside Display Ctn > project-addTask section ends */\r\n\r\n/* ADD TASK FORM CTN */\r\n.add-form {\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px 30px 20px;\r\n  font-size: 16px;\r\n  gap: 10px;\r\n}\r\n\r\n.add-task-additionals {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.add-task-additionals > div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.add-task-name > input[type=\"text\"] {\r\n  width: 100%;\r\n}\r\n\r\n.add-task-description > textarea {\r\n  resize: none;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n.form-cancel-btn,\r\n.form-add-btn,\r\n.mod-form-cancel-btn,\r\n.mod-form-add-btn,\r\n.form-setPriority,\r\n.close-btn {\r\n  padding: 5px;\r\n  width: 110px;\r\n  border-radius: 5px;\r\n  border: 2px solid var(--SECONDARY-COLOR);\r\n}\r\n\r\n.form-setDueDate > input {\r\n  padding: 4px;\r\n}\r\n\r\n.form-cancel-btn,\r\n.mod-form-cancel-btn {\r\n  background-color: var(--PRIMARY-COLOR);\r\n}\r\n\r\n.active {\r\n  color: #f6f1ee;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/blur.js":
/*!************************!*\
  !*** ./src/js/blur.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlur: () => (/* binding */ addBlur),
/* harmony export */   removeBlur: () => (/* binding */ removeBlur)
/* harmony export */ });
function addBlur() {
    const taskCards = document.querySelectorAll(".task-card");
    const title = document.querySelector(".project-title");
    const addTaskBtn = document.querySelector(".project-addTask");
    taskCards.forEach((card) => {
        card.classList.add("blur-bg");
    })
    title.classList.add("blur-bg");
    addTaskBtn.classList.add("blur-bg");
}

function removeBlur() {
    const taskCards = document.querySelectorAll(".task-card");
    const title = document.querySelector(".project-title");
    const addTaskBtn = document.querySelector(".project-addTask");
    taskCards.forEach((card) => {
        card.classList.remove("blur-bg");
    })
    title.classList.remove("blur-bg");
    addTaskBtn.classList.remove("blur-bg");
}



/***/ }),

/***/ "./src/js/checkTask.js":
/*!*****************************!*\
  !*** ./src/js/checkTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTask: () => (/* binding */ checkTask)
/* harmony export */ });
/* harmony import */ var _myProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProject */ "./src/js/myProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard */ "./src/js/taskCard.js");




function checkTask(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCtn = e.currentTarget.parentNode.parentNode.parentNode;
    const taskTitle = (0,_taskCard__WEBPACK_IMPORTED_MODULE_2__.getTaskCardValues)(taskCtn.lastElementChild).name;
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.deleteATaskFromLocalS)((0,_myProject__WEBPACK_IMPORTED_MODULE_0__.getCurrentProjectName)(), taskTitle);
    displayCtn.removeChild(taskCtn);
}



/***/ }),

/***/ "./src/js/date.js":
/*!************************!*\
  !*** ./src/js/date.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDate: () => (/* binding */ convertDate),
/* harmony export */   getTodayDate: () => (/* binding */ getTodayDate),
/* harmony export */   incrementDate: () => (/* binding */ incrementDate)
/* harmony export */ });
function getTodayDate() {
    let today = new Date();
    return today;
}

function incrementDate(daysToIncrement) {
    let today = getTodayDate();
    today.setDate(today.getDate() + daysToIncrement)
    return convertDate(today);
}

function convertDate(date) {
    return date.toISOString().split('T')[0];
}



/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   cancelTaskBtn: () => (/* binding */ cancelTaskBtn),
/* harmony export */   displayNewProjectForm: () => (/* binding */ displayNewProjectForm),
/* harmony export */   getFormValues: () => (/* binding */ getFormValues),
/* harmony export */   setForm: () => (/* binding */ setForm),
/* harmony export */   setModifyForm: () => (/* binding */ setModifyForm),
/* harmony export */   setPriority: () => (/* binding */ setPriority)
/* harmony export */ });
/* harmony import */ var _taskCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCard.js */ "./src/js/taskCard.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./src/js/listeners.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/js/storage.js");
/* harmony import */ var _myProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myProject.js */ "./src/js/myProject.js");





function setForm(element) {
    element.innerHTML = `<div class="add-task-name">
    <input
      type="text"
      name=""
      id="newTaskName"
      class="newTaskName"
      placeholder="Task Name"
    />
  </div>
  <div class="add-task-description">
    <textarea
      name=""
      id=""
      class="newTaskDesc"
      cols=""
      rows="4"
      placeholder="Task Description"
    ></textarea>
  </div>
  <div class="add-task-additionals">
    <div>
      <div class="form-setDueDate">
        <label for="newDueDate">Due Date:</label>
        <input type="date" name="" id="newDueDate" class="newDueDate" />
      </div>
      <div>
        <select class="form-setPriority" name="" id="">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <div>
      <button class="form-cancel-btn" type="button">Cancel</button>
      <button class="form-add-btn" type="button">Add Task</button>
    </div>
  </div>`
};

function setModifyForm(element) {
    const taskObj = (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_0__.getTaskCardValues)(element);
    element.innerHTML = `<div class="add-task-name">
    <input
      type="text"
      name=""
      id="newTaskName"
      class="newTaskName"
      placeholder="Task Name"
      value="${taskObj.name}"
    />
  </div>
  <div class="add-task-description">
    <textarea
      name=""
      id=""
      class="newTaskDesc"
      cols=""
      rows="4"
      placeholder="Task Description"
    >${taskObj.description}</textarea>
  </div>
  <div class="add-task-additionals">
    <div>
      <div class="form-setDueDate">
        <label for="newDueDate">Due Date:</label>
        <input type="date" name="" id="newDueDate" class="newDueDate" value="${taskObj.dueDate}" />
      </div>
      <div>
        <select class="form-setPriority" name="" id="">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    <div>
      <button class="mod-form-cancel-btn" type="button">Cancel</button>
      <button class="mod-form-add-btn" type="button">Add Task</button>
    </div>
  </div>`;
    setPriority(taskObj.priority);
}

function cancelTaskBtn(e) {
    e.stopPropagation();
    const formCtn = e.target.parentNode.parentNode.parentNode;
    /* REVERSING THE FORM BACK TO ADDD TASK DIV */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("project-addTask");
    (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_0__.displayAddTask)(formCtn);
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAddTask)();
}

function addTaskBtn(e) {
    e.stopPropagation();
    const formCtn = e.currentTarget.parentNode.parentNode.parentNode;
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card-container");
    const formValue = getFormValues(formCtn);
    const newTask = (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(formValue.name, formValue.description, formValue.dueDate, formValue.priority);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.allotIndividualTaskInLocalS)((0,_myProject_js__WEBPACK_IMPORTED_MODULE_3__.getCurrentProjectName)(), newTask);
    (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_0__.displayTaskCard)(newTask, formCtn);
    (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_0__.appendProjectAddTask)();
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAddTask)();
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAllTaskOperation)();
}

function setPriority(value) {
    const options = document.querySelector(".form-setPriority").querySelectorAll("option");
    if (value === "High") {
        options[0].setAttribute("selected", true);
    }
    else if (value === "Medium") {
        options[1].setAttribute("selected", true);
    }
    else {
        options[2].setAttribute("selected", true);
    }
}

function getFormValues(formCtn) {
    const name = formCtn.querySelector(".newTaskName").value;
    const description = formCtn.querySelector(".newTaskDesc").value;
    const dueDate = formCtn.querySelector(".newDueDate").value;
    const priority = formCtn.querySelector(".form-setPriority").value;
    return { name, description, dueDate, priority };
}

function displayNewProjectForm(element) {
    element.innerHTML = `
    <input type="text" name="" id="projectFormTitle" class="projectFormTitle" placeholder="Project Title">
    <div>
        <img class="projectForm-cross" src="./img/tick.svg" alt="">
        <img class="projectForm-tick" src="./img/cross.svg" alt="">
    </div>`;
}



/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setHomeInLocalStorage: () => (/* binding */ setHomeInLocalStorage)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/js/date.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard */ "./src/js/taskCard.js");




function setHomeInLocalStorage() {
    const title = "#Home";
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.createArr)(title);
    const task1 = (0,_taskCard__WEBPACK_IMPORTED_MODULE_2__.createTask)("Wake Up Early", "Don't sleep after Fajr.Make your plans for the day", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "High");
    const task2 = (0,_taskCard__WEBPACK_IMPORTED_MODULE_2__.createTask)("Washing Clothes", "Will try to do this before noon", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "Medium");
    const task3 = (0,_taskCard__WEBPACK_IMPORTED_MODULE_2__.createTask)("Appointment with doctor", "Annual health checkup", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "Low");
    const task4 = (0,_taskCard__WEBPACK_IMPORTED_MODULE_2__.createTask)("Arabic Class", "Weekly class at @Burooj Institute", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "High");
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.pushObj)(title, task1);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.pushObj)(title, task2);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.pushObj)(title, task3);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.pushObj)(title, task4);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(title);
}



/***/ }),

/***/ "./src/js/inbox.js":
/*!*************************!*\
  !*** ./src/js/inbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayInboxFromLocalS: () => (/* binding */ displayInboxFromLocalS),
/* harmony export */   saveInbox: () => (/* binding */ saveInbox),
/* harmony export */   setInbox: () => (/* binding */ setInbox)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/js/date.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "./src/js/listeners.js");
/* harmony import */ var _myProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myProject */ "./src/js/myProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/js/task.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskCard */ "./src/js/taskCard.js");







function setInbox(element) {
  element.innerHTML = `
      <div class="project-title">
        <h3>Inbox</h3>
      </div>
      <div class="project-addTask">
        <img src="./img/add-normal.svg" alt="" width="30" height="30" />
        <p>Add Task</p>
      </div>
    `;
  (0,_task__WEBPACK_IMPORTED_MODULE_4__.displayTaskContainer)((0,_taskCard__WEBPACK_IMPORTED_MODULE_5__.createTask)("Fajr Salah", "The Prophet (ﷺ) said,The two Rakah before the dawn (Fajr) prayer are better than this world and all it contains.", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "High"));
  (0,_task__WEBPACK_IMPORTED_MODULE_4__.displayTaskContainer)((0,_taskCard__WEBPACK_IMPORTED_MODULE_5__.createTask)("Read Quran", "The Prophet (ﷺ) said, The best among you (Muslims) are those who learn the Quran and teach it.", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "High"));
  (0,_task__WEBPACK_IMPORTED_MODULE_4__.displayTaskContainer)((0,_taskCard__WEBPACK_IMPORTED_MODULE_5__.createTask)("Plan and Prepare Meals", "Take time to plan and prepare healthy meals for the day to ensure a balanced and nutritious diet.", (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDate)((0,_date__WEBPACK_IMPORTED_MODULE_0__.getTodayDate)()), "Medium"));
  (0,_task__WEBPACK_IMPORTED_MODULE_4__.displayTaskContainer)((0,_taskCard__WEBPACK_IMPORTED_MODULE_5__.createTask)("Explore JavaScript Prototypes", "I'm diving into JavaScript prototypes to deepen my understanding of this crucial language feature. Starting with articles, tutorials, and official documentation, I'll cover prototype chains, constructor functions, and the prototype property. Through coding exercises and small projects, I'll apply my knowledge, engaging with online communities for support. Keeping a learning log, I aim to confidently integrate prototype-based patterns into my code by the due date.", (0,_date__WEBPACK_IMPORTED_MODULE_0__.incrementDate)(5), "Medium"));
  saveInbox();
};

function saveInbox() {
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.createArr)("Inbox");
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeAllTask)("Inbox");
}

function displayInboxFromLocalS() {
  const displayCtn = document.querySelector(".display-ctn");
  const inboxCtn = document.querySelector(".sidebar-inbox");
  const title = "Inbox";
  (0,_myProject__WEBPACK_IMPORTED_MODULE_2__.removeActiveClassForAll)();
  (0,_myProject__WEBPACK_IMPORTED_MODULE_2__.setActiveClass)(inboxCtn);
  (0,_myProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(displayCtn, title);
  (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.setAddTask)();
  if (!(0,_storage__WEBPACK_IMPORTED_MODULE_3__.isEmptyInLocalStorage)(title)) {
    (0,_myProject__WEBPACK_IMPORTED_MODULE_2__.viewTasks)(title);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.setAllTaskOperation)();
  }
}



/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAddFormListeners: () => (/* binding */ setAddFormListeners),
/* harmony export */   setAddTask: () => (/* binding */ setAddTask),
/* harmony export */   setAllTaskOperation: () => (/* binding */ setAllTaskOperation)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/js/task.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/js/form.js");
/* harmony import */ var _taskCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard.js */ "./src/js/taskCard.js");




function setAddTask() {
    const addTaskBtn = document.querySelector(".project-addTask");
    addTaskBtn.addEventListener("click", _task_js__WEBPACK_IMPORTED_MODULE_0__.displayAddTaskForm,{once:true});
}

function setAddFormListeners() {
    const cancelBtn = document.querySelector(".form-cancel-btn");
    const addBtn = document.querySelector(".form-add-btn");
    cancelBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_1__.cancelTaskBtn);
    addBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_1__.addTaskBtn);
}

function setDeleteBtns() {
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click",_taskCard_js__WEBPACK_IMPORTED_MODULE_2__.taskDeleteBtn)
    })
}

function setModifyBtns() {
    const modifyBtns = document.querySelectorAll(".modify-btn");
    modifyBtns.forEach((btn) => {
        btn.addEventListener("click",_taskCard_js__WEBPACK_IMPORTED_MODULE_2__.taskModifyBtn)
    })
}

function setViewBtns() {
    const viewBtns = document.querySelectorAll(".view-note-btn");
    viewBtns.forEach((btn) => {
        btn.addEventListener("click",_taskCard_js__WEBPACK_IMPORTED_MODULE_2__.taskViewBtn)
    })
}

function setCheckBoxes() {
    const checkBoxes = document.querySelectorAll("#isTaskDone");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", _taskCard_js__WEBPACK_IMPORTED_MODULE_2__.taskCheckBox);
    })
}

function setAllTaskOperation() {
    setCheckBoxes();
    setModifyBtns();
    setDeleteBtns();
    setViewBtns();
}





/***/ }),

/***/ "./src/js/myProject.js":
/*!*****************************!*\
  !*** ./src/js/myProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   getCurrentProjectName: () => (/* binding */ getCurrentProjectName),
/* harmony export */   removeActiveClassForAll: () => (/* binding */ removeActiveClassForAll),
/* harmony export */   setActiveClass: () => (/* binding */ setActiveClass),
/* harmony export */   setAddProject: () => (/* binding */ setAddProject),
/* harmony export */   setMyProjects: () => (/* binding */ setMyProjects),
/* harmony export */   setSidebarDeleteBtns: () => (/* binding */ setSidebarDeleteBtns),
/* harmony export */   viewTasks: () => (/* binding */ viewTasks)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ "./src/js/inbox.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ "./src/js/listeners.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/js/task.js");






function setMyProjects() {
    const projectCards = document.querySelectorAll(".project-card");
    const inboxBtn = document.querySelector(".sidebar-inbox");
    projectCards.forEach((card) => {
        card.addEventListener("click", viewProject);
    })
    inboxBtn.addEventListener("click", viewProject);
}

function viewProject(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const title = e.currentTarget.querySelector("p").textContent;
    removeActiveClassForAll();
    setActiveClass(e.currentTarget);
    displayProject(displayCtn, title);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setAddTask)();
    if (!(0,_storage__WEBPACK_IMPORTED_MODULE_3__.isEmptyInLocalStorage)(title)) {
        viewTasks(title);
        (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setAllTaskOperation)();
    }
}

function viewTasks(key) {
    const taskCards = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.retrieveFromLocalStorage)(key);
    taskCards.forEach((card) => {
            (0,_task__WEBPACK_IMPORTED_MODULE_4__.displayTaskContainer)(card);
    })
  }

function displayProject(element,title) {
    element.innerHTML = `
      <div class="project-title">
        <h3>${title}</h3>
      </div>
      <div class="project-addTask">
        <img src="./img/add-normal.svg" alt="" width="30" height="30" />
        <p>Add Task</p>
      </div>`;
}

function setAddProject() {
    const addProjectBtn = document.querySelector(".sidebar-createProject");
    addProjectBtn.addEventListener("click", addProjectBtnListener, { once: true });
}

function addProjectBtnListener(e) {
    const addProjectBtn = e.currentTarget;
    addProjectBtn.classList.remove("sidebar-createProject");
    addProjectBtn.classList.add("sidebar-form");
    (0,_form__WEBPACK_IMPORTED_MODULE_0__.displayNewProjectForm)(addProjectBtn);
    const crossBtn = addProjectBtn.querySelector(".projectForm-cross");
    const tickBtn = addProjectBtn.querySelector(".projectForm-tick");
    crossBtn.addEventListener("click", projectCrossBtn);
    tickBtn.addEventListener("click", projectTickBtn);
}

function projectCrossBtn(e) {
    e.stopPropagation();
    const addProjectFormCtn = e.currentTarget.parentNode.parentNode;
    revertProjectForm(addProjectFormCtn);
}

function revertProjectForm(element) {
    element.classList.remove("sidebar-form");
    element.classList.add("sidebar-createProject");
    displayAddProjectBtn(element);
    setAddProject();
}

function projectTickBtn(e) {
    e.stopPropagation();
    const addProjectFormCtn = e.currentTarget.parentNode.parentNode;
    const projectsCtn = document.querySelector(".myProjects-content");
    const getProjectTitle = addProjectFormCtn.querySelector(".projectFormTitle").value;
    projectsCtn.appendChild(createNewProject(getProjectTitle));
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.allotMemory)(`#${getProjectTitle}`);
    revertProjectForm(addProjectFormCtn);
    setSidebarDeleteBtns();
    setMyProjects();
    const displayCtn = document.querySelector(".display-ctn");
    const projectCard = projectsCtn.lastElementChild;
    displayProject(displayCtn, projectCard.firstElementChild.textContent);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setAddTask)();
    removeActiveClassForAll();
    setActiveClass(projectCard)
}

function createNewProject(projectTitle) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <p>#${projectTitle}</p>
        <img src="./img/delete-btn.svg" alt="" />
    `;
    return projectCard;
}

function displayAddProjectBtn(element) {
    element.innerHTML = `
    <img src="./img/add-normal.svg" alt="" />
    <p>Create New Project</p>`;
}

function setSidebarDeleteBtns() {
    const deleteBtns = document.querySelectorAll(".project-card > img");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", ProjectDeleteBtn);
    })
}

function ProjectDeleteBtn(e) {
    e.stopPropagation();
    const projectCard = e.currentTarget.parentNode;
    const projectsCtn = document.querySelector(".myProjects-content");
    const key = projectCard.firstElementChild.textContent;
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.deleteProjectFromLocalS)(key);
    if (projectCard.classList.contains("active")) {
        (0,_inbox__WEBPACK_IMPORTED_MODULE_1__.displayInboxFromLocalS)();
    }
    projectsCtn.removeChild(projectCard);
}

function getCurrentProjectName() {
    const nameCtn = document.querySelector(".active");
    const projectName = nameCtn.querySelector("p").textContent;
    return projectName;
}

function setActiveClass(element) {
    element.classList.add("active");
}

function removeActiveClassForAll() {
    const projectCards = document.querySelectorAll(".project-card");
    const inboxBtn = document.querySelector(".sidebar-inbox");
    inboxBtn.classList.remove("active");
    if (projectCards) {
        projectCards.forEach((card) => {
            card.classList.remove("active");
        })
    }
}



/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToLocalStorage: () => (/* binding */ addToLocalStorage),
/* harmony export */   allotIndividualTaskInLocalS: () => (/* binding */ allotIndividualTaskInLocalS),
/* harmony export */   allotMemory: () => (/* binding */ allotMemory),
/* harmony export */   createArr: () => (/* binding */ createArr),
/* harmony export */   deleteATaskFromLocalS: () => (/* binding */ deleteATaskFromLocalS),
/* harmony export */   deleteProjectFromLocalS: () => (/* binding */ deleteProjectFromLocalS),
/* harmony export */   isEmptyInLocalStorage: () => (/* binding */ isEmptyInLocalStorage),
/* harmony export */   modifyTaskFromLocalS: () => (/* binding */ modifyTaskFromLocalS),
/* harmony export */   pushObj: () => (/* binding */ pushObj),
/* harmony export */   retrieveFromLocalStorage: () => (/* binding */ retrieveFromLocalStorage),
/* harmony export */   storeAllTask: () => (/* binding */ storeAllTask)
/* harmony export */ });
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCard */ "./src/js/taskCard.js");


const Storage = {

}

function createArr(name) {
    Storage[name] = [];
}

function pushObj(name, taskObj) {
    Storage[name].push(taskObj);
}

function replaceArray(name, array) {
    Storage[name] = array;
}

function storeAllTask(projectName) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCards = displayCtn.querySelectorAll(".task-card");
    taskCards.forEach((card) => {
        const taskObj = (0,_taskCard__WEBPACK_IMPORTED_MODULE_0__.getTaskCardValues)(card);
        pushObj(projectName, taskObj);
    })
    addToLocalStorage(projectName);
}

function addToLocalStorage(key) {
    const value = JSON.stringify(Storage[key]);
    localStorage.setItem(key, value);
}

function retrieveFromLocalStorage(key) {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
}

function isEmptyInLocalStorage(key) {
    if (localStorage.getItem(key) == "[]") {
        console.log("hii");
        return true; 
    }
}

function allotMemory(key) {
    createArr(key);
    addToLocalStorage(key);
}

function allotIndividualTaskInLocalS(key,taskObj) {
    pushObj(key, taskObj);
    addToLocalStorage(key);
}

function deleteATaskFromLocalS(key, name) {
    let value = retrieveFromLocalStorage(key);
    value = value.filter((taskObj) => {
        if (taskObj.name != name) {
            return true;
        }
    })
    replaceArray(key, value);
    addToLocalStorage(key);
}

function deleteProjectFromLocalS(key) {
    localStorage.removeItem(key);
}

function modifyTaskFromLocalS(key, oldTaskName , newTaskObject) {
    let value = retrieveFromLocalStorage(key);
    value = value.map((taskObj) => {
        if (taskObj.name === oldTaskName) {
            return (taskObj = newTaskObject);
        }
        return taskObj;
    })
    replaceArray(key, value);
    addToLocalStorage(key);
}
    




/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAddTaskForm: () => (/* binding */ displayAddTaskForm),
/* harmony export */   displayTaskContainer: () => (/* binding */ displayTaskContainer)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/js/form.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./src/js/listeners.js");
/* harmony import */ var _taskCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCard.js */ "./src/js/taskCard.js");




function displayAddTaskForm(e) {
    const addNewTaskBtn = document.querySelector(".project-addTask");
    /* MAKING THE ADD TASK DIV INTO FORM CONTAINER */
    addNewTaskBtn.classList.remove("project-addTask");
    addNewTaskBtn.classList.add("add-form");
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.setForm)(addNewTaskBtn);
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAddFormListeners)();
}

function displayTaskContainer(taskObj) {
    const displayCtn = document.querySelector(".display-ctn");
    const taskCardCtn = document.createElement("div");
    const projectAddTask = document.querySelector(".project-addTask");
    taskCardCtn.classList.add("task-card-container");
    (0,_taskCard_js__WEBPACK_IMPORTED_MODULE_2__.displayTaskCard)(taskObj, taskCardCtn);
    displayCtn.insertBefore(taskCardCtn, projectAddTask);
  }



/***/ }),

/***/ "./src/js/taskCard.js":
/*!****************************!*\
  !*** ./src/js/taskCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendProjectAddTask: () => (/* binding */ appendProjectAddTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   displayAddTask: () => (/* binding */ displayAddTask),
/* harmony export */   displayTaskCard: () => (/* binding */ displayTaskCard),
/* harmony export */   getTaskCardValues: () => (/* binding */ getTaskCardValues),
/* harmony export */   taskCheckBox: () => (/* binding */ taskCheckBox),
/* harmony export */   taskDeleteBtn: () => (/* binding */ taskDeleteBtn),
/* harmony export */   taskModifyBtn: () => (/* binding */ taskModifyBtn),
/* harmony export */   taskViewBtn: () => (/* binding */ taskViewBtn)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "./src/js/form.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./src/js/listeners.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/js/view.js");
/* harmony import */ var _blur_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blur.js */ "./src/js/blur.js");
/* harmony import */ var _checkTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkTask.js */ "./src/js/checkTask.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.js */ "./src/js/storage.js");
/* harmony import */ var _myProject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myProject.js */ "./src/js/myProject.js");








const createTask = function (name, description, dueDate, priority) {
    return { name, description, dueDate, priority };
};

function displayTaskCard(taskObj,element) {
  element.innerHTML = `
  <div class="overlay hide"></div>
  <div class="task-card">  
  <div class="task-checkbox">
    <input type="checkbox" name="" id="isTaskDone" />
  </div>
  <div class="task-info">
    <h4>${taskObj.name}</h4>
    <p class="task-description">
      ${minimizeDescription(taskObj.description)}
    </p>
    <span class="hide">${taskObj.description}</span>
    <div class="task-additionals">
      <div class="priority">
        <img src="./img/flag.svg" alt="" width="25" height="25" />
        <p>${taskObj.priority}</p>
      </div>
      <div class="task-dueDate">
        <img src="./img/due-date.svg" alt="" width="25" height="25" />
        <p>${taskObj.dueDate}</p>
      </div>
    </div>
  </div>
  <div class="task-operation">
    <div class="view-note-btn">
      <img
      src="./img/view-btn.svg"
      alt=""
      width="30"
      height="30"
      />
    </div>
    <div class="modify-btn">
      <img src="./img/modify-btn.svg" alt="" width="30" height="30" />
    </div>
    <div class="delete-btn">
      <img src="./img/delete-btn.svg" alt="" width="30" height="30" />
    </div>
  </div>
  </div>`;
}

function displayAddTask(element) {
    element.innerHTML = `<img src="./img/add-normal.svg" alt="" width="30" height="30" />
    <p>Add Task</p>`;
};

function appendProjectAddTask() {
    const displayCtn = document.querySelector(".display-ctn");
    const projectAddTask = document.createElement("div");
    projectAddTask.classList.add("project-addTask");
    displayAddTask(projectAddTask);
    displayCtn.appendChild(projectAddTask);
}

function taskDeleteBtn(e) {
    const displayCtn = document.querySelector(".display-ctn");
    const cardToDel = e.currentTarget.parentNode.parentNode.parentNode;
    const taskTitle = getTaskCardValues(cardToDel.lastElementChild).name;
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.deleteATaskFromLocalS)((0,_myProject_js__WEBPACK_IMPORTED_MODULE_6__.getCurrentProjectName)(), taskTitle);
    displayCtn.removeChild(cardToDel);
}

function taskModifyBtn(e) {
    const cardToModify = e.currentTarget.parentNode.parentNode.parentNode;
    const taskObj = getTaskCardValues(cardToModify);
    cardToModify.classList.remove("task-card-container");
    cardToModify.classList.add("add-form");
    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.setModifyForm)(cardToModify);
    const modifyCancelBtn = cardToModify.querySelector(".mod-form-cancel-btn");
    const modifyAddBtn = cardToModify.querySelector(".mod-form-add-btn");
    modifyCancelBtn.addEventListener("click", (e) => {
      ModifyCancelBtnListener(e, taskObj, cardToModify);
    });
    modifyAddBtn.addEventListener("click", (e) => {
      ModifyAddBtnListener(e,taskObj ,cardToModify);
    })
}

function ModifyCancelBtnListener(e, taskObj, cardToModify) {
    e.stopPropagation();
    const formCtn = cardToModify;
    /* CONVERTING FORM CTN INTO TASK CARD */
    formCtn.classList.remove("add-form");
    formCtn.classList.add("task-card-container");
    displayTaskCard(taskObj, formCtn);
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAllTaskOperation)();
}

function ModifyAddBtnListener(e,oldTaskObj ,cardToModify) {
  e.stopPropagation();
  const formCtn = cardToModify;
  /* CONVERTING FORM CTN INTO TASK CARD */
  formCtn.classList.remove("add-form");
  formCtn.classList.add("task-card-container");
  const taskObj = (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.getFormValues)(formCtn);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_5__.modifyTaskFromLocalS)((0,_myProject_js__WEBPACK_IMPORTED_MODULE_6__.getCurrentProjectName)(), oldTaskObj.name, taskObj);
  displayTaskCard(taskObj, formCtn);
  (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAllTaskOperation)();
}

function taskViewBtn(e) {
  const selectedCard = e.currentTarget.parentNode.parentNode.parentNode;
  const taskObj = getTaskCardValues(selectedCard);
  const viewCtn = selectedCard.querySelector(".overlay");
  (0,_blur_js__WEBPACK_IMPORTED_MODULE_3__.addBlur)();
  viewCtn.classList.remove("hide");
  (0,_view_js__WEBPACK_IMPORTED_MODULE_2__.displayViewMode)(viewCtn, taskObj);
  const closeBtn = viewCtn.querySelector(".close-btn");
  closeBtn.addEventListener("click", _view_js__WEBPACK_IMPORTED_MODULE_2__.closeViewBtnListener);
}

function getTaskCardValues(element) {
    const name = element.querySelector(".task-info h4").textContent;
    const description = element.querySelector(".task-info > .hide").textContent;
    const dueDate = element.querySelector(".task-dueDate p").textContent;
    const priority = element.querySelector(".priority p").textContent;
    return { name, description, dueDate, priority };
}

function minimizeDescription(text) {
  if (text.length <= 75) {
    return text;
  } 
  else {
    return `${text.slice(0, 70)}...`;
  }
}

function taskCheckBox(e) {
  e.stopPropagation;
  (0,_checkTask_js__WEBPACK_IMPORTED_MODULE_4__.checkTask)(e);
}



/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeViewBtnListener: () => (/* binding */ closeViewBtnListener),
/* harmony export */   displayViewMode: () => (/* binding */ displayViewMode)
/* harmony export */ });
/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blur */ "./src/js/blur.js");


function displayViewMode(element, taskObj) {
    element.innerHTML = `<h4>${taskObj.name}</h4>
    <p>${taskObj.description}</p>
    <div>
      <div class="view-additionals1">
          <div class="priority">
            <img src="./img/flag.svg" alt="" width="25" height="25" />
            <p>${taskObj.priority}</p>
          </div>
          <div class="task-dueDate">
            <img src="./img/due-date.svg" alt="" width="25" height="25" />
            <p>${taskObj.dueDate}</p>
          </div>
      </div>
      <div class="view-additionals2">
          <button class="close-btn" type="button">Close</button>
      </div>
    </div>`
}

function closeViewBtnListener(e) {
    e.stopPropagation();
    const viewCtn = e.currentTarget.parentNode.parentNode.parentNode;
    (0,_blur__WEBPACK_IMPORTED_MODULE_0__.removeBlur)();
    viewCtn.classList.add("hide");
}



/***/ }),

/***/ "./src/fonts/OpenSans-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/OpenSans-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8cc747a58ffa52b7ff9.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./src/js/listeners.js");
/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.js */ "./src/js/inbox.js");
/* harmony import */ var _myProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myProject.js */ "./src/js/myProject.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.js */ "./src/js/home.js");






const contentCtn = document.querySelector(".display-ctn");

document.addEventListener("DOMContentLoaded", () => {
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_2__.setInbox)(contentCtn);
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAddTask)();
    (0,_listeners_js__WEBPACK_IMPORTED_MODULE_1__.setAllTaskOperation)();
    (0,_myProject_js__WEBPACK_IMPORTED_MODULE_3__.setMyProjects)();
    (0,_myProject_js__WEBPACK_IMPORTED_MODULE_3__.setAddProject)();
    (0,_myProject_js__WEBPACK_IMPORTED_MODULE_3__.setSidebarDeleteBtns)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_4__.setHomeInLocalStorage)();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0lBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsVUFBVSxVQUFVLFlBQVksT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxlQUFlLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxL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LElBQUksNERBQWE7QUFDakIsSUFBSSw0REFBYTtBQUNqQixJQUFJLG1FQUFvQjtBQUN4QixJQUFJLCtEQUFxQjtBQUN6QixDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2JsdXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9jaGVja1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL215UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvanMvdGFza0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy92aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvT3BlblNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmZvcm0sXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tUFJJTUFSWS1DT0xPUjogI2VkN2QzMTtcclxuICAtLVNFQ09OREFSWS1DT0xPUjogIzRmNGE0NTtcclxuICAtLVdISVRFLVNIQURFOiAjZjZmMWVlO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV0hJVEUtU0hBREUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLndyYXBwaW5nLWN0biB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcclxufVxyXG5cclxuLyogU0lERUJBUiAqL1xyXG4uc2lkZWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU1BUlktQ09MT1IpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuLnNpZGViYXItaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkZXIsXHJcbi5zaWRlYmFyLWluYm94LFxyXG4uc2lkZWJhci10b2RheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLnNpZGViYXItbXlQcm9qZWN0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1teVByb2plY3RzID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm15UHJvamVjdHMtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNpZGViYXItY3JlYXRlUHJvamVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNpZGViYXItZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLnNpZGViYXItZm9ybSA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLnByb2plY3RGb3JtVGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8qIERJU1BMQVkgQ09OVEFJTkVSICAqL1xyXG5cclxuLmRpc3BsYXktY3RuIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5ibHVyLWJnIHtcclxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8qIEluc2lkZSBEaXNwbGF5IEN0biA+IHRhc2sgY2FyZCBzZWN0aW9uIHN0YXJ0cyAqL1xyXG4udGFzay1jYXJkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbn1cclxuXHJcbi50YXNrLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcclxuLmRlbGV0ZS1idG4sXHJcbi5tb2RpZnktYnRuLFxyXG4udmlldy1ub3RlLWJ0bixcclxuLnByb2plY3QtYWRkVGFzayxcclxuLmZvcm0tY2FuY2VsLWJ0bixcclxuLmZvcm0tYWRkLWJ0bixcclxuLmZvcm0tc2V0UHJpb3JpdHksXHJcbi5tb2QtZm9ybS1jYW5jZWwtYnRuLFxyXG4ubW9kLWZvcm0tYWRkLWJ0bixcclxuLm5ld0R1ZURhdGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2staW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnRhc2stYWRkaXRpb25hbHMsXHJcbi52aWV3LWFkZGl0aW9uYWxzMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnByaW9yaXR5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWR1ZURhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stY2FyZCA+IC50YXNrLW9wZXJhdGlvbiB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNhcmQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklNQVJZLUNPTE9SKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLm92ZXJsYXkgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4vKiBJbnNpZGUgRGlzcGxheSBDdG4gPiBwcm9qZWN0LXRvZG9zLWN0biBzZWN0aW9uIGVuZHMgKi9cclxuXHJcbi8qIEluc2lkZSBEaXNwbGF5IEN0biA+IHByb2plY3QtYWRkVGFzayBzZWN0aW9uIHN0YXJ0cyAqL1xyXG5cclxuLnByb2plY3QtYWRkVGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVNFQ09OREFSWS1DT0xPUik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiBJbnNpZGUgRGlzcGxheSBDdG4gPiBwcm9qZWN0LWFkZFRhc2sgc2VjdGlvbiBlbmRzICovXHJcblxyXG4vKiBBREQgVEFTSyBGT1JNIENUTiAqL1xyXG4uYWRkLWZvcm0ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVNFQ09OREFSWS1DT0xPUik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGQtdGFzay1hZGRpdGlvbmFscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC10YXNrLWFkZGl0aW9uYWxzID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLXRhc2stbmFtZSA+IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkZC10YXNrLWRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jYW5jZWwtYnRuLFxyXG4uZm9ybS1hZGQtYnRuLFxyXG4ubW9kLWZvcm0tY2FuY2VsLWJ0bixcclxuLm1vZC1mb3JtLWFkZC1idG4sXHJcbi5mb3JtLXNldFByaW9yaXR5LFxyXG4uY2xvc2UtYnRuIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xyXG59XHJcblxyXG4uZm9ybS1zZXREdWVEYXRlID4gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuLmZvcm0tY2FuY2VsLWJ0bixcclxuLm1vZC1mb3JtLWNhbmNlbC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU1BUlktQ09MT1IpO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogI2Y2ZjFlZTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7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QUFDMUM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLFxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLVBSSU1BUlktQ09MT1I6ICNlZDdkMzE7XFxyXFxuICAtLVNFQ09OREFSWS1DT0xPUjogIzRmNGE0NTtcXHJcXG4gIC0tV0hJVEUtU0hBREU6ICNmNmYxZWU7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udHMvT3BlblNhbnMtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdISVRFLVNIQURFKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwaW5nLWN0biB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxufVxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU1BUlktQ09MT1IpO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1oZWFkZXIsXFxyXFxuLnNpZGViYXItaW5ib3gsXFxyXFxuLnNpZGViYXItdG9kYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW15UHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItbXlQcm9qZWN0cyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm15UHJvamVjdHMtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWNyZWF0ZVByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tU0VDT05EQVJZLUNPTE9SKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWZvcm0gPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEZvcm1UaXRsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRElTUExBWSBDT05UQUlORVIgICovXFxyXFxuXFxyXFxuLmRpc3BsYXktY3RuIHtcXHJcXG4gIHdpZHRoOiA5MDBweDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXItYmcge1xcclxcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEluc2lkZSBEaXNwbGF5IEN0biA+IHRhc2sgY2FyZCBzZWN0aW9uIHN0YXJ0cyAqL1xcclxcbi50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tU0VDT05EQVJZLUNPTE9SKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNoZWNrYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuLmRlbGV0ZS1idG4sXFxyXFxuLm1vZGlmeS1idG4sXFxyXFxuLnZpZXctbm90ZS1idG4sXFxyXFxuLnByb2plY3QtYWRkVGFzayxcXHJcXG4uZm9ybS1jYW5jZWwtYnRuLFxcclxcbi5mb3JtLWFkZC1idG4sXFxyXFxuLmZvcm0tc2V0UHJpb3JpdHksXFxyXFxuLm1vZC1mb3JtLWNhbmNlbC1idG4sXFxyXFxuLm1vZC1mb3JtLWFkZC1idG4sXFxyXFxuLm5ld0R1ZURhdGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWFkZGl0aW9uYWxzLFxcclxcbi52aWV3LWFkZGl0aW9uYWxzMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kdWVEYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkID4gLnRhc2stb3BlcmF0aW9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVNFQ09OREFSWS1DT0xPUik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklNQVJZLUNPTE9SKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi8qIEluc2lkZSBEaXNwbGF5IEN0biA+IHByb2plY3QtdG9kb3MtY3RuIHNlY3Rpb24gZW5kcyAqL1xcclxcblxcclxcbi8qIEluc2lkZSBEaXNwbGF5IEN0biA+IHByb2plY3QtYWRkVGFzayBzZWN0aW9uIHN0YXJ0cyAqL1xcclxcblxcclxcbi5wcm9qZWN0LWFkZFRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnNpZGUgRGlzcGxheSBDdG4gPiBwcm9qZWN0LWFkZFRhc2sgc2VjdGlvbiBlbmRzICovXFxyXFxuXFxyXFxuLyogQUREIFRBU0sgRk9STSBDVE4gKi9cXHJcXG4uYWRkLWZvcm0ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tU0VDT05EQVJZLUNPTE9SKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweCAzMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1hZGRpdGlvbmFscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWFkZGl0aW9uYWxzID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stbmFtZSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jYW5jZWwtYnRuLFxcclxcbi5mb3JtLWFkZC1idG4sXFxyXFxuLm1vZC1mb3JtLWNhbmNlbC1idG4sXFxyXFxuLm1vZC1mb3JtLWFkZC1idG4sXFxyXFxuLmZvcm0tc2V0UHJpb3JpdHksXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1TRUNPTkRBUlktQ09MT1IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zZXREdWVEYXRlID4gaW5wdXQge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jYW5jZWwtYnRuLFxcclxcbi5tb2QtZm9ybS1jYW5jZWwtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU1BUlktQ09MT1IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZjZmMWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYWRkQmx1cigpIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZFRhc2tcIik7XHJcbiAgICB0YXNrQ2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImJsdXItYmdcIik7XHJcbiAgICB9KVxyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImJsdXItYmdcIik7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJibHVyLWJnXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVCbHVyKCkge1xyXG4gICAgY29uc3QgdGFza0NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkVGFza1wiKTtcclxuICAgIHRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1iZ1wiKTtcclxuICAgIH0pXHJcbiAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1iZ1wiKTtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItYmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZEJsdXIgLHJlbW92ZUJsdXIgIH07IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFByb2plY3ROYW1lIH0gZnJvbSBcIi4vbXlQcm9qZWN0XCI7XHJcbmltcG9ydCB7IGRlbGV0ZUFUYXNrRnJvbUxvY2FsUyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0VGFza0NhcmRWYWx1ZXMgfSBmcm9tIFwiLi90YXNrQ2FyZFwiO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUYXNrKGUpIHtcclxuICAgIGNvbnN0IGRpc3BsYXlDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY3RuXCIpO1xyXG4gICAgY29uc3QgdGFza0N0biA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGdldFRhc2tDYXJkVmFsdWVzKHRhc2tDdG4ubGFzdEVsZW1lbnRDaGlsZCkubmFtZTtcclxuICAgIGRlbGV0ZUFUYXNrRnJvbUxvY2FsUyhnZXRDdXJyZW50UHJvamVjdE5hbWUoKSwgdGFza1RpdGxlKTtcclxuICAgIGRpc3BsYXlDdG4ucmVtb3ZlQ2hpbGQodGFza0N0bik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrVGFzayB9OyIsImZ1bmN0aW9uIGdldFRvZGF5RGF0ZSgpIHtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gdG9kYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudERhdGUoZGF5c1RvSW5jcmVtZW50KSB7XHJcbiAgICBsZXQgdG9kYXkgPSBnZXRUb2RheURhdGUoKTtcclxuICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgZGF5c1RvSW5jcmVtZW50KVxyXG4gICAgcmV0dXJuIGNvbnZlcnREYXRlKHRvZGF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydERhdGUoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRUb2RheURhdGUgLGNvbnZlcnREYXRlLGluY3JlbWVudERhdGV9OyIsImltcG9ydCB7Y3JlYXRlVGFzayAsIGRpc3BsYXlUYXNrQ2FyZCxkaXNwbGF5QWRkVGFzayxhcHBlbmRQcm9qZWN0QWRkVGFzayxnZXRUYXNrQ2FyZFZhbHVlc30gZnJvbSBcIi4vdGFza0NhcmQuanNcIjtcclxuaW1wb3J0IHsgc2V0QWRkVGFzaywgc2V0QWxsVGFza09wZXJhdGlvbiB9IGZyb20gXCIuL2xpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyBhbGxvdEluZGl2aWR1YWxUYXNrSW5Mb2NhbFMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0TmFtZSB9IGZyb20gXCIuL215UHJvamVjdC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gc2V0Rm9ybShlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stbmFtZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgbmFtZT1cIlwiXHJcbiAgICAgIGlkPVwibmV3VGFza05hbWVcIlxyXG4gICAgICBjbGFzcz1cIm5ld1Rhc2tOYW1lXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIlxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stZGVzY3JpcHRpb25cIj5cclxuICAgIDx0ZXh0YXJlYVxyXG4gICAgICBuYW1lPVwiXCJcclxuICAgICAgaWQ9XCJcIlxyXG4gICAgICBjbGFzcz1cIm5ld1Rhc2tEZXNjXCJcclxuICAgICAgY29scz1cIlwiXHJcbiAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIERlc2NyaXB0aW9uXCJcclxuICAgID48L3RleHRhcmVhPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1hZGRpdGlvbmFsc1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc2V0RHVlRGF0ZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuZXdEdWVEYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJuZXdEdWVEYXRlXCIgY2xhc3M9XCJuZXdEdWVEYXRlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2V0UHJpb3JpdHlcIiBuYW1lPVwiXCIgaWQ9XCJcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZvcm0tY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZvcm0tYWRkLWJ0blwiIHR5cGU9XCJidXR0b25cIj5BZGQgVGFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0TW9kaWZ5Rm9ybShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0YXNrT2JqID0gZ2V0VGFza0NhcmRWYWx1ZXMoZWxlbWVudCk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stbmFtZVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgbmFtZT1cIlwiXHJcbiAgICAgIGlkPVwibmV3VGFza05hbWVcIlxyXG4gICAgICBjbGFzcz1cIm5ld1Rhc2tOYW1lXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIlxyXG4gICAgICB2YWx1ZT1cIiR7dGFza09iai5uYW1lfVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1kZXNjcmlwdGlvblwiPlxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIG5hbWU9XCJcIlxyXG4gICAgICBpZD1cIlwiXHJcbiAgICAgIGNsYXNzPVwibmV3VGFza0Rlc2NcIlxyXG4gICAgICBjb2xzPVwiXCJcclxuICAgICAgcm93cz1cIjRcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIlRhc2sgRGVzY3JpcHRpb25cIlxyXG4gICAgPiR7dGFza09iai5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1hZGRpdGlvbmFsc1wiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc2V0RHVlRGF0ZVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuZXdEdWVEYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJuZXdEdWVEYXRlXCIgY2xhc3M9XCJuZXdEdWVEYXRlXCIgdmFsdWU9XCIke3Rhc2tPYmouZHVlRGF0ZX1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1zZXRQcmlvcml0eVwiIG5hbWU9XCJcIiBpZD1cIlwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kLWZvcm0tY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZC1mb3JtLWFkZC1idG5cIiB0eXBlPVwiYnV0dG9uXCI+QWRkIFRhc2s8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICBzZXRQcmlvcml0eSh0YXNrT2JqLnByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsVGFza0J0bihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZm9ybUN0biA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgLyogUkVWRVJTSU5HIFRIRSBGT1JNIEJBQ0sgVE8gQURERCBUQVNLIERJViAqL1xyXG4gICAgZm9ybUN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLWZvcm1cIik7XHJcbiAgICBmb3JtQ3RuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFkZFRhc2tcIik7XHJcbiAgICBkaXNwbGF5QWRkVGFzayhmb3JtQ3RuKTtcclxuICAgIHNldEFkZFRhc2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0J0bihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZm9ybUN0biA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIC8qIENPTlZFUlRJTkcgRk9STSBDVE4gSU5UTyBUQVNLIENBUkQgKi9cclxuICAgIGZvcm1DdG4uY2xhc3NMaXN0LnJlbW92ZShcImFkZC1mb3JtXCIpO1xyXG4gICAgZm9ybUN0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGdldEZvcm1WYWx1ZXMoZm9ybUN0bik7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhmb3JtVmFsdWUubmFtZSwgZm9ybVZhbHVlLmRlc2NyaXB0aW9uLCBmb3JtVmFsdWUuZHVlRGF0ZSwgZm9ybVZhbHVlLnByaW9yaXR5KTtcclxuICAgIGFsbG90SW5kaXZpZHVhbFRhc2tJbkxvY2FsUyhnZXRDdXJyZW50UHJvamVjdE5hbWUoKSwgbmV3VGFzayk7XHJcbiAgICBkaXNwbGF5VGFza0NhcmQobmV3VGFzaywgZm9ybUN0bik7XHJcbiAgICBhcHBlbmRQcm9qZWN0QWRkVGFzaygpO1xyXG4gICAgc2V0QWRkVGFzaygpO1xyXG4gICAgc2V0QWxsVGFza09wZXJhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcmlvcml0eSh2YWx1ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zZXRQcmlvcml0eVwiKS5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcIkhpZ2hcIikge1xyXG4gICAgICAgIG9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh2YWx1ZSA9PT0gXCJNZWRpdW1cIikge1xyXG4gICAgICAgIG9wdGlvbnNbMV0uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBvcHRpb25zWzJdLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtVmFsdWVzKGZvcm1DdG4pIHtcclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtQ3RuLnF1ZXJ5U2VsZWN0b3IoXCIubmV3VGFza05hbWVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1DdG4ucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrRGVzY1wiKS52YWx1ZTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtQ3RuLnF1ZXJ5U2VsZWN0b3IoXCIubmV3RHVlRGF0ZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybUN0bi5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tc2V0UHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICByZXR1cm4geyBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3RGb3JtKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIlwiIGlkPVwicHJvamVjdEZvcm1UaXRsZVwiIGNsYXNzPVwicHJvamVjdEZvcm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBUaXRsZVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdEZvcm0tY3Jvc3NcIiBzcmM9XCIuL2ltZy90aWNrLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJwcm9qZWN0Rm9ybS10aWNrXCIgc3JjPVwiLi9pbWcvY3Jvc3Muc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXRGb3JtICxzZXRNb2RpZnlGb3JtLGFkZFRhc2tCdG4sY2FuY2VsVGFza0J0bixzZXRQcmlvcml0eSAsZ2V0Rm9ybVZhbHVlcyxkaXNwbGF5TmV3UHJvamVjdEZvcm19OyIsImltcG9ydCB7IGNvbnZlcnREYXRlLCBnZXRUb2RheURhdGUgfSBmcm9tIFwiLi9kYXRlXCI7XHJcbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlLCBjcmVhdGVBcnIsIHB1c2hPYmogfSBmcm9tIFwiLi9zdG9yYWdlXCJcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tDYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRIb21lSW5Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiI0hvbWVcIjtcclxuICAgIGNyZWF0ZUFycih0aXRsZSk7XHJcbiAgICBjb25zdCB0YXNrMSA9IGNyZWF0ZVRhc2soXCJXYWtlIFVwIEVhcmx5XCIsIFwiRG9uJ3Qgc2xlZXAgYWZ0ZXIgRmFqci5NYWtlIHlvdXIgcGxhbnMgZm9yIHRoZSBkYXlcIiwgY29udmVydERhdGUoZ2V0VG9kYXlEYXRlKCkpLCBcIkhpZ2hcIik7XHJcbiAgICBjb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soXCJXYXNoaW5nIENsb3RoZXNcIiwgXCJXaWxsIHRyeSB0byBkbyB0aGlzIGJlZm9yZSBub29uXCIsIGNvbnZlcnREYXRlKGdldFRvZGF5RGF0ZSgpKSwgXCJNZWRpdW1cIik7XHJcbiAgICBjb25zdCB0YXNrMyA9IGNyZWF0ZVRhc2soXCJBcHBvaW50bWVudCB3aXRoIGRvY3RvclwiLCBcIkFubnVhbCBoZWFsdGggY2hlY2t1cFwiLCBjb252ZXJ0RGF0ZShnZXRUb2RheURhdGUoKSksIFwiTG93XCIpO1xyXG4gICAgY29uc3QgdGFzazQgPSBjcmVhdGVUYXNrKFwiQXJhYmljIENsYXNzXCIsIFwiV2Vla2x5IGNsYXNzIGF0IEBCdXJvb2ogSW5zdGl0dXRlXCIsIGNvbnZlcnREYXRlKGdldFRvZGF5RGF0ZSgpKSwgXCJIaWdoXCIpO1xyXG4gICAgcHVzaE9iaih0aXRsZSwgdGFzazEpO1xyXG4gICAgcHVzaE9iaih0aXRsZSwgdGFzazIpO1xyXG4gICAgcHVzaE9iaih0aXRsZSwgdGFzazMpO1xyXG4gICAgcHVzaE9iaih0aXRsZSwgdGFzazQpO1xyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodGl0bGUpO1xyXG59XHJcblxyXG5leHBvcnQge3NldEhvbWVJbkxvY2FsU3RvcmFnZX07IiwiaW1wb3J0IHsgY29udmVydERhdGUsIGdldFRvZGF5RGF0ZSwgaW5jcmVtZW50RGF0ZSB9IGZyb20gXCIuL2RhdGVcIjtcclxuaW1wb3J0IHsgc2V0QWRkVGFzaywgc2V0QWxsVGFza09wZXJhdGlvbn0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCByZW1vdmVBY3RpdmVDbGFzc0ZvckFsbCwgc2V0QWN0aXZlQ2xhc3MsIHZpZXdUYXNrcyB9IGZyb20gXCIuL215UHJvamVjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVBcnIsIGlzRW1wdHlJbkxvY2FsU3RvcmFnZSwgc3RvcmVBbGxUYXNrIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza0NvbnRhaW5lciB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tDYXJkXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5ib3goZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlxyXG4gICAgICAgIDxoMz5JbmJveDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1hZGRUYXNrXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9hZGQtbm9ybWFsLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIC8+XHJcbiAgICAgICAgPHA+QWRkIFRhc2s8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICBkaXNwbGF5VGFza0NvbnRhaW5lcihjcmVhdGVUYXNrKFwiRmFqciBTYWxhaFwiLCBcIlRoZSBQcm9waGV0ICjvt7opIHNhaWQsVGhlIHR3byBSYWthaCBiZWZvcmUgdGhlIGRhd24gKEZhanIpIHByYXllciBhcmUgYmV0dGVyIHRoYW4gdGhpcyB3b3JsZCBhbmQgYWxsIGl0IGNvbnRhaW5zLlwiLCBjb252ZXJ0RGF0ZShnZXRUb2RheURhdGUoKSksIFwiSGlnaFwiKSk7XHJcbiAgZGlzcGxheVRhc2tDb250YWluZXIoY3JlYXRlVGFzayhcIlJlYWQgUXVyYW5cIiwgXCJUaGUgUHJvcGhldCAo77e6KSBzYWlkLCBUaGUgYmVzdCBhbW9uZyB5b3UgKE11c2xpbXMpIGFyZSB0aG9zZSB3aG8gbGVhcm4gdGhlIFF1cmFuIGFuZCB0ZWFjaCBpdC5cIiwgY29udmVydERhdGUoZ2V0VG9kYXlEYXRlKCkpLCBcIkhpZ2hcIikpO1xyXG4gIGRpc3BsYXlUYXNrQ29udGFpbmVyKGNyZWF0ZVRhc2soXCJQbGFuIGFuZCBQcmVwYXJlIE1lYWxzXCIsIFwiVGFrZSB0aW1lIHRvIHBsYW4gYW5kIHByZXBhcmUgaGVhbHRoeSBtZWFscyBmb3IgdGhlIGRheSB0byBlbnN1cmUgYSBiYWxhbmNlZCBhbmQgbnV0cml0aW91cyBkaWV0LlwiLCBjb252ZXJ0RGF0ZShnZXRUb2RheURhdGUoKSksIFwiTWVkaXVtXCIpKTtcclxuICBkaXNwbGF5VGFza0NvbnRhaW5lcihjcmVhdGVUYXNrKFwiRXhwbG9yZSBKYXZhU2NyaXB0IFByb3RvdHlwZXNcIiwgXCJJJ20gZGl2aW5nIGludG8gSmF2YVNjcmlwdCBwcm90b3R5cGVzIHRvIGRlZXBlbiBteSB1bmRlcnN0YW5kaW5nIG9mIHRoaXMgY3J1Y2lhbCBsYW5ndWFnZSBmZWF0dXJlLiBTdGFydGluZyB3aXRoIGFydGljbGVzLCB0dXRvcmlhbHMsIGFuZCBvZmZpY2lhbCBkb2N1bWVudGF0aW9uLCBJJ2xsIGNvdmVyIHByb3RvdHlwZSBjaGFpbnMsIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucywgYW5kIHRoZSBwcm90b3R5cGUgcHJvcGVydHkuIFRocm91Z2ggY29kaW5nIGV4ZXJjaXNlcyBhbmQgc21hbGwgcHJvamVjdHMsIEknbGwgYXBwbHkgbXkga25vd2xlZGdlLCBlbmdhZ2luZyB3aXRoIG9ubGluZSBjb21tdW5pdGllcyBmb3Igc3VwcG9ydC4gS2VlcGluZyBhIGxlYXJuaW5nIGxvZywgSSBhaW0gdG8gY29uZmlkZW50bHkgaW50ZWdyYXRlIHByb3RvdHlwZS1iYXNlZCBwYXR0ZXJucyBpbnRvIG15IGNvZGUgYnkgdGhlIGR1ZSBkYXRlLlwiLCBpbmNyZW1lbnREYXRlKDUpLCBcIk1lZGl1bVwiKSk7XHJcbiAgc2F2ZUluYm94KCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzYXZlSW5ib3goKSB7XHJcbiAgY3JlYXRlQXJyKFwiSW5ib3hcIik7XHJcbiAgc3RvcmVBbGxUYXNrKFwiSW5ib3hcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbmJveEZyb21Mb2NhbFMoKSB7XHJcbiAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgY29uc3QgaW5ib3hDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItaW5ib3hcIik7XHJcbiAgY29uc3QgdGl0bGUgPSBcIkluYm94XCI7XHJcbiAgcmVtb3ZlQWN0aXZlQ2xhc3NGb3JBbGwoKTtcclxuICBzZXRBY3RpdmVDbGFzcyhpbmJveEN0bik7XHJcbiAgZGlzcGxheVByb2plY3QoZGlzcGxheUN0biwgdGl0bGUpO1xyXG4gIHNldEFkZFRhc2soKTtcclxuICBpZiAoIWlzRW1wdHlJbkxvY2FsU3RvcmFnZSh0aXRsZSkpIHtcclxuICAgIHZpZXdUYXNrcyh0aXRsZSk7XHJcbiAgICBzZXRBbGxUYXNrT3BlcmF0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzYXZlSW5ib3gsZGlzcGxheUluYm94RnJvbUxvY2FsUyB9OyIsImltcG9ydCB7IGRpc3BsYXlBZGRUYXNrRm9ybSB9IGZyb20gXCIuL3Rhc2suanNcIjtcclxuaW1wb3J0IHsgYWRkVGFza0J0biBhcyBmb3JtQWRkVGFza0J0bixjYW5jZWxUYXNrQnRuIGFzIGZvcm1DYW5jZWxUYXNrQnRuIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xyXG5pbXBvcnQgeyB0YXNrRGVsZXRlQnRuLHRhc2tNb2RpZnlCdG4sdGFza1ZpZXdCdG4sdGFza0NoZWNrQm94IH0gZnJvbSBcIi4vdGFza0NhcmQuanNcIjtcclxuXHJcbmZ1bmN0aW9uIHNldEFkZFRhc2soKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFkZFRhc2tcIik7XHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWRkVGFza0Zvcm0se29uY2U6dHJ1ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBZGRGb3JtTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNhbmNlbC1idG5cIik7XHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tYWRkLWJ0blwiKTtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybUNhbmNlbFRhc2tCdG4pO1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtQWRkVGFza0J0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlbGV0ZUJ0bnMoKSB7XHJcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xyXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGFza0RlbGV0ZUJ0bilcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE1vZGlmeUJ0bnMoKSB7XHJcbiAgICBjb25zdCBtb2RpZnlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RpZnktYnRuXCIpO1xyXG4gICAgbW9kaWZ5QnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGFza01vZGlmeUJ0bilcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZpZXdCdG5zKCkge1xyXG4gICAgY29uc3Qgdmlld0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZXctbm90ZS1idG5cIik7XHJcbiAgICB2aWV3QnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGFza1ZpZXdCdG4pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaGVja0JveGVzKCkge1xyXG4gICAgY29uc3QgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjaXNUYXNrRG9uZVwiKTtcclxuICAgIGNoZWNrQm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YXNrQ2hlY2tCb3gpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWxsVGFza09wZXJhdGlvbigpIHtcclxuICAgIHNldENoZWNrQm94ZXMoKTtcclxuICAgIHNldE1vZGlmeUJ0bnMoKTtcclxuICAgIHNldERlbGV0ZUJ0bnMoKTtcclxuICAgIHNldFZpZXdCdG5zKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEFkZFRhc2ssIHNldEFkZEZvcm1MaXN0ZW5lcnMsIHNldEFsbFRhc2tPcGVyYXRpb24gfTtcclxuXHJcbiIsImltcG9ydCB7IGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IHsgZGlzcGxheUluYm94RnJvbUxvY2FsUyB9IGZyb20gXCIuL2luYm94XCI7XHJcbmltcG9ydCB7IHNldEFkZFRhc2ssIHNldEFsbFRhc2tPcGVyYXRpb259IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xyXG5pbXBvcnQgeyBhbGxvdE1lbW9yeSwgZGVsZXRlUHJvamVjdEZyb21Mb2NhbFMsIGlzRW1wdHlJbkxvY2FsU3RvcmFnZSwgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza0NvbnRhaW5lciB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmZ1bmN0aW9uIHNldE15UHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY2FyZFwiKTtcclxuICAgIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWluYm94XCIpO1xyXG4gICAgcHJvamVjdENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB2aWV3UHJvamVjdCk7XHJcbiAgICB9KVxyXG4gICAgaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlld1Byb2plY3QoZSkge1xyXG4gICAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudDtcclxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzRm9yQWxsKCk7XHJcbiAgICBzZXRBY3RpdmVDbGFzcyhlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgZGlzcGxheVByb2plY3QoZGlzcGxheUN0biwgdGl0bGUpO1xyXG4gICAgc2V0QWRkVGFzaygpO1xyXG4gICAgaWYgKCFpc0VtcHR5SW5Mb2NhbFN0b3JhZ2UodGl0bGUpKSB7XHJcbiAgICAgICAgdmlld1Rhc2tzKHRpdGxlKTtcclxuICAgICAgICBzZXRBbGxUYXNrT3BlcmF0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpZXdUYXNrcyhrZXkpIHtcclxuICAgIGNvbnN0IHRhc2tDYXJkcyA9IHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG4gICAgdGFza0NhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheVRhc2tDb250YWluZXIoY2FyZCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KGVsZW1lbnQsdGl0bGUpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZVwiPlxyXG4gICAgICAgIDxoMz4ke3RpdGxlfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1hZGRUYXNrXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9hZGQtbm9ybWFsLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIC8+XHJcbiAgICAgICAgPHA+QWRkIFRhc2s8L3A+XHJcbiAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFkZFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNyZWF0ZVByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0QnRuTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEJ0bkxpc3RlbmVyKGUpIHtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWNyZWF0ZVByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWZvcm1cIik7XHJcbiAgICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oYWRkUHJvamVjdEJ0bik7XHJcbiAgICBjb25zdCBjcm9zc0J0biA9IGFkZFByb2plY3RCdG4ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybS1jcm9zc1wiKTtcclxuICAgIGNvbnN0IHRpY2tCdG4gPSBhZGRQcm9qZWN0QnRuLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm0tdGlja1wiKTtcclxuICAgIGNyb3NzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Q3Jvc3NCdG4pO1xyXG4gICAgdGlja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdFRpY2tCdG4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0Q3Jvc3NCdG4oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtQ3RuID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIHJldmVydFByb2plY3RGb3JtKGFkZFByb2plY3RGb3JtQ3RuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJ0UHJvamVjdEZvcm0oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci1mb3JtXCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1jcmVhdGVQcm9qZWN0XCIpO1xyXG4gICAgZGlzcGxheUFkZFByb2plY3RCdG4oZWxlbWVudCk7XHJcbiAgICBzZXRBZGRQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RUaWNrQnRuKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybUN0biA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBwcm9qZWN0c0N0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlQcm9qZWN0cy1jb250ZW50XCIpO1xyXG4gICAgY29uc3QgZ2V0UHJvamVjdFRpdGxlID0gYWRkUHJvamVjdEZvcm1DdG4ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVRpdGxlXCIpLnZhbHVlO1xyXG4gICAgcHJvamVjdHNDdG4uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdChnZXRQcm9qZWN0VGl0bGUpKTtcclxuICAgIGFsbG90TWVtb3J5KGAjJHtnZXRQcm9qZWN0VGl0bGV9YCk7XHJcbiAgICByZXZlcnRQcm9qZWN0Rm9ybShhZGRQcm9qZWN0Rm9ybUN0bik7XHJcbiAgICBzZXRTaWRlYmFyRGVsZXRlQnRucygpO1xyXG4gICAgc2V0TXlQcm9qZWN0cygpO1xyXG4gICAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IHByb2plY3RzQ3RuLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBkaXNwbGF5UHJvamVjdChkaXNwbGF5Q3RuLCBwcm9qZWN0Q2FyZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCk7XHJcbiAgICBzZXRBZGRUYXNrKCk7XHJcbiAgICByZW1vdmVBY3RpdmVDbGFzc0ZvckFsbCgpO1xyXG4gICAgc2V0QWN0aXZlQ2xhc3MocHJvamVjdENhcmQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xyXG4gICAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwPiMke3Byb2plY3RUaXRsZX08L3A+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9kZWxldGUtYnRuLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIHByb2plY3RDYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdEJ0bihlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxpbWcgc3JjPVwiLi9pbWcvYWRkLW5vcm1hbC5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPHA+Q3JlYXRlIE5ldyBQcm9qZWN0PC9wPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNpZGViYXJEZWxldGVCdG5zKCkge1xyXG4gICAgY29uc3QgZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jYXJkID4gaW1nXCIpO1xyXG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFByb2plY3REZWxldGVCdG4pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvamVjdERlbGV0ZUJ0bihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IHByb2plY3RzQ3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVByb2plY3RzLWNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBrZXkgPSBwcm9qZWN0Q2FyZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTKGtleSk7XHJcbiAgICBpZiAocHJvamVjdENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgZGlzcGxheUluYm94RnJvbUxvY2FsUygpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdHNDdG4ucmVtb3ZlQ2hpbGQocHJvamVjdENhcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdE5hbWUoKSB7XHJcbiAgICBjb25zdCBuYW1lQ3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWVDdG4ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQ7XHJcbiAgICByZXR1cm4gcHJvamVjdE5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZUNsYXNzKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3NGb3JBbGwoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtY2FyZFwiKTtcclxuICAgIGNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWluYm94XCIpO1xyXG4gICAgaW5ib3hCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGlmIChwcm9qZWN0Q2FyZHMpIHtcclxuICAgICAgICBwcm9qZWN0Q2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2V0TXlQcm9qZWN0cyAsc2V0QWRkUHJvamVjdCxzZXRTaWRlYmFyRGVsZXRlQnRucyxnZXRDdXJyZW50UHJvamVjdE5hbWUscmVtb3ZlQWN0aXZlQ2xhc3NGb3JBbGwsc2V0QWN0aXZlQ2xhc3MsZGlzcGxheVByb2plY3Qsdmlld1Rhc2tzfTsiLCJpbXBvcnQgeyBnZXRUYXNrQ2FyZFZhbHVlcyB9IGZyb20gXCIuL3Rhc2tDYXJkXCI7XHJcblxyXG5jb25zdCBTdG9yYWdlID0ge1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXJyKG5hbWUpIHtcclxuICAgIFN0b3JhZ2VbbmFtZV0gPSBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaE9iaihuYW1lLCB0YXNrT2JqKSB7XHJcbiAgICBTdG9yYWdlW25hbWVdLnB1c2godGFza09iaik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VBcnJheShuYW1lLCBhcnJheSkge1xyXG4gICAgU3RvcmFnZVtuYW1lXSA9IGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9yZUFsbFRhc2socHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IGRpc3BsYXlDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY3RuXCIpO1xyXG4gICAgY29uc3QgdGFza0NhcmRzID0gZGlzcGxheUN0bi5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKTtcclxuICAgIHRhc2tDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza09iaiA9IGdldFRhc2tDYXJkVmFsdWVzKGNhcmQpO1xyXG4gICAgICAgIHB1c2hPYmoocHJvamVjdE5hbWUsIHRhc2tPYmopO1xyXG4gICAgfSlcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KFN0b3JhZ2Vba2V5XSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5SW5Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PSBcIltdXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhpaVwiKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbG90TWVtb3J5KGtleSkge1xyXG4gICAgY3JlYXRlQXJyKGtleSk7XHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShrZXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxvdEluZGl2aWR1YWxUYXNrSW5Mb2NhbFMoa2V5LHRhc2tPYmopIHtcclxuICAgIHB1c2hPYmooa2V5LCB0YXNrT2JqKTtcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUFUYXNrRnJvbUxvY2FsUyhrZXksIG5hbWUpIHtcclxuICAgIGxldCB2YWx1ZSA9IHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5maWx0ZXIoKHRhc2tPYmopID0+IHtcclxuICAgICAgICBpZiAodGFza09iai5uYW1lICE9IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJlcGxhY2VBcnJheShrZXksIHZhbHVlKTtcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTKGtleSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VGFza0Zyb21Mb2NhbFMoa2V5LCBvbGRUYXNrTmFtZSAsIG5ld1Rhc2tPYmplY3QpIHtcclxuICAgIGxldCB2YWx1ZSA9IHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS5tYXAoKHRhc2tPYmopID0+IHtcclxuICAgICAgICBpZiAodGFza09iai5uYW1lID09PSBvbGRUYXNrTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRhc2tPYmogPSBuZXdUYXNrT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhc2tPYmo7XHJcbiAgICB9KVxyXG4gICAgcmVwbGFjZUFycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2Uoa2V5KTtcclxufVxyXG4gICAgXHJcbmV4cG9ydCB7IGNyZWF0ZUFyciwgc3RvcmVBbGxUYXNrICxyZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UsYWxsb3RNZW1vcnksaXNFbXB0eUluTG9jYWxTdG9yYWdlICxwdXNoT2JqLGFkZFRvTG9jYWxTdG9yYWdlfTtcclxuZXhwb3J0IHsgYWxsb3RJbmRpdmlkdWFsVGFza0luTG9jYWxTICxkZWxldGVBVGFza0Zyb21Mb2NhbFMsZGVsZXRlUHJvamVjdEZyb21Mb2NhbFMsbW9kaWZ5VGFza0Zyb21Mb2NhbFMgfTtcclxuIiwiaW1wb3J0IHsgc2V0Rm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcclxuaW1wb3J0IHsgc2V0QWRkRm9ybUxpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVycy5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza0NhcmQgfSBmcm9tIFwiLi90YXNrQ2FyZC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tGb3JtKGUpIHtcclxuICAgIGNvbnN0IGFkZE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkVGFza1wiKTtcclxuICAgIC8qIE1BS0lORyBUSEUgQUREIFRBU0sgRElWIElOVE8gRk9STSBDT05UQUlORVIgKi9cclxuICAgIGFkZE5ld1Rhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtYWRkVGFza1wiKTtcclxuICAgIGFkZE5ld1Rhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1mb3JtXCIpO1xyXG4gICAgc2V0Rm9ybShhZGROZXdUYXNrQnRuKTtcclxuICAgIHNldEFkZEZvcm1MaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tDb250YWluZXIodGFza09iaikge1xyXG4gICAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgICBjb25zdCB0YXNrQ2FyZEN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hZGRUYXNrXCIpO1xyXG4gICAgdGFza0NhcmRDdG4uY2xhc3NMaXN0LmFkZChcInRhc2stY2FyZC1jb250YWluZXJcIik7XHJcbiAgICBkaXNwbGF5VGFza0NhcmQodGFza09iaiwgdGFza0NhcmRDdG4pO1xyXG4gICAgZGlzcGxheUN0bi5pbnNlcnRCZWZvcmUodGFza0NhcmRDdG4sIHByb2plY3RBZGRUYXNrKTtcclxuICB9XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5QWRkVGFza0Zvcm0sZGlzcGxheVRhc2tDb250YWluZXJ9OyIsImltcG9ydCB7IHNldE1vZGlmeUZvcm0gLGdldEZvcm1WYWx1ZXMgfSBmcm9tIFwiLi9mb3JtLmpzXCI7XHJcbmltcG9ydCB7IHNldEFsbFRhc2tPcGVyYXRpb24gfSBmcm9tIFwiLi9saXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVZpZXdNb2RlLCBjbG9zZVZpZXdCdG5MaXN0ZW5lciB9IGZyb20gXCIuL3ZpZXcuanNcIjtcclxuaW1wb3J0IHsgYWRkQmx1ciB9IGZyb20gXCIuL2JsdXIuanNcIjtcclxuaW1wb3J0IHsgY2hlY2tUYXNrIH0gZnJvbSBcIi4vY2hlY2tUYXNrLmpzXCI7XHJcbmltcG9ydCB7IGRlbGV0ZUFUYXNrRnJvbUxvY2FsUywgbW9kaWZ5VGFza0Zyb21Mb2NhbFMgfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0TmFtZSB9IGZyb20gXCIuL215UHJvamVjdC5qc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uIChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2tDYXJkKHRhc2tPYmosZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5IGhpZGVcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+ICBcclxuICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cImlzVGFza0RvbmVcIiAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0YXNrLWluZm9cIj5cclxuICAgIDxoND4ke3Rhc2tPYmoubmFtZX08L2g0PlxyXG4gICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICR7bWluaW1pemVEZXNjcmlwdGlvbih0YXNrT2JqLmRlc2NyaXB0aW9uKX1cclxuICAgIDwvcD5cclxuICAgIDxzcGFuIGNsYXNzPVwiaGlkZVwiPiR7dGFza09iai5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1hZGRpdGlvbmFsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1nL2ZsYWcuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgICA8cD4ke3Rhc2tPYmoucHJpb3JpdHl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlRGF0ZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvZHVlLWRhdGUuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgICA8cD4ke3Rhc2tPYmouZHVlRGF0ZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInRhc2stb3BlcmF0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidmlldy1ub3RlLWJ0blwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgIHNyYz1cIi4vaW1nL3ZpZXctYnRuLnN2Z1wiXHJcbiAgICAgIGFsdD1cIlwiXHJcbiAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RpZnktYnRuXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9pbWcvbW9kaWZ5LWJ0bi5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLWJ0blwiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1nL2RlbGV0ZS1idG4uc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBZGRUYXNrKGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiLi9pbWcvYWRkLW5vcm1hbC5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxyXG4gICAgPHA+QWRkIFRhc2s8L3A+YDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RBZGRUYXNrKCkge1xyXG4gICAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0QWRkVGFzay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hZGRUYXNrXCIpO1xyXG4gICAgZGlzcGxheUFkZFRhc2socHJvamVjdEFkZFRhc2spO1xyXG4gICAgZGlzcGxheUN0bi5hcHBlbmRDaGlsZChwcm9qZWN0QWRkVGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEZWxldGVCdG4oZSkge1xyXG4gICAgY29uc3QgZGlzcGxheUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1jdG5cIik7XHJcbiAgICBjb25zdCBjYXJkVG9EZWwgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBnZXRUYXNrQ2FyZFZhbHVlcyhjYXJkVG9EZWwubGFzdEVsZW1lbnRDaGlsZCkubmFtZTtcclxuICAgIGRlbGV0ZUFUYXNrRnJvbUxvY2FsUyhnZXRDdXJyZW50UHJvamVjdE5hbWUoKSwgdGFza1RpdGxlKTtcclxuICAgIGRpc3BsYXlDdG4ucmVtb3ZlQ2hpbGQoY2FyZFRvRGVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza01vZGlmeUJ0bihlKSB7XHJcbiAgICBjb25zdCBjYXJkVG9Nb2RpZnkgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCB0YXNrT2JqID0gZ2V0VGFza0NhcmRWYWx1ZXMoY2FyZFRvTW9kaWZ5KTtcclxuICAgIGNhcmRUb01vZGlmeS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICAgIGNhcmRUb01vZGlmeS5jbGFzc0xpc3QuYWRkKFwiYWRkLWZvcm1cIik7XHJcbiAgICBzZXRNb2RpZnlGb3JtKGNhcmRUb01vZGlmeSk7XHJcbiAgICBjb25zdCBtb2RpZnlDYW5jZWxCdG4gPSBjYXJkVG9Nb2RpZnkucXVlcnlTZWxlY3RvcihcIi5tb2QtZm9ybS1jYW5jZWwtYnRuXCIpO1xyXG4gICAgY29uc3QgbW9kaWZ5QWRkQnRuID0gY2FyZFRvTW9kaWZ5LnF1ZXJ5U2VsZWN0b3IoXCIubW9kLWZvcm0tYWRkLWJ0blwiKTtcclxuICAgIG1vZGlmeUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgTW9kaWZ5Q2FuY2VsQnRuTGlzdGVuZXIoZSwgdGFza09iaiwgY2FyZFRvTW9kaWZ5KTtcclxuICAgIH0pO1xyXG4gICAgbW9kaWZ5QWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBNb2RpZnlBZGRCdG5MaXN0ZW5lcihlLHRhc2tPYmogLGNhcmRUb01vZGlmeSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBNb2RpZnlDYW5jZWxCdG5MaXN0ZW5lcihlLCB0YXNrT2JqLCBjYXJkVG9Nb2RpZnkpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBmb3JtQ3RuID0gY2FyZFRvTW9kaWZ5O1xyXG4gICAgLyogQ09OVkVSVElORyBGT1JNIENUTiBJTlRPIFRBU0sgQ0FSRCAqL1xyXG4gICAgZm9ybUN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLWZvcm1cIik7XHJcbiAgICBmb3JtQ3RuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNhcmQtY29udGFpbmVyXCIpO1xyXG4gICAgZGlzcGxheVRhc2tDYXJkKHRhc2tPYmosIGZvcm1DdG4pO1xyXG4gICAgc2V0QWxsVGFza09wZXJhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb2RpZnlBZGRCdG5MaXN0ZW5lcihlLG9sZFRhc2tPYmogLGNhcmRUb01vZGlmeSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgZm9ybUN0biA9IGNhcmRUb01vZGlmeTtcclxuICAvKiBDT05WRVJUSU5HIEZPUk0gQ1ROIElOVE8gVEFTSyBDQVJEICovXHJcbiAgZm9ybUN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLWZvcm1cIik7XHJcbiAgZm9ybUN0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1jYXJkLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCB0YXNrT2JqID0gZ2V0Rm9ybVZhbHVlcyhmb3JtQ3RuKTtcclxuICBtb2RpZnlUYXNrRnJvbUxvY2FsUyhnZXRDdXJyZW50UHJvamVjdE5hbWUoKSwgb2xkVGFza09iai5uYW1lLCB0YXNrT2JqKTtcclxuICBkaXNwbGF5VGFza0NhcmQodGFza09iaiwgZm9ybUN0bik7XHJcbiAgc2V0QWxsVGFza09wZXJhdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrVmlld0J0bihlKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRDYXJkID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IHRhc2tPYmogPSBnZXRUYXNrQ2FyZFZhbHVlcyhzZWxlY3RlZENhcmQpO1xyXG4gIGNvbnN0IHZpZXdDdG4gPSBzZWxlY3RlZENhcmQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gIGFkZEJsdXIoKTtcclxuICB2aWV3Q3RuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gIGRpc3BsYXlWaWV3TW9kZSh2aWV3Q3RuLCB0YXNrT2JqKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IHZpZXdDdG4ucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVmlld0J0bkxpc3RlbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza0NhcmRWYWx1ZXMoZWxlbWVudCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWluZm8gaDRcIikudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWluZm8gPiAuaGlkZVwiKS50ZXh0Q29udGVudDtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVEYXRlIHBcIikudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eSBwXCIpLnRleHRDb250ZW50O1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pbmltaXplRGVzY3JpcHRpb24odGV4dCkge1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCA8PSA3NSkge1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIHJldHVybiBgJHt0ZXh0LnNsaWNlKDAsIDcwKX0uLi5gO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NoZWNrQm94KGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbjtcclxuICBjaGVja1Rhc2soZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRhc2ssZGlzcGxheUFkZFRhc2sgLGFwcGVuZFByb2plY3RBZGRUYXNrLGRpc3BsYXlUYXNrQ2FyZCx0YXNrRGVsZXRlQnRuLHRhc2tNb2RpZnlCdG4sZ2V0VGFza0NhcmRWYWx1ZXMsdGFza1ZpZXdCdG4sdGFza0NoZWNrQm94fTsiLCJpbXBvcnQgeyByZW1vdmVCbHVyIH0gZnJvbSBcIi4vYmx1clwiO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheVZpZXdNb2RlKGVsZW1lbnQsIHRhc2tPYmopIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxoND4ke3Rhc2tPYmoubmFtZX08L2g0PlxyXG4gICAgPHA+JHt0YXNrT2JqLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFkZGl0aW9uYWxzMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvZmxhZy5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiAvPlxyXG4gICAgICAgICAgICA8cD4ke3Rhc2tPYmoucHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWVEYXRlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvZHVlLWRhdGUuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgLz5cclxuICAgICAgICAgICAgPHA+JHt0YXNrT2JqLmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmlldy1hZGRpdGlvbmFsczJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1idG5cIiB0eXBlPVwiYnV0dG9uXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVmlld0J0bkxpc3RlbmVyKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCB2aWV3Q3RuID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgcmVtb3ZlQmx1cigpO1xyXG4gICAgdmlld0N0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVZpZXdNb2RlLCBjbG9zZVZpZXdCdG5MaXN0ZW5lciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgc2V0QWRkVGFzayAsIHNldEFsbFRhc2tPcGVyYXRpb24gfSBmcm9tIFwiLi9saXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHsgc2V0SW5ib3ggfSBmcm9tIFwiLi9pbmJveC5qc1wiO1xyXG5pbXBvcnQgeyBzZXRNeVByb2plY3RzICxzZXRBZGRQcm9qZWN0ICxzZXRTaWRlYmFyRGVsZXRlQnRuc30gZnJvbSBcIi4vbXlQcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7IHNldEhvbWVJbkxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnRDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktY3RuXCIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgc2V0SW5ib3goY29udGVudEN0bik7XHJcbiAgICBzZXRBZGRUYXNrKCk7XHJcbiAgICBzZXRBbGxUYXNrT3BlcmF0aW9uKCk7XHJcbiAgICBzZXRNeVByb2plY3RzKCk7XHJcbiAgICBzZXRBZGRQcm9qZWN0KCk7XHJcbiAgICBzZXRTaWRlYmFyRGVsZXRlQnRucygpO1xyXG4gICAgc2V0SG9tZUluTG9jYWxTdG9yYWdlKCk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9