import { HomePage } from '../support/home.page';
import { scope , forge } from '../../../support';
// const { scope , forge } = createCucumberWrapper();

// export type HomeStepScope = { homePage: HomePage };
// let scope = {};

Before(async () => {

  // this works - but not too clean
  // scope = { homePage : HomePage };
  // share ({ scope });

  // this works too - just needed the async/await 
  // scope.homePage = createAndShare(HomePage);
  // await share ( { scope } );

  // checkScopes(HomePage);

  // scope.homePage = HomePage.create();
  // await share ({ scope });
  // homePage = inject().homePage;
  
  // checkScopes(HomePage);
  // createAndShare(HomePage);
  forge("homePage", HomePage);
});

Given('I open {string} home page', function (name: string) {

  // scope.homePage = createAndShare(HomePage);
  // await share ( { scope } );
  // this.homePage = new HomePage();
  scope.homePage.goTo(name);
});

Then('I see {string} in the title', function (title: string) {
  scope.homePage.checkTitle(title);
  // scope.homePage.checkContent();
  // console.log(this.homePage.className);
});


export { };