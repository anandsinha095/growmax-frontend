import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MinipackRoutingModule } from './minipack-routing.module';
import { MinipackComponent } from './minipack.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    MinipackComponent
  ],
  imports: [
    CommonModule,
    MinipackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class MinipackModule { }
