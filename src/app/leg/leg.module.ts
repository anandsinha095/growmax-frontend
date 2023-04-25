import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LegRoutingModule } from './leg-routing.module';
import { LegComponent } from './leg.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LegComponent
  ],
  imports: [
    CommonModule,
    LegRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class LegModule { }
