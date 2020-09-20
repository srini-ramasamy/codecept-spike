const { I } = inject();

Given('I open home page', () => {
  I.amOnPage('https://www.google.com');
});

Then('I see the correct title', () => {
  I.seeInTitle('Google');
});