import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { TemperatureBarData } from '../data/temperature-bar';

@Injectable()
export class TemperatureBarService extends TemperatureBarData {

  private temperatureBarData: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  getTemperatureBarData(): Observable<number[]> {
    return observableOf(this.temperatureBarData);
  }
}
