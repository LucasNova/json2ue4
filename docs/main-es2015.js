(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>JSON to UE4 <span class=\"purple\">Structures/Classes</span> with <span class=\"orange\">serialization</span></h1>\r\n\r\n<div class=\"table editors\">\r\n        <div class=\"row-editor smaller\">\r\n                <div>\r\n                        <div class=\"table\">\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Struct Name\"\r\n                                                        [value]=\"className\"\r\n                                                        (change)=\"onClassNameChanged($event.target.value)\">\r\n                                        </mat-form-field>\r\n                                        <p *ngIf=\"!className\" class=\"hint\">Note: generator will use name\r\n                                                \"MyStruct\" if you miss this field</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsPrefixes\" (change)=\"onPrefixesToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                WithPrefixes\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"!optionsPrefixes\" class=\"hint\">Note: If your response have duplicated\r\n                                                key names, output generate duplicated structures. You need fix it by\r\n                                                yourself</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsSerializable\"\r\n                                                (change)=\"onSerializableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                With serialization\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsSerializable\" class=\"hint\">Note: Currently not working, wait new version</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsBlueprintable\"\r\n                                                (change)=\"onBlueprintableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Blueprintable\r\n                                        </mat-slide-toggle>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsPluralizable\"\r\n                                                (change)=\"onPluralizableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Singularization\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsPluralizable\" class=\"hint\">Note: Will convert structure name to singular form, if that was created from array</p>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <p>Put your JSON response here:</p>\r\n                <ace-editor #jsoneditor style=\"min-height:480px;\"></ace-editor>\r\n        </div>\r\n        <div class=\"row-editor bigger\">\r\n                <p>Output:</p>\r\n                <ace-editor #cppeditor style=\"min-height:760px;\"></ace-editor>\r\n        </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  margin-top: 50px;\n  color: #dfdfdf;\n}\n\n.purple {\n  color: #b30ab3;\n}\n\n.orange {\n  color: orange;\n}\n\n.hint {\n  font-size: 12px;\n  color: #9a9a9a;\n}\n\n.table {\n  vertical-align: top;\n}\n\n.table.editors {\n  padding-left: 50px;\n}\n\n.table .row {\n  box-sizing: border-box;\n  vertical-align: top;\n  width: 220px;\n  display: inline-block;\n  padding: 20px;\n}\n\n.table .row-editor {\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n  display: inline-block;\n  padding: 50px;\n  padding-top: 0;\n  padding-left: 0px;\n  padding-right: 120px;\n}\n\n.table .row-editor.smaller {\n  width: 45%;\n}\n\n.table .row-editor.bigger {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGRldlxcanNvbjJ1ZTQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREVJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FSOztBRENRO0VBQ0ksVUFBQTtBQ0NaOztBRENRO0VBQ0ksVUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5wdXJwbGV7XHJcbiAgICBjb2xvcjogI2IzMGFiMztcclxufVxyXG4ub3Jhbmdle1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmhpbnR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzlhOWE5YTtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICYuZWRpdG9yc3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLy8gaW5wdXR7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLnJvdy1lZGl0b3J7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTIwcHg7XHJcbiAgICAgICAgJi5zbWFsbGVye1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYmlnZ2Vye1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaDEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogI2RmZGZkZjtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiAjYjMwYWIzO1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmhpbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOWE5YTlhO1xufVxuXG4udGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnRhYmxlLmVkaXRvcnMge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiAyMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yLnNtYWxsZXIge1xuICB3aWR0aDogNDUlO1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yLmJpZ2dlciB7XG4gIHdpZHRoOiA0NSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var pluralize = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
class Field {
    constructor(_type, _name, _struct, _bArray) {
        this.root = null;
        this.bArray = false;
        this.originalName = _name;
        this.name = _name;
        this.type = _type;
        this.root = _struct;
        this.bArray = _bArray;
        this.uuid = generateUUID();
    }
    getPrefixedName(name, pluralized) {
        if (!this.root) {
            return this.name + (name ? name : '');
        }
        else {
            return (this.root.getPrefixedName((name ? name : ''), this.root.bArray && pluralized)) + (this.name ? (pluralized ? pluralize.singular(this.name) : this.name) : '');
        }
    }
    getName(pluralized) {
        return (pluralized ? pluralize.singular(this.name) : this.name);
    }
    setArray(_bArray) {
        this.bArray = _bArray;
    }
}
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'json2ue';
        this.generateType = 'Struct';
        this.optionsPrefixes = true;
        this.optionsSerializable = true;
        this.optionsBlueprintable = true;
        this.optionsPluralizable = true;
        this.fields = [];
        this.className = '';
    }
    ngAfterViewInit() {
        let cmp = this;
        this.jsonEditor.getEditor().setOptions({
            showLineNumbers: false,
            tabSize: 2,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            maxLines: Infinity
        });
        this.jsonEditor.mode = 'json';
        this.jsonEditor.registerOnChange(function (text) {
            cmp.handleData(text);
        });
        this.jsonEditor.value =
            `
{
  "users": [{
    "name": "John",
    "car" : {
      "name": "Skoda",
      "model": "Octavia",
      "cost": 12000
    },
    "points": 35.42,
    "deleted": false
  }]
}

`;
        this.cppEditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2,
            readOnly: true,
            maxLines: Infinity
        });
        this.cppEditor.mode = 'c_cpp';
        this.cppEditor.registerOnChange(function (text) {
        });
        this.handleData(this.jsonEditor.value);
    }
    onClassNameChanged(val) {
        this.className = val;
        this.handleData(this.jsonEditor.value);
    }
    onPrefixesToggle(val) {
        this.optionsPrefixes = val;
        this.handleData(this.jsonEditor.value);
    }
    onSerializableToggle(val) {
        this.optionsSerializable = val;
        this.handleData(this.jsonEditor.value);
    }
    onBlueprintableToggle(val) {
        this.optionsBlueprintable = val;
        this.handleData(this.jsonEditor.value);
    }
    onPluralizableToggle(val) {
        this.optionsPluralizable = val;
        this.handleData(this.jsonEditor.value);
    }
    handleData(data) {
        if (!IsJsonString(data)) {
            console.error('not valid JSON');
            this.cppEditor.value = 'NOT VALID JSON';
            return false;
        }
        var obj = JSON.parse(data);
        this.fields = [];
        this.parse(obj);
        this.cppEditor.value = this.generateCPPValue();
        //this.cppEditor.value = ''; //this.parse(obj);
        //console.log('fields:', this.fields);
    }
    generateCPPValue() {
        var text = '';
        var that = this;
        this.fields.forEach(function (field) {
            text = that.generateTextForField(field, text);
        });
        return text;
    }
    generateTextForField(field, text) {
        if (field.type == 'struct') {
            text = this.generateWrapperForStruct(field, text);
        }
        return text;
    }
    generateWrapperForStruct(struct, text) {
        var fields = this.getFieldsWithStruct(struct);
        var fieldsContent = ``;
        var that = this;
        fields.forEach((field) => {
            fieldsContent += that.generateWrapperForField(field);
        });
        var wrapper = `
USTRUCT(${this.optionsBlueprintable ? 'BlueprintType' : ''})
struct F${this.optionsPrefixes ? struct.getPrefixedName('', that.optionsPluralizable) : struct.getName(that.optionsPluralizable)}
{

  GENERATED_BODY()

${fieldsContent}

}
`;
        return wrapper + text;
    }
    generateWrapperForField(field) {
        if (field.type == 'struct') {
            if (field.bArray) {
                return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  TArray<F${this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : field.getName(this.optionsPluralizable)}> ${field.getName()};
`;
            }
            else {
                return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  F${this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : field.getName(this.optionsPluralizable)} ${field.getName()};
`;
            }
        }
        return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  ${field.type} ${field.getName()};
`;
    }
    getFieldsWithStruct(struct) {
        var fields = [];
        this.fields.forEach((field) => {
            if (!field.root)
                return;
            if (field.root.uuid == struct.uuid) {
                fields.push(field);
            }
        });
        return fields;
    }
    pushUnique(field) {
        if (field.root) {
            var bDuplicated = false;
            this.fields.forEach((item) => {
                if ((item.root == field.root) && (item.originalName == field.originalName)) {
                    bDuplicated = true;
                }
            });
            if (bDuplicated) {
                return;
            }
        }
        this.fields.push(field);
    }
    parse(val, name, struct, bArray) {
        if (val instanceof Object) {
            var newField;
            if (!name && !struct) {
                newField = new Field('struct', `${this.className ? capitalize(this.className) : `My${this.generateType}`}`, null);
            }
            else {
                newField = new Field('struct', '' + capitalize(name), struct, bArray);
            }
            this.pushUnique(newField);
            for (let key in val) {
                let value = val[key];
                if (Array.isArray(value)) {
                    // var arrayField = new Field('struct', capitalize(key), newField, true);
                    // this.fields.push(arrayField);
                    var cmp = this;
                    value.forEach(function (item) {
                        cmp.parse(item, capitalize(key), newField, true);
                    });
                }
                else {
                    this.parse(value, key, newField);
                }
            }
            //text = this.generateStructWrapper(text, name);
        }
        else {
            this.parseOneField(val, name, struct);
        }
    }
    parseOneField(field, name, struct) {
        var text = "";
        var type = "";
        if (typeof field === 'string') {
            type = "FString";
        }
        else if (typeof field === 'number') {
            if (field % 1 === 0) {
                type = "int32";
            }
            else {
                type = "float";
            }
        }
        else if (typeof field === 'boolean') {
            type = "bool";
        }
        else {
            console.error('NOT UNDESTANDABLE TYPE!');
            return "";
        }
        var newField = new Field(type, capitalize(name), struct);
        this.fields.push(newField);
        //return text;
    }
    generateStructWrapper(body, fieldname) {
        var text = ``;
        var className = ``;
        if (!fieldname) {
            className = `F${this.className ? capitalize(this.className) : `My${this.generateType}Name`}`;
        }
        else {
            className = `F${capitalize(fieldname)}`;
        }
        text += `
// AUTOGENERATED
USTRUCT(${this.optionsBlueprintable ? 'BlueprintType' : ''})
struct ${className}
{

  GENERATED_BODY()

  ${body}

  ${className}(FString JsonString){

    TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
    
    if (FJsonSerializer::Deserialize(Reader, JsonObject))
    {
      ${this.getBodyParser()}
      int32 recievedInt = JsonObject->GetIntegerField("customInt");

      GEngine->AddOnScreenDebugMessage(1, 2.0f, FColor::Green, FString::FromInt(recievedInt));

    }

  }

}


`;
        return text;
    }
    getBodyParser() {
        return 'BODY';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('jsoneditor', { static: false })
], AppComponent.prototype, "jsonEditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cppeditor', { static: false })
], AppComponent.prototype, "cppEditor", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);

const capitalize = (s) => {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
function IsJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function generateUUID() {
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) { //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        }
        else { //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\json2ue4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map