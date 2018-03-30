import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import _ from 'lodash';

import {InfoModalService} from '../../shared/infoModal/infoModal.service';
import {PaymentAccountsDAO} from '../../shared/DAO/paymentAccounts.dao';
import {ToastService} from '../../shared/services/toast.service';
import t from '../../shared/defineTextToTranslate';

@Component({
  selector: 'app-currency',
  templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit, OnDestroy {
  paymentForm = {
    paymentMethod: {
      type: 'select', label: t('ACCOUNT.CURRENCY.PAYMENT_METHOD'),
      options: [
        {value: 'ALI_PAY', label: 'AliPay'},
        {value: 'CASH_APP', label: 'Cash App'},
        {value: 'CASH_DEPOSIT', label: t('ACCOUNT.CURRENCY.CASH_DEPOSIT')},
        {value: 'CHASE_QUICK_PAY', label: 'Chase QuickPay'},
        {value: 'FASTER_PAYMENTS', label: 'Faster Payments'},
        {value: 'INTERAC_E_TRANSFER', label: 'Interac e-Transfer'},
        {value: 'MONEY_BEAM', label: 'MoneyBeam (N26)'},
        {value: 'NATIONAL_BANK', label: t('ACCOUNT.CURRENCY.NATIONAL_BANK_TRANSFER')},
        {value: 'OK_PAY', label: 'OKPay'},
        {value: 'PERFECT_MONEY', label: 'Perfect Money'},
        {value: 'POPMONEY', label: 'Popmoney'},
        {value: 'REVOLUT', label: 'Revolut'},
        {value: 'SEPA', label: 'SEPA'},
        {value: 'VENMO', label: 'Venmo'},
      ]
    }
  };

  formMap = {
    ALI_PAY: {
      accountNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NO'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'CNY',
        options: [
          {value: 'CNY', label: t('ACCOUNT.CURRENCY.CURRENCY_CNY')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_0125_0')
      }
    },
    CASH_APP: {
      cashTag: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NO'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'USD',
        options: [
          {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_04_0')
      }
    },
    CASH_DEPOSIT: {
      countryCode: {
        type: 'select', label: t('ACCOUNT.CURRENCY.COUNTRY'),
        options: [
          {value: 'AD', label: t('ACCOUNT.CURRENCY.COUNTRY_AD')},
          {value: 'AE', label: t('ACCOUNT.CURRENCY.COUNTRY_AE')},
          {value: 'AF', label: t('ACCOUNT.CURRENCY.COUNTRY_AF')},
          {value: 'AG', label: t('ACCOUNT.CURRENCY.COUNTRY_AG')},
          {value: 'AI', label: t('ACCOUNT.CURRENCY.COUNTRY_AI')},
          {value: 'AL', label: t('ACCOUNT.CURRENCY.COUNTRY_AL')},
          {value: 'AM', label: t('ACCOUNT.CURRENCY.COUNTRY_AM')},
          {value: 'AO', label: t('ACCOUNT.CURRENCY.COUNTRY_AO')},
          {value: 'AQ', label: t('ACCOUNT.CURRENCY.COUNTRY_AQ')},
          {value: 'AR', label: t('ACCOUNT.CURRENCY.COUNTRY_AR')},
          {value: 'AS', label: t('ACCOUNT.CURRENCY.COUNTRY_AS')},
          {value: 'AT', label: t('ACCOUNT.CURRENCY.COUNTRY_AT')},
          {value: 'AU', label: t('ACCOUNT.CURRENCY.COUNTRY_AU')},
          {value: 'AW', label: t('ACCOUNT.CURRENCY.COUNTRY_AW')},
          {value: 'AX', label: t('ACCOUNT.CURRENCY.COUNTRY_AX')},
          {value: 'AZ', label: t('ACCOUNT.CURRENCY.COUNTRY_AZ')},
          {value: 'BA', label: t('ACCOUNT.CURRENCY.COUNTRY_BA')},
          {value: 'BB', label: t('ACCOUNT.CURRENCY.COUNTRY_BB')},
          {value: 'BD', label: t('ACCOUNT.CURRENCY.COUNTRY_BD')},
          {value: 'BE', label: t('ACCOUNT.CURRENCY.COUNTRY_BE')},
          {value: 'BF', label: t('ACCOUNT.CURRENCY.COUNTRY_BF')},
          {value: 'BG', label: t('ACCOUNT.CURRENCY.COUNTRY_BG')},
          {value: 'BH', label: t('ACCOUNT.CURRENCY.COUNTRY_BH')},
          {value: 'BI', label: t('ACCOUNT.CURRENCY.COUNTRY_BI')},
          {value: 'BJ', label: t('ACCOUNT.CURRENCY.COUNTRY_BJ')},
          {value: 'BL', label: t('ACCOUNT.CURRENCY.COUNTRY_BL')},
          {value: 'BM', label: t('ACCOUNT.CURRENCY.COUNTRY_BM')},
          {value: 'BN', label: t('ACCOUNT.CURRENCY.COUNTRY_BN')},
          {value: 'BO', label: t('ACCOUNT.CURRENCY.COUNTRY_BO')},
          {value: 'BQ', label: t('ACCOUNT.CURRENCY.COUNTRY_BQ')},
          {value: 'BR', label: t('ACCOUNT.CURRENCY.COUNTRY_BR')},
          {value: 'BS', label: t('ACCOUNT.CURRENCY.COUNTRY_BS')},
          {value: 'BT', label: t('ACCOUNT.CURRENCY.COUNTRY_BT')},
          {value: 'BV', label: t('ACCOUNT.CURRENCY.COUNTRY_BV')},
          {value: 'BW', label: t('ACCOUNT.CURRENCY.COUNTRY_BW')},
          {value: 'BY', label: t('ACCOUNT.CURRENCY.COUNTRY_BY')},
          {value: 'BZ', label: t('ACCOUNT.CURRENCY.COUNTRY_BZ')},
          {value: 'CA', label: t('ACCOUNT.CURRENCY.COUNTRY_CA')},
          {value: 'CC', label: t('ACCOUNT.CURRENCY.COUNTRY_CC')},
          {value: 'CD', label: t('ACCOUNT.CURRENCY.COUNTRY_CD')},
          {value: 'CF', label: t('ACCOUNT.CURRENCY.COUNTRY_CF')},
          {value: 'CG', label: t('ACCOUNT.CURRENCY.COUNTRY_CG')},
          {value: 'CH', label: t('ACCOUNT.CURRENCY.COUNTRY_CH')},
          {value: 'CI', label: t('ACCOUNT.CURRENCY.COUNTRY_CI')},
          {value: 'CK', label: t('ACCOUNT.CURRENCY.COUNTRY_CK')},
          {value: 'CL', label: t('ACCOUNT.CURRENCY.COUNTRY_CL')},
          {value: 'CM', label: t('ACCOUNT.CURRENCY.COUNTRY_CM')},
          {value: 'CN', label: t('ACCOUNT.CURRENCY.COUNTRY_CN')},
          {value: 'CO', label: t('ACCOUNT.CURRENCY.COUNTRY_CO')},
          {value: 'CR', label: t('ACCOUNT.CURRENCY.COUNTRY_CR')},
          {value: 'CU', label: t('ACCOUNT.CURRENCY.COUNTRY_CU')},
          {value: 'CV', label: t('ACCOUNT.CURRENCY.COUNTRY_CV')},
          {value: 'CW', label: t('ACCOUNT.CURRENCY.COUNTRY_CW')},
          {value: 'CX', label: t('ACCOUNT.CURRENCY.COUNTRY_CX')},
          {value: 'CY', label: t('ACCOUNT.CURRENCY.COUNTRY_CY')},
          {value: 'CZ', label: t('ACCOUNT.CURRENCY.COUNTRY_CZ')},
          {value: 'DE', label: t('ACCOUNT.CURRENCY.COUNTRY_DE')},
          {value: 'DJ', label: t('ACCOUNT.CURRENCY.COUNTRY_DJ')},
          {value: 'DK', label: t('ACCOUNT.CURRENCY.COUNTRY_DK')},
          {value: 'DM', label: t('ACCOUNT.CURRENCY.COUNTRY_DM')},
          {value: 'DO', label: t('ACCOUNT.CURRENCY.COUNTRY_DO')},
          {value: 'DZ', label: t('ACCOUNT.CURRENCY.COUNTRY_DZ')},
          {value: 'EC', label: t('ACCOUNT.CURRENCY.COUNTRY_EC')},
          {value: 'EE', label: t('ACCOUNT.CURRENCY.COUNTRY_EE')},
          {value: 'EG', label: t('ACCOUNT.CURRENCY.COUNTRY_EG')},
          {value: 'EH', label: t('ACCOUNT.CURRENCY.COUNTRY_EH')},
          {value: 'ER', label: t('ACCOUNT.CURRENCY.COUNTRY_ER')},
          {value: 'ES', label: t('ACCOUNT.CURRENCY.COUNTRY_ES')},
          {value: 'ET', label: t('ACCOUNT.CURRENCY.COUNTRY_ET')},
          {value: 'FI', label: t('ACCOUNT.CURRENCY.COUNTRY_FI')},
          {value: 'FJ', label: t('ACCOUNT.CURRENCY.COUNTRY_FJ')},
          {value: 'FK', label: t('ACCOUNT.CURRENCY.COUNTRY_FK')},
          {value: 'FM', label: t('ACCOUNT.CURRENCY.COUNTRY_FM')},
          {value: 'FO', label: t('ACCOUNT.CURRENCY.COUNTRY_FO')},
          {value: 'FR', label: t('ACCOUNT.CURRENCY.COUNTRY_FR')},
          {value: 'GA', label: t('ACCOUNT.CURRENCY.COUNTRY_GA')},
          {value: 'GB', label: t('ACCOUNT.CURRENCY.COUNTRY_GB')},
          {value: 'GD', label: t('ACCOUNT.CURRENCY.COUNTRY_GD')},
          {value: 'GE', label: t('ACCOUNT.CURRENCY.COUNTRY_GE')},
          {value: 'GF', label: t('ACCOUNT.CURRENCY.COUNTRY_GF')},
          {value: 'GG', label: t('ACCOUNT.CURRENCY.COUNTRY_GG')},
          {value: 'GH', label: t('ACCOUNT.CURRENCY.COUNTRY_GH')},
          {value: 'GI', label: t('ACCOUNT.CURRENCY.COUNTRY_GI')},
          {value: 'GL', label: t('ACCOUNT.CURRENCY.COUNTRY_GL')},
          {value: 'GM', label: t('ACCOUNT.CURRENCY.COUNTRY_GM')},
          {value: 'GN', label: t('ACCOUNT.CURRENCY.COUNTRY_GN')},
          {value: 'GP', label: t('ACCOUNT.CURRENCY.COUNTRY_GP')},
          {value: 'GQ', label: t('ACCOUNT.CURRENCY.COUNTRY_GQ')},
          {value: 'GR', label: t('ACCOUNT.CURRENCY.COUNTRY_GR')},
          {value: 'GS', label: t('ACCOUNT.CURRENCY.COUNTRY_GS')},
          {value: 'GT', label: t('ACCOUNT.CURRENCY.COUNTRY_GT')},
          {value: 'GU', label: t('ACCOUNT.CURRENCY.COUNTRY_GU')},
          {value: 'GW', label: t('ACCOUNT.CURRENCY.COUNTRY_GW')},
          {value: 'GY', label: t('ACCOUNT.CURRENCY.COUNTRY_GY')},
          {value: 'HK', label: t('ACCOUNT.CURRENCY.COUNTRY_HK')},
          {value: 'HM', label: t('ACCOUNT.CURRENCY.COUNTRY_HM')},
          {value: 'HN', label: t('ACCOUNT.CURRENCY.COUNTRY_HN')},
          {value: 'HR', label: t('ACCOUNT.CURRENCY.COUNTRY_HR')},
          {value: 'HT', label: t('ACCOUNT.CURRENCY.COUNTRY_HT')},
          {value: 'HU', label: t('ACCOUNT.CURRENCY.COUNTRY_HU')},
          {value: 'ID', label: t('ACCOUNT.CURRENCY.COUNTRY_ID')},
          {value: 'IE', label: t('ACCOUNT.CURRENCY.COUNTRY_IE')},
          {value: 'IL', label: t('ACCOUNT.CURRENCY.COUNTRY_IL')},
          {value: 'IM', label: t('ACCOUNT.CURRENCY.COUNTRY_IM')},
          {value: 'IN', label: t('ACCOUNT.CURRENCY.COUNTRY_IN')},
          {value: 'IO', label: t('ACCOUNT.CURRENCY.COUNTRY_IO')},
          {value: 'IQ', label: t('ACCOUNT.CURRENCY.COUNTRY_IQ')},
          {value: 'IR', label: t('ACCOUNT.CURRENCY.COUNTRY_IR')},
          {value: 'IS', label: t('ACCOUNT.CURRENCY.COUNTRY_IS')},
          {value: 'IT', label: t('ACCOUNT.CURRENCY.COUNTRY_IT')},
          {value: 'JE', label: t('ACCOUNT.CURRENCY.COUNTRY_JE')},
          {value: 'JM', label: t('ACCOUNT.CURRENCY.COUNTRY_JM')},
          {value: 'JO', label: t('ACCOUNT.CURRENCY.COUNTRY_JO')},
          {value: 'JP', label: t('ACCOUNT.CURRENCY.COUNTRY_JP')},
          {value: 'KE', label: t('ACCOUNT.CURRENCY.COUNTRY_KE')},
          {value: 'KG', label: t('ACCOUNT.CURRENCY.COUNTRY_KG')},
          {value: 'KH', label: t('ACCOUNT.CURRENCY.COUNTRY_KH')},
          {value: 'KI', label: t('ACCOUNT.CURRENCY.COUNTRY_KI')},
          {value: 'KM', label: t('ACCOUNT.CURRENCY.COUNTRY_KM')},
          {value: 'KN', label: t('ACCOUNT.CURRENCY.COUNTRY_KN')},
          {value: 'KP', label: t('ACCOUNT.CURRENCY.COUNTRY_KP')},
          {value: 'KR', label: t('ACCOUNT.CURRENCY.COUNTRY_KR')},
          {value: 'KW', label: t('ACCOUNT.CURRENCY.COUNTRY_KW')},
          {value: 'KY', label: t('ACCOUNT.CURRENCY.COUNTRY_KY')},
          {value: 'KZ', label: t('ACCOUNT.CURRENCY.COUNTRY_KZ')},
          {value: 'LA', label: t('ACCOUNT.CURRENCY.COUNTRY_LA')},
          {value: 'LB', label: t('ACCOUNT.CURRENCY.COUNTRY_LB')},
          {value: 'LC', label: t('ACCOUNT.CURRENCY.COUNTRY_LC')},
          {value: 'LI', label: t('ACCOUNT.CURRENCY.COUNTRY_LI')},
          {value: 'LK', label: t('ACCOUNT.CURRENCY.COUNTRY_LK')},
          {value: 'LR', label: t('ACCOUNT.CURRENCY.COUNTRY_LR')},
          {value: 'LS', label: t('ACCOUNT.CURRENCY.COUNTRY_LS')},
          {value: 'LT', label: t('ACCOUNT.CURRENCY.COUNTRY_LT')},
          {value: 'LU', label: t('ACCOUNT.CURRENCY.COUNTRY_LU')},
          {value: 'LV', label: t('ACCOUNT.CURRENCY.COUNTRY_LV')},
          {value: 'LY', label: t('ACCOUNT.CURRENCY.COUNTRY_LY')},
          {value: 'MA', label: t('ACCOUNT.CURRENCY.COUNTRY_MA')},
          {value: 'MC', label: t('ACCOUNT.CURRENCY.COUNTRY_MC')},
          {value: 'MD', label: t('ACCOUNT.CURRENCY.COUNTRY_MD')},
          {value: 'ME', label: t('ACCOUNT.CURRENCY.COUNTRY_ME')},
          {value: 'MF', label: t('ACCOUNT.CURRENCY.COUNTRY_MF')},
          {value: 'MG', label: t('ACCOUNT.CURRENCY.COUNTRY_MG')},
          {value: 'MH', label: t('ACCOUNT.CURRENCY.COUNTRY_MH')},
          {value: 'MK', label: t('ACCOUNT.CURRENCY.COUNTRY_MK')},
          {value: 'ML', label: t('ACCOUNT.CURRENCY.COUNTRY_ML')},
          {value: 'MM', label: t('ACCOUNT.CURRENCY.COUNTRY_MM')},
          {value: 'MN', label: t('ACCOUNT.CURRENCY.COUNTRY_MN')},
          {value: 'MO', label: t('ACCOUNT.CURRENCY.COUNTRY_MO')},
          {value: 'MP', label: t('ACCOUNT.CURRENCY.COUNTRY_MP')},
          {value: 'MQ', label: t('ACCOUNT.CURRENCY.COUNTRY_MQ')},
          {value: 'MR', label: t('ACCOUNT.CURRENCY.COUNTRY_MR')},
          {value: 'MS', label: t('ACCOUNT.CURRENCY.COUNTRY_MS')},
          {value: 'MT', label: t('ACCOUNT.CURRENCY.COUNTRY_MT')},
          {value: 'MU', label: t('ACCOUNT.CURRENCY.COUNTRY_MU')},
          {value: 'MV', label: t('ACCOUNT.CURRENCY.COUNTRY_MV')},
          {value: 'MW', label: t('ACCOUNT.CURRENCY.COUNTRY_MW')},
          {value: 'MX', label: t('ACCOUNT.CURRENCY.COUNTRY_MX')},
          {value: 'MY', label: t('ACCOUNT.CURRENCY.COUNTRY_MY')},
          {value: 'MZ', label: t('ACCOUNT.CURRENCY.COUNTRY_MZ')},
          {value: 'NA', label: t('ACCOUNT.CURRENCY.COUNTRY_NA')},
          {value: 'NC', label: t('ACCOUNT.CURRENCY.COUNTRY_NC')},
          {value: 'NE', label: t('ACCOUNT.CURRENCY.COUNTRY_NE')},
          {value: 'NF', label: t('ACCOUNT.CURRENCY.COUNTRY_NF')},
          {value: 'NG', label: t('ACCOUNT.CURRENCY.COUNTRY_NG')},
          {value: 'NI', label: t('ACCOUNT.CURRENCY.COUNTRY_NI')},
          {value: 'NL', label: t('ACCOUNT.CURRENCY.COUNTRY_NL')},
          {value: 'NO', label: t('ACCOUNT.CURRENCY.COUNTRY_NO')},
          {value: 'NP', label: t('ACCOUNT.CURRENCY.COUNTRY_NP')},
          {value: 'NR', label: t('ACCOUNT.CURRENCY.COUNTRY_NR')},
          {value: 'NU', label: t('ACCOUNT.CURRENCY.COUNTRY_NU')},
          {value: 'NZ', label: t('ACCOUNT.CURRENCY.COUNTRY_NZ')},
          {value: 'OM', label: t('ACCOUNT.CURRENCY.COUNTRY_OM')},
          {value: 'PA', label: t('ACCOUNT.CURRENCY.COUNTRY_PA')},
          {value: 'PE', label: t('ACCOUNT.CURRENCY.COUNTRY_PE')},
          {value: 'PF', label: t('ACCOUNT.CURRENCY.COUNTRY_PF')},
          {value: 'PG', label: t('ACCOUNT.CURRENCY.COUNTRY_PG')},
          {value: 'PH', label: t('ACCOUNT.CURRENCY.COUNTRY_PH')},
          {value: 'PK', label: t('ACCOUNT.CURRENCY.COUNTRY_PK')},
          {value: 'PL', label: t('ACCOUNT.CURRENCY.COUNTRY_PL')},
          {value: 'PM', label: t('ACCOUNT.CURRENCY.COUNTRY_PM')},
          {value: 'PN', label: t('ACCOUNT.CURRENCY.COUNTRY_PN')},
          {value: 'PR', label: t('ACCOUNT.CURRENCY.COUNTRY_PR')},
          {value: 'PS', label: t('ACCOUNT.CURRENCY.COUNTRY_PS')},
          {value: 'PT', label: t('ACCOUNT.CURRENCY.COUNTRY_PT')},
          {value: 'PW', label: t('ACCOUNT.CURRENCY.COUNTRY_PW')},
          {value: 'PY', label: t('ACCOUNT.CURRENCY.COUNTRY_PY')},
          {value: 'QA', label: t('ACCOUNT.CURRENCY.COUNTRY_QA')},
          {value: 'RE', label: t('ACCOUNT.CURRENCY.COUNTRY_RE')},
          {value: 'RO', label: t('ACCOUNT.CURRENCY.COUNTRY_RO')},
          {value: 'RS', label: t('ACCOUNT.CURRENCY.COUNTRY_RS')},
          {value: 'RU', label: t('ACCOUNT.CURRENCY.COUNTRY_RU')},
          {value: 'RW', label: t('ACCOUNT.CURRENCY.COUNTRY_RW')},
          {value: 'SA', label: t('ACCOUNT.CURRENCY.COUNTRY_SA')},
          {value: 'SB', label: t('ACCOUNT.CURRENCY.COUNTRY_SB')},
          {value: 'SC', label: t('ACCOUNT.CURRENCY.COUNTRY_SC')},
          {value: 'SD', label: t('ACCOUNT.CURRENCY.COUNTRY_SD')},
          {value: 'SE', label: t('ACCOUNT.CURRENCY.COUNTRY_SE')},
          {value: 'SG', label: t('ACCOUNT.CURRENCY.COUNTRY_SG')},
          {value: 'SH', label: t('ACCOUNT.CURRENCY.COUNTRY_SH')},
          {value: 'SI', label: t('ACCOUNT.CURRENCY.COUNTRY_SI')},
          {value: 'SJ', label: t('ACCOUNT.CURRENCY.COUNTRY_SJ')},
          {value: 'SK', label: t('ACCOUNT.CURRENCY.COUNTRY_SK')},
          {value: 'SL', label: t('ACCOUNT.CURRENCY.COUNTRY_SL')},
          {value: 'SM', label: t('ACCOUNT.CURRENCY.COUNTRY_SM')},
          {value: 'SN', label: t('ACCOUNT.CURRENCY.COUNTRY_SN')},
          {value: 'SO', label: t('ACCOUNT.CURRENCY.COUNTRY_SO')},
          {value: 'SR', label: t('ACCOUNT.CURRENCY.COUNTRY_SR')},
          {value: 'SS', label: t('ACCOUNT.CURRENCY.COUNTRY_SS')},
          {value: 'ST', label: t('ACCOUNT.CURRENCY.COUNTRY_ST')},
          {value: 'SV', label: t('ACCOUNT.CURRENCY.COUNTRY_SV')},
          {value: 'SX', label: t('ACCOUNT.CURRENCY.COUNTRY_SX')},
          {value: 'SY', label: t('ACCOUNT.CURRENCY.COUNTRY_SY')},
          {value: 'SZ', label: t('ACCOUNT.CURRENCY.COUNTRY_SZ')},
          {value: 'TC', label: t('ACCOUNT.CURRENCY.COUNTRY_TC')},
          {value: 'TD', label: t('ACCOUNT.CURRENCY.COUNTRY_TD')},
          {value: 'TF', label: t('ACCOUNT.CURRENCY.COUNTRY_TF')},
          {value: 'TG', label: t('ACCOUNT.CURRENCY.COUNTRY_TG')},
          {value: 'TH', label: t('ACCOUNT.CURRENCY.COUNTRY_TH')},
          {value: 'TJ', label: t('ACCOUNT.CURRENCY.COUNTRY_TJ')},
          {value: 'TK', label: t('ACCOUNT.CURRENCY.COUNTRY_TK')},
          {value: 'TL', label: t('ACCOUNT.CURRENCY.COUNTRY_TL')},
          {value: 'TM', label: t('ACCOUNT.CURRENCY.COUNTRY_TM')},
          {value: 'TN', label: t('ACCOUNT.CURRENCY.COUNTRY_TN')},
          {value: 'TO', label: t('ACCOUNT.CURRENCY.COUNTRY_TO')},
          {value: 'TR', label: t('ACCOUNT.CURRENCY.COUNTRY_TR')},
          {value: 'TT', label: t('ACCOUNT.CURRENCY.COUNTRY_TT')},
          {value: 'TV', label: t('ACCOUNT.CURRENCY.COUNTRY_TV')},
          {value: 'TW', label: t('ACCOUNT.CURRENCY.COUNTRY_TW')},
          {value: 'TZ', label: t('ACCOUNT.CURRENCY.COUNTRY_TZ')},
          {value: 'UA', label: t('ACCOUNT.CURRENCY.COUNTRY_UA')},
          {value: 'UG', label: t('ACCOUNT.CURRENCY.COUNTRY_UG')},
          {value: 'UM', label: t('ACCOUNT.CURRENCY.COUNTRY_UM')},
          {value: 'US', label: t('ACCOUNT.CURRENCY.COUNTRY_US')},
          {value: 'UY', label: t('ACCOUNT.CURRENCY.COUNTRY_UY')},
          {value: 'UZ', label: t('ACCOUNT.CURRENCY.COUNTRY_UZ')},
          {value: 'VA', label: t('ACCOUNT.CURRENCY.COUNTRY_VA')},
          {value: 'VC', label: t('ACCOUNT.CURRENCY.COUNTRY_VC')},
          {value: 'VE', label: t('ACCOUNT.CURRENCY.COUNTRY_VE')},
          {value: 'VG', label: t('ACCOUNT.CURRENCY.COUNTRY_VG')},
          {value: 'VI', label: t('ACCOUNT.CURRENCY.COUNTRY_VI')},
          {value: 'VN', label: t('ACCOUNT.CURRENCY.COUNTRY_VN')},
          {value: 'VU', label: t('ACCOUNT.CURRENCY.COUNTRY_VU')},
          {value: 'WF', label: t('ACCOUNT.CURRENCY.COUNTRY_WF')},
          {value: 'WS', label: t('ACCOUNT.CURRENCY.COUNTRY_WS')},
          {value: 'XK', label: t('ACCOUNT.CURRENCY.COUNTRY_XK')},
          {value: 'YE', label: t('ACCOUNT.CURRENCY.COUNTRY_YE')},
          {value: 'YT', label: t('ACCOUNT.CURRENCY.COUNTRY_YT')},
          {value: 'ZA', label: t('ACCOUNT.CURRENCY.COUNTRY_ZA')},
          {value: 'ZM', label: t('ACCOUNT.CURRENCY.COUNTRY_ZM')},
          {value: 'ZW', label: t('ACCOUNT.CURRENCY.COUNTRY_ZW')}
        ],
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
          {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
          {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
          {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
          {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
          {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
          {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
          {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
          {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
          {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
          {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
        ],
        validators: ['required']
      },
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      holderEmail: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL'),
        validators: ['required', 'email']
      },
      bankName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BANK_NAME')
      },
      bankId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BANK_ID')
      },
      branchId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BRANCH_NO')
      },
      accountNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN')
      },
      requirements: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EXTRA_REQUIREMENTS')
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_4_0625_0')
      }
    },
    CHASE_QUICK_PAY: {
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      email: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL'),
        validators: ['required', 'email']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'USD',
        options: [
          {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_0625_0')
      }
    },
    FASTER_PAYMENTS: {
      sortCode: {
        type: 'number', label: t('ACCOUNT.CURRENCY.UK_SORT_NAME'),
        validators: ['required', 'ukSortCode']
      },
      accountNr: {
        type: 'number', label: t('ACCOUNT.CURRENCY.ACCOUNT_NUMBER'),
        validators: ['required', 'ukAccountNumber']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'GBP',
        options: [
          {value: 'GBP', label: t('ACCOUNT.CURRENCY.CURRENCY_GBP')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_0625_0')
      }
    },
    INTERAC_E_TRANSFER: {
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      emailOrMobileNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL_OR_MOBILE'),
        validators: ['required', 'emailOrCanadianMobile']
      },
      question: {
        type: 'text', label: t('ACCOUNT.CURRENCY.SECRET_QUESTION'),
        validators: ['required']
      },
      answer: {
        type: 'text', label: t('ACCOUNT.CURRENCY.SECRET_ANSWER'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'CAD',
        options: [
          {value: 'CAD', label: t('ACCOUNT.CURRENCY.CURRENCY_CAD')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_0625_0')
      }
    },
    MONEY_BEAM: {
      accountId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL_OR_MOBILE'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'EUR',
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_04_0')
      }
    },
    NATIONAL_BANK: {
      countryCode: {
        type: 'select', label: t('ACCOUNT.CURRENCY.COUNTRY'),
        options: [
          {value: 'AD', label: t('ACCOUNT.CURRENCY.COUNTRY_AD')},
          {value: 'AE', label: t('ACCOUNT.CURRENCY.COUNTRY_AE')},
          {value: 'AF', label: t('ACCOUNT.CURRENCY.COUNTRY_AF')},
          {value: 'AG', label: t('ACCOUNT.CURRENCY.COUNTRY_AG')},
          {value: 'AI', label: t('ACCOUNT.CURRENCY.COUNTRY_AI')},
          {value: 'AL', label: t('ACCOUNT.CURRENCY.COUNTRY_AL')},
          {value: 'AM', label: t('ACCOUNT.CURRENCY.COUNTRY_AM')},
          {value: 'AO', label: t('ACCOUNT.CURRENCY.COUNTRY_AO')},
          {value: 'AQ', label: t('ACCOUNT.CURRENCY.COUNTRY_AQ')},
          {value: 'AR', label: t('ACCOUNT.CURRENCY.COUNTRY_AR')},
          {value: 'AS', label: t('ACCOUNT.CURRENCY.COUNTRY_AS')},
          {value: 'AT', label: t('ACCOUNT.CURRENCY.COUNTRY_AT')},
          {value: 'AU', label: t('ACCOUNT.CURRENCY.COUNTRY_AU')},
          {value: 'AW', label: t('ACCOUNT.CURRENCY.COUNTRY_AW')},
          {value: 'AX', label: t('ACCOUNT.CURRENCY.COUNTRY_AX')},
          {value: 'AZ', label: t('ACCOUNT.CURRENCY.COUNTRY_AZ')},
          {value: 'BA', label: t('ACCOUNT.CURRENCY.COUNTRY_BA')},
          {value: 'BB', label: t('ACCOUNT.CURRENCY.COUNTRY_BB')},
          {value: 'BD', label: t('ACCOUNT.CURRENCY.COUNTRY_BD')},
          {value: 'BE', label: t('ACCOUNT.CURRENCY.COUNTRY_BE')},
          {value: 'BF', label: t('ACCOUNT.CURRENCY.COUNTRY_BF')},
          {value: 'BG', label: t('ACCOUNT.CURRENCY.COUNTRY_BG')},
          {value: 'BH', label: t('ACCOUNT.CURRENCY.COUNTRY_BH')},
          {value: 'BI', label: t('ACCOUNT.CURRENCY.COUNTRY_BI')},
          {value: 'BJ', label: t('ACCOUNT.CURRENCY.COUNTRY_BJ')},
          {value: 'BL', label: t('ACCOUNT.CURRENCY.COUNTRY_BL')},
          {value: 'BM', label: t('ACCOUNT.CURRENCY.COUNTRY_BM')},
          {value: 'BN', label: t('ACCOUNT.CURRENCY.COUNTRY_BN')},
          {value: 'BO', label: t('ACCOUNT.CURRENCY.COUNTRY_BO')},
          {value: 'BQ', label: t('ACCOUNT.CURRENCY.COUNTRY_BQ')},
          {value: 'BR', label: t('ACCOUNT.CURRENCY.COUNTRY_BR')},
          {value: 'BS', label: t('ACCOUNT.CURRENCY.COUNTRY_BS')},
          {value: 'BT', label: t('ACCOUNT.CURRENCY.COUNTRY_BT')},
          {value: 'BV', label: t('ACCOUNT.CURRENCY.COUNTRY_BV')},
          {value: 'BW', label: t('ACCOUNT.CURRENCY.COUNTRY_BW')},
          {value: 'BY', label: t('ACCOUNT.CURRENCY.COUNTRY_BY')},
          {value: 'BZ', label: t('ACCOUNT.CURRENCY.COUNTRY_BZ')},
          {value: 'CA', label: t('ACCOUNT.CURRENCY.COUNTRY_CA')},
          {value: 'CC', label: t('ACCOUNT.CURRENCY.COUNTRY_CC')},
          {value: 'CD', label: t('ACCOUNT.CURRENCY.COUNTRY_CD')},
          {value: 'CF', label: t('ACCOUNT.CURRENCY.COUNTRY_CF')},
          {value: 'CG', label: t('ACCOUNT.CURRENCY.COUNTRY_CG')},
          {value: 'CH', label: t('ACCOUNT.CURRENCY.COUNTRY_CH')},
          {value: 'CI', label: t('ACCOUNT.CURRENCY.COUNTRY_CI')},
          {value: 'CK', label: t('ACCOUNT.CURRENCY.COUNTRY_CK')},
          {value: 'CL', label: t('ACCOUNT.CURRENCY.COUNTRY_CL')},
          {value: 'CM', label: t('ACCOUNT.CURRENCY.COUNTRY_CM')},
          {value: 'CN', label: t('ACCOUNT.CURRENCY.COUNTRY_CN')},
          {value: 'CO', label: t('ACCOUNT.CURRENCY.COUNTRY_CO')},
          {value: 'CR', label: t('ACCOUNT.CURRENCY.COUNTRY_CR')},
          {value: 'CU', label: t('ACCOUNT.CURRENCY.COUNTRY_CU')},
          {value: 'CV', label: t('ACCOUNT.CURRENCY.COUNTRY_CV')},
          {value: 'CW', label: t('ACCOUNT.CURRENCY.COUNTRY_CW')},
          {value: 'CX', label: t('ACCOUNT.CURRENCY.COUNTRY_CX')},
          {value: 'CY', label: t('ACCOUNT.CURRENCY.COUNTRY_CY')},
          {value: 'CZ', label: t('ACCOUNT.CURRENCY.COUNTRY_CZ')},
          {value: 'DE', label: t('ACCOUNT.CURRENCY.COUNTRY_DE')},
          {value: 'DJ', label: t('ACCOUNT.CURRENCY.COUNTRY_DJ')},
          {value: 'DK', label: t('ACCOUNT.CURRENCY.COUNTRY_DK')},
          {value: 'DM', label: t('ACCOUNT.CURRENCY.COUNTRY_DM')},
          {value: 'DO', label: t('ACCOUNT.CURRENCY.COUNTRY_DO')},
          {value: 'DZ', label: t('ACCOUNT.CURRENCY.COUNTRY_DZ')},
          {value: 'EC', label: t('ACCOUNT.CURRENCY.COUNTRY_EC')},
          {value: 'EE', label: t('ACCOUNT.CURRENCY.COUNTRY_EE')},
          {value: 'EG', label: t('ACCOUNT.CURRENCY.COUNTRY_EG')},
          {value: 'EH', label: t('ACCOUNT.CURRENCY.COUNTRY_EH')},
          {value: 'ER', label: t('ACCOUNT.CURRENCY.COUNTRY_ER')},
          {value: 'ES', label: t('ACCOUNT.CURRENCY.COUNTRY_ES')},
          {value: 'ET', label: t('ACCOUNT.CURRENCY.COUNTRY_ET')},
          {value: 'FI', label: t('ACCOUNT.CURRENCY.COUNTRY_FI')},
          {value: 'FJ', label: t('ACCOUNT.CURRENCY.COUNTRY_FJ')},
          {value: 'FK', label: t('ACCOUNT.CURRENCY.COUNTRY_FK')},
          {value: 'FM', label: t('ACCOUNT.CURRENCY.COUNTRY_FM')},
          {value: 'FO', label: t('ACCOUNT.CURRENCY.COUNTRY_FO')},
          {value: 'FR', label: t('ACCOUNT.CURRENCY.COUNTRY_FR')},
          {value: 'GA', label: t('ACCOUNT.CURRENCY.COUNTRY_GA')},
          {value: 'GB', label: t('ACCOUNT.CURRENCY.COUNTRY_GB')},
          {value: 'GD', label: t('ACCOUNT.CURRENCY.COUNTRY_GD')},
          {value: 'GE', label: t('ACCOUNT.CURRENCY.COUNTRY_GE')},
          {value: 'GF', label: t('ACCOUNT.CURRENCY.COUNTRY_GF')},
          {value: 'GG', label: t('ACCOUNT.CURRENCY.COUNTRY_GG')},
          {value: 'GH', label: t('ACCOUNT.CURRENCY.COUNTRY_GH')},
          {value: 'GI', label: t('ACCOUNT.CURRENCY.COUNTRY_GI')},
          {value: 'GL', label: t('ACCOUNT.CURRENCY.COUNTRY_GL')},
          {value: 'GM', label: t('ACCOUNT.CURRENCY.COUNTRY_GM')},
          {value: 'GN', label: t('ACCOUNT.CURRENCY.COUNTRY_GN')},
          {value: 'GP', label: t('ACCOUNT.CURRENCY.COUNTRY_GP')},
          {value: 'GQ', label: t('ACCOUNT.CURRENCY.COUNTRY_GQ')},
          {value: 'GR', label: t('ACCOUNT.CURRENCY.COUNTRY_GR')},
          {value: 'GS', label: t('ACCOUNT.CURRENCY.COUNTRY_GS')},
          {value: 'GT', label: t('ACCOUNT.CURRENCY.COUNTRY_GT')},
          {value: 'GU', label: t('ACCOUNT.CURRENCY.COUNTRY_GU')},
          {value: 'GW', label: t('ACCOUNT.CURRENCY.COUNTRY_GW')},
          {value: 'GY', label: t('ACCOUNT.CURRENCY.COUNTRY_GY')},
          {value: 'HK', label: t('ACCOUNT.CURRENCY.COUNTRY_HK')},
          {value: 'HM', label: t('ACCOUNT.CURRENCY.COUNTRY_HM')},
          {value: 'HN', label: t('ACCOUNT.CURRENCY.COUNTRY_HN')},
          {value: 'HR', label: t('ACCOUNT.CURRENCY.COUNTRY_HR')},
          {value: 'HT', label: t('ACCOUNT.CURRENCY.COUNTRY_HT')},
          {value: 'HU', label: t('ACCOUNT.CURRENCY.COUNTRY_HU')},
          {value: 'ID', label: t('ACCOUNT.CURRENCY.COUNTRY_ID')},
          {value: 'IE', label: t('ACCOUNT.CURRENCY.COUNTRY_IE')},
          {value: 'IL', label: t('ACCOUNT.CURRENCY.COUNTRY_IL')},
          {value: 'IM', label: t('ACCOUNT.CURRENCY.COUNTRY_IM')},
          {value: 'IN', label: t('ACCOUNT.CURRENCY.COUNTRY_IN')},
          {value: 'IO', label: t('ACCOUNT.CURRENCY.COUNTRY_IO')},
          {value: 'IQ', label: t('ACCOUNT.CURRENCY.COUNTRY_IQ')},
          {value: 'IR', label: t('ACCOUNT.CURRENCY.COUNTRY_IR')},
          {value: 'IS', label: t('ACCOUNT.CURRENCY.COUNTRY_IS')},
          {value: 'IT', label: t('ACCOUNT.CURRENCY.COUNTRY_IT')},
          {value: 'JE', label: t('ACCOUNT.CURRENCY.COUNTRY_JE')},
          {value: 'JM', label: t('ACCOUNT.CURRENCY.COUNTRY_JM')},
          {value: 'JO', label: t('ACCOUNT.CURRENCY.COUNTRY_JO')},
          {value: 'JP', label: t('ACCOUNT.CURRENCY.COUNTRY_JP')},
          {value: 'KE', label: t('ACCOUNT.CURRENCY.COUNTRY_KE')},
          {value: 'KG', label: t('ACCOUNT.CURRENCY.COUNTRY_KG')},
          {value: 'KH', label: t('ACCOUNT.CURRENCY.COUNTRY_KH')},
          {value: 'KI', label: t('ACCOUNT.CURRENCY.COUNTRY_KI')},
          {value: 'KM', label: t('ACCOUNT.CURRENCY.COUNTRY_KM')},
          {value: 'KN', label: t('ACCOUNT.CURRENCY.COUNTRY_KN')},
          {value: 'KP', label: t('ACCOUNT.CURRENCY.COUNTRY_KP')},
          {value: 'KR', label: t('ACCOUNT.CURRENCY.COUNTRY_KR')},
          {value: 'KW', label: t('ACCOUNT.CURRENCY.COUNTRY_KW')},
          {value: 'KY', label: t('ACCOUNT.CURRENCY.COUNTRY_KY')},
          {value: 'KZ', label: t('ACCOUNT.CURRENCY.COUNTRY_KZ')},
          {value: 'LA', label: t('ACCOUNT.CURRENCY.COUNTRY_LA')},
          {value: 'LB', label: t('ACCOUNT.CURRENCY.COUNTRY_LB')},
          {value: 'LC', label: t('ACCOUNT.CURRENCY.COUNTRY_LC')},
          {value: 'LI', label: t('ACCOUNT.CURRENCY.COUNTRY_LI')},
          {value: 'LK', label: t('ACCOUNT.CURRENCY.COUNTRY_LK')},
          {value: 'LR', label: t('ACCOUNT.CURRENCY.COUNTRY_LR')},
          {value: 'LS', label: t('ACCOUNT.CURRENCY.COUNTRY_LS')},
          {value: 'LT', label: t('ACCOUNT.CURRENCY.COUNTRY_LT')},
          {value: 'LU', label: t('ACCOUNT.CURRENCY.COUNTRY_LU')},
          {value: 'LV', label: t('ACCOUNT.CURRENCY.COUNTRY_LV')},
          {value: 'LY', label: t('ACCOUNT.CURRENCY.COUNTRY_LY')},
          {value: 'MA', label: t('ACCOUNT.CURRENCY.COUNTRY_MA')},
          {value: 'MC', label: t('ACCOUNT.CURRENCY.COUNTRY_MC')},
          {value: 'MD', label: t('ACCOUNT.CURRENCY.COUNTRY_MD')},
          {value: 'ME', label: t('ACCOUNT.CURRENCY.COUNTRY_ME')},
          {value: 'MF', label: t('ACCOUNT.CURRENCY.COUNTRY_MF')},
          {value: 'MG', label: t('ACCOUNT.CURRENCY.COUNTRY_MG')},
          {value: 'MH', label: t('ACCOUNT.CURRENCY.COUNTRY_MH')},
          {value: 'MK', label: t('ACCOUNT.CURRENCY.COUNTRY_MK')},
          {value: 'ML', label: t('ACCOUNT.CURRENCY.COUNTRY_ML')},
          {value: 'MM', label: t('ACCOUNT.CURRENCY.COUNTRY_MM')},
          {value: 'MN', label: t('ACCOUNT.CURRENCY.COUNTRY_MN')},
          {value: 'MO', label: t('ACCOUNT.CURRENCY.COUNTRY_MO')},
          {value: 'MP', label: t('ACCOUNT.CURRENCY.COUNTRY_MP')},
          {value: 'MQ', label: t('ACCOUNT.CURRENCY.COUNTRY_MQ')},
          {value: 'MR', label: t('ACCOUNT.CURRENCY.COUNTRY_MR')},
          {value: 'MS', label: t('ACCOUNT.CURRENCY.COUNTRY_MS')},
          {value: 'MT', label: t('ACCOUNT.CURRENCY.COUNTRY_MT')},
          {value: 'MU', label: t('ACCOUNT.CURRENCY.COUNTRY_MU')},
          {value: 'MV', label: t('ACCOUNT.CURRENCY.COUNTRY_MV')},
          {value: 'MW', label: t('ACCOUNT.CURRENCY.COUNTRY_MW')},
          {value: 'MX', label: t('ACCOUNT.CURRENCY.COUNTRY_MX')},
          {value: 'MY', label: t('ACCOUNT.CURRENCY.COUNTRY_MY')},
          {value: 'MZ', label: t('ACCOUNT.CURRENCY.COUNTRY_MZ')},
          {value: 'NA', label: t('ACCOUNT.CURRENCY.COUNTRY_NA')},
          {value: 'NC', label: t('ACCOUNT.CURRENCY.COUNTRY_NC')},
          {value: 'NE', label: t('ACCOUNT.CURRENCY.COUNTRY_NE')},
          {value: 'NF', label: t('ACCOUNT.CURRENCY.COUNTRY_NF')},
          {value: 'NG', label: t('ACCOUNT.CURRENCY.COUNTRY_NG')},
          {value: 'NI', label: t('ACCOUNT.CURRENCY.COUNTRY_NI')},
          {value: 'NL', label: t('ACCOUNT.CURRENCY.COUNTRY_NL')},
          {value: 'NO', label: t('ACCOUNT.CURRENCY.COUNTRY_NO')},
          {value: 'NP', label: t('ACCOUNT.CURRENCY.COUNTRY_NP')},
          {value: 'NR', label: t('ACCOUNT.CURRENCY.COUNTRY_NR')},
          {value: 'NU', label: t('ACCOUNT.CURRENCY.COUNTRY_NU')},
          {value: 'NZ', label: t('ACCOUNT.CURRENCY.COUNTRY_NZ')},
          {value: 'OM', label: t('ACCOUNT.CURRENCY.COUNTRY_OM')},
          {value: 'PA', label: t('ACCOUNT.CURRENCY.COUNTRY_PA')},
          {value: 'PE', label: t('ACCOUNT.CURRENCY.COUNTRY_PE')},
          {value: 'PF', label: t('ACCOUNT.CURRENCY.COUNTRY_PF')},
          {value: 'PG', label: t('ACCOUNT.CURRENCY.COUNTRY_PG')},
          {value: 'PH', label: t('ACCOUNT.CURRENCY.COUNTRY_PH')},
          {value: 'PK', label: t('ACCOUNT.CURRENCY.COUNTRY_PK')},
          {value: 'PL', label: t('ACCOUNT.CURRENCY.COUNTRY_PL')},
          {value: 'PM', label: t('ACCOUNT.CURRENCY.COUNTRY_PM')},
          {value: 'PN', label: t('ACCOUNT.CURRENCY.COUNTRY_PN')},
          {value: 'PR', label: t('ACCOUNT.CURRENCY.COUNTRY_PR')},
          {value: 'PS', label: t('ACCOUNT.CURRENCY.COUNTRY_PS')},
          {value: 'PT', label: t('ACCOUNT.CURRENCY.COUNTRY_PT')},
          {value: 'PW', label: t('ACCOUNT.CURRENCY.COUNTRY_PW')},
          {value: 'PY', label: t('ACCOUNT.CURRENCY.COUNTRY_PY')},
          {value: 'QA', label: t('ACCOUNT.CURRENCY.COUNTRY_QA')},
          {value: 'RE', label: t('ACCOUNT.CURRENCY.COUNTRY_RE')},
          {value: 'RO', label: t('ACCOUNT.CURRENCY.COUNTRY_RO')},
          {value: 'RS', label: t('ACCOUNT.CURRENCY.COUNTRY_RS')},
          {value: 'RU', label: t('ACCOUNT.CURRENCY.COUNTRY_RU')},
          {value: 'RW', label: t('ACCOUNT.CURRENCY.COUNTRY_RW')},
          {value: 'SA', label: t('ACCOUNT.CURRENCY.COUNTRY_SA')},
          {value: 'SB', label: t('ACCOUNT.CURRENCY.COUNTRY_SB')},
          {value: 'SC', label: t('ACCOUNT.CURRENCY.COUNTRY_SC')},
          {value: 'SD', label: t('ACCOUNT.CURRENCY.COUNTRY_SD')},
          {value: 'SE', label: t('ACCOUNT.CURRENCY.COUNTRY_SE')},
          {value: 'SG', label: t('ACCOUNT.CURRENCY.COUNTRY_SG')},
          {value: 'SH', label: t('ACCOUNT.CURRENCY.COUNTRY_SH')},
          {value: 'SI', label: t('ACCOUNT.CURRENCY.COUNTRY_SI')},
          {value: 'SJ', label: t('ACCOUNT.CURRENCY.COUNTRY_SJ')},
          {value: 'SK', label: t('ACCOUNT.CURRENCY.COUNTRY_SK')},
          {value: 'SL', label: t('ACCOUNT.CURRENCY.COUNTRY_SL')},
          {value: 'SM', label: t('ACCOUNT.CURRENCY.COUNTRY_SM')},
          {value: 'SN', label: t('ACCOUNT.CURRENCY.COUNTRY_SN')},
          {value: 'SO', label: t('ACCOUNT.CURRENCY.COUNTRY_SO')},
          {value: 'SR', label: t('ACCOUNT.CURRENCY.COUNTRY_SR')},
          {value: 'SS', label: t('ACCOUNT.CURRENCY.COUNTRY_SS')},
          {value: 'ST', label: t('ACCOUNT.CURRENCY.COUNTRY_ST')},
          {value: 'SV', label: t('ACCOUNT.CURRENCY.COUNTRY_SV')},
          {value: 'SX', label: t('ACCOUNT.CURRENCY.COUNTRY_SX')},
          {value: 'SY', label: t('ACCOUNT.CURRENCY.COUNTRY_SY')},
          {value: 'SZ', label: t('ACCOUNT.CURRENCY.COUNTRY_SZ')},
          {value: 'TC', label: t('ACCOUNT.CURRENCY.COUNTRY_TC')},
          {value: 'TD', label: t('ACCOUNT.CURRENCY.COUNTRY_TD')},
          {value: 'TF', label: t('ACCOUNT.CURRENCY.COUNTRY_TF')},
          {value: 'TG', label: t('ACCOUNT.CURRENCY.COUNTRY_TG')},
          {value: 'TH', label: t('ACCOUNT.CURRENCY.COUNTRY_TH')},
          {value: 'TJ', label: t('ACCOUNT.CURRENCY.COUNTRY_TJ')},
          {value: 'TK', label: t('ACCOUNT.CURRENCY.COUNTRY_TK')},
          {value: 'TL', label: t('ACCOUNT.CURRENCY.COUNTRY_TL')},
          {value: 'TM', label: t('ACCOUNT.CURRENCY.COUNTRY_TM')},
          {value: 'TN', label: t('ACCOUNT.CURRENCY.COUNTRY_TN')},
          {value: 'TO', label: t('ACCOUNT.CURRENCY.COUNTRY_TO')},
          {value: 'TR', label: t('ACCOUNT.CURRENCY.COUNTRY_TR')},
          {value: 'TT', label: t('ACCOUNT.CURRENCY.COUNTRY_TT')},
          {value: 'TV', label: t('ACCOUNT.CURRENCY.COUNTRY_TV')},
          {value: 'TW', label: t('ACCOUNT.CURRENCY.COUNTRY_TW')},
          {value: 'TZ', label: t('ACCOUNT.CURRENCY.COUNTRY_TZ')},
          {value: 'UA', label: t('ACCOUNT.CURRENCY.COUNTRY_UA')},
          {value: 'UG', label: t('ACCOUNT.CURRENCY.COUNTRY_UG')},
          {value: 'UM', label: t('ACCOUNT.CURRENCY.COUNTRY_UM')},
          {value: 'US', label: t('ACCOUNT.CURRENCY.COUNTRY_US')},
          {value: 'UY', label: t('ACCOUNT.CURRENCY.COUNTRY_UY')},
          {value: 'UZ', label: t('ACCOUNT.CURRENCY.COUNTRY_UZ')},
          {value: 'VA', label: t('ACCOUNT.CURRENCY.COUNTRY_VA')},
          {value: 'VC', label: t('ACCOUNT.CURRENCY.COUNTRY_VC')},
          {value: 'VE', label: t('ACCOUNT.CURRENCY.COUNTRY_VE')},
          {value: 'VG', label: t('ACCOUNT.CURRENCY.COUNTRY_VG')},
          {value: 'VI', label: t('ACCOUNT.CURRENCY.COUNTRY_VI')},
          {value: 'VN', label: t('ACCOUNT.CURRENCY.COUNTRY_VN')},
          {value: 'VU', label: t('ACCOUNT.CURRENCY.COUNTRY_VU')},
          {value: 'WF', label: t('ACCOUNT.CURRENCY.COUNTRY_WF')},
          {value: 'WS', label: t('ACCOUNT.CURRENCY.COUNTRY_WS')},
          {value: 'XK', label: t('ACCOUNT.CURRENCY.COUNTRY_XK')},
          {value: 'YE', label: t('ACCOUNT.CURRENCY.COUNTRY_YE')},
          {value: 'YT', label: t('ACCOUNT.CURRENCY.COUNTRY_YT')},
          {value: 'ZA', label: t('ACCOUNT.CURRENCY.COUNTRY_ZA')},
          {value: 'ZM', label: t('ACCOUNT.CURRENCY.COUNTRY_ZM')},
          {value: 'ZW', label: t('ACCOUNT.CURRENCY.COUNTRY_ZW')}
        ],
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
          {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
          {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
          {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
          {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
          {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
          {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
          {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
          {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
          {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
          {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
        ],
        validators: ['required']
      },
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      bankName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BANK_NAME'),
        validators: ['required']
      },
      bankId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BANK_ID'),
        validators: ['required']
      },
      branchId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.BRANCH_NO'),
        validators: ['required']
      },
      accountNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN'),
        validators: ['required']
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_4_0625_0')
      }
    },
    OK_PAY: {
      accountNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.WALLET_ID'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.SUPPORTED_CURRENCIES'),
        multiple: true,
        value: ['EUR', 'BGN', 'DKK', 'ISK', 'CHF', 'NOK', 'PLN', 'CZK', 'RON', 'SEK', 'HUF'],
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
          {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
          {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
          {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
          {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
          {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
          {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
          {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
          {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
          {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
          {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
        ],
        validators: ['required']
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_025_0')
      }
    },
    PERFECT_MONEY: {
      accountNr: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NO'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        options: [
          {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')},
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')}
        ],
        validators: ['required']
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_0125_0')
      }
    },
    POPMONEY: {
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      accountId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL_OR_PHONE'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'USD',
        options: [
          {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
        ],
        disabled: true
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_04_0')
      }
    },
    REVOLUT: {
      accountId: {
        type: 'text', label: t('ACCOUNT.CURRENCY.EMAIL_OR_PHONE'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.SUPPORTED_CURRENCIES'),
        multiple: true,
        value: ['EUR', 'BGN', 'DKK', 'ISK', 'CHF', 'NOK', 'PLN', 'CZK', 'RON', 'SEK', 'HUF'],
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
          {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
          {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
          {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
          {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
          {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
          {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
          {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
          {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
          {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
          {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
        ],
        validators: ['required']
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_025_0')
      }
    },
    SEPA: {
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      iban: {
        type: 'text', label: 'IBAN',
        validators: ['required', 'iban']
      },
      bic: {
        type: 'text', label: 'BIC',
        validators: ['required', 'bic']
      },
      countryCode: {
        type: 'select', label: t('ACCOUNT.CURRENCY.BANK_COUNTRY'),
        options: [
          {value: 'AT', label: t('ACCOUNT.CURRENCY.COUNTRY_AT')},
          {value: 'BE', label: t('ACCOUNT.CURRENCY.COUNTRY_BE')},
          {value: 'CY', label: t('ACCOUNT.CURRENCY.COUNTRY_CY')},
          {value: 'EE', label: t('ACCOUNT.CURRENCY.COUNTRY_EE')},
          {value: 'FI', label: t('ACCOUNT.CURRENCY.COUNTRY_FI')},
          {value: 'FR', label: t('ACCOUNT.CURRENCY.COUNTRY_FR')},
          {value: 'GR', label: t('ACCOUNT.CURRENCY.COUNTRY_GR')},
          {value: 'ES', label: t('ACCOUNT.CURRENCY.COUNTRY_ES')},
          {value: 'NL', label: t('ACCOUNT.CURRENCY.COUNTRY_NL')},
          {value: 'IE', label: t('ACCOUNT.CURRENCY.COUNTRY_IE')},
          {value: 'LT', label: t('ACCOUNT.CURRENCY.COUNTRY_LT')},
          {value: 'LU', label: t('ACCOUNT.CURRENCY.COUNTRY_LU')},
          {value: 'MT', label: t('ACCOUNT.CURRENCY.COUNTRY_MT')},
          {value: 'MC', label: t('ACCOUNT.CURRENCY.COUNTRY_MC')},
          {value: 'DE', label: t('ACCOUNT.CURRENCY.COUNTRY_DE')},
          {value: 'PT', label: t('ACCOUNT.CURRENCY.COUNTRY_PT')},
          {value: 'SK', label: t('ACCOUNT.CURRENCY.COUNTRY_SK')},
          {value: 'SI', label: t('ACCOUNT.CURRENCY.COUNTRY_SI')},
          {value: 'IT', label: t('ACCOUNT.CURRENCY.COUNTRY_IT')},
          {value: 'LV', label: t('ACCOUNT.CURRENCY.COUNTRY_LV')},
          {value: 'BG', label: t('ACCOUNT.CURRENCY.COUNTRY_BG')},
          {value: 'HR', label: t('ACCOUNT.CURRENCY.COUNTRY_HR')},
          {value: 'DK', label: t('ACCOUNT.CURRENCY.COUNTRY_DK')},
          {value: 'IS', label: t('ACCOUNT.CURRENCY.COUNTRY_IS')},
          {value: 'LI', label: t('ACCOUNT.CURRENCY.COUNTRY_LI')},
          {value: 'NO', label: t('ACCOUNT.CURRENCY.COUNTRY_NO')},
          {value: 'PL', label: t('ACCOUNT.CURRENCY.COUNTRY_PL')},
          {value: 'CZ', label: t('ACCOUNT.CURRENCY.COUNTRY_CZ')},
          {value: 'RO', label: t('ACCOUNT.CURRENCY.COUNTRY_RO')},
          {value: 'CH', label: t('ACCOUNT.CURRENCY.COUNTRY_CH')},
          {value: 'SE', label: t('ACCOUNT.CURRENCY.COUNTRY_SE')},
          {value: 'GB', label: t('ACCOUNT.CURRENCY.COUNTRY_GB')},
          {value: 'HU', label: t('ACCOUNT.CURRENCY.COUNTRY_HU')}
        ],
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        options: [
          {value: 'EUR', label: t('ACCOUNT.CURRENCY.CURRENCY_EUR')},
          {value: 'BGN', label: t('ACCOUNT.CURRENCY.CURRENCY_BGN')},
          {value: 'DKK', label: t('ACCOUNT.CURRENCY.CURRENCY_DKK')},
          {value: 'ISK', label: t('ACCOUNT.CURRENCY.CURRENCY_ISK')},
          {value: 'CHF', label: t('ACCOUNT.CURRENCY.CURRENCY_CHF')},
          {value: 'NOK', label: t('ACCOUNT.CURRENCY.CURRENCY_NOK')},
          {value: 'PLN', label: t('ACCOUNT.CURRENCY.CURRENCY_PLN')},
          {value: 'CZK', label: t('ACCOUNT.CURRENCY.CURRENCY_CZK')},
          {value: 'RON', label: t('ACCOUNT.CURRENCY.CURRENCY_RON')},
          {value: 'SEK', label: t('ACCOUNT.CURRENCY.CURRENCY_SEK')},
          {value: 'HUF', label: t('ACCOUNT.CURRENCY.CURRENCY_HUF')}
        ],
        validators: ['required']
      },
      acceptedCountriesEuro: {
        type: 'select', label: t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO'),
        multiple: true,
        value: ['AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'GR', 'ES', 'NL', 'IE', 'LT', 'LU', 'MT', 'MC', 'DE', 'PT', 'SK', 'SI', 'IT', 'LV'],
        options: [
          {value: 'AT', label: 'AT'},
          {value: 'BE', label: 'BE'},
          {value: 'CY', label: 'CY'},
          {value: 'EE', label: 'EE'},
          {value: 'FI', label: 'FI'},
          {value: 'FR', label: 'FR'},
          {value: 'GR', label: 'GR'},
          {value: 'ES', label: 'ES'},
          {value: 'NL', label: 'NL'},
          {value: 'IE', label: 'IE'},
          {value: 'LT', label: 'LT'},
          {value: 'LU', label: 'LU'},
          {value: 'MT', label: 'MT'},
          {value: 'MC', label: 'MC'},
          {value: 'DE', label: 'DE'},
          {value: 'PT', label: 'PT'},
          {value: 'SK', label: 'SK'},
          {value: 'SI', label: 'SI'},
          {value: 'IT', label: 'IT'},
          {value: 'LV', label: 'LV'}
        ]
      },
      acceptedCountriesNonEuro: {
        type: 'select', label: t('ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO'),
        multiple: true,
        value: ['BG', 'HR', 'DK', 'IS', 'LI', 'NO', 'PL', 'CZ', 'RO', 'CH', 'SE', 'GB', 'HU'],
        options: [
          {value: 'BG', label: 'BG'},
          {value: 'HR', label: 'HR'},
          {value: 'DK', label: 'DK'},
          {value: 'IS', label: 'IS'},
          {value: 'LI', label: 'LI'},
          {value: 'NO', label: 'NO'},
          {value: 'PL', label: 'PL'},
          {value: 'CZ', label: 'CZ'},
          {value: 'RO', label: 'RO'},
          {value: 'CH', label: 'CH'},
          {value: 'SE', label: 'SE'},
          {value: 'GB', label: 'GB'},
          {value: 'HU', label: 'HU'}
        ]
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_6_0625_0')
      }
    },
    VENMO: {
      holderName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.OWNER_NAME'),
        validators: ['required']
      },
      venmoUserName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.VENMO_NAME'),
        validators: ['required']
      },
      tradeCurrencies: {
        type: 'select', label: t('ACCOUNT.CURRENCY.CURRENCY'),
        value: 'USD',
        options: [
          {value: 'USD', label: t('ACCOUNT.CURRENCY.CURRENCY_USD')}
        ],
        disabled: true,
      },
      salt: {type: 'text', label: t('ACCOUNT.CURRENCY.SALT_ACCOUNT_AGE')},
      accountName: {
        type: 'text', label: t('ACCOUNT.CURRENCY.ACCOUNT_NAME'),
        validators: ['required']
      },
      limitations: {
        type: 'footer', label: t('ACCOUNT.CURRENCY.LIMITATIONS'),
        text: t('ACCOUNT.CURRENCY.LIMITATION_1_04_0')
      }
    }
  };

  formOpened: boolean;
  formDisabled: boolean;
  selectedForm: string;
  accounts = [];
  paymentValues = {};
  detailsValues = {id: ''};
  unregisterBackButton = _.noop;
  creatingAccount;
  deletingAccount;
  loading = true;

  constructor(private initModal: InfoModalService,
              private translate: TranslateService,
              private paymentAccountsDAO: PaymentAccountsDAO,
              private toast: ToastService,
              private platform: Platform,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.paymentAccountsDAO.query().then((result: any) => {
      this.accounts = result.paymentAccounts || [];
      this.loading = false;
    });
    this.initModal.show({
      id: 'accountInit',
      title: t('ACCOUNT.INIT_MODAL.TITLE'),
      text: t('ACCOUNT.INIT_MODAL.TEXT'),
      doNotShowButton: true
    });
  }

  ngOnDestroy() {
    this.unregisterBackButton();
  }

  registerBackButton() {
    this.unregisterBackButton = this.platform.registerBackButtonAction(() => {
      this.cancel();
      this.unregisterBackButton();
    });
  }

  show(index) {
    this.paymentValues = {paymentMethod: this.accounts[index].paymentMethod};
    this.detailsValues = this.accounts[index];
    this.selectedForm = this.accounts[index].paymentMethod;
    this.formDisabled = true;
    this.formOpened = true;
    this.registerBackButton();
  }

  addNew() {
    this.cancel();
    this.formOpened = true;
    this.registerBackButton();
  }

  cancel() {
    this.formOpened = false;
    this.formDisabled = false;
    this.selectedForm = null;
    this.paymentValues = _.mapValues(this.paymentValues, () => null);
    this.detailsValues = _.mapValues(this.detailsValues, () => null);
    this.unregisterBackButton();
  }

  refreshList() {
    return this.paymentAccountsDAO.query()
      .then((result: any) => (this.accounts = result.paymentAccounts))
  }

  change(form) {
    this.selectedForm = form.value.paymentMethod
  }

  submit(values) {
    const payload = _.cloneDeep(values);
    this.creatingAccount = true;
    if ('SEPA' === this.selectedForm) {
      payload.acceptedCountries = _.concat(payload.acceptedCountriesEuro, payload.acceptedCountriesNonEuro);
      delete payload.acceptedCountriesEuro;
      delete payload.acceptedCountriesNonEuro;
    }
    payload.paymentMethod = this.selectedForm;
    payload.tradeCurrencies = _.flatten([payload.tradeCurrencies]);
    payload.selectedTradeCurrency = payload.tradeCurrencies[0];
    delete payload.salt;
    delete payload.limitations;
    this.paymentAccountsDAO.create(payload)
      .then(() => {
        this.cancel();
        this.refreshList();
        this.toast.show(t('TOAST.PAYMENT_METHOD_CREATED'), 'info');
        this.creatingAccount = false;
      })
      .catch(() => {
        this.toast.show(t('TOAST.PAYMENT_METHOD_CREATE_ERROR'), 'error');
        this.creatingAccount = false;
      });
  }

  delete() {
    this.alertCtrl.create({
      title: this.translate.instant('WARNING'),
      message: this.translate.instant(t('ACCOUNT.CURRENCY.DELETE_CONFIRMATION')),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
        },
        {
          text: this.translate.instant('CONFIRM'),
          handler: () => {
            this.deletingAccount = true;
            this.paymentAccountsDAO.delete(this.detailsValues.id)
              .then(() => {
                this.cancel();
                this.refreshList();
                this.toast.show(t('TOAST.PAYMENT_METHOD_DELETED'), 'info');
                this.deletingAccount = false;
              })
              .catch(() => {
                this.toast.show(t('TOAST.PAYMENT_METHOD_DELETE_ERROR'), 'error');
                this.deletingAccount = false;
              });
          }
        }
      ]
    }).present();
  }

  notDoneYet() {
    this.toast.show(t('SHARED.NOT_DONE_YET'), 'info');
  }

}
