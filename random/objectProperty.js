class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let user = new User("John", 25);
console.log(user)

user['country'] = 'Slovakia'
console.log(user)

let user2 = new User("jack", 30)['Country'] = "Slovakia";
console.log(user2)