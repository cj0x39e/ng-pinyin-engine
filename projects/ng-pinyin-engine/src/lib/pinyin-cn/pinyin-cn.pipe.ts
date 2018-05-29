import { Pipe, PipeTransform } from '@angular/core';
import { Pinyin } from '../Pinyin';

const PinyinEngine = require('pinyin-engine/src/cn.js');

/**
 * 简体中文 Pipe
 */
@Pipe({
  name: 'pinyinCn'
})
export class PinyinCnPipe extends Pinyin implements PipeTransform {
  constructor() {
    super(PinyinEngine);
  }

  transform(list: any, ...args: any[]): any {
    return super.transform(list, args);
  }
}
