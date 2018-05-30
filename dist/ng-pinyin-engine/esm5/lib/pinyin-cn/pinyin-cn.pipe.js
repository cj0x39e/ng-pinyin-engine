/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { Pinyin } from '../Pinyin';
var /** @type {?} */ PinyinEngine = require('pinyin-engine/src/cn.js');
/**
 * 简体中文 Pipe
 */
var PinyinCnPipe = /** @class */ (function (_super) {
    tslib_1.__extends(PinyinCnPipe, _super);
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
export { PinyinCnPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlueWluLWNuLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waW55aW4tZW5naW5lLyIsInNvdXJjZXMiOlsibGliL3Bpbnlpbi1jbi9waW55aW4tY24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMscUJBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzs7OztJQVF0Qix3Q0FBTTtJQUN0QztlQUNFLGtCQUFNLFlBQVksQ0FBQztLQUNwQjs7Ozs7O0lBRUQsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsTUFBTSxDQUFDLGlCQUFNLFNBQVMsWUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEM7O2dCQVZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Ozs7dUJBVkQ7RUFXa0MsTUFBTTtTQUEzQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluIH0gZnJvbSAnLi4vUGlueWluJztcblxuY29uc3QgUGlueWluRW5naW5lID0gcmVxdWlyZSgncGlueWluLWVuZ2luZS9zcmMvY24uanMnKTtcblxuLyoqXG4gKiDnroDkvZPkuK3mlocgUGlwZVxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdwaW55aW5Dbidcbn0pXG5leHBvcnQgY2xhc3MgUGlueWluQ25QaXBlIGV4dGVuZHMgUGlueWluIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBpbnlpbkVuZ2luZSk7XG4gIH1cblxuICB0cmFuc2Zvcm0obGlzdDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybShsaXN0LCBhcmdzKTtcbiAgfVxufVxuIl19