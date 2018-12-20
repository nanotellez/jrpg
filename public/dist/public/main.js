(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"UTF-8\" />\n\n  <title>Multi-player Gridwalking</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" />\n  <!-- jQuery library -->\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <!-- Popper JS -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\"></script>\n  <!-- Latest compiled JavaScript -->\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"></script>\n  <script type=\"text/javascript\" src=\"/socket.io/socket.io.js\"></script>\n  <script src=\"helper.js\"></script>\n\n</head>\n\n<body>\n  \n  <app-worldmap></app-worldmap>\n</body>\n\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _worldmap_worldmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worldmap/worldmap.component */ "./src/app/worldmap/worldmap.component.ts");
/* harmony import */ var _combatscreen_combatscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combatscreen/combatscreen.component */ "./src/app/combatscreen/combatscreen.component.ts");
/* harmony import */ var _combatmonstersection_combatmonstersection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combatmonstersection/combatmonstersection.component */ "./src/app/combatmonstersection/combatmonstersection.component.ts");
/* harmony import */ var _combatplayersection_combatplayersection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combatplayersection/combatplayersection.component */ "./src/app/combatplayersection/combatplayersection.component.ts");
/* harmony import */ var _combatplayerhealthsection_combatplayerhealthsection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combatplayerhealthsection/combatplayerhealthsection.component */ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.ts");
/* harmony import */ var _combatlog_combatlog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./combatlog/combatlog.component */ "./src/app/combatlog/combatlog.component.ts");
/* harmony import */ var _choosecharacter_choosecharacter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./choosecharacter/choosecharacter.component */ "./src/app/choosecharacter/choosecharacter.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _worldmap_worldmap_component__WEBPACK_IMPORTED_MODULE_5__["WorldmapComponent"],
                _combatscreen_combatscreen_component__WEBPACK_IMPORTED_MODULE_6__["CombatScreenComponent"],
                _combatmonstersection_combatmonstersection_component__WEBPACK_IMPORTED_MODULE_7__["CombatMonsterSectionComponent"],
                _combatplayersection_combatplayersection_component__WEBPACK_IMPORTED_MODULE_8__["CombatPlayerSectionComponent"],
                _combatplayerhealthsection_combatplayerhealthsection_component__WEBPACK_IMPORTED_MODULE_9__["CombatPlayerHealthSectionComponent"],
                _combatlog_combatlog_component__WEBPACK_IMPORTED_MODULE_10__["CombatLogComponent"],
                _choosecharacter_choosecharacter_component__WEBPACK_IMPORTED_MODULE_11__["ChooseCharacterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/choosecharacter/choosecharacter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/choosecharacter/choosecharacter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZWNoYXJhY3Rlci9jaG9vc2VjaGFyYWN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/choosecharacter/choosecharacter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/choosecharacter/choosecharacter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  choosecharacter works!\n</p>\n"

/***/ }),

/***/ "./src/app/choosecharacter/choosecharacter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/choosecharacter/choosecharacter.component.ts ***!
  \**************************************************************/
/*! exports provided: ChooseCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCharacterComponent", function() { return ChooseCharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChooseCharacterComponent = /** @class */ (function () {
    function ChooseCharacterComponent() {
    }
    ChooseCharacterComponent.prototype.ngOnInit = function () {
    };
    ChooseCharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choosecharacter',
            template: __webpack_require__(/*! ./choosecharacter.component.html */ "./src/app/choosecharacter/choosecharacter.component.html"),
            styles: [__webpack_require__(/*! ./choosecharacter.component.css */ "./src/app/choosecharacter/choosecharacter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChooseCharacterComponent);
    return ChooseCharacterComponent;
}());



/***/ }),

/***/ "./src/app/combatlog/combatlog.component.css":
/*!***************************************************!*\
  !*** ./src/app/combatlog/combatlog.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdGxvZy9jb21iYXRsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/combatlog/combatlog.component.html":
/*!****************************************************!*\
  !*** ./src/app/combatlog/combatlog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  combatlog works!\n</p>\n"

/***/ }),

/***/ "./src/app/combatlog/combatlog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/combatlog/combatlog.component.ts ***!
  \**************************************************/
/*! exports provided: CombatLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatLogComponent", function() { return CombatLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CombatLogComponent = /** @class */ (function () {
    function CombatLogComponent() {
    }
    CombatLogComponent.prototype.ngOnInit = function () {
    };
    CombatLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combatlog',
            template: __webpack_require__(/*! ./combatlog.component.html */ "./src/app/combatlog/combatlog.component.html"),
            styles: [__webpack_require__(/*! ./combatlog.component.css */ "./src/app/combatlog/combatlog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CombatLogComponent);
    return CombatLogComponent;
}());



/***/ }),

/***/ "./src/app/combatmonstersection/combatmonstersection.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/combatmonstersection/combatmonstersection.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdG1vbnN0ZXJzZWN0aW9uL2NvbWJhdG1vbnN0ZXJzZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/combatmonstersection/combatmonstersection.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/combatmonstersection/combatmonstersection.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  combatmonstersection works!\n</p>\n"

/***/ }),

/***/ "./src/app/combatmonstersection/combatmonstersection.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/combatmonstersection/combatmonstersection.component.ts ***!
  \************************************************************************/
/*! exports provided: CombatMonsterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatMonsterSectionComponent", function() { return CombatMonsterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CombatMonsterSectionComponent = /** @class */ (function () {
    function CombatMonsterSectionComponent() {
    }
    CombatMonsterSectionComponent.prototype.ngOnInit = function () {
    };
    CombatMonsterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combatmonstersection',
            template: __webpack_require__(/*! ./combatmonstersection.component.html */ "./src/app/combatmonstersection/combatmonstersection.component.html"),
            styles: [__webpack_require__(/*! ./combatmonstersection.component.css */ "./src/app/combatmonstersection/combatmonstersection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CombatMonsterSectionComponent);
    return CombatMonsterSectionComponent;
}());



/***/ }),

/***/ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/combatplayerhealthsection/combatplayerhealthsection.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdHBsYXllcmhlYWx0aHNlY3Rpb24vY29tYmF0cGxheWVyaGVhbHRoc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/combatplayerhealthsection/combatplayerhealthsection.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  combatplayerhealthsection works!\n</p>\n"

/***/ }),

/***/ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/combatplayerhealthsection/combatplayerhealthsection.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CombatPlayerHealthSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatPlayerHealthSectionComponent", function() { return CombatPlayerHealthSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CombatPlayerHealthSectionComponent = /** @class */ (function () {
    function CombatPlayerHealthSectionComponent() {
    }
    CombatPlayerHealthSectionComponent.prototype.ngOnInit = function () {
    };
    CombatPlayerHealthSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combatplayerhealthsection',
            template: __webpack_require__(/*! ./combatplayerhealthsection.component.html */ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.html"),
            styles: [__webpack_require__(/*! ./combatplayerhealthsection.component.css */ "./src/app/combatplayerhealthsection/combatplayerhealthsection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CombatPlayerHealthSectionComponent);
    return CombatPlayerHealthSectionComponent;
}());



/***/ }),

/***/ "./src/app/combatplayersection/combatplayersection.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/combatplayersection/combatplayersection.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdHBsYXllcnNlY3Rpb24vY29tYmF0cGxheWVyc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/combatplayersection/combatplayersection.component.html":
/*!************************************************************************!*\
  !*** ./src/app/combatplayersection/combatplayersection.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  combatplayersection works!\n</p>\n"

/***/ }),

/***/ "./src/app/combatplayersection/combatplayersection.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/combatplayersection/combatplayersection.component.ts ***!
  \**********************************************************************/
/*! exports provided: CombatPlayerSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatPlayerSectionComponent", function() { return CombatPlayerSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CombatPlayerSectionComponent = /** @class */ (function () {
    function CombatPlayerSectionComponent() {
    }
    CombatPlayerSectionComponent.prototype.ngOnInit = function () {
    };
    CombatPlayerSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combatplayersection',
            template: __webpack_require__(/*! ./combatplayersection.component.html */ "./src/app/combatplayersection/combatplayersection.component.html"),
            styles: [__webpack_require__(/*! ./combatplayersection.component.css */ "./src/app/combatplayersection/combatplayersection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CombatPlayerSectionComponent);
    return CombatPlayerSectionComponent;
}());



/***/ }),

/***/ "./src/app/combatscreen/combatscreen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/combatscreen/combatscreen.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbWJhdHNjcmVlbi9jb21iYXRzY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/combatscreen/combatscreen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/combatscreen/combatscreen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  combatscreen works!\n</p>\n"

/***/ }),

/***/ "./src/app/combatscreen/combatscreen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/combatscreen/combatscreen.component.ts ***!
  \********************************************************/
/*! exports provided: CombatScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatScreenComponent", function() { return CombatScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CombatScreenComponent = /** @class */ (function () {
    function CombatScreenComponent() {
    }
    CombatScreenComponent.prototype.ngOnInit = function () {
    };
    CombatScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-combatscreen',
            template: __webpack_require__(/*! ./combatscreen.component.html */ "./src/app/combatscreen/combatscreen.component.html"),
            styles: [__webpack_require__(/*! ./combatscreen.component.css */ "./src/app/combatscreen/combatscreen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CombatScreenComponent);
    return CombatScreenComponent;
}());



/***/ }),

/***/ "./src/app/worldmap/worldmap.component.css":
/*!*************************************************!*\
  !*** ./src/app/worldmap/worldmap.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#current-map-tile{\n    min-height: 700px;\n    padding: 10px 0;\n}\n\n#world-map-tile{\n    min-height: 420px;\n    padding: 5px 0;\n}\n\n#world-chat{\n    min-height: 300px;\n    margin-top: 10px;\n}\n\n.box{\n    border-width: 5px !important; \n    background-color: darkolivegreen;\n}\n\nbody {\n    background-color: darkslategray;\n}\n\n.container-fluid{\n    width: 95%;\n    padding: 5px\n}\n\n.gridbox-world {\n    display: inline-block;\n    width: 4px;\n    height: 4px;\n    border: 1px solid rgb(197, 196, 196);\n    background-color: white;\n}\n\n.gridbox {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 1px solid rgb(197, 196, 196);\n    background-color: white;\n}\n\n.view-b {\n    border-bottom: 1px solid magenta;\n}\n\n.view-t {\n    border-top: 1px solid magenta;\n}\n\n.view-l {\n    border-left: 1px solid magenta;\n}\n\n.view-r {\n    border-right: 1px solid magenta;\n}\n\n/* .selfoccupied {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    background-color: blue;\n    border: 1px solid black;\n}\n\n.otheroccupied {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    background-color: gray;\n    border: 1px solid black;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ybGRtYXAvd29ybGRtYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSw2QkFBNkI7SUFDN0IsaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUdEOzs7Ozs7Ozs7Ozs7OztJQWNJIiwiZmlsZSI6InNyYy9hcHAvd29ybGRtYXAvd29ybGRtYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjdXJyZW50LW1hcC10aWxle1xuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI3dvcmxkLW1hcC10aWxle1xuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG5cbiN3b3JsZC1jaGF0e1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ib3h7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHggIWltcG9ydGFudDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29saXZlZ3JlZW47XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiA1cHhcbn1cblxuLmdyaWRib3gtd29ybGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTcsIDE5NiwgMTk2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmdyaWRib3gge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NywgMTk2LCAxOTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udmlldy1iIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbWFnZW50YTtcbn1cblxuLnZpZXctdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIG1hZ2VudGE7XG59XG5cbi52aWV3LWwge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbWFnZW50YTtcbn1cblxuLnZpZXctciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbWFnZW50YTtcbn1cblxuXG4vKiAuc2VsZm9jY3VwaWVkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5vdGhlcm9jY3VwaWVkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/worldmap/worldmap.component.html":
/*!**************************************************!*\
  !*** ./src/app/worldmap/worldmap.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid justify-content-center\">\n  <div class=\"row\">\n    <div id=\"current-map-tile\" class=\"d-flex col-7 box rounded border border-light justify-content-center\">\n      <div id=\"world-map\">\n        <div *ngFor=\"let r of viewRange.r\" class=\"row\" id=\"griddiv\">\n          <div *ngFor=\"let x of viewRange.x\" class=\"gridbox\" [attr.id]=\"'div-'+x+'-'+(viewportstart.y+9-r)\">\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n    <div class=\"side-items col-5\">\n      <div id=\"world-map-tile\" class=\"d-flex box rounded border border-light justify-content-center\">\n        <div id=\"world-map\">\n          <div *ngFor=\"let r of range\" class=\"row\" id=\"griddiv\">\n            <div *ngFor=\"let x of range\" class=\"gridbox-world\" [attr.id]=\"'div-'+x+'-'+(gridSize-r-1)\" [ngClass]=\"{\n                'view-b': gridSize-r-1==viewportstart.y && x>=viewportstart.x && x<=viewportstart.x+10,\n                'view-t': gridSize-r-1==viewportstart.y+10 && x>=viewportstart.x && x<=viewportstart.x+10,\n                'view-l': x==viewportstart.x && gridSize-r-1>=viewportstart.y && gridSize-r-1<=viewportstart.y+10,\n                'view-r': x==viewportstart.x+10 && gridSize-r-1>=viewportstart.y && gridSize-r-1<=viewportstart.y+10\n              }\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"world-chat\" class=\"box rounded border border-light\">\n        <!-- <app-worldchat></app-worldchat> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/worldmap/worldmap.component.ts":
/*!************************************************!*\
  !*** ./src/app/worldmap/worldmap.component.ts ***!
  \************************************************/
/*! exports provided: WorldmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldmapComponent", function() { return WorldmapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorldmapComponent = /** @class */ (function () {
    function WorldmapComponent() {
        this.gridSize = 100;
        this.viewportstart = { x: 0, y: 0 };
        this.viewRange = { x: this.makeRange(10), r: this.makeRange(10) };
    }
    ;
    WorldmapComponent.prototype.ngOnInit = function () {
        this.range = this.makeRange(this.gridSize);
        this.setView(Math.floor(Math.random() * 10) * 10, Math.floor(Math.random() * 10) * 10);
    };
    WorldmapComponent.prototype.makeRange = function (num) {
        return Array(num).fill(0).map(function (x, i) { return i; });
    };
    WorldmapComponent.prototype.setView = function (x0, y0) {
        this.viewportstart = { x: x0, y: y0 };
        for (var i = 0; i < 10; i++) {
            this.viewRange.x[i] += x0;
        }
    };
    WorldmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-worldmap',
            template: __webpack_require__(/*! ./worldmap.component.html */ "./src/app/worldmap/worldmap.component.html"),
            styles: [__webpack_require__(/*! ./worldmap.component.css */ "./src/app/worldmap/worldmap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorldmapComponent);
    return WorldmapComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fred/Dev/mean-repos/jrpg/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map