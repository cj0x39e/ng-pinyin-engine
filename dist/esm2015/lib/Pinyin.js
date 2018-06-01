/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class Pinyin {
    /**
     * @param {?} PinyinEngine
     */
    constructor(PinyinEngine) {
        this.PinyinEngine = PinyinEngine;
    }
    /**
     * @param {?} list
     * @param {?} args
     * @return {?}
     */
    transform(list, args) {
        if (!args || !args.length) {
            throw Error(`参数错误！
      查询列表为字符串数组时，需要配置查询关键字参数。
      查询列表为对象数组时，需要配置查询关键字参数与索引Key列表参数。`);
        }
        const /** @type {?} */ keyword = args[0];
        let /** @type {?} */ keys;
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
    }
}
Pinyin.FLAG = '__pinyinEngine__';
function Pinyin_tsickle_Closure_declarations() {
    /** @type {?} */
    Pinyin.FLAG;
    /** @type {?} */
    Pinyin.prototype.PinyinEngine;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlueWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGlueWluLWVuZ2luZS8iLCJzb3VyY2VzIjpbImxpYi9QaW55aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFLSixZQUFZLFlBQWlCO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0tBQ2xDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBUyxFQUFFLElBQUk7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEtBQUssQ0FBQzs7d0NBRXNCLENBQUMsQ0FBQztTQUNyQztRQUVELHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIscUJBQUksSUFBSSxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDekM7O2NBL0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY2xhc3MgUGlueWluIHtcbiAgc3RhdGljIEZMQUcgPSAnX19waW55aW5FbmdpbmVfXyc7XG5cbiAgUGlueWluRW5naW5lOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoUGlueWluRW5naW5lOiBhbnkpIHtcbiAgICB0aGlzLlBpbnlpbkVuZ2luZSA9IFBpbnlpbkVuZ2luZTtcbiAgfVxuXG4gIHRyYW5zZm9ybShsaXN0OiBhbnksIGFyZ3MpOiBhbnkge1xuICAgIGlmICghYXJncyB8fCAhYXJncy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKGDlj4LmlbDplJnor6/vvIFcbiAgICAgIOafpeivouWIl+ihqOS4uuWtl+espuS4suaVsOe7hOaXtu+8jOmcgOimgemFjee9ruafpeivouWFs+mUruWtl+WPguaVsOOAglxuICAgICAg5p+l6K+i5YiX6KGo5Li65a+56LGh5pWw57uE5pe277yM6ZyA6KaB6YWN572u5p+l6K+i5YWz6ZSu5a2X5Y+C5pWw5LiO57Si5byVS2V55YiX6KGo5Y+C5pWw44CCYCk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5d29yZCA9IGFyZ3NbMF07XG4gICAgbGV0IGtleXM7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzFdKSkge1xuICAgICAgICBrZXlzID0gYXJnc1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKCflj4LmlbDplJnor6/vvIHntKLlvJVLZXnliJfooajphY3nva7lv4XpobvkuLrlrZfnrKbkuLLmlbDnu4TvvIEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWxpc3RbUGlueWluLkZMQUddKSB7XG4gICAgICBsaXN0W1Bpbnlpbi5GTEFHXSA9IG5ldyB0aGlzLlBpbnlpbkVuZ2luZShsaXN0LCBrZXlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFtQaW55aW4uRkxBR10ucXVlcnkoa2V5d29yZCk7XG4gIH1cbn1cbiJdfQ==