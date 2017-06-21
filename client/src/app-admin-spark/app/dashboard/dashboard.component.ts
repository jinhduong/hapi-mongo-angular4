import { DashboardService } from './@services/dashboard.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { AutoUnsubscribe, Timeout, NgLog } from '../../../core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

@AutoUnsubscribe()
@NgLog()
export class DashboardComponent implements OnInit, AfterContentInit {

  public title = 'Dashboard';
  private title$: Subscription;

  constructor(
    private _dsbService: DashboardService
  ) { }

  ngOnInit() {
    this.title$ = this._dsbService.titleChanged$.subscribe(newTitle => {
      this.title = newTitle;
    });
  }

  ngAfterContentInit(): void {
    this.uiInit();
  }

  @Timeout(5000)
  uiInit() {
    Spark.init();
  }
}
