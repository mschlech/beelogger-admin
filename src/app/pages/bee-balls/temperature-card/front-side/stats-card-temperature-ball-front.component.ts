import { Component } from '@angular/core';
import { TemperatureBarAnimationChartData } from '../../../../@core/data/temperature-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-temperature-ball-card-front',
  styleUrls: ['./stats-card-temperature-ball-front.component.scss'],
  templateUrl: './stats-card-temperature-ball-front.component.html',
})
export class StatsCardTemperatureBallFrontComponent {

  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private temperatureBarAnimationChartService: TemperatureBarAnimationChartData) {
    this.temperatureBarAnimationChartService.getTemperatureChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
