const { I } = inject();

export class HomePage {
    static create(): HomePage {
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