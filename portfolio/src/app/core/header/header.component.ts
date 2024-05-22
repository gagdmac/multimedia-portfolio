import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  form = new FormGroup({});
  model: any = {};

  constructor(
    public translate: TranslateService,
    private sharedService: SharedService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
    this.model.lang = translate.currentLang;
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.sharedService.hideElement = target.value === 'hide';
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
