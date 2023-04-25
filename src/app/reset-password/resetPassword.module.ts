import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetPasswordRoutingModule } from './resetPassword-routing.module';
import { ResetPasswordComponent } from './resetPassword.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class ResetPasswordModule { }
