import { Observable } from 'rxjs';

export abstract class TemperatureBarData {
  abstract getTemperatureBarData(): Observable<number[]>;
}

