import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {HiveReportData} from '../../../@core/data/hivereport-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './hives-report.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class HivesReportComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Hive ID',
        type: 'number',
      },
      location: {
        title: 'Location',
        type: 'string',
      },
      hiveType: {
        title: 'Hive Type',
        type: 'string',
      },
      droneBreed: {
        title: 'drone breed',
        type: 'string',
      },
      queenSeen: {
        title: 'queen seen',
        type: 'string',
      },
      treatment: {
        title: 'treatment',
        type: 'String',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: HiveReportData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
