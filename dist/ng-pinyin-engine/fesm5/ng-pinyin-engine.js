import { __extends } from 'tslib';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Pinyin = /** @class */ (function () {
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
var PinyinCnPipe = /** @class */ (function (_super) {
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
        { type: Pipe, args: [{
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
var PinyinCnModule = /** @class */ (function () {
    function PinyinCnModule() {
    }
    PinyinCnModule.decorators = [
        { type: NgModule, args: [{
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
var PinyinTwPipe = /** @class */ (function (_super) {
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
        { type: Pipe, args: [{
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
var PinyinTwModule = /** @class */ (function () {
    function PinyinTwModule() {
    }
    PinyinTwModule.decorators = [
        { type: NgModule, args: [{
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
var NgPinyinEngineModule = /** @class */ (function () {
    function NgPinyinEngineModule() {
    }
    NgPinyinEngineModule.decorators = [
        { type: NgModule, args: [{
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

export { NgPinyinEngineModule, PinyinCnModule, PinyinTwModule, PinyinCnPipe, PinyinTwPipe, Pinyin as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcGlueWluLWVuZ2luZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctcGlueWluLWVuZ2luZS9saWIvUGlueWluLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9waW55aW4tY24vcGlueWluLWNuLnBpcGUudHMiLCJuZzovL25nLXBpbnlpbi1lbmdpbmUvbGliL3Bpbnlpbi1jbi9waW55aW4tY24ubW9kdWxlLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9waW55aW4tdHcvcGlueWluLXR3LnBpcGUudHMiLCJuZzovL25nLXBpbnlpbi1lbmdpbmUvbGliL3Bpbnlpbi10dy9waW55aW4tdHcubW9kdWxlLnRzIiwibmc6Ly9uZy1waW55aW4tZW5naW5lL2xpYi9uZy1waW55aW4tZW5naW5lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW55aW4ge1xyXG4gIHN0YXRpYyBGTEFHID0gJ19fcGlueWluRW5naW5lX18nO1xyXG5cclxuICBQaW55aW5FbmdpbmU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoUGlueWluRW5naW5lOiBhbnkpIHtcclxuICAgIHRoaXMuUGlueWluRW5naW5lID0gUGlueWluRW5naW5lO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGxpc3Q6IGFueSwgYXJncyk6IGFueSB7XHJcbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGDDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woFcclxuICAgICAgw6bCn8Klw6jCr8Kiw6XCiMKXw6jCocKow6TCuMK6w6XCrcKXw6fCrMKmw6TCuMKyw6bClcKww6fCu8KEw6bCl8K2w6/CvMKMw6nCnMKAw6jCpsKBw6nChcKNw6fCvcKuw6bCn8Klw6jCr8Kiw6XChcKzw6nClMKuw6XCrcKXw6XCj8KCw6bClcKww6PCgMKCXHJcbiAgICAgIMOmwp/CpcOowq/CosOlwojCl8OowqHCqMOkwrjCusOlwq/CucOowrHCocOmwpXCsMOnwrvChMOmwpfCtsOvwrzCjMOpwpzCgMOowqbCgcOpwoXCjcOnwr3CrsOmwp/CpcOowq/CosOlwoXCs8OpwpTCrsOlwq3Cl8Olwo/CgsOmwpXCsMOkwrjCjsOnwrTCosOlwrzClUtlecOlwojCl8OowqHCqMOlwo/CgsOmwpXCsMOjwoDCgmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXdvcmQgPSBhcmdzWzBdO1xyXG4gICAgbGV0IGtleXM7XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzFdKSkge1xyXG4gICAgICAgIGtleXMgPSBhcmdzWzFdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKCfDpcKPwoLDpsKVwrDDqcKUwpnDqMKvwq/Dr8K8woHDp8K0wqLDpcK8wpVLZXnDpcKIwpfDqMKhwqjDqcKFwo3Dp8K9wq7DpcK/woXDqcKhwrvDpMK4wrrDpcKtwpfDp8KswqbDpMK4wrLDpsKVwrDDp8K7woTDr8K8woEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghbGlzdFtQaW55aW4uRkxBR10pIHtcclxuICAgICAgbGlzdFtQaW55aW4uRkxBR10gPSBuZXcgdGhpcy5QaW55aW5FbmdpbmUobGlzdCwga2V5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3RbUGlueWluLkZMQUddLnF1ZXJ5KGtleXdvcmQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaW55aW4gfSBmcm9tICcuLi9QaW55aW4nO1xuXG5jb25zdCBQaW55aW5FbmdpbmUgPSByZXF1aXJlKCdwaW55aW4tZW5naW5lL3NyYy9jbi5qcycpO1xuXG4vKipcbiAqIMOnwq7CgMOkwr3Ck8OkwrjCrcOmwpbChyBQaXBlXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ3BpbnlpbkNuJ1xufSlcbmV4cG9ydCBjbGFzcyBQaW55aW5DblBpcGUgZXh0ZW5kcyBQaW55aW4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUGlueWluRW5naW5lKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShsaXN0OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKGxpc3QsIGFyZ3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluQ25QaXBlIH0gZnJvbSAnLi9waW55aW4tY24ucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BpbnlpbkNuUGlwZV0sXG4gIGV4cG9ydHM6IFtQaW55aW5DblBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFBpbnlpbkNuTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluIH0gZnJvbSAnLi4vUGlueWluJztcblxuY29uc3QgUGlueWluRW5naW5lID0gcmVxdWlyZSgncGlueWluLWVuZ2luZS9zcmMvdHcuanMnKTtcblxuLyoqXG4gKiDDp8K5woHDpMK9wpPDpMK4wq3DpsKWwocgUGlwZVxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdwaW55aW5Udydcbn0pXG5leHBvcnQgY2xhc3MgUGlueWluVHdQaXBlIGV4dGVuZHMgUGlueWluIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUGlueWluRW5naW5lKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShsaXN0OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKGxpc3QsIGFyZ3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluVHdQaXBlIH0gZnJvbSAnLi9waW55aW4tdHcucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BpbnlpblR3UGlwZV0sXG4gIGV4cG9ydHM6IFtQaW55aW5Ud1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFBpbnlpblR3TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbnlpbkNuTW9kdWxlIH0gZnJvbSAnLi9waW55aW4tY24vcGlueWluLWNuLm1vZHVsZSc7XG5pbXBvcnQgeyBQaW55aW5Ud01vZHVsZSB9IGZyb20gJy4vcGlueWluLXR3L3Bpbnlpbi10dy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUGlueWluQ25Nb2R1bGUsIFBpbnlpblR3TW9kdWxlXSxcbiAgZXhwb3J0czogW1BpbnlpbkNuTW9kdWxlLCBQaW55aW5Ud01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdQaW55aW5FbmdpbmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJQaW55aW5FbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBT0UsZ0JBQVksWUFBaUI7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7S0FDbEM7Ozs7OztJQUVELDBCQUFTOzs7OztJQUFULFVBQVUsSUFBUyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsTUFBTSxLQUFLLENBQUMsdVhBRXNCLENBQUMsQ0FBQztTQUNyQztRQUVELHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIscUJBQUksSUFBSSxDQUFDO1FBRVQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN6QztrQkEvQmEsa0JBQWtCO2lCQUhsQzs7Ozs7OztBQ0dBLHFCQUFNLFlBQVksR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7Ozs7SUFRdEJBLGdDQUFNO0lBQ3RDO2VBQ0Usa0JBQU0sWUFBWSxDQUFDO0tBQ3BCOzs7Ozs7SUFFRCxnQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVM7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNqQyxPQUFPLGlCQUFNLFNBQVMsWUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEM7O2dCQVZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Ozs7dUJBVkQ7RUFXa0MsTUFBTTs7Ozs7O0FDWHhDOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O3lCQU5EOzs7Ozs7O0FDR0EscUJBQU1DLGNBQVksR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7Ozs7SUFRdEJELGdDQUFNO0lBRXRDO2VBQ0Usa0JBQU1DLGNBQVksQ0FBQztLQUNwQjs7Ozs7O0lBRUQsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsT0FBTyxpQkFBTSxTQUFTLFlBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3BDOztnQkFYRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOzs7O3VCQVZEO0VBV2tDLE1BQU07Ozs7OztBQ1h4Qzs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOzt5QkFORDs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO2lCQUMxQzs7K0JBUEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==