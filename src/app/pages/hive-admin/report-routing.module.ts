import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { HivesReportComponent } from './report/hives-report.component';
import { PlatformUserComponent} from './useradmin/platform-user.component';

const routes: Routes = [{
  path: '',
  component: ReportComponent,
  children: [{
    path: 'report',
    component: HivesReportComponent,
  }, {
    path: 'useradmin',
    component: PlatformUserComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule { }

export const routedComponents = [
  ReportComponent,
  HivesReportComponent,
  PlatformUserComponent,
];
