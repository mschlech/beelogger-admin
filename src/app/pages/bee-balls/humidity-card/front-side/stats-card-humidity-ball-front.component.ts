import { Component } from '@angular/core';
// import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { HumidityBarAnimationChartData } from '../../../../@core/data/humidity-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-humidity-ball-card-front',
  styleUrls: ['./stats-card-humidity-ball-front.component.scss'],
  templateUrl: './stats-card-humidity-ball-front.component.html',
})
export class StatsCardHumidityBallFrontComponent {

  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private humidityBarAnimationChartService: HumidityBarAnimationChartData) {
    this.humidityBarAnimationChartService.getHumidityChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
