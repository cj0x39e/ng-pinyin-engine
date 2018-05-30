/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { Pinyin } from '../Pinyin';
var /** @type {?} */ PinyinEngine = require('pinyin-engine/src/tw.js');
/**
 * 繁体中文 Pipe
 */
var PinyinTwPipe = /** @class */ (function (_super) {
    tslib_1.__extends(PinyinTwPipe, _super);
    function PinyinTwPipe() {
        return _super.call(this, PinyinEngine) || this;
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
export { PinyinTwPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlueWluLXR3LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waW55aW4tZW5naW5lLyIsInNvdXJjZXMiOlsibGliL3Bpbnlpbi10dy9waW55aW4tdHcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMscUJBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzs7OztJQVF0Qix3Q0FBTTtJQUV0QztlQUNFLGtCQUFNLFlBQVksQ0FBQztLQUNwQjs7Ozs7O0lBRUQsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDakMsTUFBTSxDQUFDLGlCQUFNLFNBQVMsWUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEM7O2dCQVhGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Ozs7dUJBVkQ7RUFXa0MsTUFBTTtTQUEzQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGlueWluIH0gZnJvbSAnLi4vUGlueWluJztcblxuY29uc3QgUGlueWluRW5naW5lID0gcmVxdWlyZSgncGlueWluLWVuZ2luZS9zcmMvdHcuanMnKTtcblxuLyoqXG4gKiDnuYHkvZPkuK3mlocgUGlwZVxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdwaW55aW5Udydcbn0pXG5leHBvcnQgY2xhc3MgUGlueWluVHdQaXBlIGV4dGVuZHMgUGlueWluIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUGlueWluRW5naW5lKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShsaXN0OiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKGxpc3QsIGFyZ3MpO1xuICB9XG59XG4iXX0=