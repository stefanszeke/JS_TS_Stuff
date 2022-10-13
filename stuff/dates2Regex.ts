let octoberDates: string[] = []
const lastDayOfOctober = new Date(2022, 10, 0).getDate()

for(let i = 1; i <= lastDayOfOctober; i++) {
    octoberDates.push(new Date(`10/${i}/2022`).toLocaleDateString())
}

let reserved = [
  {index:0, dates: ['10/1/2022', '10/2/2022']},
  {index:1, dates: ['10/3/2022', '10/4/2022']},
]

let reservedDates: string = 
`i0/d10/11/2022, i0/d10/12/2022,
 i1/d10/13/2022, i1/d10/14/2022, i1/d10/15/2022, i1/d10/16/2022, i1/d10/17/2022, i1/d10/18/2022,
 i2/d10/20/2022, i2/d10/21/2022,
 i3/d10/29/2022, i3/d10/30/2022, i3/d10/31/2022, i3/d11/1/2022, i3/d11/2/2022,
 `

 // filter out the dates that are reserved
function checkIfReservedAndGetIndex(date: string): 'even' | 'odd' | 'not reserved' {
  const dateRegex = new RegExp(`i(?<indx>\\d)/d(${date})`, 'g')

  const execRegex = dateRegex.exec(reservedDates)

  if (execRegex && execRegex.groups?.indx) {
      if(+execRegex.groups.indx % 2 === 0) {
        return "even"
      } else {
        return "odd"
      }
  }
  return "not reserved"
}


octoberDates.forEach(date => {
  if(checkIfReservedAndGetIndex(date) === "even") {
    console.log(`${date} is reserved for even`)
  } else if (checkIfReservedAndGetIndex(date) === "odd") {
    console.log(`${date} is reserved for odd`)
  }
})

// get dates with the same index as the selected date
function getDatesWithSameIndex(dateString: string) {
  let dateRegex = new RegExp(`i(?<indx>\\d)/d(${dateString})`, 'g')

  let date = new Date(dateString)
  let index = dateRegex.exec(reservedDates)?.groups?.indx

  let datesWithSameIndex: string[] = []

  let searchPreviousDay = true

  while(searchPreviousDay) {
    date.setDate(date.getDate() - 1)
    let previousDay = date.toLocaleDateString()
    dateRegex = new RegExp(`i(?<indx>\\d)/d(${previousDay})`, 'g')

    let execRegex = dateRegex.exec(reservedDates)
    if (execRegex && (execRegex.groups?.indx === index)) { datesWithSameIndex.push(previousDay) }
    else { searchPreviousDay = false }
  }

  let searchNextDay = true
  datesWithSameIndex.reverse()
  datesWithSameIndex.push(dateString)
  date = new Date(dateString)

  while(searchNextDay) {
    date.setDate(date.getDate() + 1)
    let nextDay = date.toLocaleDateString()
    dateRegex = new RegExp(`i(?<indx>\\d)/d(${nextDay})`, 'g')

    let execRegex = dateRegex.exec(reservedDates)
    if (execRegex && (execRegex.groups?.indx === index)) { datesWithSameIndex.push(nextDay) } 
    else { searchNextDay = false }
  }

  return datesWithSameIndex.length > 1 ? datesWithSameIndex : []
}

console.log('same dates 1: ',getDatesWithSameIndex("10/30/2022"))

// get dates with the same index as the selected date method 2
function matchDaysWithSameIndex(dateString: string) {
  let dateRegex = new RegExp(`i(?<indx>\\d)/d(${dateString})`, 'g')

  let index = dateRegex.exec(reservedDates)?.groups?.indx

  let indexMatch = new RegExp(`i(?<indx>${index})\/d(\\d+\/\\d+\/\\d+)`, 'g')

  let match = reservedDates.match(indexMatch)

  return match?.map(m => m.split('/d')[1]) || []

}

console.log('same dates 2: ',matchDaysWithSameIndex("10/31/2022"))