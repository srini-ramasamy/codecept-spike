const { I } = inject();

Given('I open {string} home page', (name: string) => {
  I.amOnPage(`https://www.${name}.com`);
});

Then('I see {string} in the title', (title: string) => {
  I.seeInTitle(title);
});

export { };