import { Observable } from 'rxjs';

export abstract class TemperatureBarAnimationChartData {
  abstract getTemperatureChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }>;
}

