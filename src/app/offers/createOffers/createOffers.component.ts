import _ from 'lodash';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentAccountsDAO} from "../../shared/DAO/paymentAccounts.dao";
import {OffersDAO} from "../../shared/DAO/offers.dao";
import {ToastService} from "../../shared/services/toast.service";
import {MarketPriceService} from "../../shared/services/marketPrice.service";
import t from '../../shared/defineTextToTranslate';

t([
  'OFFERS.CREATE.FILL_ALL_REQUIRED_FIELDS',
  'OFFERS.CREATE.AMOUNT_MUST_BE_POSITIVE',
  'OFFERS.CREATE.MIN_AMOUNT_MUST_BE_BIGGER_THAN_AMOUNT',
  'OFFERS.CREATE.FIXED',
  'OFFERS.CREATE.PERCENTAGE',
  'OFFERS.CREATE.TYPE',
]);

@Component({
  selector: 'app-create-offers',
  templateUrl: 'createOffers.component.html'
})
export class CreateOffersComponent implements OnInit, OnDestroy {
  @ViewChild('createForm') createForm;
  type: 'sell' | 'buy';
  accountsList;
  noAccounts = false;
  tradeList;
  model = {
    accountId: null,
    tradeCurrency: null,
    priceType: 'PERCENTAGE',
    isFixedPrice: false,
    percentageFromMarketPrice: 0,
    amount: 0,
    fixedPrice: 0,
    calculatedValue: 0,
    minAmount: 0,
    deposit: 0.01
  };
  private paramSubscribe: any;
  public marketPrice = 0;
  public creatingOffer;

  constructor(private activeRoute: ActivatedRoute,
              private paymentsDAO: PaymentAccountsDAO,
              private offersDAO: OffersDAO,
              private toast: ToastService,
              private marketPriceService: MarketPriceService,
              private router: Router) {
    this.paymentsDAO.query().then((res: any) => {
      this.accountsList = res.paymentAccounts;
      if (!this.accountsList.length) {
        this.noAccounts = true;
      }
      if (1 === this.accountsList.length) {
        this.model.accountId = _.head(this.accountsList).id;
        this.onSelectAccount();
      }
    });
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.type = params['type'];
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
    this.getMarketPrice(selectedAccount.selectedTradeCurrency);
  }

  onValueChanges(event) {
    if (_.get(event, '_native.nativeElement') !== document.activeElement) {
      return;
    }
    const elementName = _.get(event, '_native.nativeElement.name');
    const values = this.createForm.value;
    const setValue = {
      calculatedValue: (value?) => this.createForm.controls['calculatedValue'].setValue((value || values.amount) * values.fixedPrice),
      amount: value => this.createForm.controls['amount'].setValue(value),
      minAmount: value => this.createForm.controls['minAmount'].setValue(value),
      percentageFromMarketPrice: () => this.createForm.controls['percentageFromMarketPrice'].setValue((this.marketPrice - values.fixedPrice) / this.marketPrice * 100)
    };
    _.forEach(values, (value, key) => _.set(values, key, Number(value) || value));

    switch (elementName) {
      case 'amount':
        setValue.calculatedValue();
        if (values.amount && values.amount < values.minAmount) {
          setValue.minAmount(values.amount);
        }
        break;
      case 'fixedPrice':
        setValue.calculatedValue();
        setValue.percentageFromMarketPrice();
        break;
      case 'percentageFromMarketPrice':
        this.calculateBasedOnPercentageFromMarketPrice();
        break;
      case 'calculatedValue':
        const newAmount = values.calculatedValue / values.fixedPrice;
        setValue.amount(newAmount);
        if (newAmount < values.minAmount) {
          setValue.minAmount(newAmount);
        }
        break;
      case 'minAmount':
        if (0 > values.minAmount) {
          setValue.minAmount(0);
        }
        if (values.amount < values.minAmount) {
          setValue.amount(values.minAmount);
          setValue.calculatedValue(values.minAmount);
        }
        break;
      case 'tradeCurrency':
        this.getMarketPrice(values.priceType);
        break;
      default:
        _.noop();
    }
  }

  submit() {
    if (!this.createForm.valid) {
      this.toast.show('OFFERS.CREATE.FILL_ALL_REQUIRED_FIELDS', 'error');
      this.creatingOffer = false;
      return;
    }
    this.creatingOffer = true;
    let preparedForm = _.merge({}, _.omit(this.model, ['tradeCurrency', 'calculatedValue', 'deposit', 'isFixedPrice']), {
      fundUsingBisqWallet: true,
      direction: this.type.toUpperCase(),
      marketPair: 'BTC_' + this.model.tradeCurrency
    });
    if (!preparedForm.amount) {
      this.toast.show('OFFERS.CREATE.AMOUNT_MUST_BE_POSITIVE', 'error');
      this.creatingOffer = false;
      return;
    }
    if (preparedForm.amount < preparedForm.minAmount) {
      this.toast.show('OFFERS.CREATE.MIN_AMOUNT_MUST_BE_BIGGER_THAN_AMOUNT', 'error');
      this.creatingOffer = false;
      return;
    }
    preparedForm.amount *= 100000000;
    preparedForm.minAmount *= 100000000;
    preparedForm.fixedPrice *= 10000;
    preparedForm.priceType = this.model.isFixedPrice ? 'FIXED' : 'PERCENTAGE';
    this.offersDAO.create(preparedForm).then(res => {
      this.toast.show('SUCCESS', 'success');
      this.router.navigateByUrl(`/offers/${this.type}`);
      this.creatingOffer = false;
    }).catch(error => {
      this.toast.error(error);
      this.creatingOffer = false;
    });
  }

  private getMarketPrice(fiatCurrency) {
    this.marketPriceService.get('BTC', fiatCurrency).then(result => {
      this.marketPrice = result;
      this.calculateBasedOnPercentageFromMarketPrice();
    });
  }

  private calculateBasedOnPercentageFromMarketPrice() {
    const newFixedPrice = this.marketPrice - (this.createForm.value.percentageFromMarketPrice / 100 * this.marketPrice);
    this.createForm.controls['fixedPrice'].setValue(newFixedPrice);
    this.createForm.controls['calculatedValue'].setValue(this.createForm.value.amount * newFixedPrice);
  }
}
