const { I } = inject();

export class HomePage {
    
    root: ".content"

    get className() {
      return 'HomePage';
    }

    static create(): HomePage {
      // const homePage = new HomePage();
      // share ({ homePage });
      return new HomePage();
    }

    goTo(name: string) {
      I.amOnPage(`https://www.${name}.com`);
    }

    checkTitle(title: string) {
      I.seeInTitle(title);
    }

    checkContent() {
        I.seeElement('.content');
    }
}