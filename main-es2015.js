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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4 -->\r\n<div class=\"app-container\">\r\n    <div class=\"picture-row\">\r\n        <div class=\"picture-container\">\r\n            <img [src]=\"imageService.profile\" alt=\"That Boi Kirk\">\r\n        </div>\r\n    </div>\r\n    <div class=\"card-part\">\r\n        <div class=\"personal-info\">\r\n            <h1>{{businessName}}</h1>\r\n            <h4>{{personName}}</h4>\r\n            <p>{{telephone}}</p>\r\n            <p>{{email}}</p>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"social-media-full-container\">\r\n        <ul>\r\n            <li><a href=\"https://www.instagram.com/bigmoneykirk/\" target=\"_blank\"> <i class=\"fab fa-instagram\"></i> </a></li>\r\n            <li><a href=\"https://www.facebook.com/stevokirk/\" target=\"_blank\"> <i class=\"fab fa-facebook-f\"></i> </a></li>\r\n            <li><a href=\"https://www.linkedin.com/in/bigmoneykirk/\" target=\"_blank\"> <i class=\"fab fa-linkedin-in\"></i> </a></li>\r\n            <!-- <li><i class=\"fab fa-snapchat-ghost\"></i></li> -->\r\n            <li><a href=\"https://twitter.com/StevoKirk\" target=\"_blank\"> <i class=\"fab fa-twitter\"></i> </a></li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"download-vcf\">\r\n        <a href=\"javascript:void(0)\" id=\"downloadButton\" [vcdDownloadVCard]=\"vCard\">\r\n            <span>Add Contact</span>\r\n        </a>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");




const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'QR';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var ngx_vcard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-vcard */ "./node_modules/ngx-vcard/fesm2015/ngx-vcard.js");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_vcard__WEBPACK_IMPORTED_MODULE_7__["NgxVcardModule"]
        ],
        providers: [
            _services_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  height: 98vh;\n  width: 100%;\n  background: url('maroon-03.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n.picture-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.picture-container {\n  height: 200px;\n  width: 200px;\n  margin-top: 20px;\n}\n\n.card-part {\n  backdrop-filter: blur(6px);\n  border: 1px solid #caa181;\n  border-radius: 5px;\n  margin: 40px 10px;\n  box-shadow: 0px 5px 30px #420101, -15px 15px 0.35rem #290101, 3px -3px 1rem #52151c;\n  animation: animate 6.5s ease-in-out infinite;\n  text-align: center;\n  font-family: Gilroy-Light;\n}\n\n@keyframes animate {\n  0%, 100% {\n    transform: translate3d(0.5ch, -0.05in, -3em);\n  }\n  50% {\n    transform: translate3d(0, 0.05in, 3em);\n  }\n}\n\n.personal-info {\n  margin: 0 20px;\n  color: lavender;\n}\n\nh1 {\n  text-shadow: -3px 5px 1.5rem;\n  font-family: Gilroy-ExtraBold;\n}\n\nimg {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  border: 5px solid maroon;\n  box-shadow: 0px 5px 30px #3f3b42, -15px 15px 0.35rem #420101, 3px -3px 1rem white;\n}\n\nul {\n  display: flex;\n  justify-content: space-around;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nli a {\n  text-decoration: none;\n  backdrop-filter: blur(10px);\n  border: 2px solid whitesmoke;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  padding: 15px;\n  width: 48px;\n  height: 48px;\n}\n\n.download-vcf {\n  display: flex;\n  justify-content: center;\n  margin-top: 60px;\n}\n\n#downloadButton {\n  position: relative;\n  border-radius: 5px;\n  color: #255784;\n  background: transparent;\n  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);\n  width: 160px;\n  height: 50px;\n  line-height: 48px;\n  text-decoration: none;\n  font-family: Gilroy-Light;\n}\n\n#downloadButton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 101%;\n  height: 100%;\n  background: linear-gradient(45deg, #fb0094, #00f, #0f0, #ff0, #f00, #fb0094, #00f, #0f0, #ff0, #f00);\n  background-size: 400%;\n}\n\n#downloadButton::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 101%;\n  height: 100%;\n  background: linear-gradient(45deg, #fb0094, #00f, #0f0, #ff0, #f00, #fb0094, #00f, #0f0, #ff0, #f00);\n  background-size: 400%;\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n  transition: 0.5s;\n  animation: animate 20s linear infinite;\n  z-index: -1;\n}\n\n@keyframes animate {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 300% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n#downloadButton span {\n  position: relative;\n  display: block;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  text-align: center;\n  background: #0c0c0c;\n  color: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n\n#downloadButton span::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxyZXBvc1xcTHV4eU5pY3NfUVIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1GQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0E7RUFDSTtJQUNJLDRDQUFBO0VDSk47RURNRTtJQUNJLHNDQUFBO0VDSk47QUFDRjs7QURPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpRkFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURRQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMSjs7QURRQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0VBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9HQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvR0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDSTtJQUNJLHdCQUFBO0VDTE47RURRRTtJQUNJLDJCQUFBO0VDTk47RURTRTtJQUNJLHdCQUFBO0VDUE47QUFDRjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FDUko7O0FEV0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGxpZ2h0LWJyb3duLWJvcmRlcjogI2NhYTE4MTtcclxuJG1hcm9vbi1ib3JkZXI6ICM0MjAxMDE7XHJcbiR3aW5lLXJlZDogIzY5MGIyMjtcclxuJGRhcmstYnJvd246ICMyOTAxMDE7XHJcblxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDk4dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9tYXJvb24tMDMuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGljdHVyZS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBpY3R1cmUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1wYXJ0IHtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWJyb3duLWJvcmRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNDBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzMHB4ICM0MjAxMDEsIC0xNXB4IDE1cHggMC4zNXJlbSAjMjkwMTAxLCAzcHggLTNweCAxcmVtICM1MjE1MWM7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgNi41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktTGlnaHQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuNWNoLCAtMC4wNWluLCAtM2VtKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjA1aW4sIDNlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wZXJzb25hbC1pbmZvIHtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgY29sb3I6IGxhdmVuZGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTNweCA1cHggMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IEdpbHJveS1FeHRyYUJvbGQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIG1hcm9vbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMzBweCByZ2IoNjMsIDU5LCA2NiksIC0xNXB4IDE1cHggMC4zNXJlbSAkbWFyb29uLWJvcmRlciwgM3B4IC0zcHggMXJlbSB3aGl0ZTtcclxufVxyXG5cclxudWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5saSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZC12Y2Yge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuI2Rvd25sb2FkQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMjU1Nzg0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAxcHggbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwNCk7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktTGlnaHQ7XHJcbn1cclxuXHJcbiNkb3dubG9hZEJ1dHRvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDElO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmIwMDk0LCAjMDBmLCAjMGYwLCAjZmYwLCAjZjAwLCAjZmIwMDk0LCAjMDBmLCAjMGYwLCAjZmYwLCAjZjAwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJTtcclxufVxyXG5cclxuI2Rvd25sb2FkQnV0dG9uOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAxJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZiMDA5NCwgIzAwZiwgIzBmMCwgI2ZmMCwgI2YwMCwgI2ZiMDA5NCwgIzAwZiwgIzBmMCwgI2ZmMCwgI2YwMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDAlIDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4jZG93bmxvYWRCdXR0b24gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzBjMGMwYztcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNkb3dubG9hZEJ1dHRvbiBzcGFuOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuI2Rvd25sb2FkQnV0dG9uIHNwYW46OmFmdGVyIHtcclxuXHJcbn0iLCIuYXBwLWNvbnRhaW5lciB7XG4gIGhlaWdodDogOTh2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbWFyb29uLTAzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ucGljdHVyZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBpY3R1cmUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZC1wYXJ0IHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWExODE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA0MHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMzBweCAjNDIwMTAxLCAtMTVweCAxNXB4IDAuMzVyZW0gIzI5MDEwMSwgM3B4IC0zcHggMXJlbSAjNTIxNTFjO1xuICBhbmltYXRpb246IGFuaW1hdGUgNi41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogR2lscm95LUxpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjVjaCwgLTAuMDVpbiwgLTNlbSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuMDVpbiwgM2VtKTtcbiAgfVxufVxuLnBlcnNvbmFsLWluZm8ge1xuICBtYXJnaW46IDAgMjBweDtcbiAgY29sb3I6IGxhdmVuZGVyO1xufVxuXG5oMSB7XG4gIHRleHQtc2hhZG93OiAtM3B4IDVweCAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBHaWxyb3ktRXh0cmFCb2xkO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIG1hcm9vbjtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAzMHB4ICMzZjNiNDIsIC0xNXB4IDE1cHggMC4zNXJlbSAjNDIwMTAxLCAzcHggLTNweCAxcmVtIHdoaXRlO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmRvd25sb2FkLXZjZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4jZG93bmxvYWRCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMyNTU3ODQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAxcHggbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwNCk7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogR2lscm95LUxpZ2h0O1xufVxuXG4jZG93bmxvYWRCdXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAxJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmYjAwOTQsICMwMGYsICMwZjAsICNmZjAsICNmMDAsICNmYjAwOTQsICMwMGYsICMwZjAsICNmZjAsICNmMDApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XG59XG5cbiNkb3dubG9hZEJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMSU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmIwMDk0LCAjMDBmLCAjMGYwLCAjZmYwLCAjZjAwLCAjZmIwMDk0LCAjMDBmLCAjMGYwLCAjZmYwLCAjZjAwKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xuICBmaWx0ZXI6IGJsdXIoMjBweCk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyMHMgbGluZWFyIGluZmluaXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwMCUgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbn1cbiNkb3dubG9hZEJ1dHRvbiBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDFweDtcbiAgcmlnaHQ6IDFweDtcbiAgYm90dG9tOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzBjMGMwYztcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZG93bmxvYWRCdXR0b24gc3Bhbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");



let MainComponent = class MainComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.businessName = "Savannah Picnic by Luxy Nics";
        this.personName = "Kate Ward";
        this.telephone = "912-677-1512";
        this.email = "kate@savannahpicnic.com";
        this.vCard = {
            name: {
                firstNames: this.businessName
            },
            telephone: [this.telephone],
            email: [this.email],
            workEmail: [this.email],
            role: "CEO of Luxy Nics",
            url: "https://savannahpicnic.com/",
            logo: "../../assets/images/logos/luxy_nics_logo.jpg",
        };
    }
    ngOnInit() {
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageService = class ImageService {
    constructor() {
        this.profile = "assets/images/logos/luxy_nics_logo.jpg";
    }
};
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



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

module.exports = __webpack_require__(/*! C:\repos\LuxyNics_QR\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map