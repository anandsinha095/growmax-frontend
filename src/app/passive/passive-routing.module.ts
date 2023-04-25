
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassiveComponent } from './passive.component';

const routes: Routes = [{ path: '', component: PassiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassiveRoutingModule { }
