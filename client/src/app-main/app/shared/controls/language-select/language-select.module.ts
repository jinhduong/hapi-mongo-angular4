import { LanguageSelectComponent } from './language-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LanguageSelectComponent],
  exports: [LanguageSelectComponent]
})
export class LanguageSelectModule { }
