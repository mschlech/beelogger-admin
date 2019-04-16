import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TemperatureChart, TemperatureChartData } from '../data/temperature-chart';
import { TemperatureCompensationSummary, TemperatureCompensationChartData} from '../data/temperature-compensation-chart';
import { WeightChart, WeightChartData } from '../data/weight-chart';

@Injectable()
export class TemperatureCompensationChartService extends TemperatureCompensationChartData {

  private summary = [
    {
      title: 'Marketplace',
      value: 3654,
    },
    {
      title: 'Last Month',
      value: 946,
    },
    {
      title: 'Last Week',
      value: 654,
    },
    {
      title: 'Today',
      value: 230,
    },
  ];

  constructor(private temperatureChartService: TemperatureChartData,
              private weightChartService: WeightChartData) {
    super();
  }

  getTemperatureCompensationsChartSummary(): Observable<TemperatureCompensationSummary[]> {
    return observableOf(this.summary);
  }

  getTemperatureChartData(period: string): Observable<TemperatureChart> {
    return observableOf(this.temperatureChartService.getTemperatureChartData(period));
  }

  getWeightChartData(period: string): Observable<WeightChart> {
    return observableOf(this.weightChartService.getWeightChartData(period));
  }
}
