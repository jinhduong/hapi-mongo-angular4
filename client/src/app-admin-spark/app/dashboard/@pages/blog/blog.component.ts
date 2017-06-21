import { DashboardService } from './../../@services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})

export class BlogComponent implements OnInit {

  constructor(
    private _dsbService: DashboardService
  ) { }

  ngOnInit() {
    this._dsbService.changeTitle('Blog');
  }

}
