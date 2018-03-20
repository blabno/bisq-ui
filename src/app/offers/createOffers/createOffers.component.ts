import * as _ from 'lodash';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentAccountsDAO} from "../../shared/DAO/paymentAccounts.dao";
import {OffersDAO} from "../../shared/DAO/offers.dao";
import {ToastService} from "../../shared/services/toast.service";
import {MarketPrizeService} from "../../shared/services/marketPrize.service";

@Component({
  selector: 'app-create-offers',
  templateUrl: 'createOffers.component.html'
})
export class CreateOffersComponent implements OnInit, OnDestroy {
  @ViewChild('createForm') createForm;

  constructor(private activeRoute: ActivatedRoute, private paymentsDAO: PaymentAccountsDAO, private offersDAO: OffersDAO, private toast: ToastService, private marketPrize: MarketPrizeService) {
  }

  private paramSubscribe: any;
  private marketPrice = 0;

  type: 'sell' | 'buy';

  accountsList;
  tradeList;
  model = {
    accountId: null,
    tradeCurrency: null,
    priceType: 'FIXED',
    percentageFromMarketPrice: 0,
    amount: 0,
    fixedPrice: 0,
    calculatedValue: 0,
    minAmount: 0,
    deposit: 0.01
  };


  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.type = params['type'];
    });
    this.paymentsDAO.query().then((res: any) => {
      this.accountsList = res.paymentAccounts;
    });
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  onSelectAccount() {
    if (!this.model.accountId) {
      return;
    }
    const selectedAccount = _.find(this.accountsList, {id: this.model.accountId});
    this.tradeList = selectedAccount.tradeCurrencies;
    this.model.tradeCurrency = selectedAccount.selectedTradeCurrency;
    this.getMarketPrize(selectedAccount.selectedTradeCurrency);
  }

  private getMarketPrize(fiatCurrency) {
    this.marketPrize.get('BTC', fiatCurrency).then(result => {
      this.marketPrice = result;
      this.calculateBasedOnPercentageFromMarketPrice();
    });
  }

  private calculateBasedOnPercentageFromMarketPrice() {
    const newFixedPrice = this.marketPrice - (this.createForm.value.percentageFromMarketPrice / 100 * this.marketPrice);
    this.createForm.controls['fixedPrice'].setValue(newFixedPrice);
    this.createForm.controls['calculatedValue'].setValue(this.createForm.value.amount * newFixedPrice);
  }

  onValueChanges(event) {
    if (_.get(event, '_native.nativeElement') !== document.activeElement) {
      return;
    }
    const elementName = _.get(event, '_native.nativeElement.name');
    const values = this.createForm.value;
    switch (elementName) {
      case 'amount':
        this.createForm.controls['calculatedValue'].setValue(values.amount * values.fixedPrice);
        if (values.amount < values.minAmount) {
          this.createForm.controls['minAmount'].setValue(values.amount);
        }
        break;
      case 'fixedPrice':
        this.createForm.controls['calculatedValue'].setValue(values.amount * values.fixedPrice);
        this.createForm.controls['percentageFromMarketPrice'].setValue(100 - (values.fixedPrice * this.marketPrice) / 100);
        break;
      case 'percentageFromMarketPrice':
        this.calculateBasedOnPercentageFromMarketPrice();
        break;
      case 'calculatedValue':
        const newAmount = values.fixedPrice * values.calculatedValue;
        this.createForm.controls['amount'].setValue(newAmount);
        if (newAmount < values.minAmount) {
          this.createForm.controls['minAmount'].setValue(newAmount);
        }
        break;
      case 'minAmount':
        if (0 > values.minAmount) {
          this.createForm.controls['minAmount'].setValue(0);
        }
        if (values.amount < values.minAmount) {
          this.createForm.controls['amount'].setValue(values.minAmount);
        }
        break;
      case 'tradeCurrency':
        this.getMarketPrize(values.priceType);
        break;
      default:
        _.noop();
    }
  }

  submit() {
    const preparedForm = _.merge({}, _.omit(this.model, ['tradeCurrency', 'calculatedValue']), {
      fundUsingBisqWallet: true,
      direction: this.type.toUpperCase(),
      marketPair: 'BTC_' + this.model.tradeCurrency
    });
    this.offersDAO.create(preparedForm).then(res => {
      this.toast.show('SUCCESS', 'success');
    }).catch(error => {
      this.toast.show(error.message, 'error');
    });
  }
}
