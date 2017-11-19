import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Bungie from './bungie';
import * as Player from './player';
import * as Shared from './shared';

@NgModule({
  declarations: [
    AppComponent,
    Player.PlayerSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [
    Bungie.BungieApiService,
    { provide: Bungie.API_KEY, useValue: Bungie.API_KEY.toString() },
    { provide: Bungie.API_KEY_HEADER, useValue: Bungie.API_KEY_HEADER.toString() },
    { provide: Bungie.API_ROOT_PATH, useValue: Bungie.API_ROOT_PATH.toString() },
    Shared.HelperService,
    Shared.HttpHelperService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
