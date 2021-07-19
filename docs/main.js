(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\musictube\src\main.ts */"zUnb");


/***/ }),

/***/ "62pO":
/*!***********************************************************!*\
  !*** ./src/app/shared/time-input/time-input.component.ts ***!
  \***********************************************************/
/*! exports provided: TimeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeInputComponent", function() { return TimeInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");




const _c0 = ["secondsInput"];
const _c1 = ["minutesInput"];
const _c2 = ["hoursInput"];
class TimeInputComponent {
    constructor() {
        /**
         * Private backing for fieldsEnabled
         */
        this._fieldsEnabled = true;
        /**
         * Backing data for isReadOnly
         */
        this._isReadOnly = false;
        /**
         * EventEmitter used the user changes on of the inputs. Emits the time in seconds.
         */
        this.timeInputChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Determines whether the input fields shoulds be enabled or not.
     */
    get fieldsEnabled() {
        return this._fieldsEnabled;
    }
    set fieldsEnabled(value) {
        this._fieldsEnabled = value;
    }
    /**
     * Flag for if the field should be readonly.
     */
    set isReadOnly(value) {
        this._isReadOnly = value;
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
    /**
     * Initialization code.
     */
    ngOnInit() {
        if (this.isReadOnly) {
            this.inputType = "text";
        }
        else {
            this.inputType = "number";
        }
    }
    /**
     * Sets the input values by calculating the hours, minutes, and leftover seconds.
     *
     * @param seconds The number of seconds to update the inputs to.
     */
    setInputValuesBySeconds(seconds) {
        this._hoursInput.nativeElement.value = Math.floor(seconds / 3600);
        this._minutesInput.nativeElement.value = Math.floor(seconds / 60 % 60);
        this._secondInput.nativeElement.value = Math.floor(seconds % 60);
    }
    /**
     * @returns The conversion of the inputs to the total number of seconds.
     */
    getSeconds() {
        let result = 0;
        result += Number(this._hoursInput.nativeElement.value) * 3600;
        result += Number(this._minutesInput.nativeElement.value) * 60;
        result += Number(this._secondInput.nativeElement.value);
        return result;
    }
    /**
     * Event handler for when one of the input fields are changed.
     */
    onInputChange() {
        this.timeInputChangedEvent.emit(this.getSeconds());
    }
}
TimeInputComponent.ɵfac = function TimeInputComponent_Factory(t) { return new (t || TimeInputComponent)(); };
TimeInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeInputComponent, selectors: [["app-time-input"]], viewQuery: function TimeInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._secondInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._minutesInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._hoursInput = _t.first);
    } }, inputs: { fieldsEnabled: "fieldsEnabled", isReadOnly: "isReadOnly" }, outputs: { timeInputChangedEvent: "timeInputChangedEvent" }, decls: 15, vars: 9, consts: [["appearance", "fill", 1, "number-input"], ["matInput", "", "min", "0", "max", "999", "value", "0", "pattern", "[0-9]*", 3, "disabled", "readonly", "type", "change"], ["hoursInput", ""], ["matInput", "", "min", "0", "max", "60", "value", "0", "pattern", "[0-9]*", 3, "disabled", "readonly", "type", "change"], ["minutesInput", ""], ["secondsInput", ""]], template: function TimeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeInputComponent_Template_input_change_3_listener() { return ctx.onInputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeInputComponent_Template_input_change_8_listener() { return ctx.onInputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeInputComponent_Template_input_change_13_listener() { return ctx.onInputChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.fieldsEnabled)("readonly", ctx.isReadOnly)("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.fieldsEnabled)("readonly", ctx.isReadOnly)("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.fieldsEnabled)("readonly", ctx.isReadOnly)("type", ctx.inputType);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"]], styles: [".number-input[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  margin-left: 2px;\r\n  margin-right: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RpbWUtaW5wdXQvdGltZS1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGltZS1pbnB1dC90aW1lLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtYmVyLWlucHV0IHtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-time-input',
                templateUrl: './time-input.component.html',
                styleUrls: ['./time-input.component.css']
            }]
    }], null, { _secondInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["secondsInput", { static: true }]
        }], _minutesInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["minutesInput", { static: true }]
        }], _hoursInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["hoursInput", { static: true }]
        }], fieldsEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isReadOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeInputChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BX34":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class NavComponent {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry.addSvgIcon("github_logo", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/github-circle-white-transparent.svg"));
    }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 10, vars: 0, consts: [["color", "primary"], [1, "spacer"], ["mat-raised-button", ""], ["href", "https://github.com/codyleftwich/musictube", "target", "_blank", 2, "color", "inherit"], [1, "mat-button-wrapper"], ["svgIcon", "github_logo", "aria-hidden", "false"], [2, "margin-left", "4px", "padding-top", "4px"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MusicTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.mat-button-wrapper[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXdyYXBwZXI+aW1nIC5tYXQtYnV0dG9uLXdyYXBwZXI+c3BhbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Bi8Q":
/*!**************************************************************************!*\
  !*** ./src/app/youtube-video-wrapper/youtube-video-wrapper.component.ts ***!
  \**************************************************************************/
/*! exports provided: YoutubeVideoWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoWrapperComponent", function() { return YoutubeVideoWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _youtube_video_youtube_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube-video/youtube-video.component */ "iLbM");
/* harmony import */ var _youtube_video_controls_youtube_video_controls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube-video-controls/youtube-video-controls.component */ "o0wr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _youtube_loop_controls_youtube_loop_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube-loop-controls/youtube-loop-controls.component */ "tw5r");








const _c0 = ["video"];
const _c1 = ["loopController"];
class YoutubeVideoWrapperComponent {
    constructor() {
        /**
         * The default video to be shown when the page is loaded.
         */
        this._defaultVideoId = 'HyHNuVaZJ-k';
    }
    /**
     * Intialization code.
     */
    ngOnInit() {
        this.videoSettings = {
            videoId: this._defaultVideoId,
            playbackSpeed: 1.0,
            isPlaying: false,
            hasStarted: false,
            videoLength: 0
        };
        this.loopSettings = {
            startTime: 0,
            endTime: 0,
            loopDelay: 0,
            isLooping: false
        };
    }
    /**
     * Event handler for when video settings are changed by the video controller.
     * @param videoSettings The updated video settings.
     */
    onVideoSettingsChanged(videoSettings) {
        if (!this.videoSettings.hasStarted) {
            this.loopSettings.isLooping = false;
            this._setLoopSettings(this.loopSettings);
        }
        this._setVideoSettings(videoSettings);
    }
    /**
     * Event handler for when loop settings are changed by the loop controller.
     * @param loopSettings The updated loop settings.
     */
    onLoopSettingsChanged(loopSettings) {
        this._setLoopSettings(loopSettings);
    }
    /**
     * Event handler for getting the current time from the video to set as the start time for the loop
     */
    onCaptureStartTime() {
        this.loopSettings.startTime = this._video.getCurrentTime();
        this._setLoopSettings(this.loopSettings);
    }
    /**
     * Event handler for getting the current time from the video to set as the end time for the loop
     */
    onCaptureEndTime() {
        this.loopSettings.endTime = this._video.getCurrentTime();
        this._setLoopSettings(this.loopSettings);
    }
    /**
     * Sets the video settings across the components that share it.
     * @param videoSettings The new value for the video settings.
     */
    _setVideoSettings(videoSettings) {
        this.videoSettings = videoSettings;
        this._video.videoSettings = this.videoSettings;
        this._loopControl.videoSettings = this.videoSettings;
    }
    /**
     * Sets the loop settings across the components that share it.
     * @param loopSettings The new value for the loop settings.
     */
    _setLoopSettings(loopSettings) {
        this.loopSettings = loopSettings;
        this._video.loopSettings = this.loopSettings;
        this._loopControl.loopSettings = this.loopSettings;
    }
}
YoutubeVideoWrapperComponent.ɵfac = function YoutubeVideoWrapperComponent_Factory(t) { return new (t || YoutubeVideoWrapperComponent)(); };
YoutubeVideoWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeVideoWrapperComponent, selectors: [["app-youtube-video-wrapper"]], viewQuery: function YoutubeVideoWrapperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._loopControl = _t.first);
    } }, decls: 15, vars: 6, consts: [["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "fxFlex", "0 1 calc(50%)", 1, "mt-fill"], ["fxFlex", "0 1 calc(50%)", "fxLayoutAlign", "center center"], [1, "mt-fill", 3, "videoSettings", "loopSettings", "onVideoSettingsChanged", "onLoopSettingsChanged"], ["video", ""], [1, "mt-fill", 3, "videoSettings", "onVideoSettingsChanged"], ["videoController", ""], ["fxFlex", "0 1 calc(50%)", "fxLayoutAlign", "center center", 2, "max-height", "50%"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "mt-card-layout"], [2, "height", "100%", "overflow-y", "scroll", 3, "src"], [1, "mt-fill", 3, "videoSettings", "loopSettings", "onLoopSettingsChanged", "captureStartTimeEvent", "captureEndTimeEvent"], ["loopController", ""]], template: function YoutubeVideoWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-youtube-video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onVideoSettingsChanged", function YoutubeVideoWrapperComponent_Template_app_youtube_video_onVideoSettingsChanged_3_listener($event) { return ctx.onVideoSettingsChanged($event); })("onLoopSettingsChanged", function YoutubeVideoWrapperComponent_Template_app_youtube_video_onLoopSettingsChanged_3_listener($event) { return ctx.onLoopSettingsChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-youtube-video-controls", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onVideoSettingsChanged", function YoutubeVideoWrapperComponent_Template_app_youtube_video_controls_onVideoSettingsChanged_6_listener($event) { return ctx.onVideoSettingsChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "markdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-youtube-loop-controls", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLoopSettingsChanged", function YoutubeVideoWrapperComponent_Template_app_youtube_loop_controls_onLoopSettingsChanged_13_listener($event) { return ctx.onLoopSettingsChanged($event); })("captureStartTimeEvent", function YoutubeVideoWrapperComponent_Template_app_youtube_loop_controls_captureStartTimeEvent_13_listener() { return ctx.onCaptureStartTime(); })("captureEndTimeEvent", function YoutubeVideoWrapperComponent_Template_app_youtube_loop_controls_captureEndTimeEvent_13_listener() { return ctx.onCaptureEndTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoSettings", ctx.videoSettings)("loopSettings", ctx.loopSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoSettings", ctx.videoSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/user_manual.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoSettings", ctx.videoSettings)("loopSettings", ctx.loopSettings);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _youtube_video_youtube_video_component__WEBPACK_IMPORTED_MODULE_2__["YoutubeVideoComponent"], _youtube_video_controls_youtube_video_controls_component__WEBPACK_IMPORTED_MODULE_3__["YoutubeVideoControlsComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"], _youtube_loop_controls_youtube_loop_controls_component__WEBPACK_IMPORTED_MODULE_6__["YoutubeLoopControlsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW8td3JhcHBlci95b3V0dWJlLXZpZGVvLXdyYXBwZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeVideoWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-video-wrapper',
                templateUrl: './youtube-video-wrapper.component.html',
                styleUrls: ['./youtube-video-wrapper.component.css']
            }]
    }], null, { _video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["video", { static: true }]
        }], _loopControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["loopController", { static: true }]
        }] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "BX34");
/* harmony import */ var _time_input_time_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time-input/time-input.component */ "62pO");











const ngModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            ...ngModules,
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _time_input_time_input_component__WEBPACK_IMPORTED_MODULE_9__["TimeInputComponent"]], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _time_input_time_input_component__WEBPACK_IMPORTED_MODULE_9__["TimeInputComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _time_input_time_input_component__WEBPACK_IMPORTED_MODULE_9__["TimeInputComponent"]],
                imports: [
                    ...ngModules,
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                exports: [
                    ...ngModules,
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _time_input_time_input_component__WEBPACK_IMPORTED_MODULE_9__["TimeInputComponent"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/nav/nav.component */ "BX34");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'musictube';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["fxLayout", "column", "fxFill", ""], [1, "mt-fill"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _youtube_video_wrapper_youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../youtube-video-wrapper/youtube-video-wrapper.component */ "Bi8Q");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-youtube-video-wrapper");
    } }, directives: [_youtube_video_wrapper_youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["YoutubeVideoWrapperComponent"]], styles: [".gridList[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWRMaXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _youtube_video_wrapper_youtube_video_wrapper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./youtube-video-wrapper/youtube-video-wrapper.module */ "oJjA");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _metronome_metronome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metronome/metronome.component */ "hVXi");














const ngModules = [
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            ...ngModules,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _youtube_video_wrapper_youtube_video_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["YoutubeVideoWrapperModule"],
        ], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _metronome_metronome_component__WEBPACK_IMPORTED_MODULE_12__["MetronomeComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _youtube_video_wrapper_youtube_video_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["YoutubeVideoWrapperModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _metronome_metronome_component__WEBPACK_IMPORTED_MODULE_12__["MetronomeComponent"]
                ],
                imports: [
                    ...ngModules,
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _youtube_video_wrapper_youtube_video_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["YoutubeVideoWrapperModule"],
                ],
                exports: [
                    ...ngModules
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hVXi":
/*!**************************************************!*\
  !*** ./src/app/metronome/metronome.component.ts ***!
  \**************************************************/
/*! exports provided: MetronomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetronomeComponent", function() { return MetronomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MetronomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MetronomeComponent.ɵfac = function MetronomeComponent_Factory(t) { return new (t || MetronomeComponent)(); };
MetronomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetronomeComponent, selectors: [["app-metronome"]], decls: 2, vars: 0, template: function MetronomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "metronome works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldHJvbm9tZS9tZXRyb25vbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetronomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-metronome',
                templateUrl: './metronome.component.html',
                styleUrls: ['./metronome.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iLbM":
/*!********************************************************************************!*\
  !*** ./src/app/youtube-video-wrapper/youtube-video/youtube-video.component.ts ***!
  \********************************************************************************/
/*! exports provided: YoutubeVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoComponent", function() { return YoutubeVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");






const _c0 = ["player"];
/**
 * Component responsible for interaction with the YouTube video.
 */
class YoutubeVideoComponent {
    constructor() {
        /**
         * Flag for when the user is waiting for a loop.
         */
        this._waitingForLoop = false;
        /**
         * The sound played when _beepInterval is counting seconds.
         */
        this._beepAudio = new Audio("assets/audio/beep.wav");
        /**
         * EventEmitter used when video settings are changed.
         */
        this.onVideoSettingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * EventEmitter used when loop settings are changed.
         */
        this.onLoopSettingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Video settings to be piped through to the youtube video container.
     */
    get videoSettings() {
        return this._videoSettings;
    }
    set videoSettings(videoSettings) {
        this._videoSettings = videoSettings;
        this._onSettingsChange();
    }
    /**
     * Getter/Setter for loop settings input
     */
    get loopSettings() {
        return this._loopSettings;
    }
    set loopSettings(loopSettings) {
        this._loopSettings = loopSettings;
    }
    /**
     * Initialization code.
     */
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        this._beepAudio.volume = .8;
        this._stateChangeSubscription = this._youtubePlayer.stateChange.subscribe((value) => {
            if (value.data == 1 /* PLAYING */) {
                this.videoSettings.isPlaying = true;
                this.videoSettings.hasStarted = true;
                // Exit the loop when the user plays before the loop delay has finished.
                if (this._waitingForLoop) {
                    this.loopSettings.isLooping = false;
                    this._waitingForLoop = false;
                    clearInterval(this._beepInterval);
                    this.onLoopSettingsChanged.emit(this.loopSettings);
                }
            }
            else if (value.data == 2 /* PAUSED */) {
                this.videoSettings.isPlaying = false;
                this.videoSettings.hasStarted = true;
                // Exit the loop when the user pauses during it.
                if (this.loopSettings.isLooping && this._youtubePlayer.getCurrentTime() != this.loopSettings.startTime) {
                    this.loopSettings.isLooping = false;
                    this.onLoopSettingsChanged.emit(this.loopSettings);
                }
            }
            else if (value.data == -1 /* UNSTARTED */) {
                this.videoSettings.hasStarted = false;
                this.loopSettings.isLooping = false;
                this.onLoopSettingsChanged.emit(this.loopSettings);
            }
            this.videoSettings.videoLength = this._youtubePlayer.getDuration();
            this.onVideoSettingsChanged.emit(this.videoSettings);
        });
        this._playbackRateSubscription = this._youtubePlayer.playbackRateChange.subscribe((value) => {
            if (value.data != this._videoSettings.playbackSpeed) {
                this.videoSettings.playbackSpeed = value.data;
                this.onVideoSettingsChanged.emit(this.videoSettings);
            }
        });
        this._loopPoll = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(30)
            .subscribe(() => {
            if (!this._waitingForLoop && this.loopSettings.isLooping && this.getCurrentTime() >= this.loopSettings.endTime) {
                this._loopVideo();
            }
        });
    }
    /**
     * Cleanup code.
     */
    ngOnDestroy() {
        this._stateChangeSubscription.unsubscribe();
        this._playbackRateSubscription.unsubscribe();
        this._loopPoll.unsubscribe();
    }
    /**
     * Gets the current timestamp of the video in seconds.
     * @returns The current timestamp of the video in seconds.
     */
    getCurrentTime() {
        return this._youtubePlayer.getCurrentTime();
    }
    /**
     * Plays video after it was paused during looping.
     */
    _loopVideo() {
        this._youtubePlayer.pauseVideo();
        this._youtubePlayer.seekTo(this._loopSettings.startTime, true);
        this._waitingForLoop = true;
        setTimeout(() => {
            clearInterval(this._beepInterval);
            this._youtubePlayer.playVideo();
            this._waitingForLoop = false;
        }, this._loopSettings.loopDelay * 1000);
        if (this._loopSettings.loopDelay != 0) {
            this._beepAudio.play();
            this._beepInterval = setInterval(() => {
                this._beepAudio.play();
            }, 1000);
        }
    }
    /**
     * Update the youtube video based on incoming changes.
     */
    _onSettingsChange() {
        if (this.videoSettings.isPlaying) {
            if (this._youtubePlayer.getPlayerState() != 1 /* PLAYING */) {
                this._youtubePlayer.playVideo();
            }
        }
        else {
            if (this._youtubePlayer.getPlayerState() == 1 /* PLAYING */) {
                this._youtubePlayer.pauseVideo();
            }
        }
        if (this._youtubePlayer.getPlaybackRate() != this.videoSettings.playbackSpeed) {
            this._youtubePlayer.setPlaybackRate(this.videoSettings.playbackSpeed);
        }
        if (this._youtubePlayer.videoId != this._videoSettings.videoId) {
            this._youtubePlayer.videoId = this._videoSettings.videoId;
        }
    }
}
YoutubeVideoComponent.ɵfac = function YoutubeVideoComponent_Factory(t) { return new (t || YoutubeVideoComponent)(); };
YoutubeVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeVideoComponent, selectors: [["app-youtube-video"]], viewQuery: function YoutubeVideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._youtubePlayer = _t.first);
    } }, inputs: { videoSettings: "videoSettings", loopSettings: "loopSettings" }, outputs: { onVideoSettingsChanged: "onVideoSettingsChanged", onLoopSettingsChanged: "onLoopSettingsChanged" }, decls: 3, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "mt-card-layout"], [3, "videoId"], ["player", ""]], template: function YoutubeVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.videoSettings.videoId);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './youtube-video.component.html',
                selector: 'app-youtube-video'
            }]
    }], null, { _youtubePlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["player", { static: true }]
        }], videoSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loopSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onVideoSettingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onLoopSettingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "o0wr":
/*!**************************************************************************************************!*\
  !*** ./src/app/youtube-video-wrapper/youtube-video-controls/youtube-video-controls.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: YoutubeVideoControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoControlsComponent", function() { return YoutubeVideoControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");










/**
 * Component used to manage the UI video controls.
 */
class YoutubeVideoControlsComponent {
    constructor() {
        /**
         * EventEmitter used when video settings are changed.
         */
        this.onVideoSettingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Getter/Setter for video settings input
     */
    get videoSettings() {
        return this._videoSettings;
    }
    set videoSettings(videoSettings) {
        this._videoSettings = videoSettings;
    }
    /**
     * Event handler for when the user clicks the "Change Video" button.
     */
    onChangeVideo(data) {
        if (data.videoId != this.videoSettings.videoId) {
            this.videoSettings.videoId = data.videoId;
            this.videoSettings.playbackSpeed = 1.0; // Reset the playback speed.
            this.onVideoSettingsChanged.emit(this.videoSettings);
        }
    }
    /**
     * Event handler for when the playback speed slider is changed.
     * @param value The value represented by the position of the slider.
     */
    onChangePlaybackSpeed(value) {
        this.videoSettings.playbackSpeed = value;
        this.onVideoSettingsChanged.emit(this.videoSettings);
    }
    /**
     * Plays the video.
     */
    playVideo() {
        if (!this.videoSettings.isPlaying) {
            this.videoSettings.isPlaying = true;
            this.onVideoSettingsChanged.emit(this.videoSettings);
        }
    }
    /**
     * Pauses the video.
     */
    pauseVideo() {
        if (this.videoSettings.isPlaying) {
            this.videoSettings.isPlaying = false;
            this.onVideoSettingsChanged.emit(this.videoSettings);
        }
    }
    /**
     * Formats the value shown on the slider thumb.
     * @param value The value of the slider.
     * @returns The string representation of the value to be shown on the slider thumb.
     */
    formatLabel(value) {
        return value;
    }
}
YoutubeVideoControlsComponent.ɵfac = function YoutubeVideoControlsComponent_Factory(t) { return new (t || YoutubeVideoControlsComponent)(); };
YoutubeVideoControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeVideoControlsComponent, selectors: [["app-youtube-video-controls"]], inputs: { videoSettings: "videoSettings" }, outputs: { onVideoSettingsChanged: "onVideoSettingsChanged" }, decls: 36, vars: 7, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "mt-card-half"], ["fxLayout", "row", "fxFlex", "0 1 calc(100%)", "fxLayoutAlign", "center center"], [3, "inset"], ["fxLayout", "row", "fxFlex", "0 1 calc(100%)", "fxLayoutAlign", "center space-between", "fxLayoutGap", "20px"], ["fxFlex", "0 1 calc(20% - 20px)", "fxLayoutAlign", "end center"], ["mat-raised-button", "", 3, "click"], ["fxFlex", "0 1 calc(30% - 20px)", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "ngSubmit"], ["videoIdForm", "ngForm"], ["fxFlex", "0 1 calc(30% - 20px)", "fxLayoutAlign", "end center"], ["appearance", "fill", 2, "margin-right", "10px"], ["matInput", "", "placeholder", "VideoId", "name", "videoId", 3, "ngModel"], ["fxFlex", "0 1 calc(20% - 20px)", "fxLayoutAlign", "start center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 2, "margin-left", "10px"], ["fxLayout", "row", "fxFlex", "0 1 calc(100%)", "fxLayoutAlign", "center center", "fxLayoutGap", "20px"], ["fxFlex", "0 1 calc(70% - 20px)", "fxLayoutAlign", "center center"], ["thumbLabel", "", "tickInterval", "1", "step", ".05", "min", ".25", "max", "2.0", "aria-label", "units", 3, "disabled", "displayWith", "ngModel", "change"], ["fxFlex", "0 1 calc(30% - 20px)", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxFill", "", "fxLayoutAlign", "space-between center"]], template: function YoutubeVideoControlsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Video Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubeVideoControlsComponent_Template_button_click_7_listener() { return ctx.playVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubeVideoControlsComponent_Template_button_click_10_listener() { return ctx.pauseVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pause Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function YoutubeVideoControlsComponent_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.onChangeVideo(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Video Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Change Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Playback Speed Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-slider", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function YoutubeVideoControlsComponent_Template_mat_slider_change_29_listener($event) { return ctx.onChangePlaybackSpeed($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Current Playback Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.videoSettings.videoId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.videoSettings.hasStarted)("displayWith", ctx.formatLabel)("ngModel", ctx.videoSettings.playbackSpeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoSettings.playbackSpeed);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"]], styles: [".mt-card-half[_ngcontent-%COMP%] {\r\n  height: calc(50% - 15px);\r\n  width: calc(100% - 20px);\r\n  box-sizing: border-box;\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n\r\n\r\n\r\n  .mat-accent .mat-slider-thumb-label-text {\r\n  color: #fff;\r\n}\r\n\r\n  .mat-accent .mat-slider-track-fill,   .mat-accent .mat-slider-thumb,   .mat-accent .mat-slider-thumb-label {\r\n  background-color: rgb(123, 31, 162);\r\n}\r\n\r\n  .mat-slider-horizontal {\r\n  width: 100%;\r\n}\r\n\r\n  .mat-slider-vertical {\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS12aWRlby13cmFwcGVyL3lvdXR1YmUtdmlkZW8tY29udHJvbHMveW91dHViZS12aWRlby1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtdmlkZW8td3JhcHBlci95b3V0dWJlLXZpZGVvLWNvbnRyb2xzL3lvdXR1YmUtdmlkZW8tY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdC1jYXJkLWhhbGYge1xyXG4gIGhlaWdodDogY2FsYyg1MCUgLSAxNXB4KTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi8qIE92ZXJyaWRlcyAqL1xyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLFxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXHJcbjo6bmctZGVlcCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMywgMzEsIDE2Mik7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeVideoControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-video-controls',
                templateUrl: './youtube-video-controls.component.html',
                styleUrls: ['./youtube-video-controls.component.css']
            }]
    }], null, { videoSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onVideoSettingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "oJjA":
/*!***********************************************************************!*\
  !*** ./src/app/youtube-video-wrapper/youtube-video-wrapper.module.ts ***!
  \***********************************************************************/
/*! exports provided: YoutubeVideoWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoWrapperModule", function() { return YoutubeVideoWrapperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _youtube_video_youtube_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./youtube-video/youtube-video.component */ "iLbM");
/* harmony import */ var _youtube_video_controls_youtube_video_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./youtube-video-controls/youtube-video-controls.component */ "o0wr");
/* harmony import */ var _youtube_loop_controls_youtube_loop_controls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./youtube-loop-controls/youtube-loop-controls.component */ "tw5r");
/* harmony import */ var _youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./youtube-video-wrapper.component */ "Bi8Q");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




















const ngModules = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
];
class YoutubeVideoWrapperModule {
}
YoutubeVideoWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YoutubeVideoWrapperModule });
YoutubeVideoWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YoutubeVideoWrapperModule_Factory(t) { return new (t || YoutubeVideoWrapperModule)(); }, imports: [[
            ...ngModules,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"] }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YoutubeVideoWrapperModule, { declarations: [_youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["YoutubeVideoWrapperComponent"],
        _youtube_video_youtube_video_component__WEBPACK_IMPORTED_MODULE_12__["YoutubeVideoComponent"],
        _youtube_video_controls_youtube_video_controls_component__WEBPACK_IMPORTED_MODULE_13__["YoutubeVideoControlsComponent"],
        _youtube_loop_controls_youtube_loop_controls_component__WEBPACK_IMPORTED_MODULE_14__["YoutubeLoopControlsComponent"]], imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["YoutubeVideoWrapperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeVideoWrapperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["YoutubeVideoWrapperComponent"],
                    _youtube_video_youtube_video_component__WEBPACK_IMPORTED_MODULE_12__["YoutubeVideoComponent"],
                    _youtube_video_controls_youtube_video_controls_component__WEBPACK_IMPORTED_MODULE_13__["YoutubeVideoControlsComponent"],
                    _youtube_loop_controls_youtube_loop_controls_component__WEBPACK_IMPORTED_MODULE_14__["YoutubeLoopControlsComponent"]
                ],
                imports: [
                    ...ngModules,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"] }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]
                ],
                exports: [
                    ...ngModules,
                    _youtube_video_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["YoutubeVideoWrapperComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tw5r":
/*!************************************************************************************************!*\
  !*** ./src/app/youtube-video-wrapper/youtube-loop-controls/youtube-loop-controls.component.ts ***!
  \************************************************************************************************/
/*! exports provided: YoutubeLoopControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeLoopControlsComponent", function() { return YoutubeLoopControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _shared_time_input_time_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/time-input/time-input.component */ "62pO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







const _c0 = ["startTimeInput"];
const _c1 = ["endTimeInput"];
/**
 * Component responsible for managing and handling the loop controls.
 */
class YoutubeLoopControlsComponent {
    constructor() {
        /**
         * The text displayed in the loop toggle button.
         */
        this.loopButtonText = YoutubeLoopControlsComponent.START_LOOP;
        /**
         * EventEmitter used when user requests to capture start time.
         */
        this.captureStartTimeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
        * EventEmitter used when user requests to capture end time.
        */
        this.captureEndTimeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * EventEmitter used when loop settings are changed.
         */
        this.onLoopSettingsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Determines whether or not a configuration is valid to loop around.
     *
     * @returns True if the loop can be started.
     */
    get isLoopValid() {
        return this._videoSettings.hasStarted
            && (this._loopSettings.startTime < this._loopSettings.endTime)
            && (this._loopSettings.endTime <= this._videoSettings.videoLength);
    }
    /**
     * Determines if the capture time buttons should be enabled.
     *
     * @return True if the user can interact with the loop times.
     */
    get canCaptureTime() {
        return !this._loopSettings.isLooping && this.videoSettings.hasStarted;
    }
    /**
     * Getter/Setter for loop settings input
     */
    get loopSettings() {
        return this._loopSettings;
    }
    set loopSettings(loopSettings) {
        this._loopSettings = loopSettings;
        this._startTimeInput.setInputValuesBySeconds(loopSettings.startTime);
        this._endTimeInput.setInputValuesBySeconds(loopSettings.endTime);
        this.loopButtonText =
            loopSettings.isLooping ? YoutubeLoopControlsComponent.STOP_LOOP : YoutubeLoopControlsComponent.START_LOOP;
    }
    /**
     * Getter/Setter for video settings input
     */
    get videoSettings() {
        return this._videoSettings;
    }
    set videoSettings(videoSettings) {
        this._videoSettings = videoSettings;
    }
    /**
     * Event handler for when the user requests the start time to be captured.
     */
    onCaptureStartTime() {
        this.captureStartTimeEvent.emit();
    }
    /**
     * Event handler for when the user requests the end time to be captured.
     */
    onCaptureEndTime() {
        this.captureEndTimeEvent.emit();
    }
    /**
     * Event handler for when the input element for start time is changed.
     *
     * @param seconds The number of seconds currently configured in the input field.
     */
    onStartTimeInputChanged(seconds) {
        if (seconds != this._loopSettings.startTime) {
            this._loopSettings.startTime = seconds;
            this.onLoopSettingsChanged.emit(this._loopSettings);
        }
    }
    /**
     * Event handler for when the input element for end time is changed.
     *
     * @param seconds The number of seconds currently configured in the input field.
     */
    onEndTimeInputChanged(seconds) {
        if (seconds != this._loopSettings.endTime) {
            this._loopSettings.endTime = seconds;
            this.onLoopSettingsChanged.emit(this._loopSettings);
        }
    }
    /**
     * Event handler for when the input element for loop delay time is changed.
     *
     * @param seconds The number of seconds currently configured in the input field.
     */
    onLoopLengthInputChanged(seconds) {
        if (seconds != this._loopSettings.loopDelay) {
            this._loopSettings.loopDelay = seconds;
            this.onLoopSettingsChanged.emit(this._loopSettings);
        }
    }
    /**
     * Event handler when the toggle loop button is pressed.
     */
    toggleLoop() {
        if (this._loopSettings.isLooping) {
            this._loopSettings.isLooping = false;
            this.loopButtonText = YoutubeLoopControlsComponent.START_LOOP;
        }
        else {
            this._loopSettings.isLooping = true;
            this.loopButtonText = YoutubeLoopControlsComponent.STOP_LOOP;
        }
        this.onLoopSettingsChanged.emit(this._loopSettings);
    }
}
/**
 * Constant string used for the loop toggle button text to signal that a loop can be started.
 */
YoutubeLoopControlsComponent.START_LOOP = "Start Loop";
/**
 * Constant string used for the loop toggle button text to signal that a loop can be stopped.
 */
YoutubeLoopControlsComponent.STOP_LOOP = "Stop Loop";
YoutubeLoopControlsComponent.ɵfac = function YoutubeLoopControlsComponent_Factory(t) { return new (t || YoutubeLoopControlsComponent)(); };
YoutubeLoopControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeLoopControlsComponent, selectors: [["app-youtube-loop-controls"]], viewQuery: function YoutubeLoopControlsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startTimeInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endTimeInput = _t.first);
    } }, inputs: { loopSettings: "loopSettings", videoSettings: "videoSettings" }, outputs: { captureStartTimeEvent: "captureStartTimeEvent", captureEndTimeEvent: "captureEndTimeEvent", onLoopSettingsChanged: "onLoopSettingsChanged" }, decls: 31, vars: 9, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "mt-card-layout"], ["fxLayout", "row", "fxFlex", "0 1 calc(100%)", "fxLayoutAlign", "center center"], [3, "inset"], [1, "no-border"], [1, "time-input-group"], [3, "fieldsEnabled", "isReadOnly", "timeInputChangedEvent"], ["startTimeInput", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["endTimeInput", ""], [3, "timeInputChangedEvent"], ["loopLengthInput", ""]], template: function YoutubeLoopControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loop Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-time-input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeInputChangedEvent", function YoutubeLoopControlsComponent_Template_app_time_input_timeInputChangedEvent_10_listener($event) { return ctx.onStartTimeInputChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubeLoopControlsComponent_Template_button_click_12_listener() { return ctx.onCaptureStartTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Capture Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-time-input", 5, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeInputChangedEvent", function YoutubeLoopControlsComponent_Template_app_time_input_timeInputChangedEvent_18_listener($event) { return ctx.onEndTimeInputChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubeLoopControlsComponent_Template_button_click_20_listener() { return ctx.onCaptureEndTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Capture End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Loop Delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-time-input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeInputChangedEvent", function YoutubeLoopControlsComponent_Template_app_time_input_timeInputChangedEvent_26_listener($event) { return ctx.onLoopLengthInputChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YoutubeLoopControlsComponent_Template_button_click_29_listener() { return ctx.toggleLoop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldsEnabled", ctx.canCaptureTime)("isReadOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.videoSettings.hasStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fieldsEnabled", ctx.canCaptureTime)("isReadOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.videoSettings.hasStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isLoopValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loopButtonText, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _shared_time_input_time_input_component__WEBPACK_IMPORTED_MODULE_4__["TimeInputComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".no-border[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] > legend[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.time-input-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS12aWRlby13cmFwcGVyL3lvdXR1YmUtbG9vcC1jb250cm9scy95b3V0dWJlLWxvb3AtY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlLXZpZGVvLXdyYXBwZXIveW91dHViZS1sb29wLWNvbnRyb2xzL3lvdXR1YmUtbG9vcC1jb250cm9scy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubm8tYm9yZGVyPmxlZ2VuZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50aW1lLWlucHV0LWdyb3VwPmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeLoopControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-youtube-loop-controls',
                templateUrl: './youtube-loop-controls.component.html',
                styleUrls: ['./youtube-loop-controls.component.css']
            }]
    }], null, { _startTimeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["startTimeInput", { static: true }]
        }], _endTimeInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["endTimeInput", { static: true }]
        }], loopSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], videoSettings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], captureStartTimeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], captureEndTimeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onLoopSettingsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");





const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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