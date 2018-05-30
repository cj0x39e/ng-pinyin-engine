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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlueWluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGlueWluLWVuZ2luZS8iLCJzb3VyY2VzIjpbImxpYi9QaW55aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFLSixZQUFZLFlBQWlCO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0tBQ2xDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBUyxFQUFFLElBQUk7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEtBQUssQ0FBQzs7d0NBRXNCLENBQUMsQ0FBQztTQUNyQztRQUVELHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIscUJBQUksSUFBSSxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDekM7O2NBL0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBpbnlpbiB7XHJcbiAgc3RhdGljIEZMQUcgPSAnX19waW55aW5FbmdpbmVfXyc7XHJcblxyXG4gIFBpbnlpbkVuZ2luZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihQaW55aW5FbmdpbmU6IGFueSkge1xyXG4gICAgdGhpcy5QaW55aW5FbmdpbmUgPSBQaW55aW5FbmdpbmU7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0obGlzdDogYW55LCBhcmdzKTogYW55IHtcclxuICAgIGlmICghYXJncyB8fCAhYXJncy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoYOWPguaVsOmUmeivr++8gVxyXG4gICAgICDmn6Xor6LliJfooajkuLrlrZfnrKbkuLLmlbDnu4Tml7bvvIzpnIDopoHphY3nva7mn6Xor6LlhbPplK7lrZflj4LmlbDjgIJcclxuICAgICAg5p+l6K+i5YiX6KGo5Li65a+56LGh5pWw57uE5pe277yM6ZyA6KaB6YWN572u5p+l6K+i5YWz6ZSu5a2X5Y+C5pWw5LiO57Si5byVS2V55YiX6KGo5Y+C5pWw44CCYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5d29yZCA9IGFyZ3NbMF07XHJcbiAgICBsZXQga2V5cztcclxuXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3NbMV0pKSB7XHJcbiAgICAgICAga2V5cyA9IGFyZ3NbMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ+WPguaVsOmUmeivr++8gee0ouW8lUtleeWIl+ihqOmFjee9ruW/hemhu+S4uuWtl+espuS4suaVsOe7hO+8gScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFsaXN0W1Bpbnlpbi5GTEFHXSkge1xyXG4gICAgICBsaXN0W1Bpbnlpbi5GTEFHXSA9IG5ldyB0aGlzLlBpbnlpbkVuZ2luZShsaXN0LCBrZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdFtQaW55aW4uRkxBR10ucXVlcnkoa2V5d29yZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==