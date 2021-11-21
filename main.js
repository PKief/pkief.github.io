"use strict";
(self["webpackChunkpersonal_website"] = self["webpackChunkpersonal_website"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 3799);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project.service */ 1063);
/* harmony import */ var _core_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/theme.service */ 3814);
/* harmony import */ var _core_icon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/icon.service */ 6987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/toolbar/toolbar.component */ 5350);
/* harmony import */ var _shared_components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/scroll-down-indicator/scroll-down-indicator.component */ 4683);
/* harmony import */ var _shared_components_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/section/section.component */ 1156);
/* harmony import */ var _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/social-links/social-links.component */ 5417);
/* harmony import */ var _shared_components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/sponsor-button/sponsor-button.component */ 4775);
/* harmony import */ var _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile-list/profile-list.component */ 5873);
/* harmony import */ var _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project-list/project-list.component */ 9348);
/* harmony import */ var _article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article-list/article-list.component */ 7968);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 5736);















class AppComponent {
  constructor(projectService, themeService, iconService) {
    this.projectService = projectService;
    this.themeService = themeService;
    this.iconService = iconService;
    this.projects = this.projectService.getProjects();
    this.theme = this.themeService.theme;
  }

  ngOnInit() {
    this.iconService.registerIcons();
    this.detectStickyHeaders();
  }

  ngAfterViewInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
  }

  detectStickyHeaders() {
    const stickyHeaders = document.querySelectorAll('.sticky-header');
    const observer = new IntersectionObserver(([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1), {
      rootMargin: '-1px 0px 0px 0px',
      threshold: [1]
    });
    stickyHeaders.forEach(header => {
      observer.observe(header);
    });
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_project_project_service__WEBPACK_IMPORTED_MODULE_1__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_icon_service__WEBPACK_IMPORTED_MODULE_3__.IconService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 26,
  vars: 7,
  consts: [[1, "app", 3, "ngClass"], [3, "colorTheme"], ["id", "profile-image", "src", "assets/profile-image.jpg", "alt", "Profile Image"], [1, "title"], [1, "subtitle"], [1, "mt-4"], ["data-aos", "fade-in", "data-aos-offset", "200", 1, "sticky-header"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "app-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-scroll-down-indicator");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "app-section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Philipp Kief");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Software Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "app-social-links");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "app-sponsor-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "app-section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, " Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "app-profile-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "app-section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-project-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "app-section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, " Articles ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "app-article-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 5, ctx.theme)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colorTheme", "primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colorTheme", "tertiary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colorTheme", "secondary");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colorTheme", "tertiary");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__.ToolbarComponent, _shared_components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_5__.ScrollDownIndicatorComponent, _shared_components_section_section_component__WEBPACK_IMPORTED_MODULE_6__.SectionComponent, _shared_components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_7__.SocialLinksComponent, _shared_components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_8__.SponsorButtonComponent, _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_9__.ProfileListComponent, _project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_10__.ProjectListComponent, _article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_11__.ArticleListComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/article.module */ 8654);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 4596);
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.module */ 4404);
/* harmony import */ var _project_project_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.module */ 7698);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 1382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__.ProfileModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _project_project_module__WEBPACK_IMPORTED_MODULE_5__.ProjectModule,
            _article_article_module__WEBPACK_IMPORTED_MODULE_2__.ArticleModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__.ProfileModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _project_project_module__WEBPACK_IMPORTED_MODULE_5__.ProjectModule,
        _article_article_module__WEBPACK_IMPORTED_MODULE_2__.ArticleModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule] }); })();


/***/ }),

/***/ 7968:
/*!****************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": () => (/* binding */ ArticleListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../article.service */ 1283);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7752);





function ArticleListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArticleListComponent_div_1_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const article_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r2.goToLink(article_r1.url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + article_r1.image + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.subtitle);
  }
}

class ArticleListComponent {
  constructor(articleService) {
    this.articleService = articleService;
    this.articles = this.articleService.getArticles();
  }

  goToLink(url) {
    window.open(url, '_blank');
  }

}

ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
  return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_0__.ArticleService));
};

ArticleListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticleListComponent,
  selectors: [["app-article-list"]],
  decls: 3,
  vars: 3,
  consts: [["id", "article-cards", 1, "mt-3", "container"], ["class", "article-card mb-5 row", "data-aos", "fade-in", 4, "ngFor", "ngForOf"], ["data-aos", "fade-in", 1, "article-card", "mb-5", "row"], [1, "col-12", "col-md-3"], [1, "article-image", "mb-3"], [1, "article-details", "col-12", "col-md-9"], [1, "article-title", "px-2"], [1, "article-description", "px-2", "pb-2"], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
  template: function ArticleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ArticleListComponent_div_1_Template, 11, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.articles));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8654:
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleModule": () => (/* binding */ ArticleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/material/material.module */ 1002);
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list/article-list.component */ 7968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class ArticleModule {
}
ArticleModule.ɵfac = function ArticleModule_Factory(t) { return new (t || ArticleModule)(); };
ArticleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule], exports: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__.ArticleListComponent] }); })();


/***/ }),

/***/ 1283:
/*!********************************************!*\
  !*** ./src/app/article/article.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);


class ArticleService {
    constructor(http) {
        this.http = http;
    }
    getArticles() {
        const articlesUrl = ['assets', 'articles.json'].join('/');
        return this.http.get(articlesUrl);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ArticleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4596:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule] }); })();


/***/ }),

/***/ 6987:
/*!**************************************!*\
  !*** ./src/app/core/icon.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconService": () => (/* binding */ IconService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_pkief_github_io_pkief_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);






class IconService {
  constructor(iconRegistry, sanitizer, http) {
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
    this.http = http;
    this.iconsRegistered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
  }

  registerIcons() {
    var _this = this;

    return (0,_home_runner_work_pkief_github_io_pkief_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const iconNames = yield _this.getIconNames().toPromise();
      iconNames.forEach(name => {
        _this.iconRegistry.addSvgIcon(name, _this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`));
      });

      _this.iconsRegistered.next(true);
    })();
  }

  getIconNames() {
    const iconsConfigUrl = ['assets', 'icons.json'].join('/');
    return this.http.get(iconsConfigUrl);
  }

}

IconService.ɵfac = function IconService_Factory(t) {
  return new (t || IconService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

IconService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IconService,
  factory: IconService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3814:
/*!***************************************!*\
  !*** ./src/app/core/theme.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class ThemeService {
    constructor() {
        var _a;
        this.availableThemes = ['dark-theme', 'light-theme'];
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('light-theme');
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
     * Change the current theme. Saved in the local storage to reuse it for the next session.
     *
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
     *
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
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5873:
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileListComponent": () => (/* binding */ ProfileListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile.service */ 1971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 8852);





function ProfileListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", entry_r1.content, " ");
  }
}

class ProfileListComponent {
  constructor(profileService) {
    this.profileService = profileService;
    this.profileEntries = this.profileService.getProfileEntries();
  }

}

ProfileListComponent.ɵfac = function ProfileListComponent_Factory(t) {
  return new (t || ProfileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};

ProfileListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfileListComponent,
  selectors: [["app-profile-list"]],
  decls: 3,
  vars: 3,
  consts: [["id", "profile-list", 1, "mt-3", "container", "d-flex", "flex-wrap", "align-items-center", "justify-content-center"], ["data-aos", "fade-in", "class", "profile-entry", 4, "ngFor", "ngForOf"], ["data-aos", "fade-in", 1, "profile-entry"], [1, "profile-title"], [1, "profile-content"]],
  template: function ProfileListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileListComponent_div_1_Template, 7, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.profileEntries));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4404:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-list/profile-list.component */ 5873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_1__.ProfileListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_1__.ProfileListComponent] }); })();


/***/ }),

/***/ 1971:
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);


class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getProfileEntries() {
        const profileUrl = ['assets', 'profile.json'].join('/');
        return this.http.get(profileUrl);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9348:
/*!****************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectListComponent": () => (/* binding */ ProjectListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project.service */ 1063);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7752);





function ProjectListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectListComponent_div_1_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const project_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r2.goToLink(project_r1.url);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectListComponent_div_1_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const project_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r4.goToLink(project_r1.sourceUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imageAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.description);
  }
}

class ProjectListComponent {
  constructor(projectService) {
    this.projectService = projectService;
    this.projects = this.projectService.getProjects();
  }

  goToLink(url) {
    window.open(url, '_blank');
  }

}

ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) {
  return new (t || ProjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService));
};

ProjectListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectListComponent,
  selectors: [["app-project-list"]],
  decls: 3,
  vars: 3,
  consts: [["id", "project-cards", 1, "mt-3", "container", "flex-wrap", "align-items-center", "justify-content-center"], ["class", "project-card", "data-aos", "fade-in", 4, "ngFor", "ngForOf"], ["data-aos", "fade-in", 1, "project-card"], ["width", "100px", 1, "project-image", 3, "src", "alt"], [1, "project-title"], [1, "project-description"], [1, "button-group"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-button", "", 1, "ms-2", 3, "click"]],
  template: function ProjectListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectListComponent_div_1_Template, 12, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.projects));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 7698:
/*!*******************************************!*\
  !*** ./src/app/project/project.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModule": () => (/* binding */ ProjectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/material/material.module */ 1002);
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list/project-list.component */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class ProjectModule {
}
ProjectModule.ɵfac = function ProjectModule_Factory(t) { return new (t || ProjectModule)(); };
ProjectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectModule });
ProjectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectModule, { declarations: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__.ProjectListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule], exports: [_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_1__.ProjectListComponent] }); })();


/***/ }),

/***/ 1063:
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);


class ProjectService {
    constructor(http) {
        this.http = http;
    }
    getProjects() {
        const projectsUrl = ['assets', 'projects.json'].join('/');
        return this.http.get(projectsUrl);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProjectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5736:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../social-links/social-links.component */ 5417);
/* harmony import */ var _sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sponsor-button/sponsor-button.component */ 4775);



class FooterComponent {
    constructor() { }
    get year() {
        return new Date().getFullYear();
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 1, consts: [[1, "footer"], [1, "mt-4"], [1, "copyright", "mt-4"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-social-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sponsor-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Philipp Kief \u00A9 ", ctx.year, "");
    } }, directives: [_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_0__.SocialLinksComponent, _sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_1__.SponsorButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 1301:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_core_icon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/icon.service */ 6987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 8852);





function IconComponent_mat_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 1);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx_r0.icon);
  }
}

class IconComponent {
  constructor(iconService) {
    this.iconService = iconService;
    this.iconsRegistered = this.iconService.iconsRegistered;
  }

}

IconComponent.ɵfac = function IconComponent_Factory(t) {
  return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_icon_service__WEBPACK_IMPORTED_MODULE_0__.IconService));
};

IconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: IconComponent,
  selectors: [["app-icon"]],
  inputs: {
    icon: "icon"
  },
  decls: 2,
  vars: 3,
  consts: [["class", "app-icon", 3, "svgIcon", 4, "ngIf"], [1, "app-icon", 3, "svgIcon"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IconComponent_mat_icon_0_Template, 1, 1, "mat-icon", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.icon && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.iconsRegistered));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 4683:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/scroll-down-indicator/scroll-down-indicator.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollDownIndicatorComponent": () => (/* binding */ ScrollDownIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/show-on-top.directive */ 328);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 8852);




class ScrollDownIndicatorComponent {
    constructor() { }
    ngOnInit() { }
    scrollDown() {
        window.scrollBy({
            behavior: 'smooth',
            top: window.innerHeight,
        });
    }
}
ScrollDownIndicatorComponent.ɵfac = function ScrollDownIndicatorComponent_Factory(t) { return new (t || ScrollDownIndicatorComponent)(); };
ScrollDownIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollDownIndicatorComponent, selectors: [["app-scroll-down-indicator"]], decls: 4, vars: 0, consts: [["id", "show-more-icon-panel", "appShowOnTop", ""], ["id", "show-more-icon", "mat-icon-button", "", "aria-label", "Button to scroll to the next section", 3, "click"]], template: function ScrollDownIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollDownIndicatorComponent_Template_button_click_1_listener() { return ctx.scrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_0__.ShowOnTopDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JvbGwtZG93bi1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 1156:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/section/section.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionComponent": () => (/* binding */ SectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const _c0 = ["section"];
const _c1 = ["*"];
class SectionComponent {
    constructor() {
        this.colorTheme = 'primary';
    }
    ngAfterViewInit() {
        if (this.colorTheme) {
            this.section.nativeElement.classList.add(this.colorTheme);
        }
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], viewQuery: function SectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.section = _t.first);
    } }, inputs: { colorTheme: "colorTheme" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "section", "full-height", "center-content"], ["section", ""]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 5417:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/social-links/social-links.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialLinksComponent": () => (/* binding */ SocialLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/icon.component */ 1301);


class SocialLinksComponent {
    constructor() { }
    ngOnInit() { }
}
SocialLinksComponent.ɵfac = function SocialLinksComponent_Factory(t) { return new (t || SocialLinksComponent)(); };
SocialLinksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocialLinksComponent, selectors: [["app-social-links"]], decls: 9, vars: 0, consts: [[1, "social"], ["target", "_blank", "href", "https://github.com/PKief"], ["icon", "github"], ["target", "_blank", "href", "https://twitter.com/PhilippKief"], ["icon", "twitter"], ["target", "_blank", "href", "https://stackoverflow.com/users/6942210/philipp-kief"], ["icon", "stack-overflow"], ["href", "mailto:philipp.kief@gmx.de"], ["icon", "email"]], template: function SocialLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4775:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/sponsor-button/sponsor-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorButtonComponent": () => (/* binding */ SponsorButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 8852);



class SponsorButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
SponsorButtonComponent.ɵfac = function SponsorButtonComponent_Factory(t) { return new (t || SponsorButtonComponent)(); };
SponsorButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SponsorButtonComponent, selectors: [["app-sponsor-button"]], decls: 4, vars: 0, consts: [["mat-stroked-button", "", "href", "https://github.com/sponsors/PKief", "target", "blank", 1, "sponsor-button"], [1, "donate-icon"]], template: function SponsorButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sponsor\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9uc29yLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ 5350:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/toolbar/toolbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_core_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/theme.service */ 3814);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);








class ToolbarComponent {
  constructor(renderer, themeService) {
    this.renderer = renderer;
    this.themeService = themeService;
    this.hasScrolled = false;
    this.theme = this.themeService.theme;
  }

  onScroll() {
    this.toggleVisibility();
    this.hasScrolled = true;
  }

  ngAfterViewInit() {
    this.renderer.addClass( // eslint-disable-next-line no-underscore-dangle
    this.toolbar._elementRef.nativeElement, 'animate__animated');
    this.toggleVisibility();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleVisibility() {
    var _a, _b;

    const scrollTop = (_a = document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTop;
    const clientHeight = (_b = document.scrollingElement) === null || _b === void 0 ? void 0 : _b.clientHeight;

    if (scrollTop === undefined || clientHeight === undefined) {
      return;
    } // eslint-disable-next-line no-underscore-dangle


    const toolbarElement = this.toolbar._elementRef.nativeElement;
    const fadeInAnimation = 'animate__fadeInDown';
    const fadeOutAnimation = 'animate__fadeOutUp';
    const hideClass = 'hide';
    const threshold = 200;

    if (scrollTop + threshold > clientHeight) {
      this.renderer.removeClass(toolbarElement, fadeOutAnimation);
      this.renderer.removeClass(toolbarElement, hideClass);
      this.renderer.addClass(toolbarElement, fadeInAnimation);
    } else if (this.hasScrolled) {
      this.renderer.removeClass(toolbarElement, fadeInAnimation);
      this.renderer.addClass(toolbarElement, fadeOutAnimation);
    }
  }

}

ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
  return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};

ToolbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ToolbarComponent,
  selectors: [["app-toolbar"]],
  viewQuery: function ToolbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toolbar = _t.first);
    }
  },
  hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ToolbarComponent_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    }
  },
  decls: 10,
  vars: 3,
  consts: [["id", "toolbar", 1, "fixed-top", "hide"], [1, "container"], [1, "toolbar-title-area"], ["href", "/", 1, "toolbar-title"], [1, "dark-mode-toggle-area"], ["mat-icon-button", "", "matTooltip", "Toggle Dark Mode", "aria-label", "Button to toggle dark mode", 3, "click"]],
  template: function ToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Philipp Kief");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_6_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 1, ctx.theme) === "dark-theme" ? "wb_sunny" : "brightness_2");
    }
  },
  directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 328:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/show-on-top.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowOnTopDirective": () => (/* binding */ ShowOnTopDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ShowOnTopDirective {
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
}
ShowOnTopDirective.ɵfac = function ShowOnTopDirective_Factory(t) { return new (t || ShowOnTopDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ShowOnTopDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShowOnTopDirective, selectors: [["", "appShowOnTop", ""]] });


/***/ }),

/***/ 1002:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);









const appearance = {
    appearance: 'outline',
};
const modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: appearance,
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, ...modules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule] }); })();


/***/ }),

/***/ 1382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer/footer.component */ 5736);
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icon/icon.component */ 1301);
/* harmony import */ var _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scroll-down-indicator/scroll-down-indicator.component */ 4683);
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section/section.component */ 1156);
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/social-links/social-links.component */ 5417);
/* harmony import */ var _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sponsor-button/sponsor-button.component */ 4775);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 5350);
/* harmony import */ var _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/show-on-top.directive */ 328);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ 1002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);











class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule], _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_7__.ShowOnTopDirective,
        _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_2__.ScrollDownIndicatorComponent,
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.ToolbarComponent,
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__.SectionComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent,
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__.SocialLinksComponent,
        _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_5__.SponsorButtonComponent], imports: [_material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule], exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule,
        _directives_show_on_top_directive__WEBPACK_IMPORTED_MODULE_7__.ShowOnTopDirective,
        _components_scroll_down_indicator_scroll_down_indicator_component__WEBPACK_IMPORTED_MODULE_2__.ScrollDownIndicatorComponent,
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.ToolbarComponent,
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_3__.SectionComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent,
        _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_4__.SocialLinksComponent,
        _components_sponsor_button_sponsor_button_component__WEBPACK_IMPORTED_MODULE_5__.SponsorButtonComponent] }); })();


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map