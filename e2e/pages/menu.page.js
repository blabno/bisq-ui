const mapping = {
  accountItem: () => element(by.css('app-menu .menu-item .fa-user')),
  currencySubItem: () => element(by.css('app-menu .menu-item .fa-money-bill-alt'))
};

function clickAccountsItem() {
  return mapping.accountItem().click();
}

function clickCurrencySubItem() {
  return mapping.currencySubItem().click();
}

const page = {
  clickAccountsItem,
  clickCurrencySubItem
};

module.exports = page;
