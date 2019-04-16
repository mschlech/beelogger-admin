import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HumidityBarData } from '../data/humidity-bar';

@Injectable()
export class HumidityBarService extends HumidityBarData {

  private humidityBarData: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];

  getHumidityBarData(): Observable<number[]> {
    return observableOf(this.humidityBarData);
  }
}
