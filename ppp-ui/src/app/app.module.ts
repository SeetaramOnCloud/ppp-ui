import { PppMainMenuComponent } from './ppp-main-menu/ppp-main-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatMenuModule} from '@angular/material/menu';
import { PppLayoutComponent } from './ppp-layout/ppp-layout.component';
import { SvgComponent } from './svg/svg.component';
@NgModule({
  declarations: [
    AppComponent,
    PppMainMenuComponent,
    PppLayoutComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    MatNativeDateModule,
  ReactiveFormsModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
