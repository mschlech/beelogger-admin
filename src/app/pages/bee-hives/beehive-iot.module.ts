import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ThemeModule} from '../../@theme/theme.module';
import {BeehiveIoTComponent} from './beehive-iot.component';
import {ChartModule} from 'angular2-chartjs';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    BeehiveIoTComponent,
  ],
})
export class BeehiveIotModule {
}
