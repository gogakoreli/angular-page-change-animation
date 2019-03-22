import { NgModule } from '@angular/core';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [BusinessComponent],
  imports: [BusinessRoutingModule],
  exports: [],
})
export class BusinessModule {}
