import { NgModule } from '@angular/core';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports/sports.component';

@NgModule({
  declarations: [SportsComponent],
  imports: [SportsRoutingModule],
  exports: [],
})
export class SportsModule {}
