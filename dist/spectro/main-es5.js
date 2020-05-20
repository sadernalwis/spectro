function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _current_status_current_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./current-status/current-status-component */
    "./src/app/current-status/current-status-component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _info_center_info_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-center/info-center.component */
    "./src/app/info-center/info-center.component.ts");
    /* harmony import */


    var _global_news_component_global_news_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./global-news-component/global-news-component.component */
    "./src/app/global-news-component/global-news-component.component.ts");
    /* harmony import */


    var _district_cases_district_cases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./district-cases/district-cases.component */
    "./src/app/district-cases/district-cases.component.ts");
    /* harmony import */


    var _chart_new_cases_chart_new_cases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chart-new-cases/chart-new-cases.component */
    "./src/app/chart-new-cases/chart-new-cases.component.ts");
    /* harmony import */


    var _chart_total_active_chart_total_active_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chart-total-active/chart-total-active.component */
    "./src/app/chart-total-active/chart-total-active.component.ts");
    /* harmony import */


    var _chart_daily_recovery_chart_daily_recovery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chart-daily-recovery/chart-daily-recovery.component */
    "./src/app/chart-daily-recovery/chart-daily-recovery.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cd, socketService) {
        _classCallCheck(this, AppComponent);

        this.cd = cd;
        this.socketService = socketService; //  Initiating socket conncetion

        socketService.createSocket();
      }

      _createClass(AppComponent, [{
        key: "changeSelectedDistrict",
        value: function changeSelectedDistrict($event) {
          this.selectedDistrict = $event; // need this because google maps seems to mess with updates

          this.cd.detectChanges();
        }
      }, {
        key: "updateHospitals",
        value: function updateHospitals($hospitals) {
          this.selectedHospitals = $hospitals;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 23,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-6", "position-relative"], [3, "hospitals", "selectedDistrict"], [1, "col-lg-6"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-current-status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-map", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedDistrict", function AppComponent_Template_app_map_selectedDistrict_6_listener($event) {
            return ctx.changeSelectedDistrict($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-info-center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-global-news-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-district-cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-chart-new-cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-chart-total-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-chart-daily-recovery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hospitals", ctx.selectedHospitals);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _current_status_current_status_component__WEBPACK_IMPORTED_MODULE_3__["CurrentStatusComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _info_center_info_center_component__WEBPACK_IMPORTED_MODULE_5__["InfoCenterComponent"], _global_news_component_global_news_component_component__WEBPACK_IMPORTED_MODULE_6__["GlobalNewsComponentComponent"], _district_cases_district_cases_component__WEBPACK_IMPORTED_MODULE_7__["DistrictCasesComponent"], _chart_new_cases_chart_new_cases_component__WEBPACK_IMPORTED_MODULE_8__["ChartNewCasesComponent"], _chart_total_active_chart_total_active_component__WEBPACK_IMPORTED_MODULE_9__["ChartTotalActiveComponent"], _chart_daily_recovery_chart_daily_recovery_component__WEBPACK_IMPORTED_MODULE_10__["ChartDailyRecoveryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          // tslint:disable-next-line: indent
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material-design/material-design.module */
    "./src/app/material-design/material-design.module.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _current_status_current_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./current-status/current-status-component */
    "./src/app/current-status/current-status-component.ts");
    /* harmony import */


    var _lanka_daily_lanka_daily_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lanka-daily/lanka-daily.component */
    "./src/app/lanka-daily/lanka-daily.component.ts");
    /* harmony import */


    var _district_details_district_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./district-details/district-details.component */
    "./src/app/district-details/district-details.component.ts");
    /* harmony import */


    var _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./hospitals/hospitals.component */
    "./src/app/hospitals/hospitals.component.ts");
    /* harmony import */


    var _stack_component_stack_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./stack-component/stack-component.component */
    "./src/app/stack-component/stack-component.component.ts");
    /* harmony import */


    var _twitter_component_twitter_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./twitter-component/twitter-component.component */
    "./src/app/twitter-component/twitter-component.component.ts");
    /* harmony import */


    var _news_component_news_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./news-component/news-component.component */
    "./src/app/news-component/news-component.component.ts");
    /* harmony import */


    var _institutions_component_institutions_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./institutions-component/institutions-component.component */
    "./src/app/institutions-component/institutions-component.component.ts");
    /* harmony import */


    var _global_news_component_global_news_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./global-news-component/global-news-component.component */
    "./src/app/global-news-component/global-news-component.component.ts");
    /* harmony import */


    var _chart_daily_recovery_chart_daily_recovery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./chart-daily-recovery/chart-daily-recovery.component */
    "./src/app/chart-daily-recovery/chart-daily-recovery.component.ts");
    /* harmony import */


    var _chart_total_active_chart_total_active_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./chart-total-active/chart-total-active.component */
    "./src/app/chart-total-active/chart-total-active.component.ts");
    /* harmony import */


    var _chart_new_cases_chart_new_cases_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./chart-new-cases/chart-new-cases.component */
    "./src/app/chart-new-cases/chart-new-cases.component.ts");
    /* harmony import */


    var _chart_total_cases_chart_total_cases_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./chart-total-cases/chart-total-cases.component */
    "./src/app/chart-total-cases/chart-total-cases.component.ts");
    /* harmony import */


    var _district_cases_district_cases_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./district-cases/district-cases.component */
    "./src/app/district-cases/district-cases.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _info_center_info_center_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./info-center/info-center.component */
    "./src/app/info-center/info-center.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], _current_status_current_status_component__WEBPACK_IMPORTED_MODULE_9__["CurrentStatusComponent"], _lanka_daily_lanka_daily_component__WEBPACK_IMPORTED_MODULE_10__["LankaDailyComponent"], _district_details_district_details_component__WEBPACK_IMPORTED_MODULE_11__["DistrictDetailsComponent"], _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_12__["HospitalsComponent"], _stack_component_stack_component_component__WEBPACK_IMPORTED_MODULE_13__["StackComponentComponent"], _twitter_component_twitter_component_component__WEBPACK_IMPORTED_MODULE_14__["TwitterComponentComponent"], _news_component_news_component_component__WEBPACK_IMPORTED_MODULE_15__["NewsComponentComponent"], _institutions_component_institutions_component_component__WEBPACK_IMPORTED_MODULE_16__["InstitutionsComponentComponent"], _global_news_component_global_news_component_component__WEBPACK_IMPORTED_MODULE_17__["GlobalNewsComponentComponent"], _chart_daily_recovery_chart_daily_recovery_component__WEBPACK_IMPORTED_MODULE_18__["ChartDailyRecoveryComponent"], _chart_total_active_chart_total_active_component__WEBPACK_IMPORTED_MODULE_19__["ChartTotalActiveComponent"], _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _chart_new_cases_chart_new_cases_component__WEBPACK_IMPORTED_MODULE_20__["ChartNewCasesComponent"], _chart_total_cases_chart_total_cases_component__WEBPACK_IMPORTED_MODULE_21__["ChartTotalCasesComponent"], _district_cases_district_cases_component__WEBPACK_IMPORTED_MODULE_22__["DistrictCasesComponent"], _info_center_info_center_component__WEBPACK_IMPORTED_MODULE_24__["InfoCenterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], _current_status_current_status_component__WEBPACK_IMPORTED_MODULE_9__["CurrentStatusComponent"], _lanka_daily_lanka_daily_component__WEBPACK_IMPORTED_MODULE_10__["LankaDailyComponent"], _district_details_district_details_component__WEBPACK_IMPORTED_MODULE_11__["DistrictDetailsComponent"], _hospitals_hospitals_component__WEBPACK_IMPORTED_MODULE_12__["HospitalsComponent"], _stack_component_stack_component_component__WEBPACK_IMPORTED_MODULE_13__["StackComponentComponent"], _twitter_component_twitter_component_component__WEBPACK_IMPORTED_MODULE_14__["TwitterComponentComponent"], _news_component_news_component_component__WEBPACK_IMPORTED_MODULE_15__["NewsComponentComponent"], _institutions_component_institutions_component_component__WEBPACK_IMPORTED_MODULE_16__["InstitutionsComponentComponent"], _global_news_component_global_news_component_component__WEBPACK_IMPORTED_MODULE_17__["GlobalNewsComponentComponent"], _chart_daily_recovery_chart_daily_recovery_component__WEBPACK_IMPORTED_MODULE_18__["ChartDailyRecoveryComponent"], _chart_total_active_chart_total_active_component__WEBPACK_IMPORTED_MODULE_19__["ChartTotalActiveComponent"], _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _chart_new_cases_chart_new_cases_component__WEBPACK_IMPORTED_MODULE_20__["ChartNewCasesComponent"], _chart_total_cases_chart_total_cases_component__WEBPACK_IMPORTED_MODULE_21__["ChartTotalCasesComponent"], _district_cases_district_cases_component__WEBPACK_IMPORTED_MODULE_22__["DistrictCasesComponent"], _info_center_info_center_component__WEBPACK_IMPORTED_MODULE_24__["InfoCenterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_3__["MaterialDesignModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chart-daily-recovery/chart-daily-recovery.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/chart-daily-recovery/chart-daily-recovery.component.ts ***!
    \************************************************************************/

  /*! exports provided: ChartDailyRecoveryComponent */

  /***/
  function srcAppChartDailyRecoveryChartDailyRecoveryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDailyRecoveryComponent", function () {
      return ChartDailyRecoveryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var _c0 = ["chart"];

    var ChartDailyRecoveryComponent = /*#__PURE__*/function () {
      function ChartDailyRecoveryComponent(dataService) {
        _classCallCheck(this, ChartDailyRecoveryComponent);

        this.dataService = dataService;
        this.daily_recovery = [];
        this.daily_new_recovery = [];
        this.date_list = [];
        this.getNewCases();
      }

      _createClass(ChartDailyRecoveryComponent, [{
        key: "getNewCases",
        value: function getNewCases() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.dataService.getCSVdaily().toPromise();

                  case 2:
                    this.daily_updates = _context.sent;
                    this.date_list = this.daily_updates.split(/\r\n|\n/)[0].split(',');
                    this.daily_recovery = this.daily_updates.split(/\r\n|\n/)[3].split(',');
                    this.date_list = this.date_list.reverse().slice(0, 20);
                    this.date_list.reverse();
                    this.daily_recovery = this.daily_recovery.reverse().slice(0, 21);
                    this.daily_recovery.reverse();
                    this.daily_recovery.forEach(function (v, i) {
                      if (i < 20) {
                        _this.daily_new_recovery.push(_this.daily_recovery[i + 1] - v);
                      }
                    });
                    this.chartOptions = {
                      series: [{
                        name: 'Daily Recovery',
                        data: this.daily_new_recovery
                      }],
                      plotOptions: {
                        bar: {
                          dataLabels: {
                            position: 'top' // top, center, bottom

                          }
                        }
                      },
                      colors: ['#47AC47'],
                      dataLabels: {
                        offsetY: -20,
                        style: {
                          fontSize: "11px",
                          colors: ["#304758"]
                        }
                      },
                      chart: {
                        height: 350,
                        type: 'bar',
                        toolbar: {
                          show: false
                        }
                      },
                      xaxis: {
                        type: 'datetime',
                        categories: this.date_list,
                        position: 'bottom'
                      },
                      title: {
                        text: ''
                      },
                      fill: {
                        type: 'solid',
                        colors: ['#47AC47']
                      },
                      yaxis: {
                        min: 0,
                        max: 70,
                        title: {
                          text: ''
                        }
                      }
                    };

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartDailyRecoveryComponent;
    }();

    ChartDailyRecoveryComponent.ɵfac = function ChartDailyRecoveryComponent_Factory(t) {
      return new (t || ChartDailyRecoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ChartDailyRecoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartDailyRecoveryComponent,
      selectors: [["app-chart-daily-recovery"]],
      viewQuery: function ChartDailyRecoveryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 6,
      vars: 11,
      consts: [[1, "card", "daily-recovery-card"], [1, "card-title"], [1, "card-body"], [3, "series", "chart", "xaxis", "dataLabels", "title", "markers", "yaxis", "fill", "colors", "plotOptions"], ["chart", ""]],
      template: function ChartDailyRecoveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Daily Recovery ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "apx-chart", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("title", ctx.chartOptions.title)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis)("fill", ctx.chartOptions.fill)("colors", ctx.chartOptions.colors)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartDailyRecoveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chart-daily-recovery',
          templateUrl: './chart-daily-recovery.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chart-new-cases/chart-new-cases.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/chart-new-cases/chart-new-cases.component.ts ***!
    \**************************************************************/

  /*! exports provided: ChartNewCasesComponent */

  /***/
  function srcAppChartNewCasesChartNewCasesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartNewCasesComponent", function () {
      return ChartNewCasesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var _c0 = ["chart"];

    var ChartNewCasesComponent = /*#__PURE__*/function () {
      function ChartNewCasesComponent(dataService) {
        _classCallCheck(this, ChartNewCasesComponent);

        this.dataService = dataService;
        this.daily_cases = [];
        this.daily_new_cases = [];
        this.date_list = [];
        this.getNewCases();
      }

      _createClass(ChartNewCasesComponent, [{
        key: "getNewCases",
        value: function getNewCases() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.dataService.getCSVdaily().toPromise();

                  case 2:
                    this.daily_updates = _context2.sent;
                    this.date_list = this.daily_updates.split(/\r\n|\n/)[0].split(',');
                    this.daily_cases = this.daily_updates.split(/\r\n|\n/)[1].split(',');
                    this.date_list = this.date_list.reverse().slice(0, 20);
                    this.date_list.reverse();
                    this.daily_cases = this.daily_cases.reverse().slice(0, 21);
                    this.daily_cases.reverse();
                    this.daily_cases.forEach(function (v, i) {
                      if (i < 20) {
                        _this2.daily_new_cases.push(_this2.daily_cases[i + 1] - v);
                      }
                    });
                    this.chartOptions = {
                      series: [{
                        name: 'Daily new cases',
                        data: this.daily_new_cases
                      }],
                      plotOptions: {
                        bar: {
                          dataLabels: {
                            position: 'top' // top, center, bottom

                          }
                        }
                      },
                      colors: ['#1478E9'],
                      dataLabels: {
                        offsetY: -20,
                        style: {
                          fontSize: '12px',
                          colors: ['#304758']
                        }
                      },
                      chart: {
                        height: 350,
                        type: 'bar',
                        toolbar: {
                          show: false
                        }
                      },
                      xaxis: {
                        type: 'datetime',
                        categories: this.date_list,
                        position: 'bottom'
                      },
                      title: {
                        text: ''
                      },
                      fill: {
                        type: 'solid',
                        colors: ['#1478E9']
                      },
                      yaxis: {
                        min: 0,
                        max: 70,
                        title: {
                          text: ''
                        }
                      }
                    };

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartNewCasesComponent;
    }();

    ChartNewCasesComponent.ɵfac = function ChartNewCasesComponent_Factory(t) {
      return new (t || ChartNewCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ChartNewCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartNewCasesComponent,
      selectors: [["app-chart-new-cases"]],
      viewQuery: function ChartNewCasesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 6,
      vars: 11,
      consts: [[1, "card", "daily-active-card"], [1, "card-title"], [1, "card-body"], [3, "series", "chart", "xaxis", "dataLabels", "title", "markers", "yaxis", "fill", "colors", "plotOptions"], ["chart", ""]],
      template: function ChartNewCasesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Daily Active Cases ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "apx-chart", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("title", ctx.chartOptions.title)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis)("fill", ctx.chartOptions.fill)("colors", ctx.chartOptions.colors)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartNewCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chart-new-cases',
          templateUrl: './chart-new-cases.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chart-total-active/chart-total-active.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/chart-total-active/chart-total-active.component.ts ***!
    \********************************************************************/

  /*! exports provided: ChartTotalActiveComponent */

  /***/
  function srcAppChartTotalActiveChartTotalActiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartTotalActiveComponent", function () {
      return ChartTotalActiveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var _c0 = ["chart"];

    var ChartTotalActiveComponent = /*#__PURE__*/function () {
      function ChartTotalActiveComponent(dataService) {
        _classCallCheck(this, ChartTotalActiveComponent);

        this.dataService = dataService;
        this.daily_active = [];
        this.getDailyUpdates();
      }

      _createClass(ChartTotalActiveComponent, [{
        key: "getDailyUpdates",
        value: function getDailyUpdates() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.dataService.getCSVdaily().toPromise();

                  case 2:
                    this.daily_updates = _context3.sent;
                    this.date_list = this.daily_updates.split(/\r\n|\n/)[0].split(',');
                    this.daily_cases = this.daily_updates.split(/\r\n|\n/)[1].split(',');
                    this.daily_death = this.daily_updates.split(/\r\n|\n/)[2].split(',');
                    this.daily_recovery = this.daily_updates.split(/\r\n|\n/)[3].split(',');
                    this.daily_cases.forEach(function (v, i) {
                      _this3.d = v - _this3.daily_recovery[i];

                      _this3.daily_active.push(_this3.d);
                    });
                    this.chartOptions = {
                      series: [{
                        name: 'Total Cases',
                        data: this.daily_cases
                      }, {
                        name: 'Active Cases',
                        data: this.daily_active
                      }, {
                        name: 'Recovered',
                        data: this.daily_recovery
                      }, {
                        name: 'Deaths',
                        data: this.daily_death
                      }],
                      colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000'],
                      chart: {
                        height: 350,
                        width: '100%',
                        type: 'line',
                        toolbar: {
                          show: false
                        }
                      },
                      stroke: {
                        width: 5,
                        curve: 'smooth'
                      },
                      xaxis: {
                        type: 'datetime',
                        categories: this.date_list
                      },
                      title: {
                        text: ''
                      },
                      fill: {
                        type: 'solid',
                        colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000']
                      },
                      markers: {
                        size: 0,
                        colors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000'],
                        hover: {
                          size: 10
                        }
                      },
                      legend: {
                        position: 'top',
                        markers: {
                          fillColors: ['#FA585B', '#FFAA0E', '#47AC47', '#000000']
                        }
                      },
                      tooltip: {},
                      yaxis: {
                        min: 0,
                        max: 1000,
                        title: {
                          text: ''
                        }
                      }
                    };

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartTotalActiveComponent;
    }();

    ChartTotalActiveComponent.ɵfac = function ChartTotalActiveComponent_Factory(t) {
      return new (t || ChartTotalActiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ChartTotalActiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartTotalActiveComponent,
      selectors: [["app-chart-total-active"]],
      viewQuery: function ChartTotalActiveComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 6,
      vars: 11,
      consts: [[1, "card", "chart-total-active"], [1, "card-title"], [1, "card-body"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "title", "markers", "yaxis", "fill", "legend", "colors"], ["chart", ""]],
      template: function ChartTotalActiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Total vs Active Cases (SL) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "apx-chart", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("title", ctx.chartOptions.title)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis)("fill", ctx.chartOptions.fill)("legend", ctx.chartOptions.legend)("colors", ctx.chartOptions.colors);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartTotalActiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chart-total-active',
          templateUrl: './chart-total-active.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chart-total-cases/chart-total-cases.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/chart-total-cases/chart-total-cases.component.ts ***!
    \******************************************************************/

  /*! exports provided: ChartTotalCasesComponent */

  /***/
  function srcAppChartTotalCasesChartTotalCasesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartTotalCasesComponent", function () {
      return ChartTotalCasesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var _c0 = ["chart"];

    var ChartTotalCasesComponent = /*#__PURE__*/function () {
      function ChartTotalCasesComponent(dataService) {
        _classCallCheck(this, ChartTotalCasesComponent);

        this.dataService = dataService;
        this.dataSeries = [];
        this.drawDonutChart();
      }

      _createClass(ChartTotalCasesComponent, [{
        key: "drawDonutChart",
        value: function drawDonutChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.dataService.getHPBdata().toPromise();

                  case 2:
                    this.dailyStats = _context4.sent;
                    this.dataSeries.push(this.dailyStats.data.local_active_cases);
                    this.dataSeries.push(this.dailyStats.data.local_recovered);
                    this.dataSeries.push(this.dailyStats.data.local_deaths);
                    this.options = {
                      series: this.dataSeries,
                      labels: ['Active Cases', 'Recovered', 'Deaths'],
                      colors: ['#FFAA0E', '#47AC47', '#DA2820'],
                      dataLabels: {
                        formatter: function formatter(val, opts) {
                          return opts.w.config.series[opts.seriesIndex];
                        }
                      },
                      fill: {
                        colors: ['#FFAA0E', '#47AC47', '#DA2820']
                      },
                      legend: {
                        position: 'bottom',
                        markers: {
                          colors: ['#FFAA0E', '#47AC47', '#DA2820']
                        },
                        formatter: function formatter(seriesName, opts) {
                          return [seriesName, ' - ', opts.w.globals.series[opts.seriesIndex]];
                        }
                      },
                      chart: {
                        height: 320,
                        width: '100%',
                        type: 'donut'
                      }
                    };

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartTotalCasesComponent;
    }();

    ChartTotalCasesComponent.ɵfac = function ChartTotalCasesComponent_Factory(t) {
      return new (t || ChartTotalCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ChartTotalCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartTotalCasesComponent,
      selectors: [["app-chart-total-cases"]],
      viewQuery: function ChartTotalCasesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 2,
      vars: 7,
      consts: [[3, "chart", "series", "labels", "dataLabels", "fill", "colors", "legend"], ["chart", ""]],
      template: function ChartTotalCasesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "apx-chart", 0, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chart", ctx.options.chart)("series", ctx.options.series)("labels", ctx.options.labels)("dataLabels", ctx.options.dataLabels)("fill", ctx.options.fill)("colors", ctx.options.colors)("legend", ctx.options.legend);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartTotalCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chart-total-cases',
          templateUrl: './chart-total-cases.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/current-status/current-status-component.ts":
  /*!************************************************************!*\
    !*** ./src/app/current-status/current-status-component.ts ***!
    \************************************************************/

  /*! exports provided: CurrentStatusComponent */

  /***/
  function srcAppCurrentStatusCurrentStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentStatusComponent", function () {
      return CurrentStatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _chart_total_cases_chart_total_cases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../chart-total-cases/chart-total-cases.component */
    "./src/app/chart-total-cases/chart-total-cases.component.ts");

    var CurrentStatusComponent = /*#__PURE__*/function () {
      function CurrentStatusComponent(dataService) {
        _classCallCheck(this, CurrentStatusComponent);

        this.dataService = dataService;
        this.growth_rate = 0;
        this.total_pcr_tested = 42056;
        this.recovery_rate = 54.1;
        this.fatality_rate = 0.94;
      }

      _createClass(CurrentStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHPBresponse();
        }
      }, {
        key: "addZero",
        value: function addZero(string) {
          var n = Math.floor(string);

          if (n >= 10 && n > 0) {
            return n;
          } else if (n === 0) {
            return n;
          } else {
            return '0' + n;
          }
        }
      }, {
        key: "getHPBresponse",
        value: function getHPBresponse() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.dataService.getHPBdata().toPromise();

                  case 2:
                    this.hpbResponse = _context5.sent;
                    _context5.next = 5;
                    return this.dataService.getCSVdaily().toPromise();

                  case 5:
                    this.daily_updates = _context5.sent;
                    this.local_total_cases = this.hpbResponse.data.local_total_cases;
                    this.total_deaths = this.addZero(this.hpbResponse.data.local_deaths);
                    this.total_recovered = this.addZero(this.hpbResponse.data.local_recovered);
                    this.new_cases = this.addZero(this.hpbResponse.data.local_new_cases);
                    this.new_deaths = this.addZero(this.hpbResponse.data.local_new_deaths);
                    this.hospitalized = this.hpbResponse.data.local_total_number_of_individuals_in_hospitals;
                    this.growth_rate = (this.local_total_cases / this.hpbResponse.data.total_pcr_testing_count * 100).toFixed(2);
                    this.daily_updates = this.daily_updates.split(/\r\n|\n/)[3].split(',').reverse();
                    this.new_recovery = Math.floor(this.total_recovered) - Math.floor(this.daily_updates[0]);
                    this.total_pcr_tested = this.hpbResponse.data.total_pcr_testing_count;
                    this.recovery_rate = (this.total_recovered / this.local_total_cases * 100).toFixed(2);
                    this.fatality_rate = (this.total_deaths / this.local_total_cases * 100).toFixed(2);

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return CurrentStatusComponent;
    }();

    CurrentStatusComponent.ɵfac = function CurrentStatusComponent_Factory(t) {
      return new (t || CurrentStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    CurrentStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CurrentStatusComponent,
      selectors: [["app-current-status"]],
      decls: 82,
      vars: 11,
      consts: [[1, "card", "data-current-card"], [1, "card-title"], [1, "card-body"], [1, "card-content"], [1, "card-sub-title"], [1, "data-current"], [1, "data-card", "data-confirmed"], [1, "text-count"], [1, "data-card", "data-recovered"], [1, "data-card", "data-deaths"], [1, "data-card", "data-hospitalized"], [1, "text-black"], [1, "data-today"], [1, "data-card", "data-new-cases"], [1, "text-red"], [1, "data-card", "data-new-recovered"], [1, "text-green"], [1, "data-card", "data-new-deaths"], [1, "data-card", "data-growth-rate"], [1, "data-tested"], [1, "data-card", "data-pcr-tested"], [1, "text-blue"], [1, "date-rates"], [1, "data-card", "data-recovery-rate"], [1, "data-card", "data-fatality-rate"]],
      template: function CurrentStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Current Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " SRI LANKA TOTAL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Recovered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Deaths ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Hospitalized ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " TODAY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "New cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Recovered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Deaths ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Growth Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " TOTAL CASES - Breakdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "app-chart-total-cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " PCR TESTING STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Total PCR Tested");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Recovery Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Fatality Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hpbResponse == null ? null : ctx.hpbResponse.data.local_total_cases, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hpbResponse == null ? null : ctx.hpbResponse.data.local_recovered, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.total_deaths ? ctx.total_deaths : 0, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hospitalized ? ctx.hospitalized : 0, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.new_cases ? ctx.new_cases : "0", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.new_recovery ? ctx.new_recovery : "0", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.new_deaths ? ctx.new_deaths : "0", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.growth_rate + "%", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.total_pcr_tested, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.recovery_rate, "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fatality_rate, "% ");
        }
      },
      directives: [_chart_total_cases_chart_total_cases_component__WEBPACK_IMPORTED_MODULE_3__["ChartTotalCasesComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrentStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-current-status',
          templateUrl: './current-status-component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.HPB_API_URL = 'https://www.hpb.health.gov.lk/api/get-current-statistical';
        this.csvDaily = 'https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Daily/covid_lk.csv';
        this.hospitals = '/assets/hospitals.csv';
        this.district_data_url = "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/district-spread.json";
      }

      _createClass(DataService, [{
        key: "getHPBdata",
        value: function getHPBdata() {
          return this.http.get(this.HPB_API_URL);
        }
      }, {
        key: "getCSVdaily",
        value: function getCSVdaily() {
          return this.http.get(this.csvDaily, {
            responseType: 'text'
          });
        }
      }, {
        key: "getHostpitals",
        value: function getHostpitals() {
          return this.http.get(this.hospitals, {
            responseType: 'text'
          });
        }
      }, {
        key: "getNEWS",
        value: function getNEWS(query) {
          var api_key = '3e8e02219bfd46adac9f6b43b06f908f';
          var url = "https://newsapi.org/v2/everything?q=".concat(query, "&apiKey=").concat(api_key);
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }, {
        key: "getDistrictData",
        value: function getDistrictData() {
          return this.http.get(this.district_data_url, {
            responseType: 'json'
          });
        }
      }, {
        key: "getSLNews",
        value: function getSLNews() {
          return this.http.get('https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/covid-news.json');
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/district-cases/district-cases.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/district-cases/district-cases.component.ts ***!
    \************************************************************/

  /*! exports provided: DistrictCasesComponent */

  /***/
  function srcAppDistrictCasesDistrictCasesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistrictCasesComponent", function () {
      return DistrictCasesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");

    var _c0 = ["chart"];

    var DistrictCasesComponent = /*#__PURE__*/function () {
      function DistrictCasesComponent(dataService) {
        _classCallCheck(this, DistrictCasesComponent);

        this.dataService = dataService;
        this.district_names = [];
        this.district_cases = [];
        this.getDistrictData();
      }

      _createClass(DistrictCasesComponent, [{
        key: "getDistrictData",
        value: function getDistrictData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.dataService.getDistrictData().toPromise();

                  case 2:
                    this.districts = _context6.sent;
                    this.districts.sort(function (a, b) {
                      return b.count - a.count;
                    });
                    this.districts.forEach(function (v) {
                      _this4.district_cases.push(v.count);

                      _this4.district_names.push(v.name);
                    });
                    this.chartOptions = {
                      series: [{
                        name: 'District count',
                        data: this.district_cases
                      }],
                      plotOptions: {
                        bar: {
                          dataLabels: {
                            position: 'top' // top, center, bottom

                          }
                        }
                      },
                      colors: ['#FA585B'],
                      dataLabels: {
                        offsetY: -20,
                        style: {
                          fontSize: '12px',
                          colors: ['#304758']
                        }
                      },
                      chart: {
                        height: 350,
                        type: 'bar',
                        toolbar: {
                          show: false
                        }
                      },
                      xaxis: {
                        type: 'District Names',
                        categories: this.district_names,
                        position: 'bottom'
                      },
                      fill: {
                        type: 'solid',
                        colors: ['#FA585B']
                      },
                      yaxis: {
                        min: 0,
                        max: 600,
                        title: {
                          text: ''
                        }
                      }
                    };

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DistrictCasesComponent;
    }();

    DistrictCasesComponent.ɵfac = function DistrictCasesComponent_Factory(t) {
      return new (t || DistrictCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    DistrictCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DistrictCasesComponent,
      selectors: [["app-district-cases"]],
      viewQuery: function DistrictCasesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        }
      },
      decls: 6,
      vars: 9,
      consts: [[1, "card", "district-cases-card"], [1, "card-title"], [1, "card-body"], [3, "series", "chart", "xaxis", "markers", "yaxis", "fill", "colors", "plotOptions", "dataLabels"], ["chart", ""]],
      template: function DistrictCasesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " District-wise COVID-19 cases ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "apx-chart", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("markers", ctx.chartOptions.markers)("yaxis", ctx.chartOptions.yaxis)("fill", ctx.chartOptions.fill)("colors", ctx.chartOptions.colors)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels);
        }
      },
      directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DistrictCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-district-cases',
          templateUrl: './district-cases.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['chart']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/district-details/district-details.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/district-details/district-details.component.ts ***!
    \****************************************************************/

  /*! exports provided: DistrictDetailsComponent */

  /***/
  function srcAppDistrictDetailsDistrictDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistrictDetailsComponent", function () {
      return DistrictDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DistrictDetailsComponent_div_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4, " ");
      }
    }

    function DistrictDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DistrictDetailsComponent_div_1_span_1_Template, 2, 1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.district);
      }
    }

    function DistrictDetailsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose a district ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DistrictDetailsComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DistrictDetailsComponent_li_5_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var institution_r5 = ctx.$implicit;
          return institution_r5.isChecked = $event;
        })("change", function DistrictDetailsComponent_li_5_Template_input_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.changeSelection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "checkbox" + i_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", institution_r5.isChecked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "checkbox" + i_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r5.name, "");
      }
    }

    var DistrictDetailsComponent = /*#__PURE__*/function () {
      function DistrictDetailsComponent() {
        _classCallCheck(this, DistrictDetailsComponent);

        this.institution_categories = ['Fire Brigades', 'Police Stations', 'Hospitals', 'Banks', 'Pharmacies', 'Voting Stations'];
        this.selectedCategories = [];
        this.all_institutions = [];
        this.selectedInstitutions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DistrictDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.all_institutions = this.institution_categories.map(function (category) {
            if (category === 'Hospitals') {
              return {
                name: category,
                isChecked: true
              };
            }

            return {
              name: category,
              isChecked: false
            };
          });
          this.selectedInstitutions.emit(this.institution_categories);
        }
      }, {
        key: "changeSelection",
        value: function changeSelection() {// filter out selected categories and extract names as an array
          // this.selectedCategories = this.hospital_categories
          // 	.filter((category, index) => {
          // 		return category.isChecked
          // 	})
          // 	.map(category => { return category.name });
          // this.emitHospitals();
        }
      }]);

      return DistrictDetailsComponent;
    }();

    DistrictDetailsComponent.ɵfac = function DistrictDetailsComponent_Factory(t) {
      return new (t || DistrictDetailsComponent)();
    };

    DistrictDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DistrictDetailsComponent,
      selectors: [["app-district-details"]],
      inputs: {
        district: "district"
      },
      outputs: {
        selectedInstitutions: "selectedInstitutions"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "card"], ["class", "card-title", 4, "ngIf"], [1, "card-body"], [1, "category-list"], [4, "ngFor", "ngForOf"], [1, "card-title"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change"], [3, "for"]],
      template: function DistrictDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DistrictDetailsComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DistrictDetailsComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DistrictDetailsComponent_li_5_Template, 5, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.district);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.district);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.all_institutions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWN0LWRldGFpbHMvZGlzdHJpY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DistrictDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-district-details',
          templateUrl: './district-details.component.html',
          styleUrls: ['./district-details.component.scss']
        }]
      }], function () {
        return [];
      }, {
        district: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedInstitutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 0,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/global-news-component/global-news-component.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/global-news-component/global-news-component.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GlobalNewsComponentComponent */

  /***/
  function srcAppGlobalNewsComponentGlobalNewsComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalNewsComponentComponent", function () {
      return GlobalNewsComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GlobalNewsComponentComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", article_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 6, article_r1.body, 0, 60), "... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://raw.githubusercontent.com/shandhiviyarajan/covid-19-sl-data/master/logos/", article_r1.author, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    var GlobalNewsComponentComponent = /*#__PURE__*/function () {
      function GlobalNewsComponentComponent(dataService) {
        _classCallCheck(this, GlobalNewsComponentComponent);

        this.dataService = dataService;
        this.news = {
          status: '',
          totalResults: 0,
          articles: [{
            source: [{}],
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: '',
            publishedAt: '',
            content: ''
          }]
        };
        this.sl_news = [];
      }

      _createClass(GlobalNewsComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNews();
        }
      }, {
        key: "getNews",
        value: function getNews() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.dataService.getSLNews().toPromise();

                  case 2:
                    this.sl_news = _context7.sent;
                    console.log(this.sl_news);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return GlobalNewsComponentComponent;
    }();

    GlobalNewsComponentComponent.ɵfac = function GlobalNewsComponentComponent_Factory(t) {
      return new (t || GlobalNewsComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    GlobalNewsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GlobalNewsComponentComponent,
      selectors: [["app-global-news-component"]],
      decls: 6,
      vars: 1,
      consts: [[1, "card", "news-card"], [1, "card-title"], [1, "card-body"], [4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [1, "d-flex"], [1, "news-img"], [3, "src"], [1, "news-body"], [1, "news-info"], [1, "news-date"], [1, "news-author"], ["alt", "", 3, "src"]],
      template: function GlobalNewsComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " COVID-19 News - Sri Lanka ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GlobalNewsComponentComponent_li_5_Template, 16, 10, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sl_news);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalNewsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-global-news-component',
          templateUrl: './global-news-component.component.html'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 0,
      consts: [["src", "/assets/images/covid19.svg", "alt", ""], [1, "sub-logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Coronavirus (COVID-19) Situational Report - Sri Lanka - Spectro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hospitals/hospitals.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/hospitals/hospitals.component.ts ***!
    \**************************************************/

  /*! exports provided: HospitalsComponent */

  /***/
  function srcAppHospitalsHospitalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalsComponent", function () {
      return HospitalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var csvtojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! csvtojson */
    "./node_modules/csvtojson/browser/browser.js");
    /* harmony import */


    var csvtojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HospitalsComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HospitalsComponent_li_5_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var category_r1 = ctx.$implicit;
          return category_r1.isChecked = $event;
        })("change", function HospitalsComponent_li_5_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.changeSelection();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "hospitals" + i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r1.isChecked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", "hospitals" + i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.name);
      }
    }

    var HospitalsComponent = /*#__PURE__*/function () {
      function HospitalsComponent(dataService) {
        _classCallCheck(this, HospitalsComponent);

        this.dataService = dataService;
        this.hospital_categories = [];
        this.selectedCategories = [];
        this.all_hospitals = [];
        this.selectedHospitals = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(HospitalsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHospitalData();
        }
      }, {
        key: "getHospitalData",
        value: function getHospitalData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var csvData, categories;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.dataService.getHostpitals().toPromise();

                  case 2:
                    csvData = _context8.sent;
                    _context8.next = 5;
                    return csvtojson__WEBPACK_IMPORTED_MODULE_2__().fromString(csvData);

                  case 5:
                    this.all_hospitals = _context8.sent;
                    // get unique list of categories
                    categories = Array.from(new Set(this.all_hospitals.map(function (h) {
                      return h.hospital_category;
                    }))).sort(); // create array containing objects to bind to checkboxes

                    this.hospital_categories = categories.map(function (category) {
                      return {
                        name: category,
                        isChecked: false
                      };
                    });

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "changeSelection",
        value: function changeSelection() {
          // filter out selected categories and extract names as an array
          this.selectedCategories = this.hospital_categories.filter(function (category, index) {
            return category.isChecked;
          }).map(function (category) {
            return category.name;
          });
          this.emitHospitals();
        }
      }, {
        key: "emitHospitals",
        value: function emitHospitals() {
          var _this5 = this;

          var hospitals = this.all_hospitals.filter(function (h) {
            return _this5.selectedCategories.includes(h.hospital_category);
          }).map(function (h) {
            return {
              name: h.hospital_name,
              category: h.hospital_category,
              location: {
                lat: Number(h.y_coordinate),
                lng: Number(h.x_coordinate)
              }
            };
          });
          this.selectedHospitals.emit(hospitals);
        }
      }]);

      return HospitalsComponent;
    }();

    HospitalsComponent.ɵfac = function HospitalsComponent_Factory(t) {
      return new (t || HospitalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    HospitalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HospitalsComponent,
      selectors: [["app-hospitals"]],
      outputs: {
        selectedHospitals: "selectedHospitals"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "card", "hospital-category-card"], [1, "card-title"], [1, "card-body"], [1, "category-list"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange", "change"], [3, "for"]],
      template: function HospitalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Hospitals ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HospitalsComponent_li_5_Template, 4, 4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hospital_categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: [".category-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sYWtzaGFua2FydW5hdGhpbGFrZS9GcmVlTGFuY2Uvc3BlY3Ryby9zcmMvYXBwL2hvc3BpdGFscy9ob3NwaXRhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvc3BpdGFscy9ob3NwaXRhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob3NwaXRhbHMvaG9zcGl0YWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWdhcDogMTBweDtcbn1cbiIsIi5jYXRlZ29yeS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HospitalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-hospitals',
          templateUrl: './hospitals.component.html',
          styleUrls: ['./hospitals.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, {
        selectedHospitals: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/info-center/info-center.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/info-center/info-center.component.ts ***!
    \******************************************************/

  /*! exports provided: InfoCenterComponent */

  /***/
  function srcAppInfoCenterInfoCenterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoCenterComponent", function () {
      return InfoCenterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoCenterComponent = /*#__PURE__*/function () {
      function InfoCenterComponent() {
        _classCallCheck(this, InfoCenterComponent);
      }

      _createClass(InfoCenterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoCenterComponent;
    }();

    InfoCenterComponent.ɵfac = function InfoCenterComponent_Factory(t) {
      return new (t || InfoCenterComponent)();
    };

    InfoCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoCenterComponent,
      selectors: [["app-info-center"]],
      decls: 54,
      vars: 0,
      consts: [[1, "row"], [1, "col-lg-6"], [1, "card", "information-center"], [1, "card-title"], [1, "card-body"], ["href", "https://www.hpb.health.gov.lk/", "target", "_blank"], ["href", "https://www.who.int/southeastasia", "target", "_blank"], ["href", "https://www.unicef.org/srilanka/", "target", "_blank"], ["href", "https://www.worldometers.info/coronavirus/", "target", "_blank"], [1, "card", "prevention-tips"], ["src", "/assets/images/icons/2.svg", "alt", ""], ["src", "/assets/images/icons/1.svg", "alt", ""], ["src", "/assets/images/icons/3.svg", "alt", ""], ["src", "/assets/images/icons/4.svg", "alt", ""]],
      template: function InfoCenterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Learn more about coronavirus (COVID-19)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Recognized Health Organizations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Health Promotion Bureau ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Government Organization ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " WHO South-East Asia Region ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nonprofit Organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " UNICEF Sri Lanka ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nonprofit Organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " World Spread of COVID 19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Information center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Common Prevention Tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Help stop the spread of COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Listen for instructions from your local government about staying home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Keep a safe distance from others ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Clean hands often and disinfect frequently touched surfaces at home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Don't touch your eyes, nose or mouth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cover coughs and sneezes with your elbow or tissue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCenterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-center',
          templateUrl: './info-center.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institutions-component/institutions-component.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/institutions-component/institutions-component.component.ts ***!
    \****************************************************************************/

  /*! exports provided: InstitutionsComponentComponent */

  /***/
  function srcAppInstitutionsComponentInstitutionsComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstitutionsComponentComponent", function () {
      return InstitutionsComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InstitutionsComponentComponent = /*#__PURE__*/function () {
      function InstitutionsComponentComponent() {
        _classCallCheck(this, InstitutionsComponentComponent);
      }

      _createClass(InstitutionsComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InstitutionsComponentComponent;
    }();

    InstitutionsComponentComponent.ɵfac = function InstitutionsComponentComponent_Factory(t) {
      return new (t || InstitutionsComponentComponent)();
    };

    InstitutionsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstitutionsComponentComponent,
      selectors: [["app-institutions-component"]],
      decls: 2,
      vars: 0,
      template: function InstitutionsComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " institutions-component works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RpdHV0aW9ucy1jb21wb25lbnQvaW5zdGl0dXRpb25zLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstitutionsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-institutions-component',
          templateUrl: './institutions-component.component.html',
          styleUrls: ['./institutions-component.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lanka-daily/lanka-daily.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/lanka-daily/lanka-daily.component.ts ***!
    \******************************************************/

  /*! exports provided: LankaDailyComponent */

  /***/
  function srcAppLankaDailyLankaDailyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LankaDailyComponent", function () {
      return LankaDailyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var csvtojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! csvtojson */
    "./node_modules/csvtojson/browser/browser.js");
    /* harmony import */


    var csvtojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

    var LankaDailyComponent = /*#__PURE__*/function () {
      function LankaDailyComponent(dataService, loaderService) {
        _classCallCheck(this, LankaDailyComponent);

        this.dataService = dataService;
        this.loaderService = loaderService;
        this.data = [];
        this.columns = [];
        this.options = {};
      }

      _createClass(LankaDailyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          // generate the chart only after the chart script are loaded
          this.loaderService.loadChartPackages().subscribe(function () {
            google.charts.setOnLoadCallback(function () {
              _this6.generateChart();
            });
          });
        }
      }, {
        key: "generateChart",
        value: function generateChart() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var csvData, jsonData, confirmed, died, recovered;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.dataService.getCSVdaily().toPromise();

                  case 2:
                    csvData = _context9.sent;
                    _context9.next = 5;
                    return csvtojson__WEBPACK_IMPORTED_MODULE_2__().fromString(csvData);

                  case 5:
                    jsonData = _context9.sent;
                    confirmed = jsonData[0];
                    died = jsonData[1];
                    recovered = jsonData[2];
                    this.columns = ['Date', 'Confirmed', 'Recovered', 'Died']; // transform jsondata to the array format used by google charts

                    this.data = Object.keys(confirmed).map(function (date) {
                      return [date, Number(confirmed[date]), Number(recovered[date]), Number(died[date])];
                    }); // let chartOptions = {
                    // 	title: "Lanka Daily",
                    // 	vAxis: {
                    // 		title: "People"
                    // 	}
                    // };
                    // this.options = (google.charts as any).Line.convertOptions(chartOptions);

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return LankaDailyComponent;
    }();

    LankaDailyComponent.ɵfac = function LankaDailyComponent_Factory(t) {
      return new (t || LankaDailyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["ScriptLoaderService"]));
    };

    LankaDailyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LankaDailyComponent,
      selectors: [["app-lanka-daily"]],
      decls: 2,
      vars: 3,
      consts: [[1, "card"], ["type", "Line", "dynamicResize", "true", "width", "100%", 3, "data", "columns", "options"]],
      template: function LankaDailyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "google-chart", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.data)("columns", ctx.columns)("options", ctx.options);
        }
      },
      directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmthLWRhaWx5L2xhbmthLWRhaWx5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LankaDailyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-lanka-daily',
          templateUrl: './lanka-daily.component.html',
          styleUrls: ['./lanka-daily.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["ScriptLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapComponent_map_marker_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "map-marker", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapMouseover", function MapComponent_map_marker_5_Template_map_marker_mapMouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var i_r2 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.openInfoWindow(_r3, i_r2.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "map-info-window");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.district_name, " ");
      }
    }

    function MapComponent_map_marker_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "map-marker", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapMouseover", function MapComponent_map_marker_6_Template_map_marker_mapMouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.openInfoWindow(_r7, "kkkk");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "map-info-window");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "sadasdasd");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var markerPosition_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", markerPosition_r6)("position", markerPosition_r6.position);
      }
    }

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(dataService, socketService) {
        _classCallCheck(this, MapComponent);

        this.dataService = dataService;
        this.socketService = socketService;
        this.dronePositions = [];
        this.center = {
          lat: 7.669722 + 0.2,
          lng: 80.645556 + 0.5
        };
        this.single_district = [];
        this.selectedDistrict = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.district_infections = [];
        this.other_infections = [];
        this.drone_marker_url = '/assets/images/drone.svg';
        this.drone_name = 'Drone'; // style =

        this.mapOptions = {
          // center: this.coordinates,
          zoom: 8,
          styles: [{
            featureType: 'all',
            elementType: 'labels',
            stylers: [{
              visibility: 'on'
            }]
          }, {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{
              saturation: 36
            }, {
              color: '#000000'
            }, {
              lightness: 40
            }]
          }, {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{
              visibility: 'on'
            }, {
              color: '#000000'
            }, {
              lightness: 16
            }]
          }, {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{
              visibility: 'off'
            }]
          }, {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 20
            }]
          }, {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 17
            }, {
              weight: 1.2
            }]
          }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#c4c4c4'
            }]
          }, {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#707070'
            }]
          }, {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 20
            }]
          }, {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 21
            }, {
              visibility: 'on'
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'geometry',
            stylers: [{
              visibility: 'on'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{
              color: '#be2026'
            }, {
              lightness: 0
            }, {
              visibility: 'on'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
              visibility: 'off'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
              visibility: 'off'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [{
              visibility: 'off'
            }, {
              hue: '#ff000a'
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 18
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{
              color: '#575757'
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#ffffff'
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'labels.text.stroke',
            stylers: [{
              color: '#2c2c2c'
            }]
          }, {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 16
            }]
          }, {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#999999'
            }]
          }, {
            featureType: 'road.local',
            elementType: 'labels.text.stroke',
            stylers: [{
              saturation: -52
            }]
          }, {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 19
            }]
          }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
              color: '#000000'
            }, {
              lightness: 17
            }]
          }]
        };
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          // this.nalanda_gedige ={ lat: 7.669722, lng: 80.645556 };
          this.nalanda_gedige = {
            lat: 7.669722 + 0.2,
            lng: 80.645556 + 0.5
          }; // this.center = { lat: 7.8774222, lng: 80.7003428 };

          this.center = this.nalanda_gedige;
          this.zoom = 7;
          this.hospitalMarkerOptions = {
            icon: '/assets/hospital-marker.png'
          };
          this.getDistrictData(); // Listening to the socket server topic of 'CLIENT'

          this.socketService.getMessages('CLIENT').subscribe(function (data) {
            console.log('data', data);

            _this7.addMarker(data);
          }); //   Removing the markers on disconnection

          this.socketService.getMessages('DISCONNECT').subscribe(function (data) {
            console.log('disconnect', data);

            _this7.removeDroneMarker(data);
          });
        }
      }, {
        key: "getDistrictData",
        value: function getDistrictData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.dataService.getDistrictData().toPromise();

                  case 2:
                    this.districts = _context10.sent;
                    this.districts.forEach(function (v) {
                      if (v.count > 100) {
                        _this8.marker_url = '/assets/images/marker-red.svg';
                      } else if (v.count > 35) {
                        _this8.marker_url = '/assets/images/marker-orange.svg';
                      } else if (v.count > 15) {
                        _this8.marker_url = '/assets/images/marker-yellow.svg';
                      } else {
                        _this8.marker_url = '/assets/images/marker-light-yellow.svg';
                      }

                      _this8.di = new Object({
                        position: v.location,
                        icon: _this8.marker_url,
                        animation: google.maps.Animation.DROP,
                        label: {
                          text: v.count + '',
                          color: '#ffffff',
                          fontWeight: 'bold',
                          fontSize: '17px',
                          fontFamily: "Poppins',sans-serif"
                        },
                        zIndex: 2000,
                        title: v.name
                      });

                      if (v.location != null) {
                        _this8.district_infections.push(_this8.di);
                      } else {
                        _this8.other_infections.push(_this8.di);
                      }

                      _this8.other_infections.sort(function (a, b) {
                        return b.count - a.count;
                      });
                    });

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "openInfoWindow",
        value: function openInfoWindow(marker, title) {
          this.infoWindow.open(marker);
          this.district_name = title;
        }
      }, {
        key: "addMarker",
        value: function addMarker(data) {
          var lat = data.lat,
              lng = data.lng,
              id = data.id;
          var markerIndex = this.dronePositions.findIndex(function (marker) {
            return marker && marker.id === id;
          });

          if (markerIndex === -1) {
            console.log('data', lat, lng);
            var marker = {
              id: id,
              position: {
                lat: lat,
                lng: lng
              },
              icon: this.drone_marker_url,
              animation: google.maps.Animation.DROP,
              label: {
                text: 'Drone 1',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '12px',
                fontFamily: "Poppins',sans-serif"
              },
              zIndex: 2001,
              title: 'Drone 1'
            };
            this.dronePositions.push(marker);
          } else {
            console.log('marker index', markerIndex);
            this.dronePositions[markerIndex].position = {
              lat: lat,
              lng: lng
            };
          }
        }
        /**
         * Removing the drone marker from the google map
         * @param data - socket io data containing socket id of the connection
         */

      }, {
        key: "removeDroneMarker",
        value: function removeDroneMarker(data) {
          // Getting socket id from the server
          var id = data.id;
          var markerIndex = this.dronePositions.findIndex(function (marker) {
            return marker && marker.id === id;
          });
          this.dronePositions.splice(markerIndex, 1);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          this.gmap.data.loadGeoJson('/assets/districts.geojson');
          this.gmap.options = {
            disableDefaultUI: true
          };
          this.gmap.options = this.mapOptions; // var mapOptions = {
          //   mapTypeId: 'roadmap',
          //   styles: this.style
          // };

          this.gmap.data.setStyle({
            strokeWeight: 1,
            strokeColor: 'black',
            fillColor: 'grey',
            fillOpacity: 0.2
          });
          this.gmap.data.addListener('mouseover', function (event) {
            // console.log(event.feature.j.province_name);
            // console.log(event.feature.getProperty('district_name'));
            _this9.selectedDistrict.emit([event.feature.getProperty('district_name') + ',', event.feature.getProperty('province_name') + ' Province']);

            _this9.gmap.data.revertStyle();

            _this9.gmap.data.overrideStyle(event.feature, {
              fillColor: 'red',
              fillOpacity: 0.4
            });
          });
          this.gmap.data.addListener('mouseout', function (event) {
            // console.log(event.feature.j.province_name);
            // console.log(event.feature.getProperty('district_name'));
            // this.selectedDistrict.emit(event.feature.getProperty('district_name'));
            _this9.gmap.data.revertStyle(); // this.gmap.data.overrideStyle(event.feature, {fillOpacity: 0.8});

          });
          this.gmap.data.addListener('click', function (event) {
            console.log(event);
            var bounds = new google.maps.LatLngBounds();
            event.feature.getGeometry().forEachLatLng(function (latlng) {
              bounds.extend(latlng);
            });

            _this9.gmap.fitBounds(bounds);
          });
        }
      }, {
        key: "updateMarkers",
        value: function updateMarkers(s) {
          console.log(this.mapType);

          if (s === 'district') {
            this.activeMarkers = this.district_infections;
          }

          if (s === 'pcr') {
            this.activeMarkers = null;
          }

          if (s === 'drones') {
            this.activeMarkers = [{}, {}];
          }
        }
      }, {
        key: "hospitals",
        get: function get() {
          return this._hospitals;
        },
        set: function set(value) {
          this._hospitals = value;
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapInfoWindow"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gmap = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
        }
      },
      inputs: {
        hospitals: "hospitals"
      },
      outputs: {
        selectedDistrict: "selectedDistrict"
      },
      decls: 7,
      vars: 4,
      consts: [[1, "card", "data-map-card"], [1, "card-title"], [1, "card-body"], [3, "center", "zoom"], [3, "options", "mapMouseover", 4, "ngFor", "ngForOf"], [3, "options", "position", "mapMouseover", 4, "ngFor", "ngForOf"], [3, "options", "mapMouseover"], ["marker", ""], [3, "options", "position", "mapMouseover"], ["droneMarker", ""]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Islandwide Confirmed Cases ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "google-map", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MapComponent_map_marker_5_Template, 5, 2, "map-marker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MapComponent_map_marker_6_Template, 5, 2, "map-marker", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("center", ctx.center)("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.district_infections);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dronePositions);
        }
      },
      directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapInfoWindow"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
        }];
      }, {
        gmap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"]]
        }],
        infoWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapInfoWindow"], {
            "static": false
          }]
        }],
        selectedDistrict: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        hospitals: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['hospitals']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/material-design/material-design.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/material-design/material-design.module.ts ***!
    \***********************************************************/

  /*! exports provided: MaterialDesignModule */

  /***/
  function srcAppMaterialDesignMaterialDesignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function () {
      return MaterialDesignModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
    /* harmony import */


    var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/google-maps */
    "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");

    var MaterialDesignModule = function MaterialDesignModule() {
      _classCallCheck(this, MaterialDesignModule);
    };

    MaterialDesignModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialDesignModule
    });
    MaterialDesignModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialDesignModule_Factory(t) {
        return new (t || MaterialDesignModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialDesignModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]],
        exports: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDesignModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]],
          exports: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_7__["GoogleChartsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/news-component/news-component.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/news-component/news-component.component.ts ***!
    \************************************************************/

  /*! exports provided: NewsComponentComponent */

  /***/
  function srcAppNewsComponentNewsComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponentComponent", function () {
      return NewsComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewsComponentComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", article_r1.title.toUpperCase(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", article_r1.urlToImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", article_r1.content.toUpperCase(), " ");
      }
    }

    var NewsComponentComponent = /*#__PURE__*/function () {
      function NewsComponentComponent(dataService) {
        _classCallCheck(this, NewsComponentComponent);

        this.dataService = dataService;
        this.news = {
          status: '',
          totalResults: 0,
          articles: [{
            source: [{}],
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: '',
            publishedAt: '',
            content: ''
          }]
        }; // console.error("search is on"); // log to console instead
        // this.addHero("search");
      }

      _createClass(NewsComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNews();
        }
      }, {
        key: "getNews",
        value: function getNews() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var data;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.dataService.getNEWS('covid-19').toPromise();

                  case 2:
                    data = _context11.sent;

                    if (!data) {
                      console.log("no news data.");
                    } else {
                      console.log("news data available.");
                      this.news = JSON.parse(data);
                    }

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return NewsComponentComponent;
    }();

    NewsComponentComponent.ɵfac = function NewsComponentComponent_Factory(t) {
      return new (t || NewsComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    NewsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NewsComponentComponent,
      selectors: [["app-news-component"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["rel", "noopener noreferrer", "target", "_blank", 2, "text-decoration", "none", 3, "href"], [1, "title"], [1, "img-div"], [1, "img", 3, "src"], [1, "content"]],
      template: function NewsComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NewsComponentComponent_div_0_Template, 8, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news.articles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".center-cropped[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.img-div[_ngcontent-%COMP%]\n{\n    width: 600px;\n    height: 200px;\n    overflow: hidden;\n    margin: 10px;\n    position: relative;\n}\n.img[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: auto;\n    min-height: 100%;\n    min-width: 100%;\n\n    \n    left: -100%;\n    right: -100%;\n    top: -100%;\n    bottom: -100%;\n    background-position: center center;\n    background-repeat: no-repeat;\n    -webkit-filter: grayscale(100%); \n    filter: grayscale(100%);\n}\n.title[_ngcontent-%COMP%]{\n  font-size: 15px;\n  font-weight: bold;\n  color: rgb(49, 49, 49);\n}\n.content[_ngcontent-%COMP%]{\n  font-size: 12px;\n  font-weight: bold;\n  color: rgb(49, 49, 49);\n}\na[_ngcontent-%COMP%]{text-decoration:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1jb21wb25lbnQvbmV3cy1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDRCQUE0QjtBQUM5QjtBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWY7NkJBQ3lCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLCtCQUErQixFQUFFLHFCQUFxQjtJQUN0RCx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUlBLEVBQUUsb0JBQW9CIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1jb21wb25lbnQvbmV3cy1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItY3JvcHBlZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5pbWctZGl2XG57XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcblxuICAgIC8qIEZvciB0aGUgZm9sbG93aW5nIHNldHRpbmdzIHdlIHNldCAxMDAlLCBidXQgaXQgY2FuIGJlIGhpZ2hlciBpZiBuZWVkZWRcbiAgICBTZWUgdGhlIGFuc3dlcidzIHVwZGF0ZSAqL1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgICB0b3A6IC0xMDAlO1xuICAgIGJvdHRvbTogLTEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi50aXRsZXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcbn1cbi5jb250ZW50e1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xufVxuXG5cblxuYXt0ZXh0LWRlY29yYXRpb246bm9uZX1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-news-component',
          templateUrl: './news-component.component.html',
          styleUrls: ['./news-component.component.css']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SocketService = function SocketService() {
      var _this10 = this;

      _classCallCheck(this, SocketService);

      this.url = 'http://173.82.106.105/';
      /**
       * Creating a socket connection
       */

      this.createSocket = function () {
        _this10.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_this10.url, {
          secure: true,
          reconnectionDelay: 3000,
          reconnectionAttempts: 3
        });

        _this10.socket.on('connect', function () {
          console.log('========Socket Initialized==========');
        });

        _this10.socket.on('connect_error', function (error) {
          console.error('Socket connection error', error);
        });

        _this10.socket.on('disconnect', function (reason) {
          console.log('reason for disconnect', reason);
        });
      }; // Sending messageing to the server


      this.sendMessage = function (title, message) {
        _this10.socket.emit(title, message);
      }; //  Getting replies from the server


      this.getMessages = function (title) {
        if (_this10.socket) {
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this10.socket.on(title, function (message) {
              observer.next(message);
            });
          });
        }
      };
    };

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)();
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
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
  "./src/app/stack-component/stack-component.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/stack-component/stack-component.component.ts ***!
    \**************************************************************/

  /*! exports provided: StackComponentComponent */

  /***/
  function srcAppStackComponentStackComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackComponentComponent", function () {
      return StackComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var StackComponentComponent = /*#__PURE__*/function () {
      function StackComponentComponent() {
        _classCallCheck(this, StackComponentComponent);
      }

      _createClass(StackComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StackComponentComponent;
    }();

    StackComponentComponent.ɵfac = function StackComponentComponent_Factory(t) {
      return new (t || StackComponentComponent)();
    };

    StackComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StackComponentComponent,
      selectors: [["app-stack-component"]],
      decls: 58,
      vars: 0,
      consts: [[2, "position", "absolute", "justify-self", "baseline", "place-self", "first baseline"], [2, "position", "relative"], ["id", "models", 1, "cards"], [1, "card"], ["id", "video_camera", "autoplay", "", 2, "display", "none"], ["id", "c1", "width", "160", "height", "96", 2, "display", "none"], ["id", "c2", 2, "width", "100%", "height", "100%"], ["onsubmit", "", "id", "checkin_form", 1, "checkout"], [1, "checkout-header"], [1, "checkout-title"], [1, "checkout-price"], ["type", "text", "placeholder", "PASSPORT", "autofocus", "", 1, "checkout-input", "checkout-name"], ["type", "text", "placeholder", "DD", 1, "checkout-input", "checkout-exp"], ["type", "text", "placeholder", "MM", 1, "checkout-input", "checkout-exp"], ["type", "text", "placeholder", "YY", 1, "checkout-input", "checkout-exp"], ["type", "text", "placeholder", "Your name", "autofocus", "", 1, "checkout-input", "checkout-name"], ["type", "text", "placeholder", "4111 1111 1111 1111", 1, "checkout-input", "checkout-card"], ["type", "text", "placeholder", "CVC", 1, "checkout-input", "checkout-cvc"], ["type", "button", "value", "", "id", "checkin_btn", 1, "checkout-btn"], [1, "cards"], ["onsubmit", "", "id", "checkout_form", 1, "checkout"], ["type", "button", "value", "CHECK-OUT", "id", "checkout_btn", 1, "checkout-btn"], ["id", "encodeQR", 1, "checkout"]],
      template: function StackComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "identified");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "canvas", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Check-in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ">>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Check-out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ">>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n\n.body[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: #666;\n  overflow: hidden;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 400px;\n  margin-top: 2rem;\n  width: 400px;\n  background: white;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 3px 3px 12px 2px rgba(0, 0, 0, 0.6);\n  transition: 0.2s;\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]:not(:first-child), meter[_ngcontent-%COMP%] {\n  margin-left: -2rem;\n}\n\n.card[_ngcontent-%COMP%]:not(:last-child):hover, .card[_ngcontent-%COMP%]:not(:last-child):focus-within, meter[_ngcontent-%COMP%] {\n  transform: translateY(-1rem);\n  ~.card {\n      transform: translateX(2rem);\n  }\n}\n\n.meter[_ngcontent-%COMP%] {\n  height: 10px;\n  \n  position: relative;\n  background: #555;\n  border-radius: 25px;\n}\n\nh6[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  letter-spacing: 0.6em;\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 0;\n  align-content: center;\n}\n\n.title[_ngcontent-%COMP%] {}\n\n.state[_ngcontent-%COMP%] {}\n\n.datetime[_ngcontent-%COMP%] {}\n\n.placement[_ngcontent-%COMP%] {}\n\n.orientation[_ngcontent-%COMP%] {}\n\n.velocity[_ngcontent-%COMP%] {}\n\nbody[_ngcontent-%COMP%] {\n  font: 13px/20px 'Lucida Grande', Verdana, sans-serif;\n  color: #404040;\n  background: #dbe0eb;\n}\n\n.checkout[_ngcontent-%COMP%] {\n  width: 350px;\n  margin: 40px auto;\n  padding: 15px;\n  background: #f3f6fa;\n  border: 1px solid;\n  border-color: #c2cadb #bbc5d6 #b7c0cd;\n  border-radius: 7px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n}\n\n.checkout[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n  zoom: 1;\n}\n\n.checkout[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:before, .checkout[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:after {\n  content: '';\n  display: table;\n}\n\n.checkout[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.checkout[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.checkout-header[_ngcontent-%COMP%] {\n  position: relative;\n  margin: -15px -15px 15px;\n}\n\n.checkout-title[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  line-height: 38px;\n  font-size: 13px;\n  font-weight: bold;\n  color: #7f889e;\n  text-shadow: 0 1px rgba(255, 255, 255, 0.7);\n  background: #eceff5;\n  border-bottom: 1px solid #c5ccdb;\n  border-radius: 7px 7px 0 0;\n  background-image: linear-gradient(to bottom, #f5f8fb, #e9edf3);\n  box-shadow: inset 0 1px white;\n}\n\n.checkout-title[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n\n.checkout-price[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  right: -14px;\n  width: 40px;\n  font: 14px/40px Helvetica, Arial, sans-serif;\n  color: white;\n  text-align: center;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.3);\n  text-indent: -1px;\n  letter-spacing: -1px;\n  background: #e54930;\n  border: 1px solid;\n  border-color: #b33323 #ab3123 #982b1f;\n  border-radius: 21px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: linear-gradient(to bottom, #f75a3b, #d63b29);\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.checkout-price[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n  border: 2px solid #f5f8fb;\n  border-radius: 18px;\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.25), 0 -1px 1px rgba(0, 0, 0, 0.25);\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: normal;\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n.checkout-input[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 7px;\n  height: 32px;\n  color: #525864;\n  background: white;\n  border: 1px solid;\n  border-color: #b3c0e2 #bcc5e2 #c0ccea;\n  border-radius: 4px;\n  background-image: linear-gradient(to bottom, #f6f8fa, white);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.checkout-input[_ngcontent-%COMP%]:focus {\n  border-color: #46aefe;\n  outline: none;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px #46aefe;\n}\n\n.lt-ie9[_ngcontent-%COMP%]   .checkout-input[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.checkout-name[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.checkout-card[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\n.checkout-exp[_ngcontent-%COMP%], .checkout-cvc[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 45px;\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 34px;\n  padding: 0;\n  font-weight: bold;\n  color: white;\n  text-align: center;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);\n  border: 1px solid;\n  border-color: #1486f9 #0f7de9 #0d6acf;\n  background: #1993fb;\n  border-radius: 4px;\n  background-image: linear-gradient(to bottom, #4cb1fe, #229afc 40%, #138df6);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.checkout-btn[_ngcontent-%COMP%]:active {\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-color: #075bba #0c69d2 #0f7de9;\n  background-image: linear-gradient(to bottom, #1281dc, #1593fc);\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1), 0 1px rgba(255, 255, 255, 0.5);\n}\n\n[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #acb6c8 !important;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #acb6c8 !important;\n  opacity: 1;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #acb6c8;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #acb6c8;\n}\n\n[_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0 !important;\n  border: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhY2stY29tcG9uZW50L3N0YWNrLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLDRCQUE0QjtFQUM1QjtNQUNJLDJCQUEyQjtFQUMvQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBR2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7O0VBTUUscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQSxRQUFROztBQUVSLFFBQVE7O0FBRVIsV0FBVzs7QUFFWCxZQUFZOztBQUVaLGNBQWM7O0FBRWQsV0FBVzs7QUFFWDtFQUNFLG9EQUFvRDtFQUNwRCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBRWxCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUkxQiw4REFBOEQ7RUFFOUQsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBRVgseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFJakIsOERBQThEO0VBRTlELGtGQUFrRjtBQUNwRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFFbkIsMEhBQTBIO0FBQzVIOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUdmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFJbEIsNERBQTREO0VBRTVELDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBRWIsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBSWxCLDJFQUEyRTtFQUUzRSw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMscUNBQXFDO0VBSXJDLDhEQUE4RDtFQUU5RCw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3RhY2stY29tcG9uZW50L3N0YWNrLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZDpub3QoOmZpcnN0LWNoaWxkKSxcbm1ldGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xufVxuXG4uY2FyZDpub3QoOmxhc3QtY2hpbGQpOmhvdmVyLFxuLmNhcmQ6bm90KDpsYXN0LWNoaWxkKTpmb2N1cy13aXRoaW4sXG5tZXRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG4gIH4uY2FyZCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSk7XG4gIH1cbn1cblxuLm1ldGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICAvKiBDYW4gYmUgYW55dGhpbmcgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuaDYsXG5oNSxcbmg0LFxuaDMsXG5oMixcbmgxIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRsZSB7fVxuXG4uc3RhdGUge31cblxuLmRhdGV0aW1lIHt9XG5cbi5wbGFjZW1lbnQge31cblxuLm9yaWVudGF0aW9uIHt9XG5cbi52ZWxvY2l0eSB7fVxuXG5ib2R5IHtcbiAgZm9udDogMTNweC8yMHB4ICdMdWNpZGEgR3JhbmRlJywgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGJhY2tncm91bmQ6ICNkYmUwZWI7XG59XG5cbi5jaGVja291dCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmM2Y2ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNjMmNhZGIgI2JiYzVkNiAjYjdjMGNkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uY2hlY2tvdXQ+cCB7XG4gIHpvb206IDE7XG59XG5cbi5jaGVja291dD5wOmJlZm9yZSxcbi5jaGVja291dD5wOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2hlY2tvdXQ+cDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hlY2tvdXQ+cCtwIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNoZWNrb3V0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAtMTVweCAtMTVweCAxNXB4O1xufVxuXG4uY2hlY2tvdXQtdGl0bGUge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzdmODg5ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2dyb3VuZDogI2VjZWZmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNWNjZGI7XG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY4ZmIsICNlOWVkZjMpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY4ZmIsICNlOWVkZjMpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmOGZiLCAjZTllZGYzKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y1ZjhmYiwgI2U5ZWRmMyk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggd2hpdGU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHdoaXRlO1xufVxuXG4uY2hlY2tvdXQtdGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uY2hlY2tvdXQtcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE0cHg7XG4gIHJpZ2h0OiAtMTRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZvbnQ6IDE0cHgvNDBweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWluZGVudDogLTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGJhY2tncm91bmQ6ICNlNTQ5MzA7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNiMzMzMjMgI2FiMzEyMyAjOTgyYjFmO1xuICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNzVhM2IsICNkNjNiMjkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNzVhM2IsICNkNjNiMjkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZjc1YTNiLCAjZDYzYjI5KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y3NWEzYiwgI2Q2M2IyOSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNoZWNrb3V0LXByaWNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBib3R0b206IDNweDtcbiAgbGVmdDogM3B4O1xuICByaWdodDogM3B4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmOGZiO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIGluc2V0IDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAtMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCBpbnNldCAwIC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2hlY2tvdXQtaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCA3cHg7XG4gIGhlaWdodDogMzJweDtcbiAgY29sb3I6ICM1MjU4NjQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYjNjMGUyICNiY2M1ZTIgI2MwY2NlYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNmY4ZmEsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjZmOGZhLCB3aGl0ZSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmNmY4ZmEsIHdoaXRlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y2ZjhmYSwgd2hpdGUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uY2hlY2tvdXQtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM0NmFlZmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDVweCAjNDZhZWZlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgNXB4ICM0NmFlZmU7XG59XG5cbi5sdC1pZTkgLmNoZWNrb3V0LWlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5jaGVja291dC1uYW1lIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY2hlY2tvdXQtY2FyZCB7XG4gIHdpZHRoOiAyMTBweDtcbn1cblxuLmNoZWNrb3V0LWV4cCxcbi5jaGVja291dC1jdmMge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5jaGVja291dC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzE0ODZmOSAjMGY3ZGU5ICMwZDZhY2Y7XG4gIGJhY2tncm91bmQ6ICMxOTkzZmI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNGNiMWZlLCAjMjI5YWZjIDQwJSwgIzEzOGRmNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzRjYjFmZSwgIzIyOWFmYyA0MCUsICMxMzhkZjYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNGNiMWZlLCAjMjI5YWZjIDQwJSwgIzEzOGRmNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0Y2IxZmUsICMyMjlhZmMgNDAlLCAjMTM4ZGY2KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNoZWNrb3V0LWJ0bjphY3RpdmUge1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWNvbG9yOiAjMDc1YmJhICMwYzY5ZDIgIzBmN2RlOTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMTI4MWRjLCAjMTU5M2ZjKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMTI4MWRjLCAjMTU5M2ZjKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzEyODFkYywgIzE1OTNmYyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxMjgxZGMsICMxNTkzZmMpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNiNmM4ICFpbXBvcnRhbnQ7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNiNmM4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNiNmM4O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2I2Yzg7XG59XG5cbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stack-component',
          templateUrl: './stack-component.component.html',
          styleUrls: ['./stack-component.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/twitter-component/twitter-component.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/twitter-component/twitter-component.component.ts ***!
    \******************************************************************/

  /*! exports provided: TwitterComponentComponent */

  /***/
  function srcAppTwitterComponentTwitterComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterComponentComponent", function () {
      return TwitterComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var TwitterComponentComponent = /*#__PURE__*/function () {
      function TwitterComponentComponent() {
        _classCallCheck(this, TwitterComponentComponent);
      }

      _createClass(TwitterComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TwitterComponentComponent;
    }();

    TwitterComponentComponent.ɵfac = function TwitterComponentComponent_Factory(t) {
      return new (t || TwitterComponentComponent)();
    };

    TwitterComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwitterComponentComponent,
      selectors: [["app-twitter-component"]],
      decls: 7,
      vars: 0,
      template: function TwitterComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Twitter Feed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXItY29tcG9uZW50L3R3aXR0ZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitterComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-twitter-component',
          templateUrl: './twitter-component.component.html',
          styleUrls: ['./twitter-component.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/lakshankarunathilake/FreeLance/spectro/src/main.ts */
    "./src/main.ts");
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
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map