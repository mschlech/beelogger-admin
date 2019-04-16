import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAuthModule, NbDummyAuthStrategy} from '@nebular/auth';
import {NbSecurityModule, NbRoleProvider} from '@nebular/security';
import {of as observableOf} from 'rxjs';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  StateService,
} from './utils';
import {UserData} from './data/users';
import {ElectricityData} from './data/electricity';
import {UserActivityData} from './data/user-activity';
import {HumidityBarAnimationChartData} from './data/humidity-bar-animation-chart';

import {TemperatureBarAnimationChartData} from './data/temperature-bar-animation-chart';
import {TemperatureHumidityData} from './data/temperature-humidity';
import {HumidityBarData} from './data/humidity-bar';

import {SolarData} from './data/solar';
import {TemperatureBarData} from './data/temperature-bar';
import {HiveReportData} from './data/hivereport-table';

// import { TemperatureChartData} from './data/temperature-chart';
// import { WeightChartData } from './data/weight-chart';

import {UserService} from './mock/users.service';
import {ElectricityService} from './mock/electricity.service';
import {UserActivityService} from './mock/user-activity.service';
import {TemperatureBarAnimationChartService} from './mock/temperature-bar-animation-chart.service';
import {HumidityBarAnimationChartService} from './mock/humidity-bar-animation-chart.service';
import {TemperatureHumidityService} from './mock/temperature-humidity.service';
import {TemperatureBarService} from './mock/temperature-bar.service';
import {HumidityBarService} from './mock/humidity-bar.service';
import {SolarService} from './mock/solar.service';
import {MockDataModule} from './mock/mock-data.module';

// import { TemperatureCompensationChartService} from './mock/temperature-compensation-chart.service';
import {HiveReportService} from './mock/hivereport.service';

const socialLinks = [
  {
    url: 'https://github.com/mschlech/beelogger-admin',
    target: '_blank',
    icon: 'socicon-github',
  },
];

const DATA_SERVICES = [
  {provide: UserData, useClass: UserService},
  {provide: ElectricityData, useClass: ElectricityService},
  {provide: UserActivityData, useClass: UserActivityService},

  {provide: HumidityBarAnimationChartData, useClass: HumidityBarAnimationChartService},

  {provide: TemperatureBarAnimationChartData, useClass: TemperatureBarAnimationChartService},
  {provide: TemperatureHumidityData, useClass: TemperatureHumidityService},
  {provide: HumidityBarData, useClass: HumidityBarService},

  {provide: HiveReportData, useClass: HiveReportService},

  {provide: SolarData, useClass: SolarService},
  {provide: TemperatureBarData, useClass: TemperatureBarService},
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
