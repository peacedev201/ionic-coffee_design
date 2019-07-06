
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public isArabic: boolean = false;

  constructor(
    public translate: TranslateService) {
      console.log('Hello GloabalProvider Provider');
      translate.setDefaultLang('en');
  }
  getCurrentLanguageArabic() {
    return this.isArabic;
  }
  setArabic(isArabic: boolean) {
    this.isArabic = isArabic;
    if (this.isArabic)
      this.translate.use('ar');
    else
      this.translate.use('en');
  }
  changeLanguage() {
    this.isArabic = !this.isArabic;
    if (this.isArabic)
      this.translate.use('ar');
    else
      this.translate.use('en');
  }

}
