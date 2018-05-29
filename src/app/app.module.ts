import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PinyinCnModule } from 'ng-pinyin-engine';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PinyinCnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
