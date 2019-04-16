import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ThemeModule} from '../../@theme/theme.module';
import {BeeballIoTComponent} from './beeball-iot.component';

import {ChartModule} from 'angular2-chartjs';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';


import {BatteryConsumptionBeeBallComponent} from './iot-metrics/batteryConsumption-beeball-component';
import {BeeBallSolarComponent} from './iot-metrics/solarBeeball.component';

import {LuxMeterComponent} from './iot-metrics/iot-LuxMeter.component';
import {NoiseMeterComponent} from './iot-metrics/iot-NoiseMeter.component';

import {TemperatureCompensationPanelComponent} from './temperatureCompensation/temperature-compensation-panel.component';
import {ChartPanelSummaryComponent} from './temperatureCompensation/chart-panel-summary/chart-panel-summary.component';
import {ChartPanelHeaderComponent} from './temperatureCompensation/chart-panel-header/chart-panel-header.component';
import {TemperatureChartComponent} from './temperatureCompensation/charts/temperature-chart.component';
import {WeightChartComponent} from './temperatureCompensation/charts/weight-chart.component';
//import {TemperatureCompensationComponent} from './iot-metrics/temp-compensation.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    BeeballIoTComponent,
    BeeBallSolarComponent,
    BatteryConsumptionBeeBallComponent,
    LuxMeterComponent,
    NoiseMeterComponent,
    TemperatureCompensationPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    TemperatureChartComponent,
    WeightChartComponent,
   // TemperatureCompensationComponent
  ],
})
export class BeeBallIoTModule {
}
