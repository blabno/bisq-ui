const rp = require('request-promise');

module.exports = function (body) {
  return rp({
    method: 'POST',
    uri: 'http://localhost:8060/stub',
    body: body,
    json: true
  });
};
