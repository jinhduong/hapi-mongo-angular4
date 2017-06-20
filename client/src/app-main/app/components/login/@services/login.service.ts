import { HttpService } from '../../../core/services/http.service';
import { LoginModel } from '../@models/login-model';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(
    private _httpService: HttpService
  ) { }

  login(model: LoginModel) {
    return this._httpService.postData('/users/login', model)
      .map(res => res.json());
  }

  demo() {
    return this._httpService.get('/tasks')
      .map(res => res.json());
  }
}
