webpackJsonp([5],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transfer_transfer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wallet_wallet__ = __webpack_require__(313);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(walletProvider, alertCtrl, afAuth, navCtrl, navParams) {
        this.walletProvider = walletProvider;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }, function (e) {
            var badRequest = _this.alertCtrl.create({
                title: 'Ha ocurrido un error',
                subTitle: 'Ha ocurrido un error inesperado, por favor intentalo de nuevo en unos instantes :(',
                buttons: ['Aceptar']
            });
            badRequest.present();
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (res) {
            var UUID = res.uid;
            _this.walletProvider.getBalance(UUID).then(function (res2) {
                console.log(res2);
                _this.money = res2;
            });
        });
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.gotoTransfer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transfer_transfer__["a" /* TransferPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="margin:0;padding:0">\n  <ion-row style="height: 30vh;margin:0;padding:0">\n    <ion-col style="width: 70vw;margin:0;padding:0;z-index:1000">\n        <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n            <ion-card-header>   \n                <ion-card-title style="font-size: 16pt;text-align: center">Tu Dinero</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <p style="font-size: 20pt;text-align: center">{{money * 1000 | currency}}</p>\n                <p style="font-size: 20pt;text-align: center">{{money}}LUK</p>\n              </ion-card-content>\n          </ion-card>\n    </ion-col>\n    <ion-col style="width: 30vw;margin:0;padding:0">\n        <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n            <ion-fab top right edge style="margin-top:40px">\n                <button ion-fab mini><ion-icon name="person"></ion-icon></button>\n                <ion-fab-list>\n                  <button ion-fab><ion-icon name="exit" (click)="logout()"></ion-icon></button>\n                </ion-fab-list>\n              </ion-fab>\n          </ion-card>    \n    </ion-col>\n  </ion-row>\n  <ion-row style="height: 40vh;margin:0;padding:0">\n      <ion-col style="width: 100vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 150px;width: 150px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:60pt" name="cash" (click)="gotoTransfer()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.5em">Enviar o recibir dinero</p>\n            </ion-card>\n      </ion-col>\n  </ion-row>\n  <ion-row style="height: 30vh;margin:0;padding:0">\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="briefcase" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Mis Billeteras</p>\n            </ion-card>\n      </ion-col>\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="stats" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Estadísticas</p>\n            </ion-card>\n      </ion-col>\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="add" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Agregar dinero</p>\n            </ion-card>\n      </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_wallet_wallet__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(213);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, alertCtrl, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = { id: "",
            password: "" };
        this.userLogin = { id: "123",
            password: "123" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var result = this.afAuth.auth.signInWithEmailAndPassword(this.user.id, this.user.password).then(function (res) {
            if (res.user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.user.password = "";
                var badLoginAlert = _this.alertCtrl.create({
                    title: 'Usuario o contraseña incorrectos',
                    subTitle: 'Por favor verifica tu email y contraseña e intentalo de nuevo',
                    buttons: ['Aceptar']
                });
                badLoginAlert.present();
            }
        }, function (e) {
            console.log(e);
            _this.user.password = "";
            var badLoginAlert = _this.alertCtrl.create({
                title: 'Usuario o contraseña incorrectos',
                subTitle: 'Por favor verifica tu email y contraseña e intentalo de nuevo',
                buttons: ['Aceptar']
            });
            badLoginAlert.present();
        });
    };
    LoginPage.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-card style="box-shadow: none !important;">\n    <ion-card-header style="height: 40vh;text-align: center;">\n      <ion-row style="height: 40vh;margin:0;padding:0">\n        <ion-col style="width: 100vw;margin:0;padding:0">\n            <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n                <button ion-fab Style="height: 150px;width: 150px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:60pt" name="cash" (click)="logout()"></ion-icon></button>\n                <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:2em;font-weight: 600">PortaLuca</p>\n              </ion-card>\n        </ion-col>\n    </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-list style="margin-left:10vw;width: 80vw">\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.id"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n      <ion-item>\n          <button ion-button style="width:100%;height: 8vh" [disabled]="user.id === \'\' || user.password === \'\'" (click)="login()">Iniciar sesión</button>\n      </ion-item>\n      <ion-item>\n          <button ion-button clear style="width:100%;height: 8vh" (click)="gotoRegister()">Registrarme</button>\n      </ion-item>\n\n\n    \n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userToRegister = {
            email: "",
            password: "",
            cc: "",
            name: "",
            phone: ""
        };
        this.passwordConfirm = "";
    }
    RegisterPage.prototype.signUp = function () {
        if (this.userToRegister.password !== this.passwordConfirm) {
            this.passwordConfirm = "";
            var passwordMatchAlert = this.alertCtrl.create({
                title: 'Las contraseñas no coinciden',
                subTitle: 'Por favor verifique la contraseña y su confirmación',
                buttons: ['Aceptar']
            });
            passwordMatchAlert.present();
        }
        else {
            console.log("se ha registrado");
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header style="height: 40vh;text-align: center;">\n        <ion-card-title style="width: 100%;font-size: 30pt">\n            <ion-icon name="cash"></ion-icon>\n        </ion-card-title>     \n        <p style="font-size: 25pt">Ingresa tus datos</p>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-list style="margin-left:10vw;width: 80vw">\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Teléfono</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Documento de identidad</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.cc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating style="margin-top: 25px">Nueva Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="userToRegister.password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Confirmar Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="passwordConfirm"></ion-input>\n      </ion-item>\n      <ion-item>\n          <button ion-button style="width:100%;height: 8vh" [disabled]="passwordConfirm === \'\'|| userToRegister.password === \'\' || userToRegister.email === \'\' || userToRegister.name === \'\' || userToRegister.phone === \'\'||userToRegister.cc=== \'\'" (click)="signUp()">Registrarme</button>\n      </ion-item>\n\n\n    \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferPage = /** @class */ (function () {
    function TransferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferPage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\pages\transfer\transfer.html"*/'<!--\n  Generated template for the TransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Transacciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="type">\n      <ion-segment-button value="get">\n        Recibir\n      </ion-segment-button>\n      <ion-segment-button value="send">\n        Enviar\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="type">\n    <span *ngSwitchCase="\'get\'">\n          <ion-row style="height: 60vh;margin:0;padding:0">\n              <ion-col style="width: 100vw;margin:0;padding:0">\n                  <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n                      <button ion-fab Style="height: 70vw;width: 70vw;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:80pt" name="archive" (click)="gotoTransfer()"></ion-icon></button>\n                      <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.5em">Cobrar o recibir</p>\n                    </ion-card>\n              </ion-col>\n          </ion-row>\n        </span>\n  </div>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\pages\transfer\transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 251;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		857,
		12
	],
	"../pages/get-money/get-money.module": [
		862,
		7
	],
	"../pages/login/login.module": [
		858,
		11
	],
	"../pages/register/register.module": [
		859,
		10
	],
	"../pages/statics/statics.module": [
		860,
		9
	],
	"../pages/transfer/transfer.module": [
		861,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 295;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the WalletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WalletProvider = /** @class */ (function () {
    function WalletProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        console.log('Hello WalletProvider Provider');
        this.headers.append('Content-Type', 'application/json');
    }
    WalletProvider.prototype.getBalance = function (UUID) {
        console.log("http://192.168.1.69:3000/v1/users/" + UUID + "/balance");
        return this.http.get("http://192.168.1.69:3000/v1/users/" + UUID + "/balance", { headers: this.headers }).toPromise();
    };
    WalletProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WalletProvider);
    return WalletProvider;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
 * Generated class for the StaticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaticsPage = /** @class */ (function () {
    function StaticsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StaticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaticsPage');
    };
    StaticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statics',template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\pages\statics\statics.html"*/'<!--\n  Generated template for the StaticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>statics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\pages\statics\statics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StaticsPage);
    return StaticsPage;
}());

//# sourceMappingURL=statics.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(488);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_statics_statics__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_wallet_wallet__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_statics_statics__["a" /* StaticsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__["a" /* TransferPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statics/statics.module#StaticsPageModule', name: 'StaticsPage', segment: 'statics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* firebaseConfig */].fire)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_statics_statics__["a" /* StaticsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transfer_transfer__["a" /* TransferPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_14__providers_wallet_wallet__["a" /* WalletProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(afAuth, platform, statusBar, splashScreen) {
        var _this = this;
        this.afAuth = afAuth;
        this.isLogged = false;
        this.afAuth.user.subscribe(function (res) {
            if (res) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lucho\Documents\PortaLuca\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\lucho\Documents\PortaLuca\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyDm5G-x9jI7Y13RQT735WZkJ2L6VMtKPZk",
        authDomain: "luca-a6691.firebaseapp.com",
        databaseURL: "https://luca-a6691.firebaseio.com",
        projectId: "luca-a6691",
        storageBucket: "luca-a6691.appspot.com",
        messagingSenderId: "196003959266",
        appId: "1:196003959266:web:111d05de2dbe02fe"
    }
};
//# sourceMappingURL=config.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map