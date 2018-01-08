import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'science', component: ScienceComponent, data: { num: 1 } },
  { path: 'technology', component: TechnologyComponent, data: { num: 5 } },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
