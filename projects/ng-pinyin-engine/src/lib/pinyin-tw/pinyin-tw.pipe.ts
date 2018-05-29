import { Pipe, PipeTransform } from '@angular/core';
import { Pinyin } from '../Pinyin';

const PinyinEngine = require('pinyin-engine/src/tw.js');

/**
 * 繁体中文 Pipe
 */
@Pipe({
  name: 'pinyinTw'
})
export class PinyinTwPipe extends Pinyin implements PipeTransform {

  constructor() {
    super(PinyinEngine);
  }

  transform(list: any, ...args: any[]): any {
    return super.transform(list, args);
  }
}
