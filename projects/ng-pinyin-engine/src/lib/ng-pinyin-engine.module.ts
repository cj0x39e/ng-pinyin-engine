import { NgModule } from '@angular/core';
import { PinyinCnModule } from './pinyin-cn/pinyin-cn.module';
import { PinyinTwModule } from './pinyin-tw/pinyin-tw.module';

@NgModule({
  imports: [PinyinCnModule, PinyinTwModule],
  exports: [PinyinCnModule, PinyinTwModule]
})
export class NgPinyinEngineModule { }
