import { HomePage } from '../support/home.page';
import { wrap } from '../../../support';

export type HomeStepScope = { myHome: HomePage };

Given('I open {string} home page', wrap(function(this: HomeStepScope, name: string) {
  this.myHome = HomePage.create();
  this.myHome.goTo(name);
}));

Then('I see {string} in the title', wrap(function(this: HomeStepScope, title: string) {
  this.myHome.checkTitle(title);
}));


export { };