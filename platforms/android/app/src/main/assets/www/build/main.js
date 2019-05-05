webpackJsonp([7],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(633);
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
        this.api_uri_base = "https://Muchuy-2--jesusfchavarro.repl.co/v1/";
        console.log('Hello WalletProvider Provider');
        this.headers.append('Content-Type', 'application/json');
    }
    WalletProvider.prototype.getBalance = function (UUID) {
        return this.http.get(this.api_uri_base + "users/" + UUID + "/balance", { headers: this.headers }).toPromise();
    };
    WalletProvider.prototype.postUser = function (body) {
        return this.http.post(this.api_uri_base + "users/", body, { headers: this.headers }).toPromise();
    };
    WalletProvider.prototype.postTransactionAsk = function (body) {
        return this.http.post(this.api_uri_base + "transaction/answer", body, { headers: this.headers }).toPromise();
    };
    WalletProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], WalletProvider);
    return WalletProvider;
    var _a;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transfer_transfer__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_wallet_wallet__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
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
    function DashboardPage(afDatabase, loadingCtrl, walletProvider, alertCtrl, afAuth, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.walletProvider = walletProvider;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifications = {};
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
    DashboardPage.prototype.gotoTransfer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transfer_transfer__["a" /* TransferPage */]);
    };
    DashboardPage.prototype.showNotification = function () {
        console.log("si");
        if (this.canChange) {
            //@ts-ignore
            if (this.currentNotification.type === "PAYMENT") {
                var alert_1 = this.alertCtrl.create({
                    //@ts-ignore
                    title: this.currentNotification.data.sourceData.name + ' te ha enviado ' + this.currentNotification.data.lucaAmount + "Lukas",
                    subTitle: '¿Deseas aceptar la transacción?',
                    buttons: ['Aceptar', 'Cancelar']
                });
                alert_1.present();
            }
            //@ts-ignore
            if (this.currentNotification.type === "RESPONSE") {
                if (this.currentNotification.data.answer) {
                    var alert_2 = this.alertCtrl.create({
                        //@ts-ignore
                        title: this.currentNotification.data.targetData.name + " aceptó la transacción :D",
                        buttons: ['Aceptar']
                    });
                    alert_2.present();
                }
                else {
                    var alert_3 = this.alertCtrl.create({
                        //@ts-ignore
                        title: this.currentNotification.data.targetData.name + " rechazó la transacción :(",
                        buttons: ['Aceptar']
                    });
                    alert_3.present();
                }
            }
        }
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.notifications = {};
        this.currentNotification = {};
        this.canChange = false;
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        this.afAuth.user.subscribe(function (res) {
            if (res && res.uid) {
                var UUID = res.uid;
                _this.walletProvider.getBalance(UUID).then(function (res2) {
                    console.log(res2);
                    _this.money = res2;
                    _this.afDatabase.list("user/" + UUID).snapshotChanges().subscribe(function (data) {
                        try {
                            _this.notifications = data.filter(function (res) { return res.key === 'notifications'; })[0].payload.val();
                        }
                        catch (_a) {
                            _this.notifications = {};
                        }
                        loading.dismiss();
                        setTimeout(function (x) {
                            console.log(_this.notifications[Object.keys(_this.notifications)[Object.keys(_this.notifications).length - 1]]);
                            _this.notificationsLength = Object.keys(_this.notifications).length;
                            _this.currentNotification = _this.notifications[Object.keys(_this.notifications)[Object.keys(_this.notifications).length - 1]];
                            _this.showNotification();
                            setTimeout(function (x) {
                                _this.canChange = true;
                            }, 500);
                        }, 500);
                    });
                });
            }
        });
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="margin:0;padding:0">\n  <ion-row style="height: 30vh;margin:0;padding:0">\n    <ion-col style="width: 70vw;margin:0;padding:0;z-index:1000">\n        <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n            <ion-card-header>   \n                <ion-card-title style="font-size: 16pt;text-align: center">Tu Dinero</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <p style="font-size: 20pt;text-align: center">{{money * 1000 | currency}}</p>\n                <p style="font-size: 20pt;text-align: center">{{money}}LUK</p>\n              </ion-card-content>\n          </ion-card>\n    </ion-col>\n    <ion-col style="width: 30vw;margin:0;padding:0">\n        <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n            <ion-fab top right edge style="margin-top:40px">\n                <button ion-fab mini><ion-icon name="person"></ion-icon></button>\n                <ion-fab-list>\n                  <button ion-fab><ion-icon name="exit" (click)="logout()"></ion-icon></button>\n                </ion-fab-list>\n              </ion-fab>\n          </ion-card>    \n    </ion-col>\n  </ion-row>\n  <ion-row style="height: 40vh;margin:0;padding:0">\n      <ion-col style="width: 100vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 150px;width: 150px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:60pt" name="cash" (click)="gotoTransfer()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.5em">Enviar o recibir dinero</p>\n            </ion-card>\n      </ion-col>\n  </ion-row>\n  <ion-row style="height: 30vh;margin:0;padding:0">\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="briefcase" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Mis Billeteras</p>\n            </ion-card>\n      </ion-col>\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="stats" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Estadísticas</p>\n            </ion-card>\n      </ion-col>\n      <ion-col style="width: 33.3vw;margin:0;padding:0">\n          <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n              <button ion-fab Style="height: 90px;width: 90px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:35pt" name="add" (click)="logout()"></ion-icon></button>\n              <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:1.1em">Agregar dinero</p>\n            </ion-card>\n      </ion-col>\n  </ion-row>\n\n  <!-- <input [(ngModel)]="notifications" (input)="showNotification()"> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_wallet_wallet__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wallet_wallet__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qr_reader_qr_reader__ = __webpack_require__(226);
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
    function TransferPage(afDatabase, loadingCtrl, walletProvider, alertCtrl, afAuth, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.walletProvider = walletProvider;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifications = {};
        this.currentNotification = {};
        this.generated = null;
    }
    TransferPage.prototype.showNotification = function () {
        console.log("si");
        if (this.canChange) {
            var alert_1 = this.alertCtrl.create({
                //@ts-ignore
                title: this.currentNotification.data.sourceData.name + ' te ha enviado ' + this.currentNotification.data.lucaAmount + "Lukas",
                subTitle: '¿Deseas aceptar la transacción?',
                buttons: ['Aceptar', 'Cancelar']
            });
            alert_1.present();
        }
    };
    TransferPage.prototype.gotoQrPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__qr_reader_qr_reader__["a" /* QrReaderPage */]);
    };
    TransferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.notifications = {};
        this.currentNotification = {};
        this.canChange = false;
        this.type = "id";
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        this.afAuth.user.subscribe(function (res) {
            if (res && res.uid) {
                var UUID = res.uid;
                _this.walletProvider.getBalance(UUID).then(function (res2) {
                    console.log(res2);
                    _this.money = res2;
                    _this.afDatabase.list("user/" + UUID).snapshotChanges().subscribe(function (data) {
                        try {
                            _this.notifications = data.filter(function (res) { return res.key === 'notifications'; })[0].payload.val();
                            _this.wallet = data.filter(function (res) { return res.key === 'wallets'; })[0].payload.val();
                        }
                        catch (_a) {
                            _this.notifications = {};
                            _this.wallet = data.filter(function (res) { return res.key === 'wallets'; })[0].payload.val();
                        }
                        loading.dismiss();
                        setTimeout(function (x) {
                            console.log(_this.wallet);
                            _this.currentWallet = _this.wallet[0];
                            var qrcode = __WEBPACK_IMPORTED_MODULE_5_qrcode___default.a;
                            var self = _this;
                            qrcode.toDataURL(self.currentWallet, { errorCorrectionLevel: 'H' }, function (err, url) {
                                self.generated = url;
                            });
                            console.log(_this.notifications[Object.keys(_this.notifications)[Object.keys(_this.notifications).length - 1]]);
                            _this.notificationsLength = Object.keys(_this.notifications).length;
                            _this.currentNotification = _this.notifications[Object.keys(_this.notifications)[Object.keys(_this.notifications).length - 1]];
                            _this.showNotification();
                            setTimeout(function (x) {
                                _this.canChange = true;
                            }, 500);
                        }, 500);
                    });
                });
            }
        });
        console.log('ionViewDidLoad DashboardPage');
    };
    TransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\transfer\transfer.html"*/'<!--\n  Generated template for the TransferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Transacciones</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="type">\n      <ion-segment-button value="id">\n        Mi Código\n      </ion-segment-button>\n      <ion-segment-button value="get">\n        Cobrar\n      </ion-segment-button>\n      <ion-segment-button value="send">\n        Regalar\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="type">\n    <span *ngSwitchCase="\'id\'">\n        <ion-item>\n            <ion-label>Billetera</ion-label>\n            <ion-select [(ngModel)]="currentWallet">\n              <ion-option *ngFor="let wall of wallet;let i = index" [value]="wall">Billetera {{i}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:2em;font-weight: 600">Mi codigo es: {{currentWallet}}</p>\n          <img style="margin-left:15vw;width:70vw;height: 70vw;" *ngIf="generated" [src]="generated" />\n    </span>\n    <span *ngSwitchCase="\'get\'">\n        <ion-row style="height: 40vh;margin:0;padding:0">\n            <ion-col style="width: 100vw;margin:0;padding:0">\n                <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n                    <button ion-fab Style="height: 150px;width: 150px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:60pt" name="camera" (click)="gotoQrPage()"></ion-icon></button>\n                  </ion-card>\n            </ion-col>\n        </ion-row>\n    </span>\n  </div>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\transfer\transfer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_wallet_wallet__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransferPage);
    return TransferPage;
}());

//# sourceMappingURL=transfer.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(924);
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
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrReaderPage = /** @class */ (function () {
    function QrReaderPage(qrScanner, navCtrl, navParams) {
        this.qrScanner = qrScanner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QrReaderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.qrScanner.prepare().then(function (status) {
            if (status.authorized) {
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                    _this.navCtrl.getPrevious().data.text = text;
                    _this.navCtrl.getPrevious().data.disabled = true;
                    _this.navCtrl.pop();
                });
            }
            else if (status.denied) {
            }
            else {
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrReaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-reader',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\qr-reader\qr-reader.html"*/'<!--\n  Generated template for the QrReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Leyendo...</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\qr-reader\qr-reader.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
    ], QrReaderPage);
    return QrReaderPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=qr-reader.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(96);
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
    function RegisterPage(walletService, alertCtrl, navCtrl, navParams) {
        this.walletService = walletService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userToRegister = {
            email: "",
            password: "",
            cc: "",
            name: "",
        };
        this.phone = "";
        this.passwordConfirm = "";
    }
    RegisterPage.prototype.signUp = function () {
        var _this = this;
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
            console.log("theuser");
            this.walletService.postUser(this.userToRegister).then(function (res) {
                console.log(res);
                var confirmAlert = _this.alertCtrl.create({
                    title: 'Registro exitoso',
                    subTitle: 'Bienvenid@, por favor inicia sesión para empezar a usar PortaLuca',
                    buttons: [{ text: 'Aceptar', handler: function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]); } }]
                });
                confirmAlert.present();
            }, function (e) {
                console.log(e);
            });
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header style="height: 40vh;text-align: center;">\n        <ion-card-title style="width: 100%;font-size: 30pt">\n            <ion-icon name="cash"></ion-icon>\n        </ion-card-title>     \n        <p style="font-size: 25pt">Ingresa tus datos</p>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-list style="margin-left:10vw;width: 80vw">\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Teléfono</ion-label>\n        <ion-input type="text" [(ngModel)]="phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Documento de identidad</ion-label>\n        <ion-input type="text" [(ngModel)]="userToRegister.cc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating style="margin-top: 25px">Nueva Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="userToRegister.password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Confirmar Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="passwordConfirm"></ion-input>\n      </ion-item>\n      <ion-item>\n          <button ion-button style="width:100%;height: 8vh" [disabled]="passwordConfirm === \'\'|| userToRegister.password === \'\' || userToRegister.email === \'\' || userToRegister.name === \'\' || userToRegister.phone === \'\'||userToRegister.cc=== \'\'" (click)="signUp()">Registrarme</button>\n      </ion-item>\n\n\n    \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 264:
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
webpackEmptyAsyncContext.id = 264;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		919,
		6
	],
	"../pages/get-money/get-money.module": [
		916,
		0
	],
	"../pages/login/login.module": [
		917,
		5
	],
	"../pages/qr-reader/qr-reader.module": [
		918,
		4
	],
	"../pages/register/register.module": [
		920,
		3
	],
	"../pages/statics/statics.module": [
		921,
		2
	],
	"../pages/transfer/transfer.module": [
		922,
		1
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
webpackAsyncContext.id = 308;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
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
            selector: 'page-statics',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\statics\statics.html"*/'<!--\n  Generated template for the StaticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>statics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\statics\statics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StaticsPage);
    return StaticsPage;
}());

//# sourceMappingURL=statics.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(514);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_qr_reader_qr_reader__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_statics_statics__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfer_transfer__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_wallet_wallet__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_statics_statics__["a" /* StaticsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_qr_reader_qr_reader__["a" /* QrReaderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/get-money/get-money.module#GetMoneyPageModule', name: 'GetMoneyPage', segment: 'get-money', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-reader/qr-reader.module#QrReaderPageModule', name: 'QrReaderPage', segment: 'qr-reader', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statics/statics.module#StaticsPageModule', name: 'StaticsPage', segment: 'statics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfer/transfer.module#TransferPageModule', name: 'TransferPage', segment: 'transfer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_13__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_statics_statics__["a" /* StaticsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_transfer_transfer__["a" /* TransferPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_qr_reader_qr_reader__["a" /* QrReaderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_15__providers_wallet_wallet__["a" /* WalletProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(89);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 908:
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

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(227);
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
    function LoginPage(loadingCtrl, afAuth, alertCtrl, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
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
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        var result = this.afAuth.auth.signInWithEmailAndPassword(this.user.id, this.user.password).then(function (res) {
            if (res.user) {
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.user.password = "";
                loading.dismiss();
                var badLoginAlert = _this.alertCtrl.create({
                    title: 'Usuario o contraseña incorrectos',
                    subTitle: 'Por favor verifica tu email y contraseña e intentalo de nuevo',
                    buttons: ['Aceptar']
                });
                badLoginAlert.present();
            }
        }, function (e) {
            console.log(e);
            loading.dismiss();
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <ion-card style="box-shadow: none !important;">\n    <ion-card-header style="height: 40vh;text-align: center;">\n      <ion-row style="height: 40vh;margin:0;padding:0">\n        <ion-col style="width: 100vw;margin:0;padding:0">\n            <ion-card style="height: 100%;width:100%;margin:0;box-shadow: none !important;">\n                <button ion-fab Style="height: 150px;width: 150px;margin-left: 50%;margin-top:15px;transform: translate(-50%,0)"><ion-icon style="font-size:60pt" name="cash" (click)="logout()"></ion-icon></button>\n                <p style="margin-left: 50%;width:60%;transform: translate(-50%,0);text-align:center;font-size:2em;font-weight: 600">PortaLuca</p>\n              </ion-card>\n        </ion-col>\n    </ion-row>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-list style="margin-left:10vw;width: 80vw">\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.id"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n      <ion-item>\n          <button ion-button style="width:100%;height: 8vh" [disabled]="user.id === \'\' || user.password === \'\'" (click)="login()">Iniciar sesión</button>\n      </ion-item>\n      <ion-item>\n          <button ion-button clear style="width:100%;height: 8vh" (click)="gotoRegister()">Registrarme</button>\n      </ion-item>\n\n\n    \n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lucho\Documents\new\PortaLuca\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[394]);
//# sourceMappingURL=main.js.map