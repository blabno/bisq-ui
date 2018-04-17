exports.config = {
  baseUrl: 'http://localhost:8100',
  framework: 'mocha',
  specs: ['features/*.spec.js'],
  mochaOpts: {
    timeout: 15000
  }
};
