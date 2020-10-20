import { HomePage } from '../support/home.page';
import { scope, wrap } from '../../../support';


import { createCucumberWrapper } from '../../../wrapper';
const { stepDefinitions, Given, Then, When } = createCucumberWrapper();

export type HomeStepScope = { myHome: HomePage };

Given('I open {string} home page', function(this: HomeStepScope, name: string) {
  this.myHome = HomePage.create();
  this.myHome.goTo(name);
});

Then('I see {string} in the title', function(this: HomeStepScope, title: string) {
  this.myHome.checkTitle(title);
});


export default stepDefinitions;