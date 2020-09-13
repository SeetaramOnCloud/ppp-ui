import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PppLayoutComponent } from './ppp-layout/ppp-layout.component';
import {SvgComponent} from './svg/svg.component';
const routes: Routes = [ { path: 'layout', component: PppLayoutComponent },{ path: 'svg', component: SvgComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
