import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  { path: '', component: SportsComponent, data: { num: 10 } },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsRoutingModule {}
