import { HomePage } from '../support/home.page';

const { I } = inject();
const homePage = HomePage.create();

Given('I open {string} home page', (name: string) => {
  I.amOnPage(`https://www.${name}.com`);
});

Then('I see {string} in the title', (title: string) => {
  I.seeInTitle(title);
  homePage.checkContent();
});

export { };