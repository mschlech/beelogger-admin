import { Observable } from 'rxjs';

export interface Month {
  month: string;
  delta: string;
  down: boolean;
  kWatts: string;
  cost: string;
}

export interface Lux {
  title: string;
  active?: boolean;
  months: Month[];
}

export interface LuxChart {
  label: string;
  value: number;
}

export abstract class LuxData {
  abstract getListData(): Observable<Lux[]>;
  abstract getChartData(): Observable<LuxChart[]>;
}
