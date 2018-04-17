const Promise = require('bluebird');

const mapping = {
  doNotShowButton: () => element(by.css('ion-modal button[name="do-not-show"]')),
  redirectButton: () => element(by.css('ion-modal button[name="redirect"]'))
};

function clickDoNotShowButton() {
  return Promise.delay(500)
    .then(() => mapping.doNotShowButton().click())
    .then(() => Promise.delay(500));
}

function clickRedirectButton() {
  return Promise.delay(500)
    .then(() => mapping.redirectButton().click())
    .then(() => Promise.delay(500));
}

const page = {
  clickDoNotShowButton,
  clickRedirectButton
};

module.exports = page;
