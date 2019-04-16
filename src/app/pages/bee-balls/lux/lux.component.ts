import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { Lux, LuxChart, LuxData } from '../../../@core/data/lux';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-lux',
  styleUrls: ['./lux.component.scss'],
  templateUrl: './lux.component.html',
})
export class LuxComponent implements OnDestroy {

  private alive = true;

  listData: Lux[];
  chartData: LuxChart[];

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private luxService: LuxData,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    forkJoin(
      this.luxService.getListData(),
      this.luxService.getChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([listData, chartData]: [Lux[], LuxChart[]] ) => {
        this.listData = listData;
        this.chartData = chartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
