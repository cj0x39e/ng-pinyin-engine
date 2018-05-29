import { NgModule } from '@angular/core';
import { PinyinCnPipe } from './pinyin-cn.pipe';

@NgModule({
  declarations: [PinyinCnPipe],
  exports: [PinyinCnPipe]
})
export class PinyinCnModule { }
