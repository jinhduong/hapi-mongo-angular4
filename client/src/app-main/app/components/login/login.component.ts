import { mailFormat, ThemeComponent, AuthService, ErrorMessage } from '../../../../core';
import { UserModel } from './@models/user-model';
import { LoginService } from './@services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../../themes/config';

@ThemeComponent({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  themeConfig: config
})
export class LoginComponent implements OnInit {

  public userModel = new UserModel();
  public form: FormGroup;
  public errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['',
        Validators.required,
        mailFormat],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)]
      ]
    });
  }

  async onSubmit() {
    try {
      this.userModel = await this._loginService.login(this.form.value).toPromise();
      this._authService.setUser<UserModel>(this.userModel);
      this.errorMessage = '';
    } catch (ex) {
      const err: ErrorMessage = ex;
      this.errorMessage = err.message;
    }
  }
}
