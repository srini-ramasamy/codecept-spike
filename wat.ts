// Original watch version
// const fs = require('fs');

// const buttonPressesLogFile = './README.md';

// console.log(`Watching for file changes on ${buttonPressesLogFile}`);

// fs.watchFile(buttonPressesLogFile, (curr, prev) => {
//   console.log(`${buttonPressesLogFile} file Changed`);
// });


const fs = require('fs');

const { container: Container, codecept: Codecept } = require('codeceptjs');
const cf = require('./codecept.playwright.conf.js').config;

const config = { helpers: cf.helpers, gherkin: cf.gherkin, plugins: cf.plugins, mocha: {cleanReferencesAfterRun: false} };
const opts = { steps: true, features: true, grep: "\@focus|\@watch" };

// create runner
const codecept = new Codecept(config, opts);
// const mocha = require('codeceptjs').container.mocha();

// create helpers, support files, mocha
codecept.init(__dirname);
require('codeceptjs').container.mocha().cleanReferencesAfterRun(false);

// codecept.runHooks();
// codecept.bootstrap();
runTests();

const buttonPressesLogFile = 'home/features/step_definitions/home.steps.ts';
console.log(`Watching for file changes on ${buttonPressesLogFile}`);
fs.watchFile(buttonPressesLogFile, (curr, prev) => {
  console.log(`${buttonPressesLogFile} file Changed`);

  global.Before = fn => event.dispatcher.on(event.test.started, fn);
  global.After = fn => event.dispatcher.on(event.test.finished, fn);
  global.Fail = fn => event.dispatcher.on(event.test.failed, fn);
  // This hack will work for our step files, but if any custom steps are exported then additional logic from container.js should be implemented
  delete require.cache[require.resolve(`${__dirname}/home/features/step_definitions/home.steps.ts`)]
  require(`${__dirname}/home/features/step_definitions/home.steps.ts`);
  delete global.Before;
  delete global.After;
  delete global.Fail;

  runTests();
});

// run tests
async function runTests() {
    try {
        // await codecept.runHooks();
        // await codecept.bootstrap();
        
        codecept.loadTests();
        // Container.helpers["Playwright"]._startBrowser();
        await codecept.run();
      } catch (err) {
        process.exitCode = 1;
      } finally {
        // await codecept.teardown();
      }
}