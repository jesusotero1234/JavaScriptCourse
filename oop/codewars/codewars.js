// function list(names) {
//   if (names.length === 1) {return console.log(names.pop().name)}
//   else if (names.length === 0){return console.log([])}
//   else{
//   // const lastEl = names.pop().name
  
//   const test = []
//   names.forEach((name) => {
//      test.push(name.name)
//   })
// const lastEl = test.pop()
// const  newArray = test.join(', ')
//   return console.log(`${newArray} & ${lastEl}`)
// }
// }


// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])
// list([{name: 'Bart'},{name: 'Lisa'}])
// list([{name: 'Bart'}])

// list([])
// function list2(names) {
//   if (names.length === 1) {return console.log(names.pop().name)}
//   else if (names.length === 0){return console.log([])}
//   else{
//   const lastEl = names.pop().name
//   newArray = names
//   const test = []
//   newArray.forEach((name) => {
//      test.push(name.name)
//   })
//   return console.log(`${test.join(', ')} & ${lastEl}`)
// }
// }

//   const test = []
//   names.forEach((name) => {
//      test.push(name.name)
//   })
function findOdd(A) {
  const Arrayloca = []
  debugger
  A.forEach((odd) =>{
    // console.log(!Number.isInteger(Math.abs(odd/2)))
    if(Number.isInteger(Math.abs(odd/2)))
    {return  Arrayloca.push(Math.abs(odd)) }
    else{ return 0}})
  return new Set (Arrayloca)
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))