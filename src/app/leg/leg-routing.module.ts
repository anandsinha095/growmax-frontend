
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegComponent } from './leg.component';

const routes: Routes = [{ path: '', component: LegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegRoutingModule { }
