import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'dsb', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule', data: { preload: true } },
    { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordModule' },
    { path: '404', loadChildren: './p404/p404.module#P404Module' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

