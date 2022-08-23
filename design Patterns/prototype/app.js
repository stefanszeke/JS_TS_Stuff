// what is a prototype design pattern?
// it is a creational design pattern that allows cloning objects without coupling to their specific classes

// when to use prototype design pattern?
// when you want to create a new object based on an existing object and you want to change some of the properties of the existing object


class YoungLuke {

  name
  height
  hairColor
  age = 20;
  age2 = 'Young'

  constructor( ) {}

  async getCharacter() {
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();
    this.name = data.name;
    this.height = data.height;
    this.hairColor = data.hair_color;
  }

  getInformation() {
    return `${this.age2} ${this.name} is ${this.height} cm tall and has ${this.hairColor} hair. He is ${this.age} years old.`;
  }
}

const youngLukeH2 = document.querySelector(".youngLuke");
const oldLukeH2 = document.querySelector(".oldLuke");

async function addLukes() {
  let youngLuke =  new YoungLuke()
  await youngLuke.getCharacter()

  youngLukeH2.innerHTML = youngLuke.getInformation();

  // prototype inheritance
  let oldLuke = Object.create(youngLuke, {age: {value: 70}, age2: {value: 'Old'}});
  oldLukeH2.innerHTML = oldLuke.getInformation();
  
  console.log(youngLuke)
  console.log(oldLuke)
}

addLukes();





