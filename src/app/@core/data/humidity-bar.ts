import { Observable } from 'rxjs';

export abstract class HumidityBarData {
  abstract getHumidityBarData(): Observable<number[]>;
}

