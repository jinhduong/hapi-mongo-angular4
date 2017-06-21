import { TitleComponent } from './title/title.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    MessagesComponent,
    TasksComponent,
    FooterComponent,
    AvatarComponent,
    TitleComponent,
    SearchComponent
  ]
})
export class DashboardModule { }
