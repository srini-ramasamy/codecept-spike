const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// commented this because it doesn't seem to like 'show' attribute under helpers
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: 'webkit'
    }
  },
  include: {
    I: './steps_file.ts'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  // tests: './*_test.js',
  name: 'codecept-spike',
  require: ["ts-node/register"]
}