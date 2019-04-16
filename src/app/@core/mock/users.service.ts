import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    marcus: { name: 'Marcus Schlechter', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Holfort', picture: 'assets/images/eva.png' },
    rudi: { name: 'Rudi Kramm', picture: 'assets/images/jack.png' },
    linus: { name: 'Linus Holfort', picture: 'assets/images/lee.png' },
    jonas: { name: 'Jonas Holfort', picture: 'assets/images/alan.png' },
    barbara: { name: 'Barbara Kramm', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.marcus, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.rudi, type: this.types.mobile },
    { user: this.users.linus, type: this.types.mobile },
    { user: this.users.jonas, type: this.types.home },
    { user: this.users.barbara, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.marcus, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45)},
    { user: this.users.rudi, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { user: this.users.linus, type: this.types.mobile, time: this.time.setHours(11, 24)},
    { user: this.users.jonas, type: this.types.mobile, time: this.time.setHours(10, 45)},
    { user: this.users.barbara, type: this.types.work, time: this.time.setHours(9, 42)},
    { user: this.users.eva, type: this.types.work, time: this.time.setHours(9, 31)},
    { user: this.users.jonas, type: this.types.mobile, time: this.time.setHours(8, 0)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
