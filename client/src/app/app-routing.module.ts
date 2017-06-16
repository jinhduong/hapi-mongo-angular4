import { CustomPreloading } from './core/strategies/custom-preloading';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: './main/components/login/login.module#LoginModule', data: { preload: true },
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

