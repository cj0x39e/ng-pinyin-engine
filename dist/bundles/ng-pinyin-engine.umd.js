(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-pinyin-engine', ['exports', '@angular/core'], factory) :
    (factory((global['ng-pinyin-engine'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Pinyin = (function () {
        function Pinyin(PinyinEngine) {
            this.PinyinEngine = PinyinEngine;
        }
        /**
         * @param {?} list
         * @param {?} args
         * @return {?}
         */
        Pinyin.prototype.transform = /**
         * @param {?} list
         * @param {?} args
         * @return {?}
         */
            function (list, args) {
                if (!args || !args.length) {
                    throw Error("\u53C2\u6570\u9519\u8BEF\uFF01\n      \u67E5\u8BE2\u5217\u8868\u4E3A\u5B57\u7B26\u4E32\u6570\u7EC4\u65F6\uFF0C\u9700\u8981\u914D\u7F6E\u67E5\u8BE2\u5173\u952E\u5B57\u53C2\u6570\u3002\n      \u67E5\u8BE2\u5217\u8868\u4E3A\u5BF9\u8C61\u6570\u7EC4\u65F6\uFF0C\u9700\u8981\u914D\u7F6E\u67E5\u8BE2\u5173\u952E\u5B57\u53C2\u6570\u4E0E\u7D22\u5F15Key\u5217\u8868\u53C2\u6570\u3002");
                }
                var /** @type {?} */ keyword = args[0];
                var /** @type {?} */ keys;
                if (args.length > 1) {
                    if (Array.isArray(args[1])) {
                        keys = args[1];
                    }
                    else {
                        throw Error('参数错误！索引Key列表配置必须为字符串数组！');
                    }
                }
                if (!list[Pinyin.FLAG]) {
                    list[Pinyin.FLAG] = new this.PinyinEngine(list, keys);
                }
                return list[Pinyin.FLAG].query(keyword);
            };
        Pinyin.FLAG = '__pinyinEngine__';
        return Pinyin;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PinyinEngine = require('pinyin-engine/src/cn.js');
    /**
     * 简体中文 Pipe
     */
    var PinyinCnPipe = (function (_super) {
        __extends(PinyinCnPipe, _super);
        function PinyinCnPipe() {
            return _super.call(this, PinyinEngine) || this;
        }
        /**
         * @param {?} list
         * @param {...?} args
         * @return {?}
         */
        PinyinCnPipe.prototype.transform = /**
         * @param {?} list
         * @param {...?} args
         * @return {?}
         */
            function (list) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return _super.prototype.transform.call(this, list, args);
            };
        PinyinCnPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'pinyinCn'
                    },] },
        ];
        /** @nocollapse */
        PinyinCnPipe.ctorParameters = function () { return []; };
        return PinyinCnPipe;
    }(Pinyin));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PinyinCnModule = (function () {
        function PinyinCnModule() {
        }
        PinyinCnModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PinyinCnPipe],
                        exports: [PinyinCnPipe]
                    },] },
        ];
        return PinyinCnModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PinyinEngine$1 = require('pinyin-engine/src/tw.js');
    /**
     * 繁体中文 Pipe
     */
    var PinyinTwPipe = (function (_super) {
        __extends(PinyinTwPipe, _super);
        function PinyinTwPipe() {
            return _super.call(this, PinyinEngine$1) || this;
        }
        /**
         * @param {?} list
         * @param {...?} args
         * @return {?}
         */
        PinyinTwPipe.prototype.transform = /**
         * @param {?} list
         * @param {...?} args
         * @return {?}
         */
            function (list) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return _super.prototype.transform.call(this, list, args);
            };
        PinyinTwPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'pinyinTw'
                    },] },
        ];
        /** @nocollapse */
        PinyinTwPipe.ctorParameters = function () { return []; };
        return PinyinTwPipe;
    }(Pinyin));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PinyinTwModule = (function () {
        function PinyinTwModule() {
        }
        PinyinTwModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PinyinTwPipe],
                        exports: [PinyinTwPipe]
                    },] },
        ];
        return PinyinTwModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgPinyinEngineModule = (function () {
        function NgPinyinEngineModule() {
        }
        NgPinyinEngineModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [PinyinCnModule, PinyinTwModule],
                        exports: [PinyinCnModule, PinyinTwModule]
                    },] },
        ];
        return NgPinyinEngineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NgPinyinEngineModule = NgPinyinEngineModule;
    exports.PinyinCnModule = PinyinCnModule;
    exports.PinyinTwModule = PinyinTwModule;
    exports.PinyinCnPipe = PinyinCnPipe;
    exports.PinyinTwPipe = PinyinTwPipe;
    exports.ɵa = Pinyin;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGlueWluLWVuZ2luZS51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vbmctcGlueWluLWVuZ2luZS9saWIvUGlueWluLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9waW55aW4tY24vcGlueWluLWNuLnBpcGUudHMiLCJuZzovL25nLXBpbnlpbi1lbmdpbmUvbGliL3Bpbnlpbi1jbi9waW55aW4tY24ubW9kdWxlLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9waW55aW4tdHcvcGlueWluLXR3LnBpcGUudHMiLCJuZzovL25nLXBpbnlpbi1lbmdpbmUvbGliL3Bpbnlpbi10dy9waW55aW4tdHcubW9kdWxlLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9uZy1waW55aW4tZW5naW5lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgICByZXR1cm4gYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgICB2YXIgaSwgcDtcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cbiIsIlxuXG5leHBvcnQgY2xhc3MgUGlueWluIHtcbiAgc3RhdGljIEZMQUcgPSAnX19waW55aW5FbmdpbmVfXyc7XG5cbiAgUGlueWluRW5naW5lOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoUGlueWluRW5naW5lOiBhbnkpIHtcbiAgICB0aGlzLlBpbnlpbkVuZ2luZSA9IFBpbnlpbkVuZ2luZTtcbiAgfVxuXG4gIHRyYW5zZm9ybShsaXN0OiBhbnksIGFyZ3MpOiBhbnkge1xuICAgIGlmICghYXJncyB8fCAhYXJncy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGDDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woFcbiAgICAgIMOmwp/CpcOowq/CosOlwojCl8OowqHCqMOkwrjCusOlwq3Cl8OnwqzCpsOkwrjCssOmwpXCsMOnwrvChMOmwpfCtsOvwrzCjMOpwpzCgMOowqbCgcOpwoXCjcOnwr3CrsOmwp/CpcOowq/CosOlwoXCs8OpwpTCrsOlwq3Cl8Olwo/CgsOmwpXCsMOjwoDCglxuICAgICAgw6bCn8Klw6jCr8Kiw6XCiMKXw6jCocKow6TCuMK6w6XCr8K5w6jCscKhw6bClcKww6fCu8KEw6bCl8K2w6/CvMKMw6nCnMKAw6jCpsKBw6nChcKNw6fCvcKuw6bCn8Klw6jCr8Kiw6XChcKzw6nClMKuw6XCrcKXw6XCj8KCw6bClcKww6TCuMKOw6fCtMKiw6XCvMKVS2V5w6XCiMKXw6jCocKow6XCj8KCw6bClcKww6PCgMKCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5d29yZCA9IGFyZ3NbMF07XG4gICAgbGV0IGtleXM7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzFdKSkge1xuICAgICAgICBrZXlzID0gYXJnc1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCfDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woHDp8K0wqLDpcK8wpVLZXnDpcKIwpfDqMKhwqjDqcKFwo3Dp8K9wq7DpcK/woXDqcKhwrvDpMK4wrrDpcKtwpfDp8KswqbDpMK4wrLDpsKVwrDDp8K7woTDr8K8woEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpc3RbUGlueWluLkZMQUddKSB7XG4gICAgICBsaXN0W1Bpbnlpbi5GTEFHXSA9IG5ldyB0aGlzLlBpbnlpbkVuZ2luZShsaXN0LCBrZXlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFtQaW55aW4uRkxBR10ucXVlcnkoa2V5d29yZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbnlpbiB9IGZyb20gJy4uL1Bpbnlpbic7XG5cbmNvbnN0IFBpbnlpbkVuZ2luZSA9IHJlcXVpcmUoJ3Bpbnlpbi1lbmdpbmUvc3JjL2NuLmpzJyk7XG5cbi8qKlxuICogw6fCrsKAw6TCvcKTw6TCuMKtw6bClsKHIFBpcGVcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAncGlueWluQ24nXG59KVxuZXhwb3J0IGNsYXNzIFBpbnlpbkNuUGlwZSBleHRlbmRzIFBpbnlpbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQaW55aW5FbmdpbmUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKGxpc3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0obGlzdCwgYXJncyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaW55aW5DblBpcGUgfSBmcm9tICcuL3Bpbnlpbi1jbi5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGlueWluQ25QaXBlXSxcbiAgZXhwb3J0czogW1BpbnlpbkNuUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgUGlueWluQ25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaW55aW4gfSBmcm9tICcuLi9QaW55aW4nO1xuXG5jb25zdCBQaW55aW5FbmdpbmUgPSByZXF1aXJlKCdwaW55aW4tZW5naW5lL3NyYy90dy5qcycpO1xuXG4vKipcbiAqIMOnwrnCgcOkwr3Ck8OkwrjCrcOmwpbChyBQaXBlXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3BpbnlpblR3J1xufSlcbmV4cG9ydCBjbGFzcyBQaW55aW5Ud1BpcGUgZXh0ZW5kcyBQaW55aW4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQaW55aW5FbmdpbmUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKGxpc3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0obGlzdCwgYXJncyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaW55aW5Ud1BpcGUgfSBmcm9tICcuL3Bpbnlpbi10dy5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGlueWluVHdQaXBlXSxcbiAgZXhwb3J0czogW1BpbnlpblR3UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgUGlueWluVHdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluQ25Nb2R1bGUgfSBmcm9tICcuL3Bpbnlpbi1jbi9waW55aW4tY24ubW9kdWxlJztcbmltcG9ydCB7IFBpbnlpblR3TW9kdWxlIH0gZnJvbSAnLi9waW55aW4tdHcvcGlueWluLXR3Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtQaW55aW5Dbk1vZHVsZSwgUGlueWluVHdNb2R1bGVdLFxuICBleHBvcnRzOiBbUGlueWluQ25Nb2R1bGUsIFBpbnlpblR3TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1BpbnlpbkVuZ2luZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlBpcGUiLCJOZ01vZHVsZSIsIlBpbnlpbkVuZ2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztTQUNwQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUUvRSx1QkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENB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