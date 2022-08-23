import { Admin, Person, PersonFactory1, PersonFactory2, PersonFactory3 } from "./person";

const johnTheGuest = PersonFactory1.create('John', 'guest');
const JillTheUser = PersonFactory2.create('Jill', 'user');
const JackTheAdmin = PersonFactory3.create('Jack', 'admin');

let people = [johnTheGuest, JillTheUser, JackTheAdmin];





people.forEach(person => {
  console.log(person);
})

people.forEach(person => {
  if(person instanceof Admin && person instanceof Person) {
    console.log(`${person.getName()} is an admin`);
  }
})

