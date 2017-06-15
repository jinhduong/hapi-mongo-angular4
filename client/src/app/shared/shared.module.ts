import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LanguageSelectModule } from './controls/language-select/language-select.module';
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
    // LanguageSelectModule
  ],
  declarations: [],
  exports: [
    NgxErrorsModule,
    FormsModule,
    ReactiveFormsModule
    // LanguageSelectModule
  ]
})

export class SharedModule { }
