import { HttpService } from '../../core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  async ngOnInit() {
    // const list = await this._httpService.get('/tasks')
    //   .map(res => res.json())
    //   .toPromise();
    // console.log(list);
  }
}
