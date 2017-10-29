webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_routine_model__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the RoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoutinePage = /** @class */ (function () {
    function RoutinePage(viewCtrl, navParams, _fb) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        //Instantiate empty routine object
        this.routineO = new __WEBPACK_IMPORTED_MODULE_2__app_models_routine_model__["a" /* RoutineModel */]("", [], "");
        //Instantiate form for routine inputs
        this.myForm = this._fb.group({
            routineName: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]],
            subroutines: this._fb.array([])
        });
        //If recieved navparams then routine meant to be edit
        if (navParams.get('routine') != null) {
            this.edit = navParams.get('edit');
            //Populate form with routine to be editeds routine name and sets
            this.routineO.routineName = navParams.get('routine').routineName;
            this.myForm.patchValue({
                routineName: this.routineO.routineName
            });
            for (var i = 0; i < navParams.get('routine').sets.length; i++) {
                this.routineO.sets.push(navParams.get('routine').sets[i]);
                this.addSubRoutine(false);
            }
        }
    }
    //dismiss modal
    RoutinePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    //Pass routine data back to caller
    RoutinePage.prototype.submitModal = function (formi) {
        this.viewCtrl.dismiss({ routineName: formi.value.routineName, subroutines: formi.value.subroutines, rid: formi.value.rid });
    };
    RoutinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoutinePage');
    };
    //Initialize form set
    RoutinePage.prototype.initSubRoutine = function () {
        return this._fb.group({
            setExercise: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            repAmount: [''],
            setTime: ['']
        });
    };
    //Add set to end of form
    RoutinePage.prototype.addSubRoutine = function (addSub) {
        //If 
        if (addSub == true) {
            var rout = new __WEBPACK_IMPORTED_MODULE_2__app_models_routine_model__["b" /* SubRoutine */]("default", 0, 0);
            this.routineO.sets.push(rout);
        }
        var control = this.myForm.controls['subroutines'];
        control.push(this.initSubRoutine());
    };
    //Remove set from form and routineO array
    RoutinePage.prototype.removeSubRoutine = function (i) {
        var control = this.myForm.controls['subroutines'];
        control.removeAt(i);
        this.routineO.sets.splice(i, 1);
    };
    RoutinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-routine',template:/*ion-inline-start:"C:\Users\Krissan\Desktop\gymApp\src\pages\routine\routine.html"*/'<!--\n\n  Generated template for the RoutinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Routine</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<form [formGroup]="myForm" novalidate (ngSubmit)="submitModal(myForm)">\n\n		<div class="form-group">\n\n			<label>Routine Name</label>\n\n			<input type="text" formControlName="routineName" value="{{routineO.routineName}}">\n\n\n\n			<small *ngIf="!myForm.controls.routineName.valid" class="text-danger">\n\n				Name is required (minimum 6 characters).\n\n			</small>\n\n		</div>\n\n\n\n		<ion-card formArrayName="subroutines">\n\n			<ion-row>\n\n				<ion-col>\n\n				</ion-col>\n\n				<ion-col>\n\n					<ion-label>Set Exercise</ion-label>\n\n				</ion-col>\n\n				<ion-col>\n\n					<ion-label>Rep Amount</ion-label>\n\n				</ion-col>\n\n				<ion-col>\n\n					<ion-label>Set Time</ion-label>\n\n				</ion-col>\n\n				<ion-col>\n\n				</ion-col>\n\n			</ion-row>\n\n			<ion-card-content *ngFor="let rout of myForm.controls.subroutines.controls; let i=index">\n\n				<ion-row [formGroupName]="i">\n\n					<ion-col>\n\n						<ion-label>Set {{i+1}}</ion-label>\n\n					</ion-col>\n\n					<ion-col>\n\n						<ion-input type="text" formControlName="setExercise" placeholder="Exercise" value="{{routineO.sets[i].setExercise}}"></ion-input>\n\n						<small [hidden]="myForm.controls.subroutines.controls[i].controls.setExercise.valid">\n\n							Set Exercise is required\n\n						</small>\n\n					</ion-col>\n\n					<ion-col>\n\n						<ion-input type="number" formControlName="repAmount" min="0" value="{{routineO.sets[i].repAmount}}"></ion-input>\n\n					</ion-col>\n\n					<ion-col>\n\n						<ion-input type="number" formControlName="setTime" min="0" value="{{routineO.sets[i].setTime}}"></ion-input>\n\n					</ion-col>	\n\n					<ion-col>\n\n						<button ion-button color="danger" *ngIf="myForm.controls.subroutines.controls.length > 1" (click)="removeSubRoutine(i)"> <ion-icon name="trash"></ion-icon> </button>\n\n					</ion-col>			\n\n				</ion-row>\n\n			</ion-card-content>\n\n		</ion-card>\n\n\n\n        <div class="margin-20" *ngIf="myForm.controls.subroutines.controls.length < 10">\n\n          <a (click)="addSubRoutine(true)" style="cursor: default">\n\n            Add another set +\n\n          </a>\n\n        </div>\n\n        <button ion-button type="submit" [disabled]="!myForm.valid">Submit</button>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Krissan\Desktop\gymApp\src\pages\routine\routine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RoutinePage);
    return RoutinePage;
}());

//# sourceMappingURL=routine.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(82);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage_1 = SignupPage;
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    //register user
    SignupPage.prototype.register = function () {
        var _this = this;
        //Check if login is allowed
        this.allowLogin();
        //If login is allowed
        if (this.doublePass == true) {
            //Pop up loading
            this.showLoader();
            //Users Parameters
            var details = {
                email: this.email,
                password: this.password,
                role: this.role
            };
            //Create account by passing user parameters to server
            this.authService.createAccount(details).then(function (result) {
                //If account is created re-route to home page
                _this.loading.dismiss();
                console.log(result);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }, function (err) {
                //If account creation is unsuccessfull present error
                console.log(err);
                _this.loading.dismiss();
            });
        }
        else {
            this.presentAlert();
        }
    };
    //Check if login is allowed
    SignupPage.prototype.allowLogin = function () {
        //If password length is greater than 6 and both password fields are equal
        if (this.password.length > 6 && this.password == this.passwordAgain) {
            this.doublePass = true;
        }
        else {
            this.doublePass = false;
        }
    };
    //Show loader
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    //Present alert prompting user for proper input
    SignupPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Incorrect signup inputs',
            subTitle: 'Please ensure valid email and passwords entered are the same.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    //Launch signup page
    SignupPage.prototype.launchSignup = function () {
        this.navCtrl.push(SignupPage_1);
    };
    //Launch login page by popping page
    SignupPage.prototype.launchLogin = function () {
        this.navCtrl.pop();
    };
    SignupPage = SignupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Krissan\Desktop\gymApp\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>SignupPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row class="account-form">\n\n        <ion-col>\n\n            <ion-list inset>\n\n \n\n                <ion-item>\n\n                    <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="email" placeholder="Email" type="email" value="krissan32@hotmail.com"></ion-input>\n\n                </ion-item>\n\n \n\n                <ion-item>\n\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="password" placeholder="Password" type="password" value="arkark12"></ion-input>\n\n                </ion-item>\n\n \n\n                <ion-item>\n\n                    <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                    <ion-input [(ngModel)]="passwordAgain" placeholder="Password" type="password"value="arkark12"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label>Role</ion-label>\n\n                    <ion-select [(ngModel)]="role">\n\n                        <ion-option value="normal" selected>normal</ion-option>\n\n                        <ion-option value="super">super</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n \n\n            </ion-list>\n\n \n\n            <button ion-button (click)="register()" class="continue-button">Register</button>\n\n 			<button ion-button (click)="launchLogin()" class="continue-button">Cancel</button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Krissan\Desktop\gymApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
    var SignupPage_1;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		283,
		2
	],
	"../pages/routine/routine.module": [
		284,
		1
	],
	"../pages/signup/signup.module": [
		285,
		0
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoutinesProvider = /** @class */ (function () {
    function RoutinesProvider(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    //Retrieve users routines by userid from server by passing auth token in header
    RoutinesProvider.prototype.getRoutines = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.get('https://krissan-gym-app.herokuapp.com/api/routines/' + _this.authService.userid, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //Create routine in database, by passing routine and authorization header to server
    RoutinesProvider.prototype.createRoutine = function (routine) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            _this.http.post('https://krissan-gym-app.herokuapp.com/api/routines', JSON.stringify(routine), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //Delete routine in database, by passing  authorization header to server and routine id in url
    RoutinesProvider.prototype.deleteRoutine = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Authorization', _this.authService.token);
            _this.http.delete('https://krissan-gym-app.herokuapp.com/api/routines/' + id, { headers: headers }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //Edit routine in database, by passing updated routine and authorization header to server with routines id in url
    RoutinesProvider.prototype.editRoutine = function (routine) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            console.log(routine.rid);
            _this.http.post('https://krissan-gym-app.herokuapp.com/api/routines/' + routine.rid, JSON.stringify(routine), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RoutinesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
    ], RoutinesProvider);
    return RoutinesProvider;
}());

//# sourceMappingURL=routines.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_routine_routine__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_routines_routines__ = __webpack_require__(161);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_routine_routine__["a" /* RoutinePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routine/routine.module#RoutinePageModule', name: 'RoutinePage', segment: 'routine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_routine_routine__["a" /* RoutinePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_routines_routines__["a" /* RoutinesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(52);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Krissan\Desktop\gymApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Krissan\Desktop\gymApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    //Check if user is authenticated, by passing localstorages token to server
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get('https://krissan-gym-app.herokuapp.com/api/auth/protected', { headers: headers })
                    .subscribe(function (res) {
                    _this.checkUserId();
                    resolve(res);
                    console.log("success");
                }, function (err) {
                    console.log("rejected");
                    reject(err);
                });
            });
        });
    };
    //Check if userid is equal to userid in local storage
    AuthProvider.prototype.checkUserId = function () {
        var _this = this;
        //Load token if exists
        this.storage.get('userid').then(function (value) {
            _this.userid = value;
        });
    };
    //Create account by sending details passed in to server and from response get token, storing it and userid in local storage
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://krissan-gym-app.herokuapp.com/api/auth/register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                console.log(res);
                var data = res.json();
                _this.token = data.token;
                _this.userid = data.user._id;
                _this.storage.set('token', data.token);
                _this.storage.set('userid', data.user._id);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //Login user by credentials passed in and from response get token, storing it and userid in local storage
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://krissan-gym-app.herokuapp.com/api/auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.userid = data.user._id;
                _this.storage.set('token', data.token);
                _this.storage.set('userid', data.user._id);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //Logout user by clearing token and userid from storage
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
        this.storage.set('userid', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubRoutine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineModel; });
//Model for sets in routine model
var SubRoutine = /** @class */ (function () {
    function SubRoutine(sE, rA, sA) {
        this.setExercise = sE;
        this.repAmount = rA;
        this.setTime = +sA;
    }
    return SubRoutine;
}());

//Model
var RoutineModel = /** @class */ (function () {
    function RoutineModel(rn, sets, rid) {
        this.routineName = rn;
        this.sets = sets;
        this.rid = rid;
    }
    return RoutineModel;
}());

//# sourceMappingURL=routine-model.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(106);
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
    function LoginPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Pop up loading
        this.showLoader();
        //Check if already authenticated/logged in
        this.authService.checkAuthentication().then(function (res) {
            //If already logged in redirect to homepage and dismiss loader
            console.log("Already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            //Otherwise dismiss loader
            console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    //login user
    LoginPage.prototype.login = function () {
        var _this = this;
        //Pop-up loader
        this.showLoader();
        //User input for login
        var credentials = {
            email: this.email,
            password: this.password
        };
        //Pass login input
        this.authService.login(credentials).then(function (result) {
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            //If login input was rejected, dismiss loading and display error
            _this.loading.dismiss();
            console.log(JSON.stringify(err));
        });
    };
    //Launch sign up
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    //Show loader
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Krissan\Desktop\gymApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Login Page</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n    <ion-row class="login-form">\n\n        <ion-col>\n\n            <ion-list inset>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="email" placeholder="email" type="text" value="krissan32@hotmail.com"></ion-input>\n\n              </ion-item>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="password" placeholder="password" type="password" value="arkark12"></ion-input>\n\n              </ion-item>\n\n \n\n            </ion-list>\n\n \n\n            <button ion-button full (click)="login()" color="primary" class="login-button">Login</button>\n\n \n\n        </ion-col>\n\n    </ion-row>\n\n \n\n    <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="launchSignup()" class="create-account">Create an Account</button>\n\n        </ion-col>\n\n    </ion-row>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Krissan\Desktop\gymApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routine_routine__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_routine_model__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, routineService, modalCtrl, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.routineService = routineService;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //Retrieve users routines from server
        this.reloadRoutines();
    };
    //Add routine
    HomePage.prototype.addRoutine = function () {
        var _this = this;
        //Pop-up routine modal
        var routineModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__routine_routine__["a" /* RoutinePage */]);
        routineModal.onDidDismiss(function (data) {
            //If data is returned
            if (data) {
                //Show loader
                _this.showLoader();
                //Create routine by sending returned data to server
                _this.routineService.createRoutine({ routineName: data.routineName, subroutines: data.subroutines, userid: _this.authService.userid }).then(function (result) {
                    //If routine successfully stored in database, reload routines
                    _this.loading.dismiss();
                    _this.reloadRoutines();
                }, function (err) {
                    //If error dismiss loading and print error
                    _this.loading.dismiss();
                    console.log("not allowed" + err);
                });
            }
        });
        routineModal.present();
    };
    HomePage.prototype.deleteRoutine = function (routine) {
        var _this = this;
        //Pop-up loader
        this.showLoader();
        //Remove routine from database
        this.routineService.deleteRoutine(routine.rid).then(function (result) {
            _this.loading.dismiss();
            //Remove locally
            var index = _this.routines.indexOf(routine);
            if (index > -1) {
                _this.routines.splice(index, 1);
            }
        }, function (err) {
            //If delete is unsuccessful do it
            _this.loading.dismiss();
            console.log("not allowed");
        });
    };
    //Edit routine
    HomePage.prototype.editRoutine = function (routine) {
        var _this = this;
        //Launch routine modal with data to be edited
        var routineModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__routine_routine__["a" /* RoutinePage */], { routine: routine, edit: true });
        routineModal.onDidDismiss(function (data) {
            //If data is returned
            if (data) {
                //Display Loader
                _this.showLoader();
                //Pass edited routine to be updated in server
                _this.routineService.editRoutine({ routineName: data.routineName, subroutines: data.subroutines, rid: routine.rid, userid: _this.authService.userid }).then(function (result) {
                    //If successfully edited dismiss routine and reload routines
                    _this.loading.dismiss();
                    _this.reloadRoutines();
                }, function (err) {
                    //If edit unsuccessful dismiss loading and display error
                    _this.loading.dismiss();
                    console.log("not allowed" + err);
                });
            }
        });
        routineModal.present();
    };
    //Reload all users routines
    HomePage.prototype.reloadRoutines = function () {
        var _this = this;
        //Retrieve all useres routines from server
        this.routineService.getRoutines().then(function (data) {
            //Empty pages routines for re-population
            _this.routines = [];
            //Loop through retrieved data and add them to routines array
            var i = 0;
            for (var rout in data) {
                var rN = data[i].routine;
                var rid = data[i]._id;
                var j = 0;
                var sets = [];
                for (var set in data[i].sets) {
                    var set_1 = new __WEBPACK_IMPORTED_MODULE_6__app_models_routine_model__["b" /* SubRoutine */](data[i].sets[j].setExercise, data[i].sets[j].repAmount, data[i].sets[j].setTime);
                    sets.push(set_1);
                    j += 1;
                }
                var routine = new __WEBPACK_IMPORTED_MODULE_6__app_models_routine_model__["a" /* RoutineModel */](rN, sets, rid);
                _this.routines.push(routine);
                i += 1;
            }
        }, function (err) {
            //If routines can't be retrieved display error
            console.log("not allowed" + err);
        });
    };
    //Show loader
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    //Logout of account
    HomePage.prototype.logout = function () {
        //logout
        this.authService.logout();
        //Reroute to login page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Krissan\Desktop\gymApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n  <ion-title>\n\n    Routines\n\n  </ion-title>\n\n  <ion-buttons end>\n\n    <button ion-button icon-only (click)="addRoutine()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-buttons>\n\n  <ion-buttons start>\n\n    <button ion-button icon-only (click)="logout()"><ion-icon name="power"></ion-icon></button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let rout of routines; let i=index">\n\n      <ion-card-header>\n\n        {{routines[i].routineName}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row *ngFor="let set of routines[i].sets; let j=index">\n\n      		<ion-col fixed>Set Name: {{routines[i].sets[j].setExercise}}</ion-col>\n\n      		<ion-col fixed>Rep Count: {{routines[i].sets[j].repAmount}}</ion-col>\n\n      		<ion-col fixed>Set Time: {{routines[i].sets[j].setTime}}</ion-col>\n\n        </ion-row>\n\n        <ion-col>\n\n          <button ion-button color="danger" (click)="deleteRoutine(routines[i])">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Delete\n\n          </button>\n\n          <button ion-button color="balanced" (click)="editRoutine(routines[i])">\n\n              <ion-icon md="md-create"></ion-icon>\n\n              Edit\n\n          </button>\n\n        </ion-col>\n\n      </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Krissan\Desktop\gymApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__["a" /* RoutinesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map