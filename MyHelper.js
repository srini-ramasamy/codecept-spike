const Helper = require('@codeceptjs/helper');
const glob = require('glob');

class MyHelper extends Helper {
    constructor() {

        // let config = require('codeceptjs').config;
        // let newGher = { gherkin: { features: '{**/home.feature,**/home.feature}' }};

        // config.append(newGher);
        // console.log(`~~~~~~~config~~~~~~~~~~~~`);
        // console.log(config.get().gherkin);

    }

    // constructor() {
    //   const featuresList = whatWeGet.map(line => {
    //     return `../../${line.split(':').shift()}`;
    //   });
    //   console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    //   const featuresPattern = `{${featuresList.join(',')}}`;
    //   console.log(featuresPattern);
    //   console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    //   config.append({gherkin:{features:featuresPattern}});
    //   super();
    // }

    async _before() {
        const { Playwright } = this.helpers;
        console.log('trying to start...');
        await Playwright._startBrowser();
    }
}

module.exports = MyHelper;
