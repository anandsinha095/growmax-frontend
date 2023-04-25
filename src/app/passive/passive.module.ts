import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PassiveRoutingModule } from './passive-routing.module';
import { PassiveComponent } from './passive.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    PassiveComponent
  ],
  imports: [
    CommonModule,
    PassiveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class PassiveModule { }
