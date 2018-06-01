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
export { Pinyin };
function Pinyin_tsickle_Closure_declarations() {
    /** @type {?} */
    Pinyin.FLAG;
    /** @type {?} */
    Pinyin.prototype.PinyinEngine;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlueWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGlueWluLWVuZ2luZS8iLCJzb3VyY2VzIjpbImxpYi9QaW55aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFPRSxnQkFBWSxZQUFpQjtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztLQUNsQzs7Ozs7O0lBRUQsMEJBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTLEVBQUUsSUFBSTtRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sS0FBSyxDQUFDLHVYQUVzQixDQUFDLENBQUM7U0FDckM7UUFFRCxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFJLElBQUksQ0FBQztRQUVULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDeEM7U0FDRjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDO2tCQS9CYSxrQkFBa0I7aUJBSGxDOztTQUVhLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIFBpbnlpbiB7XG4gIHN0YXRpYyBGTEFHID0gJ19fcGlueWluRW5naW5lX18nO1xuXG4gIFBpbnlpbkVuZ2luZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFBpbnlpbkVuZ2luZTogYW55KSB7XG4gICAgdGhpcy5QaW55aW5FbmdpbmUgPSBQaW55aW5FbmdpbmU7XG4gIH1cblxuICB0cmFuc2Zvcm0obGlzdDogYW55LCBhcmdzKTogYW55IHtcbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBFcnJvcihg5Y+C5pWw6ZSZ6K+v77yBXG4gICAgICDmn6Xor6LliJfooajkuLrlrZfnrKbkuLLmlbDnu4Tml7bvvIzpnIDopoHphY3nva7mn6Xor6LlhbPplK7lrZflj4LmlbDjgIJcbiAgICAgIOafpeivouWIl+ihqOS4uuWvueixoeaVsOe7hOaXtu+8jOmcgOimgemFjee9ruafpeivouWFs+mUruWtl+WPguaVsOS4jue0ouW8lUtleeWIl+ihqOWPguaVsOOAgmApO1xuICAgIH1cblxuICAgIGNvbnN0IGtleXdvcmQgPSBhcmdzWzBdO1xuICAgIGxldCBrZXlzO1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1sxXSkpIHtcbiAgICAgICAga2V5cyA9IGFyZ3NbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcign5Y+C5pWw6ZSZ6K+v77yB57Si5byVS2V55YiX6KGo6YWN572u5b+F6aG75Li65a2X56ym5Liy5pWw57uE77yBJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaXN0W1Bpbnlpbi5GTEFHXSkge1xuICAgICAgbGlzdFtQaW55aW4uRkxBR10gPSBuZXcgdGhpcy5QaW55aW5FbmdpbmUobGlzdCwga2V5cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3RbUGlueWluLkZMQUddLnF1ZXJ5KGtleXdvcmQpO1xuICB9XG59XG4iXX0=