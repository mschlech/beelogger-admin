import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ThemeModule} from '../../@theme/theme.module';
import {BeeballComponent} from './beeball.component';

import {ChartModule} from 'angular2-chartjs';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import {HumidityBallCardComponent} from './humidity-card/humidity-ball-card.component';
import {StatsCardHumidityBallFrontComponent} from './humidity-card/front-side/stats-card-humidity-ball-front.component';
import {StatsCardHumidityBallComponent} from './humidity-card/back-side/stats-card-humidity-ball-back.component';
import {StatsBarHumidityBallAnimationChartComponent} from './humidity-card/front-side/stats-bar-humidity-ball-animation-chart.component';
import {StatsAreaHumidityBallChartComponent} from './humidity-card/back-side/stats-area-humidity-ball-chart.component';

import {TemperatureBallCardComponent} from './temperature-card/temperature-ball-card.component';
import {BeecountOverviewComponent} from './beeCount/beecount.component';
import {StatsCardTemperatureBallFrontComponent} from './temperature-card/front-side/stats-card-temperature-ball-front.component';
import {StatsCardTemperatureBallBackComponent} from './temperature-card/back-side/stats-card-temperature-ball-back.component';
import {StatsBarTemperatureBallAnimationChartComponent} from './temperature-card/front-side/stats-bar-temperature-ball-animation-chart.component';
import {StatsAreaTemperatureBallChartComponent} from './temperature-card/back-side/stats-area-temperature-ball-chart.component';



import {BeeBallHumidityOverviewComponent} from './humidity/humdity.component';
import {BeeBallWeightOverviewComponent} from './weight/weigth.component';
import {BeeBallTemperatureInsideOverviewComponent} from './tempertureInside/temperatureInside.component';

import {LuxComponent} from './lux/lux.component';
import {LuxChartComponent} from './lux/lux-chart/lux-chart.component';

import {WeightCompensationComponent} from './iot-metrics/weight-compensation.component';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    BeeballComponent,
    TemperatureBallCardComponent,
    StatsCardTemperatureBallFrontComponent,
    StatsCardTemperatureBallBackComponent,
    StatsAreaTemperatureBallChartComponent,
    StatsBarTemperatureBallAnimationChartComponent,

    HumidityBallCardComponent,
    StatsCardHumidityBallFrontComponent,
    StatsCardHumidityBallComponent,
    StatsBarHumidityBallAnimationChartComponent,
    StatsAreaHumidityBallChartComponent,

    BeeBallHumidityOverviewComponent,
    BeeBallWeightOverviewComponent,
    BeeBallTemperatureInsideOverviewComponent,
    BeecountOverviewComponent,

    WeightCompensationComponent,

    LuxComponent,
    LuxChartComponent,
  ],
})
export class BeeBallModule {
}
