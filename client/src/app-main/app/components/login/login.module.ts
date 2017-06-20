import { AuthService } from '../../../../core';
import { SharedModule } from '../../shared/shared.module';
import { LoginService } from './@services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService, AuthService]
})
export class LoginModule { }
