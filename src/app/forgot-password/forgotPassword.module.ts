import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordRoutingModule } from './forgotPassword-routing.module';
import { ForgotPasswordComponent } from './forgotPassword.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class ForgotPasswordModule { }
