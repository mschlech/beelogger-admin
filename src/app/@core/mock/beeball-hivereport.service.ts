import { Injectable } from '@angular/core';
import { HiveReportData } from '../data/hivereport-table';

@Injectable()
export class BeeballHivereportService extends HiveReportData  {

  data = [{
    id: 1,
    location: 'Halde Norddeutschland',
    hivetype: 'beeball',
    droneBreed: 'yes',
    queenSeen: 'yes',
    treatment: 'ant acid',
  }, {
    id: 2,
    location: 'at Rudis place',
    hivetype: 'beeball',
    droneBreed: 'yes',
    queenSeen: 'no',
    treatment: 'no',
  }, {
    id: 3,
    location: 'at Theklas place',
    hivetype: 'beeball',
    droneBreed: 'yes',
    queenSeen: 'no',
    treatment: 'none',
  }, {
    'id': 4,
    'location': 'Halde Norddeutschland',
    'hivetype': 'beeball',
    'droneBreed': 'yes',
    'queenSeen': 'yes',
    'treatment': 'ant acid',
  }, {
    'id': 5,
    'location': 'at Rudis place',
    'hivetype': 'beeball',
    'droneBreed': 'yes',
    'queenSeen': 'yes',
    'treatment': 'none',
  }, {
    'id': 6,
    'location': 'at Theklas place',
    'hivetype': 'beeball',
    'droneBreed': 'no',
    'queenSeen': 'yes',
    'treatment': 'none',
  }];

  getData() {
    return this.data;
  }
}
