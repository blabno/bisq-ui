const mapping = {
  urlInput: () => element(by.css('app-backend-url input')),
  saveButton: () => element(by.css('app-backend-url .save-button'))
};

function enterMockBackendUrl(url) {
  return mapping.urlInput().sendKeys(url);
}

function confirm() {
  return mapping.saveButton().click();
}

const page = {
  enterMockBackendUrl,
  confirm
};

module.exports = page;
