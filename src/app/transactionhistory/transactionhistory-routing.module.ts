
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionhistoryComponent } from './transactionhistory.component';

const routes: Routes = [{ path: '', component: TransactionhistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionhistoryRoutingModule { }
