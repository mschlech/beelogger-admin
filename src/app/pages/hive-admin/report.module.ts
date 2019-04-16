import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ReportRoutingModule, routedComponents } from './report-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ReportRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ReportModule { }
