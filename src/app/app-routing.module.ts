import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerSearchComponent } from './player';

const routes: Routes = [
  { path: '**', component: PlayerSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
