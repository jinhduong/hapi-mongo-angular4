import { CustomPreloading } from './core/strategies/custom-preloading';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: './components/login/login.module#LoginModule', data: { preload: true },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

