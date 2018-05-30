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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlueWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGlueWluLWVuZ2luZS8iLCJzb3VyY2VzIjpbImxpYi9QaW55aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFPRSxnQkFBWSxZQUFpQjtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztLQUNsQzs7Ozs7O0lBRUQsMEJBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTLEVBQUUsSUFBSTtRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sS0FBSyxDQUFDLHVYQUVzQixDQUFDLENBQUM7U0FDckM7UUFFRCxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLHFCQUFJLElBQUksQ0FBQztRQUVULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDeEM7U0FDRjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDO2tCQS9CYSxrQkFBa0I7aUJBSGxDOztTQUVhLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW55aW4ge1xyXG4gIHN0YXRpYyBGTEFHID0gJ19fcGlueWluRW5naW5lX18nO1xyXG5cclxuICBQaW55aW5FbmdpbmU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoUGlueWluRW5naW5lOiBhbnkpIHtcclxuICAgIHRoaXMuUGlueWluRW5naW5lID0gUGlueWluRW5naW5lO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtKGxpc3Q6IGFueSwgYXJncyk6IGFueSB7XHJcbiAgICBpZiAoIWFyZ3MgfHwgIWFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGDlj4LmlbDplJnor6/vvIFcclxuICAgICAg5p+l6K+i5YiX6KGo5Li65a2X56ym5Liy5pWw57uE5pe277yM6ZyA6KaB6YWN572u5p+l6K+i5YWz6ZSu5a2X5Y+C5pWw44CCXHJcbiAgICAgIOafpeivouWIl+ihqOS4uuWvueixoeaVsOe7hOaXtu+8jOmcgOimgemFjee9ruafpeivouWFs+mUruWtl+WPguaVsOS4jue0ouW8lUtleeWIl+ihqOWPguaVsOOAgmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXdvcmQgPSBhcmdzWzBdO1xyXG4gICAgbGV0IGtleXM7XHJcblxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzFdKSkge1xyXG4gICAgICAgIGtleXMgPSBhcmdzWzFdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKCflj4LmlbDplJnor6/vvIHntKLlvJVLZXnliJfooajphY3nva7lv4XpobvkuLrlrZfnrKbkuLLmlbDnu4TvvIEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghbGlzdFtQaW55aW4uRkxBR10pIHtcclxuICAgICAgbGlzdFtQaW55aW4uRkxBR10gPSBuZXcgdGhpcy5QaW55aW5FbmdpbmUobGlzdCwga2V5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3RbUGlueWluLkZMQUddLnF1ZXJ5KGtleXdvcmQpO1xyXG4gIH1cclxufVxyXG4iXX0=