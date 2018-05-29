import { NgModule } from '@angular/core';
import { PinyinTwPipe } from './pinyin-tw.pipe';

@NgModule({
  declarations: [PinyinTwPipe],
  exports: [PinyinTwPipe]
})
export class PinyinTwModule { }
