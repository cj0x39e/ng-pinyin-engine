import { Pipe, PipeTransform } from '@angular/core';

const PinyinEngine = require('pinyin-engine/src/cn.js');

/**
 * 简体中文 Pipe
 */
@Pipe({
  name: 'pinyinCn'
})
export class PinyinCnPipe implements PipeTransform {

  static FLAG = '__pinyinEngine__';

  transform(list: any, ...args): any {
    if (!args || !args.length) {
      throw Error(`参数错误！
      查询列表为字符串数组时，需要配置查询关键字参数。
      查询列表为对象数组时，需要配置查询关键字参数与索引Key列表参数。`);
    }

    const keyword = args[0];
    let keys;

    if (args.length > 1) {
      if (Array.isArray(args[1])) {
        keys = args[1];
      } else {
        throw Error('参数错误！索引Key列表配置必须为字符串数组！');
      }
    }

    if (!list[PinyinCnPipe.FLAG]) {
      list[PinyinCnPipe.FLAG] = new PinyinEngine(list, keys);
    }

    return list[PinyinCnPipe.FLAG].query(keyword);
  }
}
