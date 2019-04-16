import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {BeehiveComponent} from './bee-hives/beehive.component';
import {BeeballComponent} from './bee-balls/beeball.component';
import {BeeCylinderComponent} from './bee-cylinder/beecylinder.component';
import {BeeballIoTComponent} from './bee-balls/beeball-iot.component';
import {BeehiveIotModule} from './bee-hives/beehive-iot.module';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'beehives',
      component: BeehiveComponent,
    },
    {
      path: 'beehives/iot-metrics',
      component: BeehiveIotModule,
    },
    {
      path: 'beeball',
      component: BeeballComponent,
    },
    {
      path: 'beeball/iot-metrics',
      component: BeeballIoTComponent,
    },
    {
      path: 'beecylinder',
      component: BeeCylinderComponent,
    },
    {
      path: 'hive-admin',
      loadChildren: './hive-admin/report.module#ReportModule',
    },
    {
      path: '',
      redirectTo: 'beeball',
      pathMatch: 'full',
    }, {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
