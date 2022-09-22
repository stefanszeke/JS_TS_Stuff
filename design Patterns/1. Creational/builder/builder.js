// builder pattern 
// is a creational design pattern that lets you construct complex objects step by step.
// The pattern allows you to produce different types and representations of an object using the same construction code.
// what problem does it solve?
// The problem is that the constructor of an object can become very complex if the object has many parameters.
// The solution is to use a builder that provides a set of methods for constructing the object step by step.

class Tag {
  static get indentSize() { return 2; }

  constructor(name="", text="") {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);

    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent+1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children)
      html.push(child.toStringImpl(indent+1));

    html.push(`${i}</${this.name}>\n`);
    return html.join();
  }

  toString()
  {
    return this.toStringImpl(0);
  }

  static create(name) {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }
  addChildFluent(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  clear() {
    this.root = new Tag(this.rootName);
  }

  build() {
    return this.root;
  }
}

let builder = new HtmlBuilder('ul');

let fruits = ['apple', 'banana', 'orange'];

for(let fruit of fruits) {
  builder.addChild('li', fruit);
}


builder.addChildFluent('li', 'mango').addChildFluent('li', 'grapes');
console.log(builder.toString())