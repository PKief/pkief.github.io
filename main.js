(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/pkief.github.io/pkief.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "0KI/":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/scroll-down-indicator/scroll-down-indicator.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"show-more-icon-panel\" appShowOnTop>\n  <button\n    id=\"show-more-icon\"\n    mat-icon-button\n    (click)=\"scrollDown()\"\n    aria-label=\"Button to scroll to the next section\"\n  >\n    <mat-icon>keyboard_arrow_down</mat-icon>\n  </button>\n</div>\n");

/***/ }),

/***/ "0k1G":
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material/material.module */ "jAig");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-list/project-list.component */ "o1Ev");





let ProjectModule = class ProjectModule {
};
ProjectModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"]],
    })
], ProjectModule);



/***/ }),

/***/ "0njA":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_icon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./icon.component.html */ "2/GR");
/* harmony import */ var _icon_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.component.scss */ "5RNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_icon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/icon.service */ "GkIu");





let IconComponent = class IconComponent {
    constructor(iconService) {
        this.iconService = iconService;
    }
    ngOnInit() {
        this.iconsRegistered = this.iconService.iconsRegistered;
    }
};
IconComponent.ctorParameters = () => [
    { type: src_app_core_icon_service__WEBPACK_IMPORTED_MODULE_4__["IconService"] }
];
IconComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
IconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-icon',
        template: _raw_loader_icon_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_icon_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IconComponent);



/***/ }),

/***/ "2/GR":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/icon/icon.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-icon\n  class=\"app-icon\"\n  *ngIf=\"iconsRegistered | async\"\n  [svgIcon]=\"icon\"\n></mat-icon>\n");

/***/ }),

/***/ "2d8i":
/*!******************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "2xn/":
/*!******************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "3WvY":
/*!******************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "4Xmu":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfileEntries() {
        const profileUrl = ['assets', 'profile.json'].join('/');
        return this.http.get(profileUrl);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ProfileService);



/***/ }),

/***/ "5RNA":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "6c6k":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/social-links/social-links.component.ts ***!
  \**************************************************************************/
/*! exports provided: SocialLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinksComponent", function() { return SocialLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_links_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-links.component.html */ "pxKQ");
/* harmony import */ var _social_links_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-links.component.scss */ "je2/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SocialLinksComponent = class SocialLinksComponent {
    constructor() { }
    ngOnInit() { }
};
SocialLinksComponent.ctorParameters = () => [];
SocialLinksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-social-links',
        template: _raw_loader_social_links_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_social_links_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SocialLinksComponent);



/***/ }),

/***/ "8KRF":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/sponsor-button/sponsor-button.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9uc29yLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AYYD":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "AytR":
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CSrH":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/section/section.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #section class=\"section full-height center-content\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "DRec":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project-list/project-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  id=\"project-cards\"\n  class=\"mt-3 container flex-wrap align-items-center justify-content-center\"\n>\n  <div\n    class=\"project-card\"\n    *ngFor=\"let project of projects | async\"\n    data-aos=\"fade-in\"\n  >\n    <img\n      class=\"project-image\"\n      width=\"100px\"\n      [src]=\"project.image\"\n      [alt]=\"project.imageAlt\"\n    />\n    <h2 class=\"project-title\">{{ project.name }}</h2>\n\n    <p class=\"project-description\">{{ project.description }}</p>\n    <div class=\"button-group\">\n      <button\n        mat-stroked-button\n        color=\"primary\"\n        (click)=\"goToLink(project.url)\"\n      >\n        <span>Open</span>\n      </button>\n      <button class=\"ms-2\" mat-button (click)=\"goToLink(project.sourceUrl)\">\n        Source\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "GcYP":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article-list/article-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"article-cards\" class=\"mt-3 container\">\n  <div\n    class=\"article-card mb-5 row\"\n    *ngFor=\"let article of articles | async\"\n    data-aos=\"fade-in\"\n  >\n    <div class=\"col-12 col-md-3\">\n      <div\n        class=\"article-image mb-3\"\n        [style.backgroundImage]=\"'url(' + article.image + ')'\"\n      ></div>\n    </div>\n    <div class=\"article-details col-12 col-md-9\">\n      <h2 class=\"article-title px-2\">{{ article.title }}</h2>\n\n      <p class=\"article-description px-2 pb-2\">{{ article.subtitle }}</p>\n      <button\n        mat-stroked-button\n        color=\"primary\"\n        (click)=\"goToLink(article.url)\"\n      >\n        <span>Read</span>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "GkIu":
/*!**************************************!*\
  !*** ./src/app/core/icon.service.ts ***!
  \**************************************/
/*! exports provided: IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let IconService = class IconService {
    constructor(iconRegistry, sanitizer, http) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.http = http;
        this.iconsRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
    }
    getIconNames() {
        const iconsConfigUrl = ['assets', 'icons.json'].join('/');
        return this.http.get(iconsConfigUrl);
    }
    registerIcons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const iconNames = yield this.getIconNames().toPromise();
            iconNames.forEach((name) => {
                this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`));
            });
            this.iconsRegistered.next(true);
        });
    }
};
IconService.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
IconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], IconService);



/***/ }),

/***/ "HgZ1":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/show-on-top.directive.ts ***!
  \************************************************************/
/*! exports provided: ShowOnTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnTopDirective", function() { return ShowOnTopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ShowOnTopDirective = class ShowOnTopDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        this.renderer.addClass(this.el.nativeElement, 'animate__animated');
        const fadeInClass = 'animate__fadeInUp';
        const fadeOutClass = 'animate__fadeOutUp';
        const threshold = 50; // pixel
        this.toggleVisibility(threshold, fadeInClass, fadeOutClass);
        window.onscroll = () => {
            this.toggleVisibility(threshold, fadeInClass, fadeOutClass);
        };
    }
    toggleVisibility(threshold, fadeInClass, fadeOutClass) {
        if (window.scrollY > threshold) {
            this.renderer.removeClass(this.el.nativeElement, fadeInClass);
            this.renderer.addClass(this.el.nativeElement, fadeOutClass);
        }
        else {
            this.renderer.removeStyle(this.el.nativeElement, 'display');
            this.renderer.removeClass(this.el.nativeElement, fadeOutClass);
            this.renderer.addClass(this.el.nativeElement, fadeInClass);
        }
    }
};
ShowOnTopDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ShowOnTopDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appShowOnTop]',
    })
], ShowOnTopDirective);



/***/ }),

/***/ "MCr2":
/*!********************************************!*\
  !*** ./src/app/article/article.service.ts ***!
  \********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
    }
    getArticles() {
        const articlesUrl = ['assets', 'articles.json'].join('/');
        return this.http.get(articlesUrl);
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ArticleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ArticleService);



/***/ }),

/***/ "NkXe":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/section/section.component.ts ***!
  \****************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section.component.html */ "CSrH");
/* harmony import */ var _section_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.component.scss */ "VMN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SectionComponent = class SectionComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.colorTheme = 'primary';
    }
    ngAfterViewInit() {
        if (this.colorTheme) {
            this.section.nativeElement.classList.add(this.colorTheme);
        }
    }
};
SectionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
SectionComponent.propDecorators = {
    section: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['section',] }],
    colorTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-section',
        template: _raw_loader_section_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_section_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionComponent);



/***/ }),

/***/ "OPFr":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n  <app-social-links></app-social-links>\n  <app-sponsor-button class=\"mt-4\"></app-sponsor-button>\n  <p class=\"copyright mt-4\">Philipp Kief &copy; {{ year }}</p>\n</div>\n");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icon/icon.component */ "0njA");
/* harmony import */ var _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scroll-down-indicator/scroll-down-indicator.component */ "UAKb");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section/section.component */ "NkXe");
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/social-links/social-links.component */ "6c6k");
/* harmony import */ var _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sponsor-button/sponsor-button.component */ "t3f0");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "S9hJ");
/* harmony import */ var _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/show-on-top.directive */ "HgZ1");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material/material.module */ "jAig");












let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_10__["ShowOnTopDirective"],
            _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_5__["ScrollDownIndicatorComponent"],
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
            _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__["SocialLinksComponent"],
            _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_8__["SponsorButtonComponent"],
        ],
        imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [
            _material_material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_10__["ShowOnTopDirective"],
            _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_5__["ScrollDownIndicatorComponent"],
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
            _components_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SectionComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"],
            _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__["SocialLinksComponent"],
            _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_8__["SponsorButtonComponent"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "Rfd6":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "S9hJ":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toolbar.component.html */ "nZXH");
/* harmony import */ var _toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.component.scss */ "Rfd6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var src_app_core_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/theme.service */ "hX6R");






let ToolbarComponent = class ToolbarComponent {
    constructor(renderer, themeService) {
        this.renderer = renderer;
        this.themeService = themeService;
        this.hasScrolled = false;
    }
    onScroll() {
        this.toggleVisibility();
        this.hasScrolled = true;
    }
    ngOnInit() {
        this.theme = this.themeService.theme;
    }
    toggleVisibility() {
        const scrollTop = document.scrollingElement.scrollTop;
        const clientHeight = document.scrollingElement.clientHeight;
        const toolbarElement = this.toolbar._elementRef
            .nativeElement;
        const fadeInAnimation = 'animate__fadeInDown';
        const fadeOutAnimation = 'animate__fadeOutUp';
        const hideClass = 'hide';
        const threshold = 200;
        if (scrollTop + threshold > clientHeight) {
            this.renderer.removeClass(toolbarElement, fadeOutAnimation);
            this.renderer.removeClass(toolbarElement, hideClass);
            this.renderer.addClass(toolbarElement, fadeInAnimation);
        }
        else if (this.hasScrolled) {
            this.renderer.removeClass(toolbarElement, fadeInAnimation);
            this.renderer.addClass(toolbarElement, fadeOutAnimation);
        }
    }
    ngAfterViewInit() {
        this.renderer.addClass(this.toolbar._elementRef.nativeElement, 'animate__animated');
        this.toggleVisibility();
    }
    toggleTheme() {
        this.themeService.toggleTheme();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: src_app_core_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"] }
];
ToolbarComponent.propDecorators = {
    toolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"],] }],
    onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:scroll', ['$event'],] }]
};
ToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toolbar',
        template: _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToolbarComponent);



/***/ }),

/***/ "SGKc":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/scroll-down-indicator/scroll-down-indicator.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGwtZG93bi1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/icon.service */ "GkIu");
/* harmony import */ var _core_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/theme.service */ "hX6R");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.service */ "hBHG");








let AppComponent = class AppComponent {
    constructor(projectService, themeService, iconService) {
        this.projectService = projectService;
        this.themeService = themeService;
        this.iconService = iconService;
    }
    ngOnInit() {
        this.projects = this.projectService.getProjects();
        this.theme = this.themeService.theme;
        this.iconService.registerIcons();
    }
    ngAfterViewInit() {
        aos__WEBPACK_IMPORTED_MODULE_4___default.a.init({
            duration: 1000,
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] },
    { type: _core_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"] },
    { type: _core_icon_service__WEBPACK_IMPORTED_MODULE_5__["IconService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UAKb":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/scroll-down-indicator/scroll-down-indicator.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScrollDownIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDownIndicatorComponent", function() { return ScrollDownIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scroll_down_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scroll-down-indicator.component.html */ "0KI/");
/* harmony import */ var _scroll_down_indicator_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-down-indicator.component.scss */ "SGKc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ScrollDownIndicatorComponent = class ScrollDownIndicatorComponent {
    constructor() { }
    ngOnInit() { }
    scrollDown() {
        window.scrollBy({
            behavior: 'smooth',
            top: window.innerHeight,
        });
    }
};
ScrollDownIndicatorComponent.ctorParameters = () => [];
ScrollDownIndicatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scroll-down-indicator',
        template: _raw_loader_scroll_down_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_scroll_down_indicator_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScrollDownIndicatorComponent);



/***/ }),

/***/ "VMN3":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/section/section.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\" [ngClass]=\"theme | async\">\n  <app-toolbar></app-toolbar>\n  <app-scroll-down-indicator></app-scroll-down-indicator>\n  <app-section [colorTheme]=\"'primary'\">\n    <div>\n      <img\n        id=\"profile-image\"\n        src=\"assets/profile-image.jpg\"\n        alt=\"Profile Image\"\n      />\n    </div>\n    <div class=\"title\">Philipp Kief</div>\n    <div class=\"subtitle\">Software Engineer</div>\n    <app-social-links></app-social-links>\n    <app-sponsor-button class=\"mt-4\"></app-sponsor-button>\n  </app-section>\n  <app-section [colorTheme]=\"'tertiary'\">\n    <h1 data-aos=\"fade-in\">Profile</h1>\n    <app-profile-list></app-profile-list>\n  </app-section>\n  <app-section [colorTheme]=\"'secondary'\">\n    <h1 data-aos=\"fade-in\">Projects</h1>\n    <app-project-list></app-project-list>\n  </app-section>\n  <app-section [colorTheme]=\"'tertiary'\">\n    <h1 data-aos=\"fade-in\">Articles</h1>\n    <app-article-list></app-article-list>\n  </app-section>\n  <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "Ws2R":
/*!****************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_article_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./article-list.component.html */ "GcYP");
/* harmony import */ var _article_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list.component.scss */ "2d8i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article.service */ "MCr2");





let ArticleListComponent = class ArticleListComponent {
    constructor(articleService) {
        this.articleService = articleService;
    }
    ngOnInit() {
        this.articles = this.articleService.getArticles();
    }
    goToLink(url) {
        window.open(url, '_blank');
    }
};
ArticleListComponent.ctorParameters = () => [
    { type: _article_service__WEBPACK_IMPORTED_MODULE_4__["ArticleService"] }
];
ArticleListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-article-list',
        template: _raw_loader_article_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_article_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArticleListComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article/article.module */ "rZHr");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.module */ "cRhG");
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project.module */ "0k1G");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_9__["ProfileModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _project_project_module__WEBPACK_IMPORTED_MODULE_10__["ProjectModule"],
            _article_article_module__WEBPACK_IMPORTED_MODULE_7__["ArticleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "OPFr");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "AYYD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
    get year() {
        return new Date().getFullYear();
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-list/profile-list.component */ "k7LS");





let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_4__["ProfileListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_4__["ProfileListComponent"]],
    })
], ProfileModule);



/***/ }),

/***/ "cyuv":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sponsor-button/sponsor-button.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"sponsor-button\" mat-stroked-button href=\"https://github.com/sponsors/PKief\" target=\"blank\">\n  <mat-icon class=\"donate-icon\">favorite_border</mat-icon>\n  Sponsor\n</a>\n");

/***/ }),

/***/ "hBHG":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
    }
    getProjects() {
        const projectsUrl = ['assets', 'projects.json'].join('/');
        return this.http.get(projectsUrl);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ProjectService);



/***/ }),

/***/ "hX6R":
/*!***************************************!*\
  !*** ./src/app/core/theme.service.ts ***!
  \***************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let ThemeService = class ThemeService {
    constructor() {
        var _a;
        this.availableThemes = ['dark-theme', 'light-theme'];
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('light-theme');
        const theme = sessionStorage.getItem(window.location.host);
        this.colorSchemeMedia = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)');
        this.addPrefersColorEventListener();
        if (theme) {
            this.theme.next(theme);
            this.removePrefersColorSchemaEventListener();
        }
        else {
            if (this.colorSchemeMedia.matches) {
                this.theme.next('dark-theme');
            }
        }
    }
    toggleTheme() {
        if (this.theme.value === 'dark-theme') {
            this.changeTheme('light-theme');
        }
        else {
            this.changeTheme('dark-theme');
        }
    }
    /**
     * Change the current theme.
     * Saved in the local storage to reuse it for the next session.
     * @param theme Theme name
     */
    changeTheme(theme) {
        if (this.availableThemes.indexOf(theme) !== -1) {
            this.theme.next(theme);
            sessionStorage.setItem(window.location.host, theme);
            this.removePrefersColorSchemaEventListener();
        }
    }
    addPrefersColorEventListener() {
        this.colorSchemeMedia.addEventListener('change', this.getPrefersColorSchemeCallback(this.theme));
    }
    removePrefersColorSchemaEventListener() {
        this.colorSchemeMedia.removeEventListener('change', this.getPrefersColorSchemeCallback(this.theme));
    }
    /**
     * Check if theme is available
     * @param theme Theme name
     */
    validateTheme(theme) {
        return this.availableThemes.some((t) => t === theme);
    }
    getPrefersColorSchemeCallback(theme) {
        return (e) => {
            const themeName = e.matches ? 'dark-theme' : 'light-theme';
            theme.next(themeName);
        };
    }
};
ThemeService.ctorParameters = () => [];
ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ThemeService);



/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");










const appearance = {
    appearance: 'outline',
};
const modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ...modules],
        exports: [...modules],
        providers: [
            {
                provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
                useValue: appearance,
            },
        ],
    })
], MaterialModule);



/***/ }),

/***/ "je2/":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/social-links/social-links.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jlb4":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-list/profile-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  id=\"profile-list\"\n  class=\"mt-3 container d-flex flex-wrap align-items-center justify-content-center\"\n>\n  <div\n    data-aos=\"fade-in\"\n    class=\"profile-entry\"\n    *ngFor=\"let entry of profileEntries | async\"\n  >\n    <mat-icon>{{ entry.icon }}</mat-icon>\n    <div class=\"profile-title\">{{ entry.title }}</div>\n    <h2 class=\"profile-content\">\n      {{ entry.content }}\n    </h2>\n  </div>\n</div>\n");

/***/ }),

/***/ "k7LS":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function() { return ProfileListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-list.component.html */ "jlb4");
/* harmony import */ var _profile_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-list.component.scss */ "2xn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile.service */ "4Xmu");





let ProfileListComponent = class ProfileListComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    ngOnInit() {
        this.profileEntries = this.profileService.getProfileEntries();
    }
};
ProfileListComponent.ctorParameters = () => [
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }
];
ProfileListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile-list',
        template: _raw_loader_profile_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_profile_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileListComponent);



/***/ }),

/***/ "nZXH":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/toolbar/toolbar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar id=\"toolbar\" class=\"fixed-top hide\">\n  <div class=\"container\">\n    <div class=\"toolbar-title-area\">\n      <a href=\"/\" class=\"toolbar-title\">Philipp Kief</a>\n    </div>\n    <div class=\"dark-mode-toggle-area\">\n      <button\n        mat-icon-button\n        matTooltip=\"Toggle Dark Mode\"\n        aria-label=\"Button to toggle dark mode\"\n        (click)=\"toggleTheme()\"\n      >\n        <mat-icon>{{\n          (theme | async) === \"dark-theme\" ? \"wb_sunny\" : \"brightness_2\"\n        }}</mat-icon>\n      </button>\n    </div>\n  </div>\n</mat-toolbar>\n");

/***/ }),

/***/ "o1Ev":
/*!****************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-list.component.html */ "DRec");
/* harmony import */ var _project_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list.component.scss */ "3WvY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "hBHG");





let ProjectListComponent = class ProjectListComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
    goToLink(url) {
        window.open(url, '_blank');
    }
};
ProjectListComponent.ctorParameters = () => [
    { type: _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }
];
ProjectListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-list',
        template: _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_project_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectListComponent);



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
    })
], CoreModule);



/***/ }),

/***/ "pxKQ":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/social-links/social-links.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"social\">\n  <a target=\"_blank\" href=\"https://github.com/PKief\">\n    <app-icon icon=\"github\"></app-icon>\n  </a>\n  <a target=\"_blank\" href=\"https://twitter.com/PhilippKief\">\n    <app-icon icon=\"twitter\"></app-icon>\n  </a>\n  <a\n    target=\"_blank\"\n    href=\"https://stackoverflow.com/users/6942210/philipp-kief\"\n  >\n    <app-icon icon=\"stack-overflow\"></app-icon>\n  </a>\n  <a href=\"mailto:philipp.kief@gmx.de\">\n    <app-icon icon=\"email\"></app-icon>\n  </a>\n</div>\n");

/***/ }),

/***/ "rZHr":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material/material.module */ "jAig");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-list/article-list.component */ "Ws2R");





let ArticleModule = class ArticleModule {
};
ArticleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__["ArticleListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_4__["ArticleListComponent"]],
    })
], ArticleModule);



/***/ }),

/***/ "t3f0":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/sponsor-button/sponsor-button.component.ts ***!
  \******************************************************************************/
/*! exports provided: SponsorButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorButtonComponent", function() { return SponsorButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sponsor_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sponsor-button.component.html */ "cyuv");
/* harmony import */ var _sponsor_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sponsor-button.component.scss */ "8KRF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SponsorButtonComponent = class SponsorButtonComponent {
    constructor() { }
    ngOnInit() {
    }
};
SponsorButtonComponent.ctorParameters = () => [];
SponsorButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sponsor-button',
        template: _raw_loader_sponsor_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_sponsor_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SponsorButtonComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map