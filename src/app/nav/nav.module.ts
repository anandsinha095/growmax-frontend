import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    NavComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavModule { }
