import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Thirst-party modules
import { NgxErrorsModule } from '@ultimate/ngxerrors';


@NgModule({
  imports: [
    CommonModule,
    NgxErrorsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    NgxErrorsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
