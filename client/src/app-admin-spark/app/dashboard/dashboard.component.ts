import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, AfterContentInit {

  public title = 'Dashboard';

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    setTimeout(function () {
      // Page.init();
      Spark.init();
    }, 100);
  }
}
