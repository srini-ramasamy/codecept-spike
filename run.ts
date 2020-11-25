const { container: Container, codecept: Codecept } = require('codeceptjs');
const cf = require('./codecept.playwright.conf.js').config;

const config = { helpers: cf.helpers, gherkin: cf.gherkin, plugins: cf.plugins };
const opts = { steps: true, features: true, grep: "\@focus|\@watch" };

// create runner
const codecept = new Codecept(config, opts);
codecept.init(__dirname);

// initialize listeners
codecept.runHooks();
codecept.bootstrap();

runTests();

// run tests
async function runTests() {
    try {
        await codecept.bootstrap();
        codecept.loadTests();
        await codecept.run();
      } catch (err) {
        process.exitCode = 1;
      } finally {
        await codecept.teardown();
      }
}
