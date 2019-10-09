//take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
//the longest possible, containing distinct letters.

const longest = (s1, s2) => {
  let test3 = s1 + s2
  let test4 = test3.toLowerCase().split('')
// new Set sirve para dejar solo elementos unicos (genera un objeto)
  const uniqueSet = new Set(test3)
  // [... Array] sirve para generar una array
const backToArray = [... uniqueSet]
backToArray.sort(function (a, b){
if (a<b) {return -1}
else if (a>b){return 1}
else{return 0}
})
//otra opcion para filtrar
let test = test4.filter((item,index)=> test4.indexOf(item)=== index)
let final = backToArray.join('')
return final

}
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
console.log(longest(a, b))









// //programa que chequea si dentro de la misma palabra hay silabas o consonantes repetidas
// let isIsogram = function (word) {
//   //...
//   let test1 = word.toLowerCase().split('')
//   let length1 = word.length
//     return test1.some( function(word) {
//         return test1.indexOf(word) !== test1.lastIndexOf(word)
// })

// }
// console.log(isIsogram('prueba s'))