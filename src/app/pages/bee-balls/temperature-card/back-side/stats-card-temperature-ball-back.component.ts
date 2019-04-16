import { Component, OnDestroy } from '@angular/core';
import { TemperatureBarData } from '../../../../@core/data/temperature-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-temperature-ball-card-back',
  styleUrls: ['./stats-card-temperature-ball-back.component.scss'],
  templateUrl: './stats-card-temperature-ball-back.component.html',
})
export class StatsCardTemperatureBallBackComponent implements OnDestroy {

  private alive = true;

  chartData: number[];

  constructor(private temperatureBarData: TemperatureBarData) {
    this.temperatureBarData.getTemperatureBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
