import { Observable } from 'rxjs';

export interface WeightActive {
  date: string;
  pagesVisitCount: number;
  deltaUp: boolean;
  newVisits: number;
}

export abstract class WeightActivityData {
  abstract getWeightActivityData(period: string): Observable<WeightActive[]>;
}
