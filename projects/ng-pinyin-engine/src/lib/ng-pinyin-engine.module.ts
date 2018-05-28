import { NgModule } from '@angular/core';
import { PinyinCnPipe } from './pinyin-cn.pipe';
import { PinyinTwPipe } from './pinyin-tw.pipe';

@NgModule({
  imports: [
  ],
  declarations: [PinyinCnPipe, PinyinTwPipe],
  exports: [PinyinCnPipe, PinyinTwPipe]
})
export class NgPinyinEngineModule { }
