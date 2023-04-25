import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class CommunityModule { }
