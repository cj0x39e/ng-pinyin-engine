import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PinyinCnPipe, PinyinTwPipe } from 'ng-pinyin-engine';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PinyinCnPipe,
    PinyinTwPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
