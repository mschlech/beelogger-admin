import { Observable } from 'rxjs';

export abstract class BatteryData {
  abstract getBatteryData(): Observable<number>;
}
