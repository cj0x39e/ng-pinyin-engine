/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Pinyin } from '../Pinyin';
const /** @type {?} */ PinyinEngine = require('pinyin-engine/src/tw.js');
/**
 * 繁体中文 Pipe
 */
export class PinyinTwPipe extends Pinyin {
    constructor() {
        super(PinyinEngine);
    }
    /**
     * @param {?} list
     * @param {...?} args
     * @return {?}
     */
    transform(list, ...args) {
        return super.transform(list, args);
    }
}
PinyinTwPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pinyinTw'
            },] },
];
/** @nocollapse */
PinyinTwPipe.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlueWluLXR3LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waW55aW4tZW5naW5lLyIsInNvdXJjZXMiOlsibGliL3Bpbnlpbi10dy9waW55aW4tdHcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyx1QkFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7QUFReEQsTUFBTSxtQkFBb0IsU0FBUSxNQUFNO0lBRXRDO1FBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBUyxFQUFFLEdBQUcsSUFBVztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEM7OztZQVhGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbnlpbiB9IGZyb20gJy4uL1Bpbnlpbic7XG5cbmNvbnN0IFBpbnlpbkVuZ2luZSA9IHJlcXVpcmUoJ3Bpbnlpbi1lbmdpbmUvc3JjL3R3LmpzJyk7XG5cbi8qKlxuICog57mB5L2T5Lit5paHIFBpcGVcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAncGlueWluVHcnXG59KVxuZXhwb3J0IGNsYXNzIFBpbnlpblR3UGlwZSBleHRlbmRzIFBpbnlpbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFBpbnlpbkVuZ2luZSk7XG4gIH1cblxuICB0cmFuc2Zvcm0obGlzdDogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybShsaXN0LCBhcmdzKTtcbiAgfVxufVxuIl19