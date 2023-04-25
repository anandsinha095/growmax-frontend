
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinipackComponent } from './minipack.component';

const routes: Routes = [{ path: '', component: MinipackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinipackRoutingModule { }
