import _ from 'lodash';

export default function(methodId, currency, accountsList) {
  return _.filter(
    accountsList,
    acc =>
      acc.paymentMethod === methodId && acc.selectedTradeCurrency === currency
  );
}
