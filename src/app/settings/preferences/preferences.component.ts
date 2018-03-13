import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html'
})
export class PreferencesComponent {
  public conf = {};
  public baseCurrency = ['Bitcoin', 'Litecoin', 'Dash'];
  public selectedBaseCurrency = this.baseCurrency[0];
  public languagesNames = {pl: 'Polski', en: 'English'};
  public countries = ['Poland', 'Germany', 'Russia']
  public selectedCountry = this.countries[0];
  public bitcoinExplorers = ['Bitaps'];
  public selectedBitcoinExplorer = this.bitcoinExplorers[0];
  public widthdrawalTransactionFee = 10;
  public widthdrawalTransactionFeeEditable = false;
  constructor(public translate: TranslateService) {}
  langChange(e) {
    this.translate.use(e);
  }
}
