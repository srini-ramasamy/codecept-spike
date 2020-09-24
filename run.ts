const { container: Container, codecept: Codecept } = require('codeceptjs');
const { gherkinConfig } = require('./codecept.gherkin.conf');

const config = { helpers: { Puppeteer: { show: false } }, gherkin: gherkinConfig };
const opts = { steps: true, features: true };

// create runner
const codecept = new Codecept(config, opts);

// initialize codeceptjs in current dir
codecept.initGlobals(__dirname);

// create helpers, support files, mocha
Container.create(config, opts);

// initialize listeners
codecept.runHooks();

// run bootstrap function from config
codecept.runBootstrap((err) => {

// load tests
codecept.loadTests(gherkinConfig.features);

// run tests
codecept.run();
}); 