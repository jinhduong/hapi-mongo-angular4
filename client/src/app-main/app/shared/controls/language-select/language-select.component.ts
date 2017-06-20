import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { languages as languageList } from './language-list';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.less']
})
export class LanguageSelectComponent implements OnInit {

  public languages = languageList;
  constructor( @Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
    console.log(this.languages, this.localeId, LOCALE_ID);
  }
}
