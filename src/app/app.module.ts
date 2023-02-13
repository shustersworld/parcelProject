import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraBaseComponent } from './shared/estructura-base/estructura-base.component';
import { EstructuraBaseModule } from './shared/estructura-base/estructura-base.module';

@NgModule({
  declarations: [
    AppComponent,
    EstructuraBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
