var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>JSON to UE4 <span class=\"purple\">Structures/Classes</span> with <span class=\"orange\">serialization</span></h1>\r\n\r\n<div class=\"table editors\">\r\n        <div class=\"row-editor smaller\">\r\n                <div>\r\n                        <div class=\"table\">\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Struct Name\"\r\n                                                        [value]=\"className\"\r\n                                                        (change)=\"onClassNameChanged($event.target.value)\">\r\n                                        </mat-form-field>\r\n                                        <p *ngIf=\"!className\" class=\"hint\">Note: generator will use name\r\n                                                \"MyStruct\" if you miss this field</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsPrefixes\" (change)=\"onPrefixesToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Prefixes {{optionsPrefixes ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"!optionsPrefixes\" class=\"hint\">Note: If your response have duplicated\r\n                                                key names, output generate duplicated structures. You need fix it by\r\n                                                yourself</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsSerializable\"\r\n                                                (change)=\"onSerializableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Serialization {{optionsSerializable ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsSerializable\" class=\"hint\">Note: Generate constuctor from json string</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsBlueprintable\"\r\n                                                (change)=\"onBlueprintableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Blueprintable {{optionsBlueprintable ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsPluralizable\"\r\n                                                (change)=\"onPluralizableToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Singular {{optionsPluralizable ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsPluralizable\" class=\"hint\">Note: Will convert structure name to singular form, if that was created from array</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsDefaultConstructor\"\r\n                                                (change)=\"onDefaultConstructorToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Constructor {{optionsDefaultConstructor ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsDefaultConstructor\" class=\"hint\">Note: Add additinal constructor with paramaters</p>\r\n                                </div>\r\n                                <div class=\"row\" style=\"height: 140px\">\r\n                                        <mat-slide-toggle class=\"example-margin\" color=\"primary\"\r\n                                                [checked]=\"optionsMakeCategories\"\r\n                                                (change)=\"onMakeCategoriesToggle($event.checked)\"\r\n                                                style=\"margin-top: 20px\">\r\n                                                Categories {{optionsMakeCategories ? 'ON' : 'OFF'}}\r\n                                        </mat-slide-toggle>\r\n                                        <p *ngIf=\"optionsDefaultConstructor\" class=\"hint\">Note: Add Categories to UPROPERTY fields</p>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"table\" style=\"text-align: right;\">\r\n                                <button mat-raised-button color=\"primary\" (click)=\"howToUseIt()\">How to use it?</button>\r\n                                <button mat-raised-button color=\"warn\" (click)=\"openDialog()\">Contact</button>\r\n                        </div>\r\n                </div>\r\n                <p>Put your JSON response here:</p>\r\n                <ace-editor #jsoneditor style=\"min-height:480px;\"></ace-editor>\r\n        </div>\r\n        <div class=\"row-editor bigger\">\r\n                <p>Output:</p>\r\n                <ace-editor #cppeditor style=\"min-height:760px;\"></ace-editor>\r\n        </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  margin-top: 50px;\n  color: #dfdfdf;\n}\n\n.purple {\n  color: #b30ab3;\n}\n\n.orange {\n  color: orange;\n}\n\n.hint {\n  font-size: 12px;\n  color: #9a9a9a;\n}\n\n.table {\n  vertical-align: top;\n}\n\n.table button {\n  margin: 0 20px;\n}\n\n.table.editors {\n  padding-left: 50px;\n}\n\n.table .row {\n  box-sizing: border-box;\n  vertical-align: top;\n  width: 220px;\n  display: inline-block;\n  padding: 20px;\n}\n\n.table .row-editor {\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n  display: inline-block;\n  padding: 50px;\n  padding-top: 0;\n  padding-left: 0px;\n  padding-right: 120px;\n}\n\n.table .row-editor.smaller {\n  width: 45%;\n}\n\n.table .row-editor.bigger {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGRldlxcanNvbjJ1ZTQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURESTtFQUNJLGNBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREVJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FSOztBRENRO0VBQ0ksVUFBQTtBQ0NaOztBRENRO0VBQ0ksVUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgY29sb3I6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5wdXJwbGV7XHJcbiAgICBjb2xvcjogI2IzMGFiMztcclxufVxyXG4ub3Jhbmdle1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLmhpbnR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzlhOWE5YTtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIH1cclxuICAgICYuZWRpdG9yc3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLy8gaW5wdXR7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLnJvdy1lZGl0b3J7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTIwcHg7XHJcbiAgICAgICAgJi5zbWFsbGVye1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYmlnZ2Vye1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaDEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogI2RmZGZkZjtcbn1cblxuLnB1cnBsZSB7XG4gIGNvbG9yOiAjYjMwYWIzO1xufVxuXG4ub3JhbmdlIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmhpbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOWE5YTlhO1xufVxuXG4udGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLnRhYmxlIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLnRhYmxlLmVkaXRvcnMge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG4udGFibGUgLnJvdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiAyMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEyMHB4O1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yLnNtYWxsZXIge1xuICB3aWR0aDogNDUlO1xufVxuLnRhYmxlIC5yb3ctZWRpdG9yLmJpZ2dlciB7XG4gIHdpZHRoOiA0NSU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent, DialogDataExampleDialog */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function () { return DialogDataExampleDialog; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var pluralize = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
            var Field = /** @class */ (function () {
                function Field(_type, _name, _struct, _bArray) {
                    this.root = null;
                    this.bArray = false;
                    this.originalName = _name;
                    this.name = _name;
                    this.type = _type;
                    this.root = _struct;
                    this.bArray = _bArray;
                    this.uuid = generateUUID();
                }
                Field.prototype.getPrefixedName = function (name, pluralized) {
                    if (!this.root) {
                        return this.name + (name ? name : '');
                    }
                    else {
                        return (this.root.getPrefixedName((name ? name : ''), this.root.bArray && pluralized)) + (this.name ? (pluralized ? pluralize.singular(capitalize(this.name)) : capitalize(this.name)) : '');
                    }
                };
                Field.prototype.getName = function (pluralized) {
                    return (pluralized ? pluralize.singular(this.name) : this.name);
                };
                Field.prototype.setArray = function (_bArray) {
                    this.bArray = _bArray;
                };
                return Field;
            }());
            var Parameter = /** @class */ (function () {
                function Parameter(name, type, bArray) {
                    this._name = name;
                    this._type = type;
                    this._bArray = bArray;
                }
                Parameter.prototype.arg = function () {
                    return '_' + this._name;
                };
                Parameter.prototype.name = function () {
                    return this._name;
                };
                Parameter.prototype.type = function () {
                    return this._type;
                };
                return Parameter;
            }());
            var AppComponent = /** @class */ (function () {
                function AppComponent(dialog) {
                    this.dialog = dialog;
                    this.title = 'json2ue';
                    this.generateType = 'Struct';
                    this.optionsPrefixes = true;
                    this.optionsSerializable = true;
                    this.optionsBlueprintable = true;
                    this.optionsPluralizable = true;
                    this.optionsDefaultConstructor = true;
                    this.optionsMakeCategories = true;
                    this.jsonValue = '';
                    this.fields = [];
                    this.className = '';
                    this.lastData = null;
                    this.copyToClipboard = function (str) {
                        var el = document.createElement('textarea');
                        el.value = str;
                        el.setAttribute('readonly', '');
                        el.style.position = 'absolute';
                        el.style.left = '-9999px';
                        document.body.appendChild(el);
                        el.select();
                        document.execCommand('copy');
                        document.body.removeChild(el);
                    };
                }
                AppComponent.prototype.howToUseIt = function () {
                    window.open('https://youtu.be/riq_avp-YQw', "_blank");
                };
                AppComponent.prototype.openDialog = function () {
                    this.dialog.open(DialogDataExampleDialog);
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    var cmp = this;
                    this.jsonEditor.getEditor().setOptions({
                        showLineNumbers: false,
                        tabSize: 2,
                        maxLines: Infinity,
                        autoUpdateContent: true
                    });
                    this.jsonEditor.mode = 'json';
                    this.jsonEditor.registerOnChange(function (text) {
                        //this.jsonEditor.setValue(JSON.stringify(text, null, '\t'));
                        cmp.handleData(text);
                    });
                    this.jsonEditor.value =
                        "\n{\n  \"users\": [\n    {\n      \"name\": \"John\",\n      \"car\": {\n        \"name\": \"Skoda\",\n        \"model\": \"Octavia\",\n        \"cost\": 12000\n      },\n      \"friends\": [\n        \"Michael\",\n        \"Rose\",\n        \"Nikita\"\n      ],\n      \"points\": 35.42,\n      \"deleted\": false\n    }\n  ]\n}\n";
                    this.cppEditor.getEditor().setOptions({
                        showLineNumbers: true,
                        tabSize: 2,
                        readOnly: true,
                        maxLines: Infinity
                    });
                    __webpack_require__(/*! ../assets/ue4mode.js */ "./src/assets/ue4mode.js");
                    this.cppEditor.mode = 'c_ue4';
                    this.cppEditor.registerOnChange(function (text) {
                    });
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onClassNameChanged = function (val) {
                    this.className = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onPrefixesToggle = function (val) {
                    this.optionsPrefixes = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onSerializableToggle = function (val) {
                    this.optionsSerializable = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onDefaultConstructorToggle = function (val) {
                    this.optionsDefaultConstructor = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onMakeCategoriesToggle = function (val) {
                    this.optionsMakeCategories = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onBlueprintableToggle = function (val) {
                    this.optionsBlueprintable = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.onPluralizableToggle = function (val) {
                    this.optionsPluralizable = val;
                    this.handleData(this.jsonEditor.value);
                };
                AppComponent.prototype.handleData = function (data) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var obj, cppValue;
                        return __generator(this, function (_a) {
                            // do nothing when data equal with last data
                            if (this.lastData == data) {
                                return [2 /*return*/];
                            }
                            if (data.length > 10000000) {
                                console.error('too long input');
                                this.cppEditor.value = 'Too long input, try to past smaller part of response';
                                return [2 /*return*/, false];
                            }
                            if (!IsJsonString(data)) {
                                console.error('not valid JSON');
                                this.cppEditor.value = 'NOT VALID JSON';
                                return [2 /*return*/, false];
                            }
                            obj = JSON.parse(data);
                            if (Math.abs(data.length - this.jsonValue.length) > 4) {
                                this.jsonEditor.value = JSON.stringify(obj, null, 2);
                            }
                            this.jsonValue = data;
                            this.fields = [];
                            this.parse(obj);
                            cppValue = this.generateCPPValue();
                            if (data.length > 10000) {
                                this.copyToClipboard(cppValue);
                                this.cppEditor.value = cppValue.substring(0, 10000);
                            }
                            else {
                                this.cppEditor.value = cppValue;
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                AppComponent.prototype.generateCPPValue = function () {
                    var text = '';
                    var that = this;
                    this.fields.forEach(function (field) {
                        text = that.generateTextForField(field, text);
                    });
                    return text;
                };
                AppComponent.prototype.generateTextForField = function (field, text) {
                    if (field.type == 'struct') {
                        text = this.generateWrapperForStruct(field, text);
                    }
                    return text;
                };
                AppComponent.prototype.getNameOfStruct = function (struct) {
                    if (this.optionsPrefixes) {
                        return struct.getPrefixedName('', this.optionsPluralizable);
                    }
                    else {
                        return struct.getName(this.optionsPluralizable);
                    }
                };
                AppComponent.prototype.generateDefaultConstructor = function (struct) {
                    var text = "\n  F" + capitalize(this.getNameOfStruct(struct)) + "() {};";
                    if (!this.optionsDefaultConstructor) {
                        return text + "\n      ";
                    }
                    var args = '';
                    var assignment = "";
                    this.getParameters(struct).forEach(function (param) {
                        if (args.length > 0) {
                            args += ", ";
                        }
                        if (assignment.length > 0) {
                            assignment += "\n    ";
                        }
                        var type = param.type();
                        if (param._bArray) {
                            type = "TArray<" + param.type() + ">";
                        }
                        args += type + " " + param.arg();
                        assignment += param.name() + " = " + param.arg() + ";";
                    });
                    text += "\n\n  F" + capitalize(this.getNameOfStruct(struct)) + "( " + args + " ){\n\n    " + assignment + "\n  \n  }\n  ";
                    return text;
                };
                AppComponent.prototype.generateSerialization = function (struct) {
                    var _this = this;
                    if (!this.optionsSerializable) {
                        return '';
                    }
                    var assignment = '';
                    this.getParameters(struct).forEach(function (param) {
                        if (assignment.length > 0) {
                            assignment += "\n    ";
                        }
                        assignment += param.name() + " = _tmp" + _this.getNameOfStruct(struct) + "." + param.name() + ";";
                    });
                    var text = "\n  /* Don't Forget to setup your project\n  Add #include \"Runtime/JsonUtilities/Public/JsonObjectConverter.h\" in \n  file with this structs.\n  Also you need add \"Json\", \"JsonUtilities\" in Build.cs */\n\n  F" + capitalize(this.getNameOfStruct(struct)) + "(FString _json_){\n    F" + capitalize(this.getNameOfStruct(struct)) + " _tmp" + this.getNameOfStruct(struct) + ";\n    \n\t\tFJsonObjectConverter::JsonObjectStringToUStruct<F" + capitalize(this.getNameOfStruct(struct)) + ">(\n\t\t_json_,\n\t\t&_tmp" + this.getNameOfStruct(struct) + ",\n    0, 0);\n    \n    " + assignment + "\n  }\n  ";
                    return text;
                };
                AppComponent.prototype.generateWrapperForStruct = function (struct, text) {
                    var fields = this.getFieldsWithStruct(struct);
                    var fieldsContent = "";
                    var that = this;
                    fields.forEach(function (field) {
                        fieldsContent += that.generateWrapperForField(field);
                    });
                    var categoryPropertyString = this.optionsMakeCategories ? "Category=\"JSON|" + this.getRootClassName() + "\", " : '';
                    var wrapper = "\nUSTRUCT(" + categoryPropertyString + (this.optionsBlueprintable ? 'BlueprintType' : '') + ")\nstruct F" + (this.optionsPrefixes ? struct.getPrefixedName('', that.optionsPluralizable) : capitalize(struct.getName(that.optionsPluralizable))) + "\n{\n\n  GENERATED_BODY()\n" + fieldsContent + this.generateDefaultConstructor(struct) + (!struct.root ? this.generateSerialization(struct) : '') + "\n};\n";
                    return wrapper + text;
                };
                AppComponent.prototype.generateWrapperForField = function (field) {
                    var categoryPropertyString = this.optionsMakeCategories ? "Category=\"JSON|" + this.getRootClassName() + (field.root.getName(true) != this.getRootClassName() ? '|' + field.root.getName(true) : '') + "\", " : '';
                    if (field.type == 'struct') {
                        if (field.bArray) {
                            return "\n  UPROPERTY(" + categoryPropertyString + (this.optionsBlueprintable ? 'EditAnywhere, BlueprintReadWrite' : '') + ")\n  TArray<F" + (this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : capitalize(field.getName(this.optionsPluralizable))) + "> " + field.getName() + ";\n";
                        }
                        else {
                            return "\n  UPROPERTY(" + categoryPropertyString + (this.optionsBlueprintable ? 'EditAnywhere, BlueprintReadWrite' : '') + ")\n  F" + (this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : capitalize(field.getName(this.optionsPluralizable))) + " " + field.getName() + ";\n";
                        }
                    }
                    if (field.bArray) {
                        return "\n  UPROPERTY(" + categoryPropertyString + (this.optionsBlueprintable ? 'EditAnywhere, BlueprintReadWrite' : '') + ")\n  TArray<F" + (this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : capitalize(field.getName(this.optionsPluralizable))) + "> " + field.getName() + ";\n";
                    }
                    else {
                        return "\n  UPROPERTY(" + categoryPropertyString + (this.optionsBlueprintable ? 'EditAnywhere, BlueprintReadWrite' : '') + ")\n  " + field.type + " " + field.getName() + ";\n";
                    }
                };
                AppComponent.prototype.getParameters = function (struct) {
                    var _this = this;
                    var params = [];
                    var fields = this.getFieldsWithStruct(struct);
                    fields.forEach(function (field) {
                        var type = field.type;
                        if (type == 'struct') {
                            type = "F" + _this.getNameOfStruct(field);
                        }
                        params.push(new Parameter(field.getName(), type, field.bArray));
                    });
                    return params;
                };
                AppComponent.prototype.getFieldsWithStruct = function (struct) {
                    var fields = [];
                    this.fields.forEach(function (field) {
                        if (!field.root)
                            return;
                        if (field.root.uuid == struct.uuid) {
                            fields.push(field);
                        }
                    });
                    return fields;
                };
                AppComponent.prototype.pushUnique = function (field) {
                    if (field.root) {
                        var bDuplicated = false;
                        this.fields.forEach(function (item) {
                            if ((item.root == field.root) && (item.originalName == field.originalName)) {
                                bDuplicated = true;
                            }
                        });
                        if (bDuplicated) {
                            return;
                        }
                    }
                    this.fields.push(field);
                };
                AppComponent.prototype.parse = function (val, name, struct, bArray) {
                    if (val instanceof Object) {
                        var newField;
                        if (!name && !struct) {
                            newField = new Field('struct', "" + (this.className ? capitalize(this.className) : "My" + this.generateType), null);
                        }
                        else {
                            newField = new Field('struct', '' + name, struct, bArray);
                        }
                        this.pushUnique(newField);
                        for (var key in val) {
                            var value = val[key];
                            if (Array.isArray(value)) {
                                // var arrayField = new Field('struct', capitalize(key), newField, true);
                                // this.fields.push(arrayField);
                                var cmp = this;
                                cmp.parse(value[0], key, newField, true);
                            }
                            else {
                                this.parse(value, key, newField);
                            }
                        }
                        //text = this.generateStructWrapper(text, name);
                    }
                    else {
                        this.parseOneField(val, name, struct, bArray);
                    }
                };
                AppComponent.prototype.parseOneField = function (field, name, struct, bArray) {
                    var text = "";
                    var type = "";
                    if (typeof field === 'string') {
                        type = "FString";
                    }
                    else if (typeof field === 'number') {
                        if (field % 1 === 0) {
                            if (Math.abs(field) >= 2147483648) {
                                type = "int64";
                            }
                            else {
                                type = "int32";
                            }
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
                    var newField = new Field(type, name, struct, bArray);
                    this.fields.push(newField);
                    //return text;
                };
                AppComponent.prototype.getRootClassName = function () {
                    return "" + (this.className ? capitalize(this.className) : "My" + this.generateType);
                };
                AppComponent.prototype.generateStructWrapper = function (body, fieldname) {
                    var text = "";
                    var className = "";
                    if (!fieldname) {
                        className = "F" + (this.className ? capitalize(this.className) : "My" + this.generateType + "Name");
                    }
                    else {
                        className = "F" + capitalize(fieldname);
                    }
                    var categoryPropertyString = this.optionsMakeCategories ? "Category=\"JSON|" + this.getRootClassName() + "\", " : '';
                    text += "\n// AUTOGENERATED\nUSTRUCT(" + categoryPropertyString + (this.optionsBlueprintable ? 'BlueprintType' : '') + ")\nstruct " + className + "\n{\n\n  GENERATED_BODY()\n\n  " + body + "\n\n  " + className + "(FString JsonString){\n\n    TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());\n    \n    if (FJsonSerializer::Deserialize(Reader, JsonObject))\n    {\n      " + this.getBodyParser() + "\n      int32 recievedInt = JsonObject->GetIntegerField(\"customInt\");\n\n      GEngine->AddOnScreenDebugMessage(1, 2.0f, FColor::Green, FString::FromInt(recievedInt));\n\n    }\n\n  }\n\n}\n\n\n";
                    return text;
                };
                AppComponent.prototype.getBodyParser = function () {
                    return 'BODY';
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
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
            var DialogDataExampleDialog = /** @class */ (function () {
                function DialogDataExampleDialog() {
                }
                return DialogDataExampleDialog;
            }());
            DialogDataExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'dialog-data-example-dialog',
                    template: "<h1 mat-dialog-title>Contact</h1>\n  <div mat-dialog-content>\n    <p>Contact email: pogorelowmax@gmail.com</p>\n  </div>",
                })
            ], DialogDataExampleDialog);
            var capitalize = function (s) {
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
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["DialogDataExampleDialog"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
                    ],
                    entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_4__["DialogDataExampleDialog"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/assets/ue4mode.js": 
        /*!*******************************!*\
          !*** ./src/assets/ue4mode.js ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function (module) {
                ace.define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
                    "use strict";
                    var oop = require("../lib/oop");
                    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
                    var DocCommentHighlightRules = function () {
                        this.$rules = {
                            "start": [{
                                    token: "comment.doc.tag",
                                    regex: "@[\\w\\d_]+" // TODO: fix email addresses
                                },
                                DocCommentHighlightRules.getTagRule(),
                                {
                                    defaultToken: "comment.doc",
                                    caseInsensitive: true
                                }]
                        };
                    };
                    oop.inherits(DocCommentHighlightRules, TextHighlightRules);
                    DocCommentHighlightRules.getTagRule = function (start) {
                        return {
                            token: "comment.doc.tag.storage.type",
                            regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
                        };
                    };
                    DocCommentHighlightRules.getStartRule = function (start) {
                        return {
                            token: "comment.doc",
                            regex: "\\/\\*(?=\\*)",
                            next: start
                        };
                    };
                    DocCommentHighlightRules.getEndRule = function (start) {
                        return {
                            token: "comment.doc",
                            regex: "\\*\\/",
                            next: start
                        };
                    };
                    exports.DocCommentHighlightRules = DocCommentHighlightRules;
                });
                ace.define("ace/mode/c_cpp_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function (require, exports, module) {
                    "use strict";
                    var oop = require("../lib/oop");
                    var DocCommentHighlightRules = require("./doc_comment_highlight_rules").DocCommentHighlightRules;
                    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
                    var cFunctions = exports.cFunctions = "\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b";
                    var c_cppHighlightRules = function () {
                        var keywordControls = ("break|case|continue|default|do|else|for|goto|if|_Pragma|" +
                            "return|switch|while|catch|operator|try|throw|using");
                        var storageType = ("asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|" +
                            "_Imaginary|int32|int64|FString|long|short|signed|struct|typedef|union|unsigned|void|" +
                            "class|wchar_t|template|char16_t|char32_t");
                        var storageModifiers = ("const|extern|register|restrict|static|volatile|inline|private|" +
                            "protected|public|friend|explicit|virtual|export|mutable|typename|" +
                            "constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local");
                        var keywordOperators = ("and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|" +
                            "const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace");
                        var builtinConstants = ("NULL|true|false|TRUE|FALSE|nullptr");
                        var keywordMapper = this.$keywords = this.createKeywordMapper({
                            "keyword.control": keywordControls,
                            "storage.type": storageType,
                            "storage.modifier": storageModifiers,
                            "keyword.operator": keywordOperators,
                            "variable.language": "this",
                            "constant.language": builtinConstants
                        }, "identifier");
                        var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b";
                        var escapeRe = /\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source;
                        var formatRe = "%"
                            + /(\d+\$)?/.source // field (argument #)
                            + /[#0\- +']*/.source // flags
                            + /[,;:_]?/.source // separator character (AltiVec)
                            + /((-?\d+)|\*(-?\d+\$)?)?/.source // minimum field width
                            + /(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source // precision
                            + /(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source // length modifier
                            + /(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source; // conversion type
                        this.$rules = {
                            "start": [
                                {
                                    token: "comment",
                                    regex: "//$",
                                    next: "start"
                                }, {
                                    token: "comment",
                                    regex: "//",
                                    next: "singleLineComment"
                                },
                                DocCommentHighlightRules.getStartRule("doc-start"),
                                {
                                    token: "comment",
                                    regex: "\\/\\*",
                                    next: "comment"
                                }, {
                                    token: "string",
                                    regex: "'(?:" + escapeRe + "|.)?'"
                                }, {
                                    token: "string.start",
                                    regex: '"',
                                    stateName: "qqstring",
                                    next: [
                                        { token: "string", regex: /\\\s*$/, next: "qqstring" },
                                        { token: "constant.language.escape", regex: escapeRe },
                                        { token: "constant.language.escape", regex: formatRe },
                                        { token: "string.end", regex: '"|$', next: "start" },
                                        { defaultToken: "string" }
                                    ]
                                }, {
                                    token: "string.start",
                                    regex: 'R"\\(',
                                    stateName: "rawString",
                                    next: [
                                        { token: "string.end", regex: '\\)"', next: "start" },
                                        { defaultToken: "string" }
                                    ]
                                }, {
                                    token: "constant.numeric",
                                    regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                                }, {
                                    token: "constant.numeric",
                                    regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"
                                },
                                {
                                    token: "support.function.C99.c",
                                    regex: "FString\\b"
                                },
                                {
                                    token: "support.function.C99.c",
                                    regex: "TArray"
                                },
                                {
                                    token: "keyword",
                                    regex: "#\\s*(?:include|import|pragma|line|define|undef)\\b",
                                    next: "directive"
                                }, {
                                    token: "keyword",
                                    regex: "#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"
                                }, {
                                    token: "support.function.C99.c",
                                    regex: cFunctions
                                },
                                {
                                    token: "constant.numeric",
                                    regex: "(\<)?F[A-Za-z0-9]*( |>)"
                                },
                                {
                                    token: ["comment", "support.function.C99.c"],
                                    regex: '(USTRUCT)(.*)$'
                                }, {
                                    token: ["comment", "constant.string"],
                                    regex: '(UPROPERTY)(.*)$'
                                }, {
                                    token: "keyword.operator",
                                    regex: 'GENERATED_BODY\(.*\)'
                                },
                                {
                                    token: ["support.function.C99.c", "text", "constant.numeric"],
                                    regex: '^(struct)( )(F.*)$',
                                },
                                {
                                    token: keywordMapper,
                                    regex: "[a-zA-Z_$][a-zA-Z0-9_$]*"
                                }, {
                                    token: "keyword.operator",
                                    regex: /--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/
                                }, {
                                    token: "punctuation.operator",
                                    regex: "\\?|\\:|\\,|\\;|\\."
                                }, {
                                    token: "paren.lparen",
                                    regex: "[[({]"
                                }, {
                                    token: "paren.rparen",
                                    regex: "[\\])}]"
                                }, {
                                    token: "text",
                                    regex: "\\s+"
                                }
                            ],
                            "comment": [
                                {
                                    token: "comment",
                                    regex: "\\*\\/",
                                    next: "start"
                                }, {
                                    defaultToken: "comment"
                                }
                            ],
                            "singleLineComment": [
                                {
                                    token: "comment",
                                    regex: /\\$/,
                                    next: "singleLineComment"
                                }, {
                                    token: "comment",
                                    regex: /$/,
                                    next: "start"
                                }, {
                                    defaultToken: "comment"
                                }
                            ],
                            "directive": [
                                {
                                    token: "constant.other.multiline",
                                    regex: /\\/
                                },
                                {
                                    token: "constant.other.multiline",
                                    regex: /.*\\/
                                },
                                {
                                    token: "constant.other",
                                    regex: "\\s*<.+?>",
                                    next: "start"
                                },
                                {
                                    token: "constant.other",
                                    regex: '\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',
                                    next: "start"
                                },
                                {
                                    token: "constant.other",
                                    regex: "\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
                                    next: "start"
                                },
                                {
                                    token: "constant.other",
                                    regex: /[^\\\/]+/,
                                    next: "start"
                                }
                            ]
                        };
                        this.embedRules(DocCommentHighlightRules, "doc-", [DocCommentHighlightRules.getEndRule("start")]);
                        this.normalizeRules();
                    };
                    oop.inherits(c_cppHighlightRules, TextHighlightRules);
                    exports.c_cppHighlightRules = c_cppHighlightRules;
                });
                ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function (require, exports, module) {
                    "use strict";
                    var Range = require("../range").Range;
                    var MatchingBraceOutdent = function () { };
                    (function () {
                        this.checkOutdent = function (line, input) {
                            if (!/^\s+$/.test(line))
                                return false;
                            return /^\s*\}/.test(input);
                        };
                        this.autoOutdent = function (doc, row) {
                            var line = doc.getLine(row);
                            var match = line.match(/^(\s*\})/);
                            if (!match)
                                return 0;
                            var column = match[1].length;
                            var openBracePos = doc.findMatchingBracket({ row: row, column: column });
                            if (!openBracePos || openBracePos.row == row)
                                return 0;
                            var indent = this.$getIndent(doc.getLine(openBracePos.row));
                            doc.replace(new Range(row, 0, row, column - 1), indent);
                        };
                        this.$getIndent = function (line) {
                            return line.match(/^\s*/)[0];
                        };
                    }).call(MatchingBraceOutdent.prototype);
                    exports.MatchingBraceOutdent = MatchingBraceOutdent;
                });
                ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function (require, exports, module) {
                    "use strict";
                    var oop = require("../../lib/oop");
                    var Range = require("../../range").Range;
                    var BaseFoldMode = require("./fold_mode").FoldMode;
                    var FoldMode = exports.FoldMode = function (commentRegex) {
                        if (commentRegex) {
                            this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start));
                            this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end));
                        }
                    };
                    oop.inherits(FoldMode, BaseFoldMode);
                    (function () {
                        this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
                        this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
                        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
                        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
                        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
                        this._getFoldWidgetBase = this.getFoldWidget;
                        this.getFoldWidget = function (session, foldStyle, row) {
                            var line = session.getLine(row);
                            if (this.singleLineBlockCommentRe.test(line)) {
                                if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                                    return "";
                            }
                            var fw = this._getFoldWidgetBase(session, foldStyle, row);
                            if (!fw && this.startRegionRe.test(line))
                                return "start"; // lineCommentRegionStart
                            return fw;
                        };
                        this.getFoldWidgetRange = function (session, foldStyle, row, forceMultiline) {
                            var line = session.getLine(row);
                            if (this.startRegionRe.test(line))
                                return this.getCommentRegionBlock(session, line, row);
                            var match = line.match(this.foldingStartMarker);
                            if (match) {
                                var i = match.index;
                                if (match[1])
                                    return this.openingBracketBlock(session, match[1], row, i);
                                var range = session.getCommentFoldRange(row, i + match[0].length, 1);
                                if (range && !range.isMultiLine()) {
                                    if (forceMultiline) {
                                        range = this.getSectionRange(session, row);
                                    }
                                    else if (foldStyle != "all")
                                        range = null;
                                }
                                return range;
                            }
                            if (foldStyle === "markbegin")
                                return;
                            var match = line.match(this.foldingStopMarker);
                            if (match) {
                                var i = match.index + match[0].length;
                                if (match[1])
                                    return this.closingBracketBlock(session, match[1], row, i);
                                return session.getCommentFoldRange(row, i, -1);
                            }
                        };
                        this.getSectionRange = function (session, row) {
                            var line = session.getLine(row);
                            var startIndent = line.search(/\S/);
                            var startRow = row;
                            var startColumn = line.length;
                            row = row + 1;
                            var endRow = row;
                            var maxRow = session.getLength();
                            while (++row < maxRow) {
                                line = session.getLine(row);
                                var indent = line.search(/\S/);
                                if (indent === -1)
                                    continue;
                                if (startIndent > indent)
                                    break;
                                var subRange = this.getFoldWidgetRange(session, "all", row);
                                if (subRange) {
                                    if (subRange.start.row <= startRow) {
                                        break;
                                    }
                                    else if (subRange.isMultiLine()) {
                                        row = subRange.end.row;
                                    }
                                    else if (startIndent == indent) {
                                        break;
                                    }
                                }
                                endRow = row;
                            }
                            return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
                        };
                        this.getCommentRegionBlock = function (session, line, row) {
                            var startColumn = line.search(/\s*$/);
                            var maxRow = session.getLength();
                            var startRow = row;
                            var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
                            var depth = 1;
                            while (++row < maxRow) {
                                line = session.getLine(row);
                                var m = re.exec(line);
                                if (!m)
                                    continue;
                                if (m[1])
                                    depth--;
                                else
                                    depth++;
                                if (!depth)
                                    break;
                            }
                            var endRow = row;
                            if (endRow > startRow) {
                                return new Range(startRow, startColumn, endRow, line.length);
                            }
                        };
                    }).call(FoldMode.prototype);
                });
                ace.define("ace/mode/c_ue4", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/c_cpp_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function (require, exports, module) {
                    "use strict";
                    var oop = require("../lib/oop");
                    var TextMode = require("./text").Mode;
                    var c_cppHighlightRules = require("./c_cpp_highlight_rules").c_cppHighlightRules;
                    var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
                    var Range = require("../range").Range;
                    var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
                    var CStyleFoldMode = require("./folding/cstyle").FoldMode;
                    var Mode = function () {
                        this.HighlightRules = c_cppHighlightRules;
                        this.$outdent = new MatchingBraceOutdent();
                        this.$behaviour = new CstyleBehaviour();
                        this.foldingRules = new CStyleFoldMode();
                    };
                    oop.inherits(Mode, TextMode);
                    (function () {
                        this.lineCommentStart = "//";
                        this.blockComment = { start: "/*", end: "*/" };
                        this.getNextLineIndent = function (state, line, tab) {
                            var indent = this.$getIndent(line);
                            var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
                            var tokens = tokenizedLine.tokens;
                            var endState = tokenizedLine.state;
                            if (tokens.length && tokens[tokens.length - 1].type == "comment") {
                                return indent;
                            }
                            if (state == "start") {
                                var match = line.match(/^.*[\{\(\[]\s*$/);
                                if (match) {
                                    indent += tab;
                                }
                            }
                            else if (state == "doc-start") {
                                if (endState == "start") {
                                    return "";
                                }
                                var match = line.match(/^\s*(\/?)\*/);
                                if (match) {
                                    if (match[1]) {
                                        indent += " ";
                                    }
                                    indent += "* ";
                                }
                            }
                            return indent;
                        };
                        this.checkOutdent = function (state, line, input) {
                            return this.$outdent.checkOutdent(line, input);
                        };
                        this.autoOutdent = function (state, doc, row) {
                            this.$outdent.autoOutdent(doc, row);
                        };
                        this.$id = "ace/mode/c_ue4";
                    }).call(Mode.prototype);
                    exports.Mode = Mode;
                });
                (function () {
                    ace.require(["ace/mode/c_ue4"], function (m) {
                        if (true && module) {
                            module.exports = m;
                        }
                    });
                })();
                /* WEBPACK VAR INJECTION */ 
            }.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)));
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\dev\json2ue4\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map