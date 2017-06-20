import { AvatarComponent } from './avatar/avatar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    MessagesComponent,
    TasksComponent,
    FooterComponent,
    AvatarComponent
  ]
})
export class DashboardRoutingModule { }
