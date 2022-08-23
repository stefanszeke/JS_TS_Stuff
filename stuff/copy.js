let apple = 10
let banana = apple
banana = 5

console.log(apple)
console.log(banana)
console.log(apple === banana)

//

let dog = [10]
let cat = dog
cat[0] = 5

let bird = JSON.parse(JSON.stringify(dog))
bird[0] = 15

let fish = [...dog]
fish[0] = 20

console.log(dog)
console.log(cat)
console.log(cat === dog)

console.log(bird)
console.log(fish)

//

let user1 = { name: 'John', age: 30, hobbies: ['football', 'basketball', 'running'] }
let user2 = { ...user1 }
let user3 = JSON.parse(JSON.stringify(user1))

user2.name = 'Jane'
user2.hobbies[0] = 'swimming'

user3.name = 'Jack'
user3.hobbies[0] = 'tennis'

console.log(user1)
console.log(user2)
console.log(user3)
