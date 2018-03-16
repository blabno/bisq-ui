import * as _ from 'lodash';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaymentAccountsDAO} from "../../shared/DAO/paymentAccounts.dao";
import {OffersDAO} from "../../shared/DAO/offers.dao";
import {ToastService} from "../../shared/services/toast.service";

function t(str) {
  return str;
}

t('OFFERS.CREATE.TRADING_ACCOUNT');
t('OFFERS.CREATE.CURRENCY');
t('OFFERS.CREATE.VOLUME');
t('OFFERS.CREATE.PRICE');
t('OFFERS.CREATE.AMOUNT');
t('OFFERS.CREATE.MINUMUM_VOLUME');
t('OFFERS.CREATE.SECURITY_DEPOSIT');


@Component({
  selector: 'app-create-offers',
  templateUrl: 'createOffers.component.html'
})
export class CreateOffersComponent implements OnInit, OnDestroy {

  constructor(private activeRoute: ActivatedRoute, private paymentsDAO: PaymentAccountsDAO, private offersDAO: OffersDAO, private toast: ToastService) {
  }

  private paramSubscribe: any;
  dataFormLoaded: boolean = false;
  type: 'sell' | 'buy';
  model = {};
  form = {
    accountId: {
      label: 'OFFERS.CREATE.TRADING_ACCOUNT', type: 'select',
      options: []
    },
    tradeCurrency: {
      label: 'OFFERS.CREATE.CURRENCY',
      type: 'text'
    },
    amount: {label: 'OFFERS.CREATE.VOLUME', type: 'text'},
    fixedPrice: {label: 'OFFERS.CREATE.PRICE', type: 'text'},
    value: {label: 'OFFERS.CREATE.AMOUNT', type: 'text', disabled: true},
    minAmount: {label: 'OFFERS.CREATE.MINUMUM_VOLUME', type: 'text'},
    deposit: {label: 'OFFERS.CREATE.SECURITY_DEPOSIT', type: 'text'}
  };

  onFormChange(form) {
    const value = form.value;
    form.patchValue({value: value.amount * value.fixedPrice}, {emitEvent: false});
  }

  ngOnInit() {
    this.paramSubscribe = this.activeRoute.params.subscribe(params => {
      this.type = params['type'];
    });
    this.paymentsDAO.query().then((res: any) => {
      this.form.accountId.options = this.getPaymentAccountList(res.paymentAccounts);
      this.dataFormLoaded = true;
    })
  }

  ngOnDestroy() {
    this.paramSubscribe.unsubscribe();
  }

  private getPaymentAccountList(list) {
    return _.map(list, (item) => ({value: item.id, label: item.accountName}));
  }

  onSubmit(value) {
    const preparedForm = _.merge({}, _.omit(value, ['tradeCurrency', 'value', 'deposit']), {
      fundUsingBisqWallet: true,
      direction: this.type.toUpperCase(),
      marketPair: 'BTC_' + value.tradeCurrency,
      // priceType: 'FIXED',
      percentageFromMarketPrice: 10
    });
    this.offersDAO.create(preparedForm).then(res => {
      this.toast.show('SUCCESS', 'success');
    }).catch(error => {
      this.toast.show(error.message, 'error');
    });
  }
}
