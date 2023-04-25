
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RebuyComponent } from './rebuy.component';

const routes: Routes = [{ path: '', component: RebuyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RebuyRoutingModule { }
