import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RebuyRoutingModule } from './rebuy-routing.module';
import { RebuyComponent } from './rebuy.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RebuyComponent
  ],
  imports: [
    CommonModule,
    RebuyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class RebuyModule { }
