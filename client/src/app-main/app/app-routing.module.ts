import { CustomPreloading } from '../../core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: './components/login/login.module#LoginModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

