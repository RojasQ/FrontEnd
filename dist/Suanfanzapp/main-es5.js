(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\xampp\htdocs\frontend\suanfanzapp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2qOu":
    /*!*******************************!*\
      !*** ./src/app/class/user.ts ***!
      \*******************************/

    /*! exports provided: User */

    /***/
    function qOu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyDK6i-WqQaDt0yz23E8Vm-1v30OZK3dL5U",
          authDomain: "suanfanzapp-10a47.firebaseapp.com",
          databaseURL: "https://suanfanzapp-10a47.firebaseio.com",
          projectId: "suanfanzapp-10a47",
          storageBucket: "suanfanzapp-10a47.appspot.com",
          messagingSenderId: "860693742620",
          appId: "1:860693742620:web:59f1e17a2794937470cbd9"
        }
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
    },

    /***/
    "Dw5M":
    /*!***************************************************!*\
      !*** ./src/app/pages/private/home/home.module.ts ***!
      \***************************************************/

    /*! exports provided: HomeModule */

    /***/
    function Dw5M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component */
      "dsDk");
      /* harmony import */


      var _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/inbox-chat/inbox-chat.component */
      "W3qU");
      /* harmony import */


      var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/chat-area/chat-area.component */
      "jvv+");
      /* harmony import */


      var _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/chat-message/chat-message.component */
      "vNkp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__["InboxChatComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__["ChatAreaComponent"], _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_3__["InboxChatComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__["ChatAreaComponent"], _components_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_5__["ChatMessageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "isLogged",
          value: function isLogged() {
            var user = window.localStorage.getItem('user') || undefined;
            var isLogged = user ? true : false;
            if (isLogged) this.user = JSON.parse(user);
            return isLogged;
          }
        }, {
          key: "logout",
          value: function logout() {
            window.localStorage.clear(); // window.location.href = '';
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LjFu":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LjFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "IYfF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isLogged = this.authService.isLogged();
            console.log("Existe una sesi\xF3n de usaurio? ".concat(isLogged));

            if (!isLogged) {
              console.log("pasaste authguard");
              this.router.navigate(['/login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MyXD":
    /*!*************************************************************!*\
      !*** ./src/app/pages/public/register/register.component.ts ***!
      \*************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function MyXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/user-service.service */
      "WYl0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegisterComponent = /*#__PURE__*/function () {
        // btn: any;
        function RegisterComponent(router, authService, userService) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.authService = authService;
          this.userService = userService; // userForm = new FormGroup({
          //   email: new FormControl('pabhoz@gmail.com', Validators.required),
          //   username: new FormControl('', Validators.required),
          //   name: new FormControl('', Validators.required),
          //   lname: new FormControl('', Validators.required),
          //   password: new FormControl('', Validators.required),
          //   favNumber: new FormControl(''),
          // });

          this.aut = new src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]();
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.btn = document.getElementById("submmitbtn").addEventListener("click", (e)=>{
            //   console.log(e);
            // })
            this.aut.logout();
          }
        }, {
          key: "onSubmmit",
          value: function onSubmmit(userForm) {
            if (document.getElementById("register-password").value === document.getElementById("register-Cpassword").value) {
              this.userService.GetNewList();

              if (userForm.value.$userkey == null) {
                this.userService.createUser(userForm.value);
              } else {
                this.userService.UpdateUser(userForm.value);
              }

              this.router.navigate(['/']);
            } else {
              console.log("passwords don´t match");
            }
          } // doRegister(e) {
          //   e.preventDefault();
          //   const user: User = {
          //     email: "pabhoz@usbcali.edu.co",
          //     name: "pabhoz",
          //     lname: "Bejarano",
          //     password: "suanfanzon",
          //     phone: 318234381
          //   };
          //   console.log(this.userForm);
          //   //this.authService.login(user);
          //   //this.router.navigate(['/']);
          // }

        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.router.navigate(['/login']);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 158,
        vars: 0,
        consts: [[1, "appContainer"], [1, "topColorBox"], [1, "bottomColorBox"], [1, "header"], ["xmlns", "http://www.w3.org/2000/svg", "width", "39", "height", "39", "viewBox", "0 0 39 39"], ["fill", "#00E676", "d", "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"], ["fill", "#FFF", "d", "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"], [1, "appTitle"], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [3, "ngsubmmit"], ["userForm", "ngForm"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["name", "email", "id", "register-email", "type", "email", "placeholder", "Email", "ngModel", "", "required", "", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["name", "name", "id", "register-name", "type", "text", "placeholder", "name", "ngModel", "", "required", "", 1, "input"], [1, "fas", "fa-lock"], ["name", "password", "id", "register-password", "type", "password", "placeholder", "password", "ngModel", "", "required", "", 1, "input"], ["name", "Cpassword", "id", "register-Cpassword", "type", "password", "placeholder", "confirm password", "ngModel", "", "required", "", 1, "input"], ["name", "lname", "id", "register-lname", "type", "text", "placeholder", "last name", "ngModel", "", "required", "", 1, "input"], ["name", "prefix", "id", "", "ngModel", "", "required", ""], ["data-countryCode", "GB", "value", "44", "Selected", ""], ["data-countryCode", "US", "value", "1"], ["label", "Other countries"], ["data-countryCode", "DZ", "value", "213"], ["data-countryCode", "AD", "value", "376"], ["data-countryCode", "AO", "value", "244"], ["data-countryCode", "AI", "value", "1264"], ["data-countryCode", "AG", "value", "1268"], ["data-countryCode", "CA", "value", "1"], ["data-countryCode", "CN", "value", "86"], ["data-countryCode", "CO", "value", "57"], ["data-countryCode", "EC", "value", "593"], ["data-countryCode", "EG", "value", "20"], ["data-countryCode", "SV", "value", "503"], ["data-countryCode", "GY", "value", "592"], ["data-countryCode", "HT", "value", "509"], ["data-countryCode", "HN", "value", "504"], ["data-countryCode", "HK", "value", "852"], ["data-countryCode", "HU", "value", "36"], ["data-countryCode", "IS", "value", "354"], ["data-countryCode", "IN", "value", "91"], ["data-countryCode", "ID", "value", "62"], ["data-countryCode", "KR", "value", "82"], ["data-countryCode", "KW", "value", "965"], ["data-countryCode", "KG", "value", "996"], ["data-countryCode", "LA", "value", "856"], ["data-countryCode", "LV", "value", "371"], ["data-countryCode", "LB", "value", "961"], ["data-countryCode", "LS", "value", "266"], ["data-countryCode", "LR", "value", "231"], ["data-countryCode", "MT", "value", "356"], ["data-countryCode", "MH", "value", "692"], ["data-countryCode", "MQ", "value", "596"], ["data-countryCode", "MR", "value", "222"], ["data-countryCode", "YT", "value", "269"], ["data-countryCode", "MX", "value", "52"], ["data-countryCode", "FM", "value", "691"], ["data-countryCode", "MD", "value", "373"], ["data-countryCode", "MC", "value", "377"], ["data-countryCode", "MN", "value", "976"], ["data-countryCode", "MS", "value", "1664"], ["data-countryCode", "MA", "value", "212"], ["data-countryCode", "MZ", "value", "258"], ["data-countryCode", "MN", "value", "95"], ["data-countryCode", "RU", "value", "7"], ["data-countryCode", "RW", "value", "250"], ["data-countryCode", "SM", "value", "378"], ["data-countryCode", "ST", "value", "239"], ["data-countryCode", "SA", "value", "966"], ["data-countryCode", "SR", "value", "597"], ["data-countryCode", "SZ", "value", "268"], ["data-countryCode", "SE", "value", "46"], ["name", "phone", "id", "register-phone", "type", "text", "placeholder", "Tel\xE9fono", "ngModel", "", "required", "", 1, "input"], [1, "buttons"], ["type", "submit", "id", "submmitbtn", 1, "button", "is-info", 3, "click"], [1, "button", "is-success", 3, "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUANFANZAPP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngsubmmit", function RegisterComponent_Template_form_ngsubmmit_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

              return ctx.onSubmmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "UK (+44)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "USA (+1)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "optgroup", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Algeria (+213)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Andorra (+376)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Angola (+244)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Anguilla (+1264)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Antigua & Barbuda (+1268)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Canada (+1)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "China (+86)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Colombia (+57)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ecuador (+593)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Egypt (+20)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "El Salvador (+503)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "n> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Guyana (+592)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Haiti (+509)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Honduras (+504)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Hong Kong (+852)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Hungary (+36)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Iceland (+354)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "India (+91)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Indonesia (+62)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Korea South (+82)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Kuwait (+965)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Kyrgyzstan (+996)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Laos (+856)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Latvia (+371)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lebanon (+961)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Lesotho (+266)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Liberia (+231)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Malta (+356)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Marshall Islands (+692)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Martinique (+596)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Mauritania (+222)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Mayotte (+269)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Mexico (+52)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Micronesia (+691)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Moldova (+373)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Monaco (+377)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Mongolia (+976)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Montserrat (+1664)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Morocco (+212)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Mozambique (+258)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Myanmar (+95)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Russia (+7)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Rwanda (+250)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "San Marino (+378)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sao Tome & Principe (+239)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Saudi Arabia (+966)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Suriname (+597)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Swaziland (+268)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Sweden (+46)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_154_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

              return ctx.onSubmmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "button", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_156_listener() {
              return ctx.goToLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Back to Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .topColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 222px;\n  background: #00BFA5;\n}\n.appContainer[_ngcontent-%COMP%]   .bottomColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 222px);\n  background: #D3DBD9;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  margin-top: 27px;\n  margin-bottom: 28px;\n  margin-left: 26.5%;\n  top: 0;\n  z-index: 2;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .appTitle[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  color: white;\n  font-size: 14px;\n  font-family: sfProTextMedium;\n  font-weight: bold;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 65%;\n  position: absolute;\n  padding: 70px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #2C948A;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 140px;\n  background: #03D755;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSko7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQWpEQTtFQWtEQSxpQkFBQTtBQUZaO0FBS0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSFI7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEM7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudG9wQ29sb3JCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjIycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQkZBNTtcclxuICAgIH1cclxuICAgIC5ib3R0b21Db2xvckJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjJweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QzREJEOTtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNi41JTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAuYXBwVGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIC5tZWRpYS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyQzk0OEE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM0Q3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QuX9":
    /*!*******************************************************!*\
      !*** ./src/app/pages/public/login/login.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QuX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/user-service.service */
      "WYl0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, userService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.userService = userService;
          this.title = "Hola Mundo";
          this.color = "red";
          this.aut = new src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"](); // Auth: AuthService = new AuthService();

          this.exists = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.aut.logout();
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this = this;

            this.userService.GetNewList().snapshotChanges().subscribe(function (item) {
              _this.userList = [];
              item.forEach(function (element) {
                var x = element.payload.toJSON();
                x["$userKey"] = element.key;

                _this.userList.push(x);
              });
              _this.userList = _this.userList.filter(function (data) {
                if (data.email.toString().trim() === _this.buscar && data.password.toString().trim() === _this.buscarPass) {
                  _this.exists = true;
                  return data.email.toString().trim() === _this.buscar;
                }

                if (data.phone.toString().trim() === _this.buscar && data.password.toString().trim() === _this.buscarPass) {
                  _this.exists = true;
                  return data.phone.toString().trim() === _this.buscar;
                }
              }); // this.userList = this.userList.filter(data => {
              // if(data.phone.toString().trim() === this.buscar && data.password.toString().trim() === this.buscarPass){
              //   this.exists = true
              //   return data.phone.toString().trim() === this.buscar
              // }
              // })

              console.log("userlist: " + _this.userList);

              if (!_this.exists) {
                console.log("tas tonto compa");
              } else {
                console.log(_this.userList); // this.Auth.login(this.userList);

                window.localStorage.setItem('user', JSON.stringify(_this.userList));

                _this.router.navigate(['/']);
              }
            });
          }
        }, {
          key: "doLogin",
          value: function doLogin() {
            this.buscar = document.getElementById("data").value;
            this.buscarPass = document.getElementById("pass").value;
            console.log("buscar: " + this.buscar);
            this.getdata();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 31,
        vars: 0,
        consts: [[1, "appContainer"], [1, "topColorBox"], [1, "bottomColorBox"], [1, "header"], ["xmlns", "http://www.w3.org/2000/svg", "width", "39", "height", "39", "viewBox", "0 0 39 39"], ["fill", "#00E676", "d", "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"], ["fill", "#FFF", "d", "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"], [1, "appTitle"], [1, "box"], [1, "media"], [1, "media-content"], [1, "content"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["id", "data", "type", "text", "placeholder", "Email or Phone", "ngModel", "", "required", "", 1, "input"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["id", "pass", "type", "password", "placeholder", "Password", "ngModel", "", "required", "", 1, "input"], [1, "fas", "fa-lock"], [1, "buttons"], [1, "button", "is-info", 3, "click"], [1, "button", "is-success", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUANFANZAPP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
              return ctx.goToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
              return ctx.doLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.appContainer[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n}\n.appContainer[_ngcontent-%COMP%]   .topColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 222px;\n  background: #00BFA5;\n}\n.appContainer[_ngcontent-%COMP%]   .bottomColorBox[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 222px);\n  background: #D3DBD9;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  margin-top: 27px;\n  margin-bottom: 28px;\n  margin-left: 26.5%;\n  top: 0;\n  z-index: 2;\n}\n.appContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .appTitle[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  color: white;\n  font-size: 14px;\n  font-family: sfProTextMedium;\n  font-weight: bold;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 65%;\n  position: absolute;\n  padding: 70px;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-info[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #2C948A;\n}\n.appContainer[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .is-success[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #03D755;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkJBQUE7RUFDQSw0Q0FBQTtBQUZKO0FBS0E7RUFDSSw0QkFBQTtFQUNBLDJDQUFBO0FBSEo7QUFNQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSko7QUFLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQWpEQTtFQWtEQSxpQkFBQTtBQUZaO0FBS0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSFI7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEM7QUFTNEI7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFQaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFwcENvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudG9wQ29sb3JCb3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjIycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwQkZBNTtcclxuICAgIH1cclxuICAgIC5ib3R0b21Db2xvckJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMjJweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0QzREJEOTtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNi41JTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAuYXBwVGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBwYWRkaW5nOiA3MHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIC5tZWRpYS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyQzk0OEE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXMtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwM0Q3NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Suanfanzapp';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "W3qU":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/private/home/components/inbox-chat/inbox-chat.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: InboxChatComponent */

    /***/
    function W3qU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxChatComponent", function () {
        return InboxChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InboxChatComponent = /*#__PURE__*/function () {
        function InboxChatComponent() {
          _classCallCheck(this, InboxChatComponent);

          this.isRead = undefined;
        }

        _createClass(InboxChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.readStatusColor = this.isRead && this.isRead !== "false" ? "#50C2F7" : "#ABABAB";
          }
        }]);

        return InboxChatComponent;
      }();

      InboxChatComponent.ɵfac = function InboxChatComponent_Factory(t) {
        return new (t || InboxChatComponent)();
      };

      InboxChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InboxChatComponent,
        selectors: [["app-inbox-chat"]],
        inputs: {
          profilePic: "profilePic",
          name: "name",
          msgTime: "msgTime",
          msgPreview: "msgPreview",
          isRead: "isRead"
        },
        decls: 15,
        vars: 5,
        consts: [[1, "inboxChat1"], [1, "profileInboxContainer"], ["alt", "", "srcset", "", 1, "profileInbox", 3, "src"], [1, "inboxInfoContainer"], [1, "detailsContainer"], [1, "namePersonChat"], [1, "messageTime"], [1, "chatContainer"], [1, "chatStatus"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 18 18", "width", "18", "height", "18"], ["d", "M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"], [1, "chatPreview"]],
        template: function InboxChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.readStatusColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msgPreview);
          }
        },
        styles: [".inboxChat1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  background: white;\n  display: flex;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n.inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%] {\n  width: 77px;\n  height: 72px;\n  padding: 0 15px 0 13px;\n  display: flex;\n  align-items: center;\n}\n.inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%]   .profileInbox[_ngcontent-%COMP%] {\n  width: 49px;\n  height: 49px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 15px 0 0;\n  margin-right: 6px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  flex-grow: 1;\n  border-bottom: 1px solid rgba(145, 145, 145, 0.2);\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  flex-grow: 1;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .messageTime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #878787;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatStatus[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 2px;\n}\n.inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatPreview[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6F6F6F;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvaW5ib3gtY2hhdC9pbmJveC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUNZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBeENKO0VBeUNJLGVBQUE7QUFDaEI7QUFDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBOUNKO0VBK0NJLGVBQUE7QUFDaEI7QUFFUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ2hCO0FBQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQTdESjtFQThESSxlQUFBO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvaW5ib3gtY2hhdC9pbmJveC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHlGb250OiBzZlByb1RleHRSZWd1bGFyO1xyXG4kdGl0bGVGb250OiBzZlByb1RleHRNZWRpdW07XHJcblxyXG4uaW5ib3hDaGF0MSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUluYm94Q29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNzdweDtcclxuICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMTNweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnByb2ZpbGVJbmJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmJveEluZm9Db250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvcjogIzkxOTE5MSwgJGFscGhhOiAwLjIpO1xyXG4gICAgICAgIC5kZXRhaWxzQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgLm5hbWVQZXJzb25DaGF0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tZXNzYWdlVGltZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg3ODc4NztcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGF0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICAgICAgICAuY2hhdFN0YXR1c3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNoYXRQcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNkY2RjZGO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inbox-chat',
            templateUrl: './inbox-chat.component.html',
            styleUrls: ['./inbox-chat.component.scss']
          }]
        }], function () {
          return [];
        }, {
          profilePic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isRead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WYl0":
    /*!**************************************************!*\
      !*** ./src/app/services/user-service.service.ts ***!
      \**************************************************/

    /*! exports provided: UserServiceService */

    /***/
    function WYl0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserServiceService", function () {
        return UserServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _class_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../class/user */
      "2qOu");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var UserServiceService = /*#__PURE__*/function () {
        function UserServiceService(db) {
          _classCallCheck(this, UserServiceService);

          this.db = db;
          this.selectedUser = new _class_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        }

        _createClass(UserServiceService, [{
          key: "GetNewList",
          value: function GetNewList() {
            this.usuarioList = this.db.list('usuario');
            return this.usuarioList;
          } // getUser($userkey)
          // {
          //   return 
          // }

        }, {
          key: "createUser",
          value: function createUser(usuario) {
            console.log("llegue hasta aqui");
            this.usuarioList.push({
              name: usuario.name,
              lname: usuario.lname,
              email: usuario.email,
              prefix: usuario.prefix,
              phone: usuario.phone,
              password: usuario.password
            });
          }
        }, {
          key: "UpdateUser",
          value: function UpdateUser(usuario) {
            this.usuarioList.update(usuario.$userkey, {
              name: usuario.name,
              lname: usuario.lname,
              email: usuario.email,
              prefix: usuario.prefix,
              phone: usuario.phone,
              password: usuario.password
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser($userkey) {
            this.usuarioList.remove($userkey);
          }
        }]);

        return UserServiceService;
      }();

      UserServiceService.ɵfac = function UserServiceService_Factory(t) {
        return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]));
      };

      UserServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserServiceService,
        factory: UserServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WnqB":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/chat/chat.service.ts ***!
      \******************************************************/

    /*! exports provided: ChatService */

    /***/
    function WnqB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! socket.io-client */
      "gFX4");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ChatService = /*#__PURE__*/function () {
        function ChatService() {
          _classCallCheck(this, ChatService);
        }

        _createClass(ChatService, [{
          key: "connect",
          value: function connect() {
            var _this2 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this2.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__('localhost:3000');

              _this2.socket.on('connect', function () {
                observer.next();
              });
            });
          }
        }, {
          key: "getNewMsgs",
          value: function getNewMsgs() {
            var _this3 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this3.socket.on("newMsg", function (msg) {
                observer.next(msg);
              });
            });
          }
        }, {
          key: "sendMsg",
          value: function sendMsg(msg) {
            this.socket.emit('newMsg', msg);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {
            this.socket.disconnect();
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)();
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dsDk":
    /*!******************************************************!*\
      !*** ./src/app/pages/private/home/home.component.ts ***!
      \******************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function dsDk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/chat/chat.service */
      "WnqB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/chat-area/chat-area.component */
      "jvv+");
      /* harmony import */


      var _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/inbox-chat/inbox-chat.component */
      "W3qU");

      function HomeComponent_app_inbox_chat_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-inbox-chat", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_app_inbox_chat_25_Template_app_inbox_chat_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSelectInbox(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var inbox_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profilePic", inbox_r1.icon)("name", inbox_r1.title)("msgTime", inbox_r1.lastMsg)("msgPreview", inbox_r1.msgPreview)("isRead", inbox_r1.isRead);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(authService, chatService) {
          _classCallCheck(this, HomeComponent);

          this.authService = authService;
          this.chatService = chatService;
          this.subscriptionList = {
            connection: undefined,
            msgs: undefined
          };
          this.chats = [{
            title: "Santi",
            icon: "/assets/img/ppRightBar.png",
            isRead: true,
            msgPreview: "entonces ando usando fotos reales hahaha",
            lastMsg: "11:13",
            msgs: [{
              content: "Lorem ipsum dolor amet",
              isRead: true,
              isMe: true,
              time: "7:24"
            }, {
              content: "Qué?",
              isRead: true,
              isMe: false,
              time: "7:25"
            }]
          }, {
            title: "Pablo Bejarano",
            icon: "/assets/img/ppInbox.png",
            isRead: true,
            msgPreview: "Estrenando componente",
            lastMsg: "18:30",
            msgs: []
          }, {
            title: "Pablo Bejarano 2",
            icon: "/assets/img/ppInbox.png",
            isRead: true,
            msgPreview: "Nice front 😎",
            lastMsg: "23:30",
            msgs: []
          }];
          this.currentChat = {
            title: "",
            icon: "",
            msgs: []
          };
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initChat();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroySubscriptionList();
            this.chatService.disconnect();
          }
        }, {
          key: "initChat",
          value: function initChat() {
            var _this4 = this;

            if (this.chats.length > 0) {
              this.currentChat.title = this.chats[0].title;
              this.currentChat.icon = this.chats[0].icon;
              this.currentChat.msgs = this.chats[0].msgs;
            }

            this.subscriptionList.connection = this.chatService.connect().subscribe(function (_) {
              console.log("Nos conectamos");
              _this4.subscriptionList.msgs = _this4.chatService.getNewMsgs().subscribe(function (msg) {
                msg.isMe = _this4.currentChat.title === msg.owner ? true : false;

                _this4.currentChat.msgs.push(msg);
              });
            });
          }
        }, {
          key: "onSelectInbox",
          value: function onSelectInbox(index) {
            this.currentChat.title = this.chats[index].title;
            this.currentChat.icon = this.chats[index].icon;
            this.currentChat.msgs = this.chats[index].msgs;
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            this.authService.logout();
          }
        }, {
          key: "destroySubscriptionList",
          value: function destroySubscriptionList() {
            var exceptList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            for (var _i = 0, _Object$keys = Object.keys(this.subscriptionList); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];

              if (this.subscriptionList[key] && exceptList.indexOf(key) === -1) {
                this.subscriptionList[key].unsubscribe();
              }
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 28,
        vars: 4,
        consts: [["id", "app"], [1, "leftBigContainer"], [1, "topBarLeft"], [1, "tbLeftContainer"], [1, "profileContainer"], ["src", "/assets/img/pp.png", "alt", "", "srcset", "", 1, "profile"], [1, "leftRightIcons"], [1, "statusContainer"], ["id", "df9d3429-f0ef-48b5-b5eb-f9d27b2deba6", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"], ["fill", "#009588", "d", "M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"], [1, "newChatContainer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"], [1, "leftMore"], ["fill", "#919191", "d", "M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"], [1, "searchBarContainer"], [1, "searchIcon"], ["fill", "#919191", "d", "M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"], [1, "searchBarText"], [1, "searchBar"], [1, "inboxChat"], [3, "profilePic", "name", "msgTime", "msgPreview", "isRead", "click", 4, "ngFor", "ngForOf"], [1, "rightBigContainer"], [3, "title", "icon", "msgs"], [3, "profilePic", "name", "msgTime", "msgPreview", "isRead", "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search or start new chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_app_inbox_chat_25_Template, 1, 5, "app-inbox-chat", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-chat-area", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.currentChat.title)("icon", ctx.currentChat.icon)("msgs", ctx.currentChat.msgs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_4__["ChatAreaComponent"], _components_inbox_chat_inbox_chat_component__WEBPACK_IMPORTED_MODULE_5__["InboxChatComponent"]],
        styles: ["@font-face {\n  font-family: sfProTextRegular;\n  src: url(/assets/fonts/SFProTextRegular.ttf);\n}\n@font-face {\n  font-family: sfProTextMedium;\n  src: url(/assets/fonts/SFProTextMedium.ttf);\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n#app[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  background: #E5DDD5;\n  font-family: sfProTextRegular;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 30%;\n  width: 100%;\n  height: 100%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  background: #EDEDED;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .profileContainer[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .statusContainer[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .statusContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .newChatContainer[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 0 0 10px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .newChatContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 0 0 10px;\n  padding: 8px;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .topBarLeft[_ngcontent-%COMP%]   .tbLeftContainer[_ngcontent-%COMP%]   .leftRightIcons[_ngcontent-%COMP%]   .leftMore[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  background: #F6F6F6;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchIcon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  left: 24px;\n  position: absolute;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchBarText[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  position: absolute;\n  left: 77px;\n  color: #919191;\n  cursor: text;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .searchBarContainer[_ngcontent-%COMP%]   .searchBar[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 35px;\n  padding: 0 32px 0 65px;\n  background: white;\n  border-radius: 100px;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 108px);\n  background: white;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 72px;\n  background: white;\n  display: flex;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]:hover {\n  background: #F5F5F5;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%] {\n  width: 77px;\n  height: 72px;\n  padding: 0 15px 0 13px;\n  display: flex;\n  align-items: center;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .profileInboxContainer[_ngcontent-%COMP%]   .profileInbox[_ngcontent-%COMP%] {\n  width: 49px;\n  height: 49px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%] {\n  height: 72px;\n  padding: 0 15px 0 0;\n  margin-right: 6px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  flex-grow: 1;\n  border-bottom: 1px solid rgba(145, 145, 145, 0.2);\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  flex-grow: 1;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .detailsContainer[_ngcontent-%COMP%]   .messageTime[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #878787;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatStatus[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 2px;\n}\n#app[_ngcontent-%COMP%]   .leftBigContainer[_ngcontent-%COMP%]   .inboxChat[_ngcontent-%COMP%]   .inboxChat1[_ngcontent-%COMP%]   .inboxInfoContainer[_ngcontent-%COMP%]   .chatContainer[_ngcontent-%COMP%]   .chatPreview[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6F6F6F;\n  font-family: sfProTextMedium;\n  cursor: pointer;\n}\n#app[_ngcontent-%COMP%]   .rightBigContainer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 70%;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw2QkFBQTtFQUNBLDRDQUFBO0FBRko7QUFLQTtFQUNJLDRCQUFBO0VBQ0EsMkNBQUE7QUFISjtBQU1BO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUpKO0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkExQk87QUFzQlg7QUFLSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSFI7QUFJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRlo7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURoQjtBQUVnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQXBCO0FBQ29CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDeEI7QUFFZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBcEI7QUFDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ3hCO0FBQXdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUU1QjtBQUNvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUN4QjtBQUF3QjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFNUI7QUFDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDeEI7QUFBd0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRTVCO0FBSVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRlo7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQUdZO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQURoQjtBQUdZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFEaEI7QUFLUTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUZoQjtBQUdnQjtFQUNJLG1CQUFBO0FBRHBCO0FBR2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURwQjtBQUVvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQXhCO0FBR2dCO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQURwQjtBQUVvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUF4QjtBQUN3QjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQTVLaEI7RUE2S2dCLGVBQUE7QUFDNUI7QUFDd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQWxMaEI7RUFtTGdCLGVBQUE7QUFDNUI7QUFFb0I7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFBeEI7QUFDd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQzVCO0FBQ3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFqTWhCO0VBa01nQixlQUFBO0FBQzVCO0FBT0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCgvYXNzZXRzL2ZvbnRzL1NGUHJvVGV4dFJlZ3VsYXIudHRmKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc2ZQcm9UZXh0TWVkaXVtO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250cy9TRlByb1RleHRNZWRpdW0udHRmKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2FwcCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0U1RERENTtcclxuICAgIGZvbnQtZmFtaWx5OiAkYm9keUZvbnQ7XHJcbiAgICAubGVmdEJpZ0NvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLnRvcEJhckxlZnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRURFREVEO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAudGJMZWZ0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGVDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxlZnRSaWdodEljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1c0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uZXdDaGF0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGVmdE1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2hCYXJDb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xyXG4gICAgICAgICAgICAuc2VhcmNoSWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlYXJjaEJhclRleHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlYXJjaEJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMnB4IDAgNjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5ib3hDaGF0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTA4cHgpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgLmluYm94Q2hhdDEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGVJbmJveENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlSW5ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5ib3hJbmZvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3I6ICM5MTkxOTEsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsc0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lUGVyc29uQ2hhdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZVRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYXRTdGF0dXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGF0UHJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodEJpZ0NvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDcwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jvv+":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/private/home/components/chat-area/chat-area.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ChatAreaComponent */

    /***/
    function jvv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function () {
        return ChatAreaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/chat/chat.service */
      "WnqB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../chat-message/chat-message.component */
      "vNkp");

      function ChatAreaComponent_app_chat_message_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-message", 23);
        }

        if (rf & 2) {
          var msg_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", msg_r1.content)("time", msg_r1.time)("isMe", msg_r1.isMe)("isRead", msg_r1.isRead);
        }
      }

      var ChatAreaComponent = /*#__PURE__*/function () {
        function ChatAreaComponent(chatService) {
          _classCallCheck(this, ChatAreaComponent);

          this.chatService = chatService;
          this.title = "";
          this.icon = "";
          this.msgs = [];
        }

        _createClass(ChatAreaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            var msg = {
              content: this.msg,
              isMe: true,
              time: "8:58",
              isRead: false,
              owner: this.title
            };
            this.chatService.sendMsg(msg);
            this.msg = "";
          }
        }]);

        return ChatAreaComponent;
      }();

      ChatAreaComponent.ɵfac = function ChatAreaComponent_Factory(t) {
        return new (t || ChatAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]));
      };

      ChatAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatAreaComponent,
        selectors: [["app-chat-area"]],
        inputs: {
          title: "title",
          icon: "icon",
          msgs: "msgs"
        },
        decls: 27,
        vars: 4,
        consts: [[1, "topBarRight"], [1, "tbRightContainer"], [1, "profilePicContainer"], ["alt", "", "srcset", "", 1, "profilePic", 3, "src"], [1, "namePersonChat"], [1, "rightRightIcons"], [1, "searchIconRight"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "#919191", "d", "M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"], [1, "rightMore"], ["fill", "#919191", "d", "M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"], [1, "chat"], [3, "content", "time", "isMe", "isRead", 4, "ngFor", "ngForOf"], [1, "sendMessageForm"], [1, "leftMessageFormIcons"], [1, "smileyContainer"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "26", "height", "26"], ["fill", "#919191", "d", "M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"], [1, "clipContainer"], ["fill", "#919191", "d", "M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"], ["type", "text", "placeholder", "Type a message", 1, "typeMessageForm", 3, "ngModel", "keyup.enter", "ngModelChange"], [1, "microphoneContainer"], ["fill", "#919191", "d", "M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"], [3, "content", "time", "isMe", "isRead"]],
        template: function ChatAreaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatAreaComponent_app_chat_message_14_Template, 1, 4, "app-chat-message", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ChatAreaComponent_Template_input_keyup_enter_23_listener() {
              return ctx.sendMsg();
            })("ngModelChange", function ChatAreaComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.msg = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.msgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__["ChatMessageComponent"]],
        styles: [".topBarRight[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  background: #EDEDED;\n  border-left: 1px solid #DADADA;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 59px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .profilePicContainer[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 40px;\n  padding: 0 15px 0 0;\n  display: flex;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .profilePicContainer[_ngcontent-%COMP%]   .profilePic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .namePersonChat[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  font-family: sfProTextMedium;\n  flex-grow: 1;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .searchIconRight[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .searchIconRight[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .rightMore[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  cursor: pointer;\n}\n.topBarRight[_ngcontent-%COMP%]   .tbRightContainer[_ngcontent-%COMP%]   .rightRightIcons[_ngcontent-%COMP%]   .rightMore[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.chat[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 133px);\n  background: #E5DDD5;\n  padding-top: 20px;\n}\n.chat[_ngcontent-%COMP%]   .chatDateContainer[_ngcontent-%COMP%] {\n  height: 32px;\n  margin: 12px 0;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n  justify-content: center;\n}\n.chat[_ngcontent-%COMP%]   .chatDateContainer[_ngcontent-%COMP%]   .chatDate[_ngcontent-%COMP%] {\n  height: 32px;\n  display: flex;\n  align-items: center;\n  font-size: 12.5px;\n  font-family: sfProTextMedium;\n  background: #E2F3FB;\n  border-radius: 7.5px;\n  padding: 5px 12px 6px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n}\n.sendMessageForm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 62px;\n  padding: 5px 10px;\n  background: #F0F0F0;\n  border-left: 1px solid #DADADA;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 52px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .smileyContainer[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .clipContainer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8px;\n  cursor: pointer;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .leftMessageFormIcons[_ngcontent-%COMP%]   .clipContainer[_ngcontent-%COMP%]:active {\n  background: #D5D5D5;\n  border-radius: 50%;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .typeMessageForm[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  height: 42px;\n  margin: 5px 10px;\n  padding: 9px 12px 11px;\n  border-radius: 21px;\n  background: white;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .typeMessageForm[_ngcontent-%COMP%]   .messageFormText[_ngcontent-%COMP%] {\n  height: 20px;\n  font-size: 14.2px;\n  font-family: sfProTextRegular;\n  color: #919191;\n  cursor: text;\n}\n.sendMessageForm[_ngcontent-%COMP%]   .microphoneContainer[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1hcmVhL2NoYXQtYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQWpDQTtFQWtDQSxZQUFBO0VBQ0EsZUFBQTtBQUFaO0FBRVE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVwQjtBQUNZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNoQjtBQUFnQjtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFcEI7QUFJQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQW5GQTtFQW9GQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQUNaO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDWjtBQUFZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVoQjtBQUVJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFySUQ7RUFzSUMsY0FBQTtFQUNBLFlBQUE7QUFDWjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1hcmVhL2NoYXQtYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib2R5Rm9udDogc2ZQcm9UZXh0UmVndWxhcjtcclxuJHRpdGxlRm9udDogc2ZQcm9UZXh0TWVkaXVtO1xyXG5cclxuLnRvcEJhclJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VERURFRDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0RBREFEQTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudGJSaWdodENvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5wcm9maWxlUGljQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnByb2ZpbGVQaWMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWVQZXJzb25DaGF0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0UmlnaHRJY29ucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5zZWFyY2hJY29uUmlnaHQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0TW9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY2hhdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTMzcHgpO1xyXG4gICAgYmFja2dyb3VuZDogI0U1RERENTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLmNoYXREYXRlQ29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5jaGF0RGF0ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTJGM0ZCO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEycHggNnB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5zZW5kTWVzc2FnZUZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMEYwRjA7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQURBREE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5sZWZ0TWVzc2FnZUZvcm1JY29ucyB7XHJcbiAgICAgICAgd2lkdGg6IDk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuc21pbGV5Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsaXBDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50eXBlTWVzc2FnZUZvcm0ge1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAxMnB4IDExcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAubWVzc2FnZUZvcm1UZXh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRib2R5Rm9udDtcclxuICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWljcm9waG9uZUNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatAreaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-area',
            templateUrl: './chat-area.component.html',
            styleUrls: ['./chat-area.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          msgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vNkp":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/private/home/components/chat-message/chat-message.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ChatMessageComponent */

    /***/
    function vNkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function () {
        return ChatMessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ChatMessageComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.time);
        }
      }

      function ChatMessageComponent__svg_svg_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx_r1.isRead ? "#50C2F7" : "#ABABAB");
        }
      }

      var ChatMessageComponent = /*#__PURE__*/function () {
        function ChatMessageComponent() {
          _classCallCheck(this, ChatMessageComponent);
        }

        _createClass(ChatMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatMessageComponent;
      }();

      ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) {
        return new (t || ChatMessageComponent)();
      };

      ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatMessageComponent,
        selectors: [["app-chat-message"]],
        inputs: {
          content: "content",
          time: "time",
          isMe: "isMe",
          isRead: "isRead"
        },
        decls: 6,
        vars: 7,
        consts: [[1, "messageTimeContainer"], ["class", "messageTimeChat", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 15", "width", "16", "height", "15", 4, "ngIf"], [1, "messageTimeChat"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 16 15", "width", "16", "height", "15"], ["d", "M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"]],
        template: function ChatMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMessageComponent_div_4_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMessageComponent__svg_svg_5_Template, 2, 1, "svg", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isMe ? "messageRightContainer" : "messageLeftContainer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isMe ? "messageTextRight" : "messageTextLeft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMe);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMe);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".messageRightContainer[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2px;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n  justify-content: flex-end;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTextRight1[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: #DBF8C6;\n  border-radius: 7.5px 0 7.5px 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTimeContainer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 15px;\n  margin-bottom: 1px;\n  padding-right: 12px;\n  display: flex;\n  align-self: flex-end;\n  left: -45px;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTimeContainer[_ngcontent-%COMP%]   .messageTimeChat[_ngcontent-%COMP%] {\n  margin-right: 2px;\n  font-size: 11px;\n  color: #9AAE8C;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .rightTail[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 83px;\n}\n.messageRightContainer[_ngcontent-%COMP%]   .messageTextRight[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: #DBF8C6;\n  border-radius: 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageLeftContainer[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 2px;\n  padding-left: 9%;\n  padding-right: 9%;\n  display: flex;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTextLeft1[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: white;\n  border-radius: 0 7.5px 7.5px 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTimeChat[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-self: flex-end;\n  font-size: 11px;\n  color: #C1C1C1;\n  left: 54.5%;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .leftTail[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 515px;\n}\n.messageLeftContainer[_ngcontent-%COMP%]   .messageTextLeft[_ngcontent-%COMP%] {\n  max-width: 65%;\n  display: flex;\n  align-items: center;\n  font-size: 14.2px;\n  font-family: sfProTextMedium;\n  background: white;\n  border-radius: 7.5px;\n  padding: 6px 7px 8px 9px;\n  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n  flex-grow: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZS9ob21lL2NvbXBvbmVudHMvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBRko7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQWRJO0VBZUosbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FBRFI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBWjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFHSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQTVDSTtFQTZDSixtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFEUjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQS9ESTtFQWdFSixpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQXZGSTtFQXdGSixpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvaG9tZS9jb21wb25lbnRzL2NoYXQtbWVzc2FnZS9jaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9keUZvbnQ6IHNmUHJvVGV4dFJlZ3VsYXI7XHJcbiR0aXRsZUZvbnQ6IHNmUHJvVGV4dE1lZGl1bTtcclxuXHJcbi5tZXNzYWdlUmlnaHRDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDklO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAubWVzc2FnZVRleHRSaWdodDEge1xyXG4gICAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjREJGOEM2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4IDAgNy41cHggNy41cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDdweCA4cHggOXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6MCAxcHggLjVweCByZ2JhKGJsYWNrLC4xMyk7XHJcbiAgICAgICAgZmxleC1ncm93OiAuMTtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlVGltZUNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIGxlZnQ6IC00NXB4O1xyXG4gICAgICAgIC5tZXNzYWdlVGltZUNoYXR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOUFBRThDO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodFRhaWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogODNweDtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlVGV4dFJpZ2h0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNC4ycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR0aXRsZUZvbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0RCRjhDNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3LjVweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggN3B4IDhweCA5cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzowIDFweCAuNXB4IHJnYmEoYmxhY2ssLjEzKTtcclxuICAgICAgICBmbGV4LWdyb3c6IC4xO1xyXG4gICAgfVxyXG59XHJcbi5tZXNzYWdlTGVmdENvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDklO1xyXG4gICAgcGFkZGluZy1yaWdodDogOSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLm1lc3NhZ2VUZXh0TGVmdDEge1xyXG4gICAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE0LjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJHRpdGxlRm9udDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDcuNXB4IDcuNXB4IDcuNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHggOHB4IDlweDtcclxuICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogLjE7XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZVRpbWVDaGF0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogI0MxQzFDMTtcclxuICAgICAgICBsZWZ0OiA1NC41JTtcclxuICAgIH1cclxuICAgIC5sZWZ0VGFpbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VUZXh0TGVmdCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQuMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdGl0bGVGb250O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA3cHggOHB4IDlweDtcclxuICAgICAgICBib3gtc2hhZG93OjAgMXB4IC41cHggcmdiYShibGFjaywuMTMpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogLjE7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-chat-message',
            templateUrl: './chat-message.component.html',
            styleUrls: ['./chat-message.component.scss']
          }]
        }], function () {
          return [];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isMe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isRead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/private/home/home.component */
      "dsDk");
      /* harmony import */


      var _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/private/home/home.module */
      "Dw5M");
      /* harmony import */


      var _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/public/login/login.component */
      "QuX9");
      /* harmony import */


      var _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/public/register/register.component */
      "MyXD");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");

      var routes = [{
        path: '',
        component: _pages_private_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'login',
        component: _pages_public_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        component: _pages_public_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_private_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map