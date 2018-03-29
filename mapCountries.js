const currenciesNames = require('./currenciesNames');
const currenciesSymbols = require('./currenciesSymbols');
const _ = require('lodash');

const filteredNames = _.uniq(currenciesNames);
const filteredSymbols = _.uniq(currenciesSymbols);

const mached = [];
_.forEach(filteredNames, (item, index) => {
    mached.push({name: item, symbol: filteredSymbols[index]})
});

const sorted = _.sortBy(mached, 'symbol');


sorted.forEach(item => console.log(`{value: '${item.symbol}', label: t('ACCOUNT.CURRENCY.CURRENCY_${item.symbol}')},`));
// sorted.forEach(item => console.log(item.symbol));
