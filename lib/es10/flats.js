const arry = [ 1, 2, 4 , [1, 2 ,3, [1,2,3]]]
console.log(arry.flat(1))
console.log(arry.flat(2))
console.log(arry.flat(3))

const newArr = [ 1, ,2 ,3]
let arr = newArr.flatMap( (e) => {
  return [e, e ** 2]
})

console.log(arr)