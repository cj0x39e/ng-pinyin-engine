import { PipeTransform } from '@angular/core';
import { Pinyin } from '../Pinyin';
/**
 * 简体中文 Pipe
 */
export declare class PinyinCnPipe extends Pinyin implements PipeTransform {
    constructor();
    transform(list: any, ...args: any[]): any;
}
