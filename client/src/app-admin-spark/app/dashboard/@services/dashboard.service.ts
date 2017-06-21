import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardService {

  private titleChangedSource = new Subject<string>();
  public titleChanged$ = this.titleChangedSource.asObservable();

  constructor() { }

  changeTitle(title: string = 'Dashboard') {
    this.titleChangedSource.next(title);
  }
}
