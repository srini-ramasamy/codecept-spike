const { I } = inject();

export class Browser {
    public $(sel) : Element { 
        return new Element(sel);
    }
}

export class Element {
    private n: string;
    constructor(sel: string) {
        this.n = sel;
    }

    public $(sel: string) { 
        return new Element(`${this.n} ${sel}`);
    }

    public click() {
        console.log(`${this.n} elem clicked`);
    }

    public see() : void { 
        I.seeElement(this.n);
    }

    public print() : void { 
       console.log(`printing the current elem ${this.n}`);
    }
}

// // array form
// export class Element {
//     private n: [];

//     constructor(arr) {
//         this.n = arr;
//     }

//     public $(sel: string) { // annotation not necessary added to address comments
//         return new Element([...this.n, sel]);
//     }

//     public click() {
//         console.log(`${this.n.toString()} elem clicked`);
//     }
// }