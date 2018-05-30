/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Pinyin } from '../Pinyin';
const /** @type {?} */ PinyinEngine = require('pinyin-engine/src/cn.js');
/**
 * 简体中文 Pipe
 */
export class PinyinCnPipe extends Pinyin {
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
PinyinCnPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pinyinCn'
            },] },
];
/** @nocollapse */
PinyinCnPipe.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlueWluLWNuLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1waW55aW4tZW5naW5lLyIsInNvdXJjZXMiOlsibGliL3Bpbnlpbi1jbi9waW55aW4tY24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyx1QkFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7QUFReEQsTUFBTSxtQkFBb0IsU0FBUSxNQUFNO0lBQ3RDO1FBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBUyxFQUFFLEdBQUcsSUFBVztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDcEM7OztZQVZGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBpbnlpbiB9IGZyb20gJy4uL1Bpbnlpbic7XG5cbmNvbnN0IFBpbnlpbkVuZ2luZSA9IHJlcXVpcmUoJ3Bpbnlpbi1lbmdpbmUvc3JjL2NuLmpzJyk7XG5cbi8qKlxuICog566A5L2T5Lit5paHIFBpcGVcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAncGlueWluQ24nXG59KVxuZXhwb3J0IGNsYXNzIFBpbnlpbkNuUGlwZSBleHRlbmRzIFBpbnlpbiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihQaW55aW5FbmdpbmUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKGxpc3Q6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0obGlzdCwgYXJncyk7XG4gIH1cbn1cbiJdfQ==