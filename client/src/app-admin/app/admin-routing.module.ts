import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './components/layout/layout.module#LayoutModule', data: { preload: true } },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './components/signup/signup.module#SignupModule' },
  { path: 'not-found', loadChildren: './components/not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
