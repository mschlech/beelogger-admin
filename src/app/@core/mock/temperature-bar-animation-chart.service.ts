import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { TemperatureBarAnimationChartData } from '../data/temperature-bar-animation-chart';

@Injectable()
export class TemperatureBarAnimationChartService extends TemperatureBarAnimationChartData {

  private data: any;

  constructor() {
    super();
    this.data = {
      firstLine: this.getDataForFirstLine(),
      secondLine: this.getDataForSecondLine(),
    };
  }

  getDataForFirstLine(): number[] {
    return this.createEmptyArray(100)
      .map((_, index) => {
        const oneFifth = index / 5;

        return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
      });
  }

  getDataForSecondLine(): number[] {
    return this.createEmptyArray(100)
      .map((_, index) => {
        const oneFifth = index / 5;

        return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
      });
  }

  createEmptyArray(nPoints: number) {
    return Array.from(Array(nPoints));
  }

  getTemperatureChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }> {
    return observableOf(this.data);
  }
}
