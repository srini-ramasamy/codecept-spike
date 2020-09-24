const { I } = inject();

export class HomePage {
    static create(): HomePage {
      return new HomePage();
    }

    checkContent() {
        I.seeElement('.content');
    }
}