import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  form = new FormGroup({});
  model: any = {};

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    translate.addLangs(['en', 'es']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
    this.model.lang = translate.currentLang;
  }
}
