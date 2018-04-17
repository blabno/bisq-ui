const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const globalPage = require('../pages/global.page');
const backendUrlPage = require('../pages/backendUrl.page');
const currencyPage = require('../pages/currency.page');
const infoModalPage = require('../pages/infoModal.page');
const menuPage = require('../pages/menu.page');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Bisq e2e tests', () => {
  before(() => globalPage.seedNetwork());
  it('should have a title', () =>
    globalPage.navigateBaseRoute()
      .then(() => globalPage.getTitle())
      .then(title => expect(title).to.equal('Bisq'))
  );
  describe('when user has two fiat accounts', () => {
    before(() => currencyPage.seedAccounts());
    it('should display accounts list', () =>
      globalPage.navigateBaseRoute()
        .then(() => infoModalPage.clickRedirectButton())
        .then(() => backendUrlPage.enterMockBackendUrl('http://localhost:8060'))
        .then(() => backendUrlPage.confirm())
        .then(() => menuPage.clickAccountsItem())
        .then(() => menuPage.clickCurrencySubItem())
        .then(() => infoModalPage.clickDoNotShowButton())
        .then(() => currencyPage.countAccounts())
        .then(count => expect(count).to.equal(2))
    );
  });
});
