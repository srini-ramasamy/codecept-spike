import { HomePage } from '../support/home.page';

const homePage = HomePage.create();

Given('I open {string} home page', (name: string) => {
  homePage.goTo(name);
});

Then('I see {string} in the title', (title: string) => {
  homePage.checkTitle(title);
  homePage.checkContent();
});

export { };