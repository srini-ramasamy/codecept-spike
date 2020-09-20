Feature('home');

Scenario('test something', (I) => {
    I.amOnPage('https://www.google.com');
    I.seeInTitle('Google');
});
