import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms' 

import { PreLoginRoutingModule } from './pre-login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PreLoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class PreLoginModule { }
