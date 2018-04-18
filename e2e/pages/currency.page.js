const seeder = require('../seeder');

const mapping = {
  accounts: () => element.all(by.css('app-account-manager .list .item'))
};

function seedAccounts() {
  return seeder({
    method: 'get',
    url: '/api/v1/payment-accounts',
    status: 200,
    payload: {
      paymentAccounts: [
        {
          id: '2142b459-0850-40eb-84bc-bbdba1942e03',
          accountName: 'Bob - post',
          paymentDetails: 'US Postal Money Order - Holder name: qwe asd, postal address: New York 4, NY',
          paymentMethod: 'US_POSTAL_MONEY_ORDER',
          selectedTradeCurrency: 'USD',
          tradeCurrencies: ['USD'],
          holderName: 'qwe asd',
          postalAddress: 'New York 4, NY'
        },
        {
          id: '8a2ea56e-4c5a-49a7-befb-5b8842bec961',
          accountName: 'Uphold',
          paymentDetails: 'Uphold - Account: 987987',
          paymentMethod: 'UPHOLD',
          selectedTradeCurrency: 'USD',
          tradeCurrencies: ['USD', 'EUR'],
          accountId: '987987'
        }
      ]
    }
  });
}

function countAccounts() {
  return mapping.accounts().count();
}

const page = {
  seedAccounts,
  countAccounts
};

module.exports = page;
