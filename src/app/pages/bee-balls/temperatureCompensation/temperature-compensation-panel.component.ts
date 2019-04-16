import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { TemperatureChartComponent } from './charts/temperature-chart.component';
import { WeightChartComponent } from './charts/weight-chart.component';
import { TemperatureChart } from '../../../@core/data/temperature-chart';
import { WeightChart } from '../../../@core/data/weight-chart';
import { TemperatureCompensationSummary, TemperatureCompensationChartData } from '../../../@core/data/temperature-compensation-chart';

@Component({
  selector: 'ngx-temperature-compensation-charts',
  styleUrls: ['./temperature-compensation-charts-panel.component.scss'],
  templateUrl: './temperature-compensation-panel.component.html',
})
export class TemperatureCompensationPanelComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: TemperatureCompensationSummary[];
  period: string = 'week';
  temperatureChartData: TemperatureChart;
  weightChartData: WeightChart;

  @ViewChild('temperatureChart') temperatureChart:  TemperatureChartComponent;
  @ViewChild('weightChart') weightChart: WeightChartComponent;

  constructor(private temperatureCompensationChartService: TemperatureCompensationChartData) {
    this.temperatureCompensationChartService.getTemperatureCompensationsChartSummary()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getTemperatureChartData(this.period);
    this.getWeightChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getTemperatureChartData(value);
    this.getWeightChartData(value);
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Weight') {
      this.weightChart.resizeChart();
    } else {
      this.temperatureChart.resizeChart();
    }
  }

  getTemperatureChartData(period: string) {
    this.temperatureCompensationChartService.getTemperatureChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(temperatureChartData => {
        this.temperatureChartData = temperatureChartData;
      });
  }

  getWeightChartData(period: string) {
    this.temperatureCompensationChartService.getWeightChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(weightChartData => {
        this.weightChartData = weightChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
