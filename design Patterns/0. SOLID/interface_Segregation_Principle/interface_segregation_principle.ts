// interface segregation principle
// is a principle in software engineering that states that no client should be forced to depend on methods it does not use.
export {}

class Document {

}
interface Machine {
    print(doc: Document): void ;
    fax(doc: Document): void ;
    scan(doc: Document): void ;
}

class MultiFunctionPrinter implements Machine {
    print(doc: Document): void {}
    fax(doc: Document): void {}
    scan(doc: Document): void {}
}

class OldFashionedPrinter implements Machine {
    print(doc: Document): void {}
    // should not be allowed to implement fax and scan
    fax(doc: Document): void {}
    scan(doc: Document): void {
        throw new NotImplementedError('scan');
    }
}

class NotImplementedError extends Error {
    constructor(name: string) {
        let message = `${name} is not implemented`;
        super(message);
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError);
        }
    }
}

// principle of least surprise
// if you have a class that extends another class, you should not be surprised by the methods that are implemented

let oldPrinter = new OldFashionedPrinter()
try {
    oldPrinter.scan(new Document())
} catch (e) { console.log(e.message) }


// with interface segregation principle, we can create interfaces that are specific to the methods that are needed
interface Printer {
    print(doc: Document): void;
}

interface Scanner {
    scan(doc: Document): void;
}

class JustAPrinter implements Printer {
    print(doc: Document): void {}
}

class Photocopier implements Printer, Scanner {
    print(doc: Document): void {}
    scan(doc: Document): void {}
}

