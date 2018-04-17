const seeder = require('../seeder');

function seedNetwork() {
  return seeder({
    method: 'get',
    url: '/api/v1/network/p2p/status',
    status: 200,
    payload: {}
  });
}

function navigateBaseRoute() {
  return browser.get('/');
}

function getTitle() {
  return browser.getTitle();
}

const page = {
  seedNetwork,
  navigateBaseRoute,
  getTitle
};

module.exports = page;
