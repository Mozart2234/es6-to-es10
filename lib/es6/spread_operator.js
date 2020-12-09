let hero = {
  name: 'Some hero',
  type: 'magic',
  level: 25
}

let { name, type, level } = hero

console.log(name, type, level)

let groupA = [1, 3, 5]
let groupB = [1, 6 ,7]

let unionGroup = [8, ...groupA, ...groupB]
console.table(unionGroup)
