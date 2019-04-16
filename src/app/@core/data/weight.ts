import { Observable } from 'rxjs';

export interface WeightService {
  date: string;
  pagesVisitCount: number;
  deltaUp: boolean;
  newVisits: number;
}

export abstract class WeightData {
  abstract getWeightData(period: string): Observable<WeightService[]>;
}
