export {}

let url:string = 'https://blog.stackoverflow.com/questions/6142922/replace-a-regex-capture-group-with-uppercase-in-javascript'
let url2:string = 'test.com/test/'


// get the domain name from the url
const getDomain = (url:string) => url.replace(/.*\/\//,"").replace(/\/.+/,"").replace(/\w+\./,"")
let domain:string = url.replace(/.*\/\//,"").replace(/\/.+/,"").replace(/\w+\./,"")

let step1:string = url.replace(/.*\/\//,"")
let step2:string = step1.replace(/\/.+/,"")
let step3:string = step2.replace(/\w+\./,"")

console.log(step1)
console.log(step2)
console.log(step3)

console.log(domain)

console.log(getDomain(url2))

/////////////////////////

let testString:string = 'Hello-World Apple-Banana Car-Plane'
let testString2:string = testString.replace(/(\w+)(-)(\w+)/g, (match, g1, g2, g3) => {
    return `${g3}/${g1}`
})

console.log(testString2)

let testString3:string = testString.replace(/(\w+)(-)(\w+)/g,'$1' + '/' + '$3')
console.log(testString3)

// put variable in the regex expression
let fruits:string = `1.Apple 2.Banana 3.Cherry 4.Mango 5.Pineapple 6.Kiwi 7.Pear 8.Plum 9.Orange 10.Cherry` 
let chosenFruits:string[] = ['banana', 'kiwi', 'pineapple', 'orange']

const selectFruits = (fruits:string, chosenFruits:string[]) => {

  let newFruits:string = fruits

  for(let fruit of chosenFruits) {
    let myRegex = new RegExp("(\\d+)(\.)(" + fruit + ")", 'gi')
    newFruits = newFruits.replace(myRegex, ' ->' + '[$1-$3-$1]' + '<- ' )
  }

  return newFruits
}

console.log(selectFruits(fruits, chosenFruits))








