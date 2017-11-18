import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import * as Bungie from './bungie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Bungie.BungieApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
