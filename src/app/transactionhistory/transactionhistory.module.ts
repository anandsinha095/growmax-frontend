import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TransactionhistoryRoutingModule } from './transactionhistory-routing.module';
import { TransactionhistoryComponent } from './transactionhistory.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    TransactionhistoryComponent
  ],
  imports: [
    CommonModule,
    TransactionhistoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true,
    }),
  ]
})
export class TransactionhistoryModule { }
