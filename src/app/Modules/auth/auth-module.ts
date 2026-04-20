import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './Components/login/login';
import { Logout } from './Components/logout/logout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Login,
    Logout
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
   AngularSvgIconModule.forRoot(),
    FormsModule
  ]
})
export class AuthModule { }
