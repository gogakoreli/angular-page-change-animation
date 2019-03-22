import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  { path: '', component: BusinessComponent, data: { num: 7 } },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
