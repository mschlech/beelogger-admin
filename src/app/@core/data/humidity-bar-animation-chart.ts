import { Observable } from 'rxjs';

export abstract class HumidityBarAnimationChartData {
  abstract getHumidityChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }>;
}
