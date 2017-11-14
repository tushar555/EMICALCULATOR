webpackJsonp([0],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    return DetailsPageModule;
}());
DetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
        ],
    })
], DetailsPageModule);

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailsArray = [];
        console.log("sas");
        this.emi = Math.round(this.navParams.get("emi"));
        this.l_amount = this.navParams.get("l_amount");
        this.period = this.navParams.get("period");
        this.intrest = this.navParams.get("intrest");
        console.log(this.emi, this.l_amount, this.period, this.intrest);
        var i = 1;
        do {
            var intrest_amount = (this.l_amount / 12) / this.intrest;
            var principle = this.emi - intrest_amount;
            this.l_amount = this.l_amount - principle;
            var balance = (this.l_amount < 0 ? 0 : Math.floor(this.l_amount));
            this.detailsArray.push({ "month": i, "principle": Math.floor(principle), "intrest_amount": Math.floor(intrest_amount), "balance": balance });
            i++;
        } while (i <= this.period);
        console.log("Array", this.detailsArray);
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"/Users/jigneshmistry/Desktop/EMI/src/pages/details/details.html"*/'<ion-header>\n    <ion-navbar color="navbar">\n      <ion-title>\n        <ion-label item-left>Details</ion-label>\n      </ion-title>\n      <ion-buttons end >\n        <button ion-button icon-only>\n            <ion-icon ios="ios-albums" md="md-albums"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row class="head">\n          <ion-col col-3>Month</ion-col>\n          <ion-col col-3>Principle</ion-col>\n          <ion-col col-3>Intrest</ion-col>\n          <ion-col col-3>Balance</ion-col>\n        </ion-row><br>\n        <ion-row class="head1" *ngFor="let detail of detailsArray">\n          <ion-col>{{detail.month}}</ion-col>\n          <ion-col>{{detail.principle}}</ion-col>\n          <ion-col>{{detail.intrest_amount}}</ion-col>\n          <ion-col>{{detail.balance}}</ion-col>\n        </ion-row>  \n      \n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/jigneshmistry/Desktop/EMI/src/pages/details/details.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
], DetailsPage);

var _a, _b;
//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map