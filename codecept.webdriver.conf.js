const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// commented this because it doesn't seem to like 'show' attribute under helpers
// setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'localhost',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: '1920x1680',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
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