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

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/occupancy-report/occupancy-report.component */ "./src/app/components/occupancy-report/occupancy-report.component.ts");
/* harmony import */ var _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/impressum/impressum.component */ "./src/app/components/impressum/impressum.component.ts");
/* harmony import */ var _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/roadmap/roadmap.component */ "./src/app/components/roadmap/roadmap.component.ts");








const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', redirectTo: '' },
    { path: 'reportOccupancy/:id', component: src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_3__["OccupancyReportComponent"] },
    { path: 'impressum', component: _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"] },
    { path: 'roadmap', component: _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_5__["RoadmapComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/location-provider.service */ "./src/app/core/services/location-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "./src/app/components/snack-bar/snack-bar.component.ts");






class AppComponent {
    constructor(locationService) {
        this.locationService = locationService;
        this.title = 'SAKPaaS';
    }
    ngOnInit() {
        // Quick fix http redirect
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            if (location.protocol === 'http:') {
                window.location.href = location.href.replace('http', 'https');
            }
        }
        this.locations$ = this.locationService.fetchLocations();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_2__["LocationProviderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-snack-bar");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["SnackBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_2__["LocationProviderService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/location-details/location-details.component */ "./src/app/components/location-details/location-details.component.ts");
/* harmony import */ var src_app_components_occupancy_report_occupancy_report_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/occupancy-report/occupancy-report.module */ "./src/app/components/occupancy-report/occupancy-report.module.ts");
/* harmony import */ var src_app_generated_api_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/generated/api.module */ "./src/app/generated/api.module.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _components_occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/occupancy-view/occupancy-view.component */ "./src/app/components/occupancy-view/occupancy-view.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_components_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.module */ "./src/app/components/snack-bar/snack-bar.module.ts");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/__ivy_ngcc__/fesm2015/service-work-is-loading.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var src_app_components_map_map_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/impressum/impressum.component */ "./src/app/components/impressum/impressum.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/roadmap/roadmap.component */ "./src/app/components/roadmap/roadmap.component.ts");
/* harmony import */ var ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-vertical-timeline */ "./node_modules/ng-vertical-timeline/__ivy_ngcc__/fesm2015/ng-vertical-timeline.js");





































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            src_app_generated_api_module__WEBPACK_IMPORTED_MODULE_10__["ApiModule"].forRoot({ rootUrl: 'https://api.happyhamster.org/v1' }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            src_app_components_occupancy_report_occupancy_report_module__WEBPACK_IMPORTED_MODULE_9__["OccupancyReportModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            src_app_components_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_22__["SnackBarModule"],
            _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingModule"],
            _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingPipeModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production }),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_33__["NgVerticalTimelineModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_8__["LocationDetailsComponent"],
        _components_occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_15__["OccupancyViewComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
        src_app_components_map_map_component__WEBPACK_IMPORTED_MODULE_28__["MapComponent"],
        _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_29__["ImpressumComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__["LogoComponent"],
        _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_32__["RoadmapComponent"]], imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], src_app_generated_api_module__WEBPACK_IMPORTED_MODULE_10__["ApiModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        src_app_components_occupancy_report_occupancy_report_module__WEBPACK_IMPORTED_MODULE_9__["OccupancyReportModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        src_app_components_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_22__["SnackBarModule"],
        _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingModule"],
        _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingPipeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_33__["NgVerticalTimelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_8__["LocationDetailsComponent"],
                    _components_occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_15__["OccupancyViewComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                    src_app_components_map_map_component__WEBPACK_IMPORTED_MODULE_28__["MapComponent"],
                    _components_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_29__["ImpressumComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_31__["LogoComponent"],
                    _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_32__["RoadmapComponent"]
                ],
                imports: [
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    src_app_generated_api_module__WEBPACK_IMPORTED_MODULE_10__["ApiModule"].forRoot({ rootUrl: 'https://api.happyhamster.org/v1' }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    src_app_components_occupancy_report_occupancy_report_module__WEBPACK_IMPORTED_MODULE_9__["OccupancyReportModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    src_app_components_snack_bar_snack_bar_module__WEBPACK_IMPORTED_MODULE_22__["SnackBarModule"],
                    _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingModule"],
                    _service_work_is_loading__WEBPACK_IMPORTED_MODULE_23__["IsLoadingPipeModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production }),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_33__["NgVerticalTimelineModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer"], ["target", "_blank", "href", "https://www.instagram.com/happyhamsterapp/"], ["src", "assets/icons/social-media/instagram.svg"], ["target", "_blank", "href", "https://twitter.com/happyhamsterapp"], ["src", "assets/icons/social-media/twitter.svg"], ["target", "_blank", "href", "https://github.com/SAKPaaS"], ["src", "assets/icons/social-media/github.svg"], [1, "line-break"], ["href", "https://welcome.happyhamster.org/"], ["href", "/impressum"], ["href", "https://happyhamster.org/roadmap"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00DCber uns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  flex-wrap: wrap;\n}\n\n.footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-decoration: none;\n  margin-right: 15px;\n  color: #505050;\n}\n\n.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.line-break[_ngcontent-%COMP%] {\n  width: 100%;\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .line-break[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb290ZXIgKiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLmZvb3RlciBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmxpbmUtYnJlYWsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5saW5lLWJyZWFrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIFxufSIsIi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZvb3RlciAqIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4uZm9vdGVyIGltZyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmxpbmUtYnJlYWsge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5saW5lLWJyZWFrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _location_details_location_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location-details/location-details.component */ "./src/app/components/location-details/location-details.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");












class HomeComponent {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    ngOnInit() {
    }
    onLocationEmitted(location, fromMap) {
        this.selectedLocation$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(location);
        this.openBottomSheet(fromMap);
        if (!fromMap) {
            this.mapComp.zoomToNewLocation(location);
        }
    }
    openBottomSheet(fromMap) {
        const bottomSheetRef = this._bottomSheet.open(_location_details_location_details_component__WEBPACK_IMPORTED_MODULE_2__["LocationDetailsComponent"], { data: this.selectedLocation$, disableClose: true });
        // Because of the maps weird interaction behaviours we need this workaround
        setTimeout(() => {
            bottomSheetRef.disableClose = false;
        }, 500);
        bottomSheetRef.afterDismissed().subscribe(() => {
            if (fromMap) {
                this.mapComp.deselect();
            }
            else {
                this.searchComp.dismiss();
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapComp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchComp = _t.first);
    } }, decls: 5, vars: 0, consts: [[2, "z-index", "1", 3, "locationEmitted"], [2, "z-index", "2", 3, "locationEmitted"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("locationEmitted", function HomeComponent_Template_app_map_locationEmitted_2_listener($event) { return ctx.onLocationEmitted($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("locationEmitted", function HomeComponent_Template_app_search_bar_locationEmitted_3_listener($event) { return ctx.onLocationEmitted($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"] }]; }, { mapComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]]
        }], searchComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/impressum/impressum.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/impressum/impressum.component.ts ***!
  \*************************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ImpressumComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ImpressumComponent.ɵfac = function ImpressumComponent_Factory(t) { return new (t || ImpressumComponent)(); };
ImpressumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImpressumComponent, selectors: [["app-impressum"]], decls: 42, vars: 1, consts: [[1, "content"], [1, "button-row"], ["mat-raised-button", "", 1, "back", 3, "routerLink"]], template: function ImpressumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angaben gem\u00E4\u00DF \u00A7 5 TMG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "David Schmidt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Speyerer Stra\u00DFe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 68199 Mannheim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telefon: 01729975477");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Telefax: +49 (0) 123 44 55 99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " E-Mail: davod2211@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Haftung f\u00FCr Inhalte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Als Diensteanbieter sind wir gem\u00E4\u00DF \u00A7 7 Abs.1 TMG f\u00FCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00A7\u00A7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00FCbermittelte oder gespeicherte fremde Informationen zu \u00FCberwachen oder nach Umst\u00E4nden zu forschen, die auf eine rechtswidrige T\u00E4tigkeit hinweisen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00FChrt. Eine diesbez\u00FCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00F6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Haftung f\u00FCr Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Unser Angebot enth\u00E4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00F6nnen wir f\u00FCr diese fremden Inhalte auch keine Gew\u00E4hr \u00FCbernehmen. F\u00FCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00F6gliche Rechtsverst\u00F6\u00DFe \u00FCberpr\u00FCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Urheberrecht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00E4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00DFerhalb der Grenzen des Urheberrechtes bed\u00FCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\u00FCr den privaten, nicht kommerziellen Gebrauch gestattet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Zur\u00FCck zu HappyHamster ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "home");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  color: var(--greenblue);\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--greenblue);\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.back[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: var(--greenblue);\n  width: 100%;\n  max-width: 300px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  color: #ffffff;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 16px;\n}\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW1wcmVzc3VtL2ltcHJlc3N1bS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQWFFLGFBQUE7QUNYRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNHSjtBRERFO0VBQ0UsdUJBQUE7QUNHSjtBRERFO0VBQ0UsaUJBQUE7QUNHSjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1wcmVzc3VtL2ltcHJlc3N1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG4gIH1cbiAgaDIge1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbmJsdWUpO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5ibHVlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5jb250ZW50IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0tZ3JlZW5ibHVlKTtcbn1cbi5jb250ZW50IGgyIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG59XG4uY29udGVudCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5ibHVlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImpressumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-impressum',
                templateUrl: './impressum.component.html',
                styleUrls: ['./impressum.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/location-details/location-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/location-details/location-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: LocationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDetailsComponent", function() { return LocationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/snack-bar.interface */ "./src/app/core/models/snack-bar.interface.ts");
/* harmony import */ var src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/occupancy-provider.service */ "./src/app/core/services/occupancy-provider.service.ts");
/* harmony import */ var src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/snack-bar.service */ "./src/app/core/services/snack-bar.service.ts");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/__ivy_ngcc__/fesm2015/service-work-is-loading.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../occupancy-view/occupancy-view.component */ "./src/app/components/occupancy-view/occupancy-view.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");




















function LocationDetailsComponent_mat_nav_list_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ich bin hier! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationDetailsComponent_mat_nav_list_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Du wirst eingecheckt ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LocationDetailsComponent_mat_nav_list_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-occupancy-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationDetailsComponent_mat_nav_list_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const location_r1 = ctx.ngIf; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checkIn(location_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LocationDetailsComponent_mat_nav_list_0_span_10_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "swIsLoading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LocationDetailsComponent_mat_nav_list_0_span_13_Template, 4, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "swIsLoading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAddressString(location_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("occupancy", location_r1.occupancy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "checkIn")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "checkIn")));
} }
class LocationDetailsComponent {
    constructor(bottomSheetRef, data, occupancyService, snackBarService, isLoadingService, router) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.occupancyService = occupancyService;
        this.snackBarService = snackBarService;
        this.isLoadingService = isLoadingService;
        this.router = router;
        this.noAddressMessage = 'Wir konnten die Adresse leider nicht finden.';
        this.location$ = data;
    }
    ngOnInit() { }
    checkIn(location) {
        this.isLoadingService.add({ key: 'checkIn' });
        this.occupancyService.checkIn(location.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.isLoadingService.remove({ key: 'checkIn' });
            this.snackBarService.sendNotification({
                message: 'Wir konnten dich leider nicht einchecken! :( Bitte probiere es noch einmal.',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__["SnackBarTypes"].ERROR
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })).subscribe(_ => {
            this.isLoadingService.remove({ key: 'checkIn' });
            this.snackBarService.sendNotification({
                message: 'Du bist jetzt in ' + location.name + ' eingecheckt. Viel Spaß!',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__["SnackBarTypes"].SUCCESS
            });
            this.bottomSheetRef.dismiss();
            this.router.navigate(['reportOccupancy', location.id]);
        });
    }
    getAddressString(location) {
        if (!location.street) {
            return this.noAddressMessage;
        }
        var erg = location.street;
        if (location.housenumber) {
            erg = erg + " " + location.housenumber;
        }
        if (location.postcode || location.city) {
            erg = erg + ", ";
        }
        if (location.postcode) {
            erg = erg + location.postcode + " ";
        }
        if (location.city) {
            erg = erg + location.city;
        }
        return erg;
    }
}
LocationDetailsComponent.ɵfac = function LocationDetailsComponent_Factory(t) { return new (t || LocationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_5__["OccupancyProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_work_is_loading__WEBPACK_IMPORTED_MODULE_7__["IsLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
LocationDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationDetailsComponent, selectors: [["app-location-details"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "mat-title"], [1, "mat-card-subtitle"], [3, "occupancy"], ["cols", "2", "rowHeight", "5rem"], ["colspan", "2"], ["mat-raised-button", "", "swIsLoading", "'sendOccupancy'", 1, "submit", 3, "click"], [2, "margin-top", "-7px", "margin-left", "20px"], ["diameter", "30"]], template: function LocationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LocationDetailsComponent_mat_nav_list_0_Template, 16, 13, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.location$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_11__["OccupancyViewComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _service_work_is_loading__WEBPACK_IMPORTED_MODULE_7__["IsLoadingDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _service_work_is_loading__WEBPACK_IMPORTED_MODULE_7__["IsLoadingPipe"]], styles: [".submit[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: var(--greenblue);\n  width: 100%;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  color: #ffffff;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n  app-occupancy-view {\n  margin-bottom: 0.8rem;\n}\n\np.mat-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2NhdGlvbi1kZXRhaWxzL2xvY2F0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvY2F0aW9uLWRldGFpbHMvbG9jYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmJsdWUpO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIGFwcC1vY2N1cGFuY3ktdmlldyB7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxucC5tYXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIiwiLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgYXBwLW9jY3VwYW5jeS12aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG5wLm1hdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-location-details',
                templateUrl: './location-details.component.html',
                styleUrls: ['./location-details.component.scss']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
            }] }, { type: src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_5__["OccupancyProviderService"] }, { type: src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"] }, { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_7__["IsLoadingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 2, vars: 0, consts: [[1, "logo-container"], ["src", "assets/icons/happy-hamster-logo-text.svg"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  background-color: white;\n  border-radius: 50px;\n  margin: 0;\n  top: 15px;\n  left: 15px;\n  width: 90px;\n  height: 120px;\n  padding: 5px;\n  right: auto;\n  box-shadow: 0 5px 20px 0 rgba(11, 0, 51, 0.2);\n}\n\n@media (max-width: 600px) {\n  .logo-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksYUFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggMCByZ2JhKDExLCAwLCA1MSwgMC4yKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5sb2dvLWNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJVxufSIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICByaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCAwIHJnYmEoMTEsIDAsIDUxLCAwLjIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubG9nby1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");
/* harmony import */ var ol_events_condition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/events/condition */ "./node_modules/ol/events/condition.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var _ol_map_marker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ol-map-marker */ "./src/app/components/map/ol-map-marker.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/models/snack-bar.interface */ "./src/app/core/models/snack-bar.interface.ts");
/* harmony import */ var src_app_core_services_gps_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/gps.service */ "./src/app/core/services/gps.service.ts");
/* harmony import */ var src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/location-provider.service */ "./src/app/core/services/location-provider.service.ts");
/* harmony import */ var src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/snack-bar.service */ "./src/app/core/services/snack-bar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");





















function MapComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MapComponent {
    constructor(gpsService, locationService, snackBarService, route) {
        this.gpsService = gpsService;
        this.locationService = locationService;
        this.snackBarService = snackBarService;
        this.route = route;
        this.locationEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.markers = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.selectEvent = null;
    }
    ngOnInit() {
        this.vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_8__["default"]({
            features: []
        });
        this.isLoadingLocations = this.locationService.getLoadingLocationsState();
        this.route.queryParams.subscribe((params) => {
            if (params.id) {
                this.locationService.fetchLocationById(params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(err => {
                    this.snackBarService.sendNotification({
                        message: 'Leider konnten wir deinen gesuchten Laden nicht finden :(',
                        type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_13__["SnackBarTypes"].ERROR
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(err);
                })).subscribe((location) => {
                    this.zoomToNewLocation(location);
                });
            }
        });
        this.customMap = new ol_Map__WEBPACK_IMPORTED_MODULE_1__["default"]({
            target: 'map',
            layers: [
                new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    source: new ol_source__WEBPACK_IMPORTED_MODULE_4__["OSM"]()
                }),
                new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]({
                    source: this.vectorSource
                })
            ],
            view: new ol_View__WEBPACK_IMPORTED_MODULE_2__["default"]({
                center: ol_proj__WEBPACK_IMPORTED_MODULE_5__["fromLonLat"]([10.018343, 51.133481]),
                zoom: 6
            }),
        });
        const select = new ol_interaction__WEBPACK_IMPORTED_MODULE_6__["Select"]({
            condition: ol_events_condition__WEBPACK_IMPORTED_MODULE_7__["click"],
            style: null
        });
        this.customMap.addInteraction(select);
        select.on('select', (e) => {
            const target = e.selected[0];
            if (!target) {
                return;
            }
            this.locationEmitted.emit(target.location);
            console.log(e.selected);
            this.selectEvent = e;
        });
        this.customMap.addEventListener('moveend', () => {
            this.locationService.updateLoadingState(true);
            const center = this.customMap.getView().getCenter();
            const centerLonLat = ol_proj__WEBPACK_IMPORTED_MODULE_5__["toLonLat"](center);
            this.gpsService.setLocation({ longitude: centerLonLat[0], latitude: centerLonLat[1] });
            console.log(centerLonLat);
            return true;
        });
        this.locationService.fetchLocations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(err => {
            this.locationService.updateLoadingState(false);
            this.snackBarService.sendNotification({
                message: 'Beim Aktualisieren der Karte ist ein Fehler aufgetreten. Sorry :(',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_13__["SnackBarTypes"].ERROR
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(err);
        })).subscribe((next) => {
            this.locationService.updateLoadingState(false);
            console.log('Fetched new locations');
            this.vectorSource.clear();
            const markers = next.map((l) => new _ol_map_marker__WEBPACK_IMPORTED_MODULE_9__["OLMapMarker"](l));
            this.vectorSource.addFeatures(markers);
        });
        this.gpsService.getLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(err => {
            this.snackBarService.sendNotification({
                message: 'Beim Aktualisieren der Karte ist ein Fehler aufgetreten. Sorry :(',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_13__["SnackBarTypes"].ERROR
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["throwError"])(err);
        })).subscribe(gpsCoordinates => {
            if (gpsCoordinates.fromDevice) {
                this.customMap.getView().setCenter(ol_proj__WEBPACK_IMPORTED_MODULE_5__["fromLonLat"]([gpsCoordinates.longitude, gpsCoordinates.latitude]));
                this.customMap.getView().setZoom(15);
            }
        });
    }
    deselect() {
        this.selectEvent.target.getFeatures().clear();
        this.selectEvent = null;
    }
    zoomToNewLocation(location) {
        this.customMap.getView().setCenter(ol_proj__WEBPACK_IMPORTED_MODULE_5__["fromLonLat"]([location.longitude, location.latitude]));
        this.customMap.getView().setZoom(16);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_gps_service__WEBPACK_IMPORTED_MODULE_14__["GpsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_15__["LocationProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_16__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], outputs: { locationEmitted: "locationEmitted" }, decls: 3, vars: 3, consts: [["class", "loading-wrapper", 4, "ngIf"], ["id", "map", 1, "map"], [1, "loading-wrapper"], ["diameter", "50"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoadingLocations));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]], styles: [".map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.loading-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: transparent;\n  top: 50px;\n  right: 25px;\n  z-index: 2;\n}\n\n@media (max-width: 910px) {\n  .loading-wrapper[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 60px;\n  }\n}\n\n.loading-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFlBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2FkaW5nLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkxMHB4KSB7XG4gICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgYm90dG9tOiA2MHB4O1xuICAgIH1cbn1cblxuLmxvYWRpbmctd3JhcHBlciBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSIsIi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxvYWRpbmctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MTBweCkge1xuICAubG9hZGluZy13cmFwcGVyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiA2MHB4O1xuICB9XG59XG4ubG9hZGluZy13cmFwcGVyIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_gps_service__WEBPACK_IMPORTED_MODULE_14__["GpsService"] }, { type: src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_15__["LocationProviderService"] }, { type: src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_16__["SnackBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"] }]; }, { locationEmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/map/ol-map-marker.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/ol-map-marker.ts ***!
  \*************************************************/
/*! exports provided: OLMapMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OLMapMarker", function() { return OLMapMarker; });
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
/* harmony import */ var ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/style/IconAnchorUnits */ "./node_modules/ol/style/IconAnchorUnits.js");





class OLMapMarker extends ol__WEBPACK_IMPORTED_MODULE_0__["Feature"] {
    constructor(locationMarker) {
        super({
            geometry: new ol_geom_Point__WEBPACK_IMPORTED_MODULE_1__["default"](ol_proj__WEBPACK_IMPORTED_MODULE_2__["fromLonLat"]([locationMarker.longitude, locationMarker.latitude])),
        });
        this.location = locationMarker;
        const occupancy = locationMarker.occupancy;
        if (occupancy == null || occupancy < 0) {
            this.setStyle(OLMapMarker.markerStyleUndefined);
        }
        else {
            const oc3 = occupancy * 3;
            if (oc3 < 1) {
                this.setStyle(OLMapMarker.markerStyleEmpty);
            }
            else if (oc3 < 2) {
                this.setStyle(OLMapMarker.markerStyleMedium);
            }
            else {
                this.setStyle(OLMapMarker.markerStyleFull);
            }
        }
    }
    static markerStyleMaker(iconName) {
        return new ol_style__WEBPACK_IMPORTED_MODULE_3__["Style"]({
            image: new ol_style__WEBPACK_IMPORTED_MODULE_3__["Icon"]({
                anchor: [0.5, 1],
                anchorXUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_4__["default"].FRACTION,
                anchorYUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_4__["default"].FRACTION,
                src: 'assets/icons/marker/' + iconName + '.png',
                scale: 0.15
            })
        });
    }
}
OLMapMarker.markerStyleUndefined = OLMapMarker.markerStyleMaker('marker_0');
OLMapMarker.markerStyleEmpty = OLMapMarker.markerStyleMaker('marker_1');
OLMapMarker.markerStyleMedium = OLMapMarker.markerStyleMaker('marker_2');
OLMapMarker.markerStyleFull = OLMapMarker.markerStyleMaker('marker_3');
OLMapMarker.markerStyleSelected = new ol_style__WEBPACK_IMPORTED_MODULE_3__["Style"]({
    image: new ol_style__WEBPACK_IMPORTED_MODULE_3__["Icon"]({
        anchor: [0.5, 1],
        anchorXUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_4__["default"].FRACTION,
        anchorYUnits: ol_style_IconAnchorUnits__WEBPACK_IMPORTED_MODULE_4__["default"].FRACTION,
        src: 'assets/icons/marker.png',
        scale: 0.25
    })
});


/***/ }),

/***/ "./src/app/components/occupancy-report/occupancy-report.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/occupancy-report/occupancy-report.component.ts ***!
  \***************************************************************************/
/*! exports provided: OccupancyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupancyReportComponent", function() { return OccupancyReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/snack-bar.interface */ "./src/app/core/models/snack-bar.interface.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/location-provider.service */ "./src/app/core/services/location-provider.service.ts");
/* harmony import */ var src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/occupancy-provider.service */ "./src/app/core/services/occupancy-provider.service.ts");
/* harmony import */ var src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/snack-bar.service */ "./src/app/core/services/snack-bar.service.ts");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/__ivy_ngcc__/fesm2015/service-work-is-loading.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");


















function OccupancyReportComponent_ng_container_0_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Abschicken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OccupancyReportComponent_ng_container_0_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wird abgeschickt ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OccupancyReportComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wie voll ist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OccupancyReportComponent_ng_container_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.setRadioButton("0.33"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Fast leer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Wartezeit an der Kasse weniger als 5 Minuten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sicherheitsabstand von 1,5 Metern garantiert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OccupancyReportComponent_ng_container_0_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setRadioButton("0.66"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Mittelm\u00E4\u00DFig ausgelastet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Wartezeit an der Kasse zwischen 5 Minuten bis 15 Minuten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sicherheitsabstand von 1,5 Metern meistens garantiert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OccupancyReportComponent_ng_container_0_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setRadioButton("0.99"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Voll ausgelastet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Warnung!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Wartezeit an der Kasse mehr als 15 Minuten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sicherheitsabstand von 1,5 Metern nicht garantiert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OccupancyReportComponent_ng_container_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, OccupancyReportComponent_ng_container_0_span_43_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "swIsLoading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OccupancyReportComponent_ng_container_0_span_46_Template, 4, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "swIsLoading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r13 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r12.occupancyInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0.33");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0.66");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "0.99");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 9, "sendOccupancy")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 13, "sendOccupancy")));
} }
class OccupancyReportComponent {
    constructor(activatedRoute, locationService, occupancyService, snackBarService, router, isLoadingService) {
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.occupancyService = occupancyService;
        this.snackBarService = snackBarService;
        this.router = router;
        this.isLoadingService = isLoadingService;
        this.occupancyInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
    }
    ngOnInit() {
        this.selectedLocation$ = this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(params => {
            if (!params.id) {
                return undefined;
            }
            return this.locationService.fetchLocationById(+params.id);
        }));
    }
    setRadioButton(value) {
        this.occupancyInput.setValue(value);
    }
    onSubmit() {
        if (this.occupancyInput.invalid) {
            this.snackBarService.sendNotification({
                message: 'Bitte sage uns deine persönliche Einschätzung der Auslastung :)',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__["SnackBarTypes"].ERROR
            });
            return undefined;
        }
        const value = +this.occupancyInput.value;
        this.isLoadingService.add({ key: 'sendOccupancy' });
        this.selectedLocation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(location => {
            return this.occupancyService.sendOccupancy(location.id, value);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.isLoadingService.remove({ key: 'sendOccupancy' });
            this.snackBarService.sendNotification({
                message: 'Das hat leider nicht geklappt! Bitte versuche es erneut.',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__["SnackBarTypes"].ERROR
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        })).subscribe(location => {
            this.isLoadingService.remove({ key: 'sendOccupancy' });
            console.log(location);
            this.snackBarService.sendNotification({
                message: 'Vielen Dank für dein Feedback!',
                type: src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_4__["SnackBarTypes"].SUCCESS
            });
            this.router.navigate(['home'], { queryParams: { id: location.id } });
        });
    }
}
OccupancyReportComponent.ɵfac = function OccupancyReportComponent_Factory(t) { return new (t || OccupancyReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_6__["LocationProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_7__["OccupancyProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_work_is_loading__WEBPACK_IMPORTED_MODULE_9__["IsLoadingService"])); };
OccupancyReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OccupancyReportComponent, selectors: [["app-occupancy-report"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "container"], [1, "title"], [1, "title-accent"], [3, "formControl"], [1, "radio", 3, "click"], [3, "value"], [1, "radio-text"], ["src", "assets/icons/icon-availability-low.svg"], [1, "occupancy-title"], [1, "occupancy-description"], ["src", "assets/icons/icon-availability-moderate.svg"], ["src", "assets/icons/icon-availability-full.svg"], [1, "warning-accent"], ["mat-raised-button", "", "swIsLoading", "'sendOccupancy'", 1, "submit", 3, "click"], [2, "margin-top", "-7px", "margin-left", "20px"], ["diameter", "30"]], template: function OccupancyReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OccupancyReportComponent_ng_container_0_Template, 49, 15, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.selectedLocation$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _service_work_is_loading__WEBPACK_IMPORTED_MODULE_9__["IsLoadingDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _service_work_is_loading__WEBPACK_IMPORTED_MODULE_9__["IsLoadingPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-left: 23px;\n  padding-right: 23px;\n  padding-bottom: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  max-width: 700px;\n  margin: auto;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 25px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  text-align: center;\n  color: #172a3a;\n}\n\n.title[_ngcontent-%COMP%]   .title-accent[_ngcontent-%COMP%] {\n  color: var(--greenblue);\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: var(--greenblue);\n  width: 100%;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  color: #ffffff;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nmat-radio-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.radio[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 131px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.radio-text[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.occupancy-title[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 20px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  color: #172a3a;\n}\n\n.warning-accent[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: var(--grapefruit);\n}\n\n.occupancy-description[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.17px;\n  color: #9da9a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL29jY3VwYW5jeS1yZXBvcnQvb2NjdXBhbmN5LXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vY2N1cGFuY3ktcmVwb3J0L29jY3VwYW5jeS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vY2N1cGFuY3ktcmVwb3J0L29jY3VwYW5jeS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgcGFkZGluZy1yaWdodDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE3MmEzYTtcbiAgfVxuXG4udGl0bGUgLnRpdGxlLWFjY2VudCB7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbmJsdWUpXG59XG5cbi5zdWJtaXQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbmJsdWUpO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWF0LXJhZGlvLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCVcbn1cblxuLnJhZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yYWRpby10ZXh0IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm9jY3VwYW5jeS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogIzE3MmEzYTtcbn1cblxuLndhcm5pbmctYWNjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmFwZWZydWl0KTtcbn1cblxuLm9jY3VwYW5jeS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTdweDtcbiAgY29sb3I6ICM5ZGE5YTA7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHBhZGRpbmctbGVmdDogMjNweDtcbiAgcGFkZGluZy1yaWdodDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE3MmEzYTtcbn1cblxuLnRpdGxlIC50aXRsZS1hY2NlbnQge1xuICBjb2xvcjogdmFyKC0tZ3JlZW5ibHVlKTtcbn1cblxuLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtcmFkaW8tZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJhZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTMxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhZGlvLXRleHQge1xuICB3aWR0aDogODAlO1xufVxuXG4ub2NjdXBhbmN5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGNvbG9yOiAjMTcyYTNhO1xufVxuXG4ud2FybmluZy1hY2NlbnQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHZhcigtLWdyYXBlZnJ1aXQpO1xufVxuXG4ub2NjdXBhbmN5LWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xN3B4O1xuICBjb2xvcjogIzlkYTlhMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupancyReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-occupancy-report',
                templateUrl: './occupancy-report.component.html',
                styleUrls: ['./occupancy-report.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_6__["LocationProviderService"] }, { type: src_app_core_services_occupancy_provider_service__WEBPACK_IMPORTED_MODULE_7__["OccupancyProviderService"] }, { type: src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_9__["IsLoadingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/occupancy-report/occupancy-report.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/occupancy-report/occupancy-report.module.ts ***!
  \************************************************************************/
/*! exports provided: OccupancyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupancyReportModule", function() { return OccupancyReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/occupancy-report/occupancy-report.component */ "./src/app/components/occupancy-report/occupancy-report.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @service-work/is-loading */ "./node_modules/@service-work/is-loading/__ivy_ngcc__/fesm2015/service-work-is-loading.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











class OccupancyReportModule {
}
OccupancyReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OccupancyReportModule });
OccupancyReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OccupancyReportModule_Factory(t) { return new (t || OccupancyReportModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__["IsLoadingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OccupancyReportModule, { declarations: [src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_2__["OccupancyReportComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
        _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__["IsLoadingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]], exports: [src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_2__["OccupancyReportComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupancyReportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_2__["OccupancyReportComponent"],
                ],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                    _service_work_is_loading__WEBPACK_IMPORTED_MODULE_8__["IsLoadingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
                ],
                exports: [
                    src_app_components_occupancy_report_occupancy_report_component__WEBPACK_IMPORTED_MODULE_2__["OccupancyReportComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/occupancy-view/occupancy-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/occupancy-view/occupancy-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: OccupancyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupancyViewComponent", function() { return OccupancyViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OccupancyViewComponent {
    constructor() {
        this.lowBorder = 0.34;
        this.midBorder = 0.67;
    }
    ngOnInit() {
        this.text = this.getText();
        this.iconPath = this.getIconPath();
        this.styleClass = this.getStyleClass();
        console.log(this.text);
    }
    getIconPath() {
        const noData = 'assets/icons/icon-availability-no-data.svg';
        const low = 'assets/icons/icon-availability-low.svg';
        const mid = 'assets/icons/icon-availability-moderate.svg';
        const high = 'assets/icons/icon-availability-full.svg';
        return this.getStringForOcc(low, mid, high, noData);
    }
    getText() {
        const noData = 'Unbekannte Auslastung';
        const low = 'Geringe Auslastung';
        const mid = 'Normale Auslastung';
        const high = 'Hohe Auslastung!';
        return this.getStringForOcc(low, mid, high, noData);
    }
    getStyleClass() {
        const noData = 'noData';
        const low = 'low';
        const mid = 'mid';
        const high = 'high';
        return this.getStringForOcc(low, mid, high, noData);
    }
    getStringForOcc(low, mid, high, noData) {
        if (!this.occupancy || this.occupancy < 0)
            return noData;
        if (this.occupancy < this.lowBorder)
            return low;
        if (this.occupancy < this.midBorder)
            return mid;
        if (this.occupancy <= 1)
            return high;
        return noData;
    }
}
OccupancyViewComponent.ɵfac = function OccupancyViewComponent_Factory(t) { return new (t || OccupancyViewComponent)(); };
OccupancyViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OccupancyViewComponent, selectors: [["app-occupancy-view"]], inputs: { occupancy: "occupancy" }, decls: 4, vars: 5, consts: [[1, "holder"], ["alt", "Auslastung:", 3, "src"]], template: function OccupancyViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".low {\n  color: var(--greenblue);\n}\n\n  .mid {\n  color: var(--midnight-blue);\n}\n\n  .high {\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: var(--grapefruit);\n}\n\n  .noData {\n  color: var(--greenish-grey);\n}\n\n.holder[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-left: 1rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL29jY3VwYW5jeS12aWV3L29jY3VwYW5jeS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29jY3VwYW5jeS12aWV3L29jY3VwYW5jeS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREFFO0VBQ0Usb0JBQUE7QUNFSjs7QURBRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vY2N1cGFuY3ktdmlldy9vY2N1cGFuY3ktdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubG93IHtcbiAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG59XG5cbjo6bmctZGVlcCAubWlkIHtcbiAgY29sb3I6IHZhcigtLW1pZG5pZ2h0LWJsdWUpO1xufVxuXG46Om5nLWRlZXAgLmhpZ2gge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWdyYXBlZnJ1aXQpO1xufVxuXG46Om5nLWRlZXAgLm5vRGF0YSB7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbmlzaC1ncmV5KTtcbn1cblxuLmhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cbiAgcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuIiwiOjpuZy1kZWVwIC5sb3cge1xuICBjb2xvcjogdmFyKC0tZ3JlZW5ibHVlKTtcbn1cblxuOjpuZy1kZWVwIC5taWQge1xuICBjb2xvcjogdmFyKC0tbWlkbmlnaHQtYmx1ZSk7XG59XG5cbjo6bmctZGVlcCAuaGlnaCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tZ3JhcGVmcnVpdCk7XG59XG5cbjo6bmctZGVlcCAubm9EYXRhIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuaXNoLWdyZXkpO1xufVxuXG4uaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5ob2xkZXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uaG9sZGVyIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupancyViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-occupancy-view',
                templateUrl: './occupancy-view.component.html',
                styleUrls: ['./occupancy-view.component.scss']
            }]
    }], function () { return []; }, { occupancy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/roadmap/roadmap.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/roadmap/roadmap.component.ts ***!
  \*********************************************************/
/*! exports provided: RoadmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapComponent", function() { return RoadmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-vertical-timeline */ "./node_modules/ng-vertical-timeline/__ivy_ngcc__/fesm2015/ng-vertical-timeline.js");




class RoadmapComponent {
    constructor() {
        this.milestones = [
            {
                id: 0,
                title: '#WirVsVirus Hackathon',
                content: 'Als Team SAKPaaS haben wir uns beim Hackathon der Bundesregierung vernetzt und 2 Tage lang die ' +
                    'Tastatur geprügelt. Am Ende stand ein funktionaler Prototype, der überzeugt.',
                date: '21. bis 22.03.2020',
                icon: '/assets/icons/Ringe_white.png'
            },
            {
                id: 3,
                title: 'Verbesserte Auslastungserfassung',
                content: 'Es werden mehrere Kriterien in die Auslastungsermittlung einbezogen, die unterschiedlich gewichtet ' +
                    'werden, und nach unterschiedlichen Zeitintervallen verfallen. Dadurch ist eine bestmögliche Einschätzung der' +
                    ' Auslastung möglich.',
                date: '30.03.2020',
                icon: '/assets/icons/availability-no-data_white.png'
            },
            {
                id: 6,
                title: 'Auslastungsprognosen',
                content: 'Zusatzlich zu den Live-Daten werden mit Hilfe künstlicher Intelligenz Auslastungsprognosen erstellt,' +
                    ' die den Nutzern eine fruhzeitige Planung ihres Einkaufs ermöglichen.',
                date: '05.04.2020',
                icon: '/assets/icons/availability-low_white.png'
            },
            {
                id: 9,
                title: 'Nutzersystem',
                content: 'Nutzer können sich anmelden und werden für ihre Handlungen belohnt. Eine Einspeicherung von frequent' +
                    'besuchten Supermärkten verbessert die Nutzererfahrung und vereinfacht die Handhabung von HappyHamster',
                date: '07.04.2020',
                icon: '/assets/icons/availability-moderate_white.png'
            },
            {
                id: 12,
                title: 'Produkt-Verfügbarkeit',
                titleENG: 'need toilet paper? we got you covered (also software)',
                content: 'Die Verfügbarkeit von häufig gehamsterten Produkten wie Klopapier und Nudeln wird angezeigt. Eine ' +
                    'Filterung der angezeigten Märkte nach Lager von bestimmten Produkten wird möglich sein, wodurch ' +
                    'der Besuch von mehreren Läden für den haushaltsüblichen Einkauf überflüssig wird.',
                date: '10.04.03.2020',
                icon: '/assets/icons/availability-full_white.png'
            },
            {
                id: 15,
                title: 'Android App',
                content: 'Um die Benutzung von Happy Hamster zu vereinfachen, wird die Website auch als  native Android App' +
                    ' angeboten.',
                date: '17.04.2020',
                icon: '/assets/icons/android_hamster_384.png'
            },
            {
                id: 18,
                title: 'iOS App',
                content: 'Nachdem bereits die Android App erfolgreich gewesen sein wird, wird auch Apple Nutzern die ' +
                    'Happy Hamster an die Haustüre (beziehungsweise den Home-Button) gebracht.',
                date: '20.04.2020',
                icon: '/assets/icons/apple_hamster_384.png'
            },
        ];
    }
    ngOnInit() {
    }
}
RoadmapComponent.ɵfac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(); };
RoadmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], decls: 11, vars: 1, consts: [[1, "content"], ["href", "index.html"], ["src", "assets/icons/happy-hamster-logo-text.svg", "width", "200px", "height", "auto", 1, "logo"], ["href", "https://wirvsvirushackathon.org/"], ["src", "assets/icons/wir_vs_virus_logo.png", "width", "200px", "height", "auto", 1, "logo", "projekt"], [3, "data"]], template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ROADMAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Das sind die n\u00E4chsten Schritte, die wir verfolgen um unsere Ziele zu erreichen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ng-vertical-timeline", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.milestones);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_2__["NgVerticalTimelineComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  color: var(--greenblue);\n  font-size: xx-large;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--greenblue);\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: fixed;\n  display: inline-block;\n  top: 60px;\n  left: 40px;\n  width: 100px;\n  z-index: 999;\n}\n.content[_ngcontent-%COMP%]   .logo.projekt[_ngcontent-%COMP%] {\n  top: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL3JvYWRtYXAvcm9hZG1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yb2FkbWFwL3JvYWRtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFlRSxhQUFBO0FDYkY7QURERTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjtBRERFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ0dKO0FEREU7RUFDRSxpQkFBQTtBQ0dKO0FEQ0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDREo7QURHSTtFQUNFLHFCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JvYWRtYXAvcm9hZG1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ncmVlbmJsdWUpO1xuICB9XG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgLmxvZ28ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDQwcHg7XG5cbiAgICB3aWR0aDogMTAwcHg7XG5cbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAmLnByb2pla3Qge1xuICAgICAgdG9wOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uY29udGVudCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG4uY29udGVudCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWdyZWVuYmx1ZSk7XG59XG4uY29udGVudCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uY29udGVudCAubG9nbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuLmNvbnRlbnQgLmxvZ28ucHJvamVrdCB7XG4gIHRvcDogMjAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap',
                templateUrl: './roadmap.component.html',
                styleUrls: ['./roadmap.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/location-provider.service */ "./src/app/core/services/location-provider.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../occupancy-view/occupancy-view.component */ "./src/app/components/occupancy-view/occupancy-view.component.ts");















function SearchBarComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const location_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.locationEmitted.emit(location_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-occupancy-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", location_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](location_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("occupancy", location_r9.occupancy);
} }
class SearchBarComponent {
    constructor(locationsService) {
        this.locationsService = locationsService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.locationEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.filteredLocations$ = this.locationsService.fetchLocations()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(locations => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(locations), this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
            if (!value) {
                return locations;
            }
            value = value.toLowerCase();
            return locations.filter(location => {
                if (!location.name) {
                    return false;
                }
                else {
                    return location.name.toLowerCase().includes(value);
                }
            });
        })))));
    }
    dismiss() {
        this.searchControl.setValue(null);
        this.autocomplete.closePanel();
        document.activeElement.blur();
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_5__["LocationProviderService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
    } }, outputs: { locationEmitted: "locationEmitted" }, decls: 9, vars: 5, consts: [[1, "search-bar-form"], ["matInput", "", "placeholder", "Supermarkt in der N\u00E4he suchen", "aria-label", "Supermarkt Suchen", 3, "matAutocomplete", "formControl"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matSuffix", ""], [3, "value", "click"], [1, "option"], [3, "occupancy"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchBarComponent_mat_option_5_Template, 6, 3, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r7)("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.filteredLocations$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _occupancy_view_occupancy_view_component__WEBPACK_IMPORTED_MODULE_11__["OccupancyViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".search-bar-form[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  padding: 0.35rem 1rem 0rem 1rem;\n  margin: 0;\n  min-width: 150px;\n  max-width: 700px;\n  width: 80%;\n  position: fixed;\n  top: 45px;\n  left: 120px;\n  right: auto;\n  box-shadow: 0 5px 20px 0 rgba(11, 0, 51, 0.2);\n}\n\n@media (max-width: 600px) {\n  .search-bar-form[_ngcontent-%COMP%] {\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    width: auto;\n    max-width: 600px;\n  }\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option-img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n\n  app-occupancy-view {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Vsc2hvbHovRG9jdW1lbnRzL2dpdGh1Yi9TQUtQYWFTL2Zyb250ZW5kL1NBS1BhYVMvc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLFdBQUE7QUNBRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXItZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjM1cmVtIDFyZW0gMHJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAxMjBweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggMCByZ2JhKDExLCAwLCA1MSwgMC4yKTtcbn1cbiAgXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlYXJjaC1iYXItZm9ybSB7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9wdGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCBhcHAtb2NjdXBhbmN5LXZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbiIsIi5zZWFyY2gtYmFyLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC4zNXJlbSAxcmVtIDByZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogMTIwcHg7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDAgcmdiYSgxMSwgMCwgNTEsIDAuMik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2VhcmNoLWJhci1mb3JtIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIGFwcC1vY2N1cGFuY3ktdmlldyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.scss']
            }]
    }], function () { return [{ type: _core_services_location_provider_service__WEBPACK_IMPORTED_MODULE_5__["LocationProviderService"] }]; }, { locationEmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/snack-bar/snack-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/snack-bar/snack-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/snack-bar.interface */ "./src/app/core/models/snack-bar.interface.ts");
/* harmony import */ var src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/snack-bar.service */ "./src/app/core/services/snack-bar.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





class SnackBarComponent {
    constructor(snackBarService, snackBar) {
        this.snackBarService = snackBarService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.snackBarService.getNotification().subscribe(notification => {
            const config = this.getConfigForSnackBarType(notification.type);
            console.log(config);
            this.snackBar.open(notification.message, 'X', config);
            console.log(notification);
        });
    }
    getConfigForSnackBarType(type) {
        if (type === src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_1__["SnackBarTypes"].ERROR) {
            return {
                duration: 4000,
                panelClass: ['error-snack-bar']
            };
        }
        if (type === src_app_core_models_snack_bar_interface__WEBPACK_IMPORTED_MODULE_1__["SnackBarTypes"].SUCCESS) {
            return {
                duration: 2000,
                panelClass: ['success-snack-bar']
            };
        }
        return null;
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
SnackBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackBarComponent, selectors: [["app-snack-bar"]], decls: 0, vars: 0, template: function SnackBarComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc25hY2stYmFyL3NuYWNrLWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-snack-bar',
                templateUrl: './snack-bar.component.html',
                styleUrls: ['./snack-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/snack-bar/snack-bar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/snack-bar/snack-bar.module.ts ***!
  \**********************************************************/
/*! exports provided: SnackBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarModule", function() { return SnackBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/snack-bar/snack-bar.component */ "./src/app/components/snack-bar/snack-bar.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





class SnackBarModule {
}
SnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SnackBarModule });
SnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SnackBarModule_Factory(t) { return new (t || SnackBarModule)(); }, imports: [[
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SnackBarModule, { declarations: [src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__["SnackBarComponent"]], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]], exports: [src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__["SnackBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__["SnackBarComponent"]
                ],
                imports: [
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"]
                ],
                exports: [
                    src_app_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_2__["SnackBarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/models/snack-bar.interface.ts":
/*!****************************************************!*\
  !*** ./src/app/core/models/snack-bar.interface.ts ***!
  \****************************************************/
/*! exports provided: SnackBarTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarTypes", function() { return SnackBarTypes; });
var SnackBarTypes;
(function (SnackBarTypes) {
    SnackBarTypes[SnackBarTypes["ERROR"] = 0] = "ERROR";
    SnackBarTypes[SnackBarTypes["SUCCESS"] = 1] = "SUCCESS";
})(SnackBarTypes || (SnackBarTypes = {}));


/***/ }),

/***/ "./src/app/core/services/gps.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/gps.service.ts ***!
  \**********************************************/
/*! exports provided: GpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsService", function() { return GpsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class GpsService {
    constructor() {
        this.coordinates = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setLocation(coordinates) {
        coordinates.fromDevice = false;
        this.coordinates.next(coordinates);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                console.log(longitude + ' - ' + latitude);
                this.coordinates.next({ longitude, latitude, fromDevice: true });
            });
            return this.coordinates;
        }
        else {
            console.log('No support for geolocation');
            return undefined;
        }
    }
}
GpsService.ɵfac = function GpsService_Factory(t) { return new (t || GpsService)(); };
GpsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GpsService, factory: GpsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GpsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/location-provider.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/location-provider.service.ts ***!
  \************************************************************/
/*! exports provided: LocationProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProviderService", function() { return LocationProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/generated/services */ "./src/app/generated/services.ts");
/* harmony import */ var _gps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gps.service */ "./src/app/core/services/gps.service.ts");






class LocationProviderService {
    constructor(locationApiService, gpsService) {
        this.locationApiService = locationApiService;
        this.gpsService = gpsService;
        this.isLoadingLocations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    fetchLocations() {
        return this.gpsService.getLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(gpsCoordinates => {
            if (!gpsCoordinates) {
                return undefined;
            }
            return this.locationApiService.searchLocations(gpsCoordinates);
        }));
    }
    fetchLocationById(id) {
        return this.locationApiService.locationsIdGet({ id });
    }
    updateLoadingState(value) {
        this.isLoadingLocations.next(value);
    }
    getLoadingLocationsState() {
        return this.isLoadingLocations;
    }
}
LocationProviderService.ɵfac = function LocationProviderService_Factory(t) { return new (t || LocationProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_generated_services__WEBPACK_IMPORTED_MODULE_3__["LocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_gps_service__WEBPACK_IMPORTED_MODULE_4__["GpsService"])); };
LocationProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationProviderService, factory: LocationProviderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_generated_services__WEBPACK_IMPORTED_MODULE_3__["LocationsService"] }, { type: _gps_service__WEBPACK_IMPORTED_MODULE_4__["GpsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/occupancy-provider.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/occupancy-provider.service.ts ***!
  \*************************************************************/
/*! exports provided: OccupancyProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupancyProviderService", function() { return OccupancyProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_generated_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/generated/services */ "./src/app/generated/services.ts");



class OccupancyProviderService {
    constructor(occupancyApiService) {
        this.occupancyApiService = occupancyApiService;
    }
    checkIn(id) {
        return this.occupancyApiService.locationsIdCheckInPost({ id });
    }
    sendOccupancy(id, occupancy) {
        return this.occupancyApiService.locationsIdOccupancyPost({ id, body: { occupancy, clientType: 'WEB_APP' } });
    }
}
OccupancyProviderService.ɵfac = function OccupancyProviderService_Factory(t) { return new (t || OccupancyProviderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_generated_services__WEBPACK_IMPORTED_MODULE_1__["OccupancyService"])); };
OccupancyProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OccupancyProviderService, factory: OccupancyProviderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupancyProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_generated_services__WEBPACK_IMPORTED_MODULE_1__["OccupancyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/snack-bar.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/snack-bar.service.ts ***!
  \****************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SnackBarService {
    constructor() {
        this.notification$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendNotification(notification) {
        this.notification$.next(notification);
    }
    getNotification() {
        return this.notification$;
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(); };
SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/generated/api-configuration.ts":
/*!************************************************!*\
  !*** ./src/app/generated/api-configuration.ts ***!
  \************************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* tslint:disable */


/**
 * Global configuration
 */
class ApiConfiguration {
    constructor() {
        this.rootUrl = 'https://virtserver.swaggerhub.com/SAKPaaS/SAKPaaS/1.0.0';
    }
}
ApiConfiguration.ɵfac = function ApiConfiguration_Factory(t) { return new (t || ApiConfiguration)(); };
ApiConfiguration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiConfiguration, factory: ApiConfiguration.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiConfiguration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/generated/api.module.ts":
/*!*****************************************!*\
  !*** ./src/app/generated/api.module.ts ***!
  \*****************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "./src/app/generated/api-configuration.ts");
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/locations.service */ "./src/app/generated/services/locations.service.ts");
/* harmony import */ var _services_occupancy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/occupancy.service */ "./src/app/generated/services/occupancy.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* tslint:disable */






/**
 * Module that provides all services and configuration.
 */
class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(params) {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"],
                    useValue: params
                }
            ]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], 8)); }, providers: [
        _services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"],
        _services_occupancy_service__WEBPACK_IMPORTED_MODULE_3__["OccupancyService"],
        _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                exports: [],
                declarations: [],
                providers: [
                    _services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"],
                    _services_occupancy_service__WEBPACK_IMPORTED_MODULE_3__["OccupancyService"],
                    _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]
                ],
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/generated/base-service.ts":
/*!*******************************************!*\
  !*** ./src/app/generated/base-service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-configuration */ "./src/app/generated/api-configuration.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* tslint:disable */




/**
 * Base class for services
 */
class BaseService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    /**
     * Returns the root url for all operations in this service. If not set directly in this
     * service, will fallback to `ApiConfiguration.rootUrl`.
     */
    get rootUrl() {
        return this._rootUrl || this.config.rootUrl;
    }
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl) {
        this._rootUrl = rootUrl;
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_1__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/generated/request-builder.ts":
/*!**********************************************!*\
  !*** ./src/app/generated/request-builder.ts ***!
  \**********************************************/
/*! exports provided: RequestBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBuilder", function() { return RequestBuilder; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
const ParameterCodecInstance = new ParameterCodec();
/**
 * Helper to build http requests from parameters
 */
class RequestBuilder {
    constructor(rootUrl, operationPath, method) {
        this.rootUrl = rootUrl;
        this.operationPath = operationPath;
        this.method = method;
        this._path = new Map();
        this._query = new Map();
        this._header = new Map();
    }
    /**
     * Sets a path parameter
     */
    path(name, value) {
        if (value !== null && value !== undefined) {
            this._path.set(name, value);
        }
    }
    /**
     * Sets a query parameter
     */
    query(name, value) {
        if (value !== null && value !== undefined) {
            this._query.set(name, value);
        }
    }
    /**
     * Sets a header parameter
     */
    header(name, value) {
        if (value !== null && value !== undefined) {
            this._header.set(name, value);
        }
    }
    /**
     * Sets the body content, along with the content type
     */
    body(value, contentType = 'application/json') {
        if (value instanceof Blob) {
            this._bodyContentType = value.type;
        }
        else {
            this._bodyContentType = contentType;
        }
        if (this._bodyContentType === 'application/x-www-form-urlencoded' && typeof value === 'object') {
            // Handle URL-encoded data
            const pairs = [];
            for (const key of Object.keys(value)) {
                let val = value[key];
                if (!(val instanceof Array)) {
                    val = [val];
                }
                for (const v of val) {
                    const formValue = this.formDataValue(v);
                    if (formValue !== null) {
                        pairs.push([key, formValue]);
                    }
                }
            }
            this._bodyContent = pairs.map(p => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join('&');
        }
        else if (this._bodyContentType === 'multipart/form-data') {
            // Handle multipart form data
            const formData = new FormData();
            if (value != null) {
                for (const key of Object.keys(value)) {
                    const val = value[key];
                    if (val instanceof Array) {
                        for (const v of val) {
                            const toAppend = this.formDataValue(v);
                            if (toAppend !== null) {
                                formData.append(key, toAppend);
                            }
                        }
                    }
                    else {
                        const toAppend = this.formDataValue(val);
                        if (toAppend !== null) {
                            formData.set(key, toAppend);
                        }
                    }
                }
            }
            this._bodyContent = formData;
        }
        else {
            // The body is the plain content
            this._bodyContent = value;
        }
    }
    formDataValue(value) {
        if (value === null || value === undefined) {
            return null;
        }
        if (value instanceof Blob) {
            return value;
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return String(value);
    }
    /**
     * Builds the request with the current set parameters
     */
    build(options) {
        options = options || {};
        // Path parameters
        let path = this.operationPath;
        for (const param of Array.from(this._path.keys())) {
            const item = this._path.get(param);
            path = path.replace(`{${param}}`, (item !== undefined && item !== null ? item : '').toString());
        }
        const url = this.rootUrl + path;
        // Query parameters
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: ParameterCodecInstance
        });
        for (const param of Array.from(this._query.keys())) {
            const value = this._query.get(param);
            if (value instanceof Array) {
                for (const item of value) {
                    httpParams = httpParams.append(param, (item !== undefined && item !== null ? item : '').toString());
                }
            }
            else {
                httpParams = httpParams.set(param, (value !== undefined && value !== null ? value : '').toString());
            }
        }
        // Header parameters
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        if (options.accept) {
            httpHeaders = httpHeaders.append('Accept', options.accept);
        }
        for (const param of Array.from(this._header.keys())) {
            const value = this._header.get(param);
            if (value instanceof Array) {
                for (const item of value) {
                    httpHeaders = httpHeaders.append(param, (item !== undefined && item !== null ? item : '').toString());
                }
            }
            else {
                httpHeaders = httpHeaders.set(param, (value !== undefined && value !== null ? value : '').toString());
            }
        }
        // Request content headers
        if (this._bodyContentType && !(this._bodyContent instanceof FormData)) {
            httpHeaders = httpHeaders.set('Content-Type', this._bodyContentType);
        }
        // Perform the request
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"](this.method.toUpperCase(), url, this._bodyContent, {
            params: httpParams,
            headers: httpHeaders,
            responseType: options.responseType,
            reportProgress: options.reportProgress
        });
    }
}


/***/ }),

/***/ "./src/app/generated/services.ts":
/*!***************************************!*\
  !*** ./src/app/generated/services.ts ***!
  \***************************************/
/*! exports provided: LocationsService, OccupancyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_locations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/locations.service */ "./src/app/generated/services/locations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return _services_locations_service__WEBPACK_IMPORTED_MODULE_0__["LocationsService"]; });

/* harmony import */ var _services_occupancy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/occupancy.service */ "./src/app/generated/services/occupancy.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OccupancyService", function() { return _services_occupancy_service__WEBPACK_IMPORTED_MODULE_1__["OccupancyService"]; });





/***/ }),

/***/ "./src/app/generated/services/locations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/generated/services/locations.service.ts ***!
  \*********************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "./src/app/generated/base-service.ts");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "./src/app/generated/request-builder.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "./src/app/generated/api-configuration.ts");
/* tslint:disable */








class LocationsService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Searches for locations in the given range.
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `searchLocations()` instead.
     *
     * This method doesn't expect any request body.
     */
    searchLocations$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LocationsService.SearchLocationsPath, 'get');
        if (params) {
            rb.query('latitude', params.latitude);
            rb.query('longitude', params.longitude);
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'application/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Searches for locations in the given range.
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `searchLocations$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    searchLocations(params) {
        return this.searchLocations$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Get details for a specific location.
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationsIdGet()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationsIdGet$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, LocationsService.LocationsIdGetPath, 'get');
        if (params) {
            rb.path('id', params.id);
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'application/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Get details for a specific location.
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `locationsIdGet$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationsIdGet(params) {
        return this.locationsIdGet$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation searchLocations
 */
LocationsService.SearchLocationsPath = '/locations';
/**
 * Path part for operation locationsIdGet
 */
LocationsService.LocationsIdGetPath = '/locations/{id}';
LocationsService.ɵfac = function LocationsService_Factory(t) { return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationsService, factory: LocationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/generated/services/occupancy.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/generated/services/occupancy.service.ts ***!
  \*********************************************************/
/*! exports provided: OccupancyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupancyService", function() { return OccupancyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-service */ "./src/app/generated/base-service.ts");
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-builder */ "./src/app/generated/request-builder.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-configuration */ "./src/app/generated/api-configuration.ts");
/* tslint:disable */








class OccupancyService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Add or remove current capacity.
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationsIdOccupancyPost()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationsIdOccupancyPost$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, OccupancyService.LocationsIdOccupancyPostPath, 'post');
        if (params) {
            rb.path('id', params.id);
            rb.body(params.body, 'application/json');
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'application/json'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r;
        }));
    }
    /**
     * Add or remove current capacity.
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `locationsIdOccupancyPost$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    locationsIdOccupancyPost(params) {
        return this.locationsIdOccupancyPost$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
    /**
     * Check in to the Supermarket.
     *
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `locationsIdCheckInPost()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationsIdCheckInPost$Response(params) {
        const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_3__["RequestBuilder"](this.rootUrl, OccupancyService.LocationsIdCheckInPostPath, 'post');
        if (params) {
            rb.path('id', params.id);
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: '*/*'
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((r) => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            return r.clone({ body: undefined });
        }));
    }
    /**
     * Check in to the Supermarket.
     *
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `locationsIdCheckInPost$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    locationsIdCheckInPost(params) {
        return this.locationsIdCheckInPost$Response(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => r.body));
    }
}
/**
 * Path part for operation locationsIdOccupancyPost
 */
OccupancyService.LocationsIdOccupancyPostPath = '/locations/{id}/occupancy';
/**
 * Path part for operation locationsIdCheckInPost
 */
OccupancyService.LocationsIdCheckInPostPath = '/locations/{id}/check-in';
OccupancyService.ɵfac = function OccupancyService_Factory(t) { return new (t || OccupancyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OccupancyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OccupancyService, factory: OccupancyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OccupancyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _api_configuration__WEBPACK_IMPORTED_MODULE_5__["ApiConfiguration"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/elsholz/Documents/github/SAKPaaS/frontend/SAKPaaS/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/elsholz/Documents/github/SAKPaaS/frontend/SAKPaaS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map