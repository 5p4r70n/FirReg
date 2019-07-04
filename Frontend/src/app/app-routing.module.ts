import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {FirComponent} from "./fir/fir.component";
import {ContactComponent} from "./contact/contact.component";
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'signUp', component : SignupComponent},
  {path: 'fir', component : FirComponent},
  {path: 'contact', component : ContactComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
