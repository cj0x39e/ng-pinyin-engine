import { PipeTransform } from '@angular/core';
import { Pinyin } from '../Pinyin';
/**
 * 繁体中文 Pipe
 */
export declare class PinyinTwPipe extends Pinyin implements PipeTransform {
    constructor();
    transform(list: any, ...args: any[]): any;
}
