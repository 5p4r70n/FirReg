import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirComponent } from './fir/fir.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { MasterPassResetComponent } from './master-pass-reset/master-pass-reset.component';
import { MasterPageComponent } from './master-page/master-page.component';
import {HttpClientModule} from "@angular/common/http"
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirComponent,
    SignupComponent,
    NavComponent,
    ContactComponent,
    MasterPassResetComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
