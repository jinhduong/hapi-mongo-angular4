import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P404RoutingModule } from './p404-routing.module';
import { P404Component } from './p404.component';

@NgModule({
  imports: [
    CommonModule,
    P404RoutingModule
  ],
  declarations: [P404Component]
})
export class P404Module { }
