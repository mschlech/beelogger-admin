import { Observable } from 'rxjs';
import { TemperatureChart } from './temperature-chart';
import { WeightChart } from './weight-chart';

export interface TemperatureCompensationSummary {
  title: string;
  value: number;
}
// compensation of weight measurement differenciations caused by temperature variations
export abstract class TemperatureCompensationChartData {
  abstract getTemperatureCompensationsChartSummary(): Observable<TemperatureCompensationSummary[]>;
  abstract getTemperatureChartData(period: string): Observable<TemperatureChart>;
  abstract getWeightChartData(period: string): Observable<WeightChart>;
}
