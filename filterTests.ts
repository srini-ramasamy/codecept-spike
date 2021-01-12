const event = require('codeceptjs').event;
let mocha = require('codeceptjs').container.mocha();

module.exports = function() {
  event.dispatcher.on(event.suite.before, function (suite) {
    // Use gherkin parser & parse rerun.txt to get scenario title
    // and use it as a whitelist for this filter
    let filteredTests = mocha.suite.suites[0].tests.filter((item) => item.title !== "Another test")
    mocha.suite.suites[0].tests = filteredTests;
  });

  event.dispatcher.on(event.test.before, function (test) {
    if (test.tags.includes('@skip')) {
      test.run = function skip() {
        this.skip()
      }
    }
});
}
