import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {FirComponent} from "./fir/fir.component";
import {ContactComponent} from "./contact/contact.component";
import {MasterPassResetComponent} from "./master-pass-reset/master-pass-reset.component";
import {MasterPageComponent} from "./master-page/master-page.component"
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'signUp', component : SignupComponent},
  {path: 'fir', component : FirComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'MasPasReset',component:MasterPassResetComponent},
  {path: 'MasterPage',component:MasterPageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
