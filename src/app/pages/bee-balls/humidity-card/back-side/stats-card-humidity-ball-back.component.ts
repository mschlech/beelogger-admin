import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import {HumidityBarData} from '../../../../@core/data/humidity-bar';

@Component({
  selector: 'ngx-stats-humidity-ball-card-back',
  styleUrls: ['./stats-card-humidity-ball-back.component.scss'],
  templateUrl: './stats-card-humidity-ball-back.component.html',
})
export class StatsCardHumidityBallComponent implements OnDestroy {

  private alive = true;

  chartData: number[];

  constructor(private humidityBarData: HumidityBarData) {
    this.humidityBarData.getHumidityBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
