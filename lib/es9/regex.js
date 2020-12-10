const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexDate.exec("2012-10-09")
const year = match[0]
const month = match[1]
const day = match[2]

console.log(year, month, day)