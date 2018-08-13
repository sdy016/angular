import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Table Component 사용을 위한 MatTableModule import
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
