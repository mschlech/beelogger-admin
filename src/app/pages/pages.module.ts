import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BeehiveModule } from './bee-hives/beehive.module';
import { BeehiveIotModule } from './bee-hives/beehive-iot.module';
import { BeeBallModule } from './bee-balls/beeball.module';
import { BeeBallIoTModule } from './bee-balls/beeball-iot.module';
import { BeeCylinderModule } from './bee-cylinder/beecylinder.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    BeehiveModule,
    BeehiveIotModule,
    BeeBallModule,
    BeeBallIoTModule,
    BeeCylinderModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
