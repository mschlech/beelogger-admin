import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { UserActivityService } from './user-activity.service';
import { PeriodsService } from './periods.service';
import { TemperatureBarAnimationChartService } from './temperature-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { HiveReportService } from './hivereport.service';
import {Temperature} from '../data/temperature-humidity';
const SERVICES = [
  UserService,
  ElectricityService,
  UserActivityService,
  PeriodsService,
  TemperatureBarAnimationChartService,
  TemperatureHumidityService,
  SolarService,
  HiveReportService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
