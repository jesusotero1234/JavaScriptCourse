//Best practice to do this formula
function accum2(s) {
return s.split('').map((c,i)=>(c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

//Function that creates a new string and acumulate 
function accum(s) {
  const divideString = s.toLowerCase().split('')
  let length1 = divideString.length
  let accum = 0
  let arrayTest = []
  divideString.forEach((letter) => {
    for (let i = 0; i <= divideString.length; i++) {
      console.log(arrayTest)
      
        if (letter === divideString[i]) {
         
          let test = letter.repeat(i + 1)
          // chequea si ya fue incluido en el array anterior
          if (!arrayTest.includes(letter.toUpperCase())) {
          arrayTest.push(test.replace(letter, letter.toUpperCase()))
         console.log(!arrayTest.includes(letter.toUpperCase()))
          return false
        }
      } else {
        for ( let j = accum+1; j <= divideString.length; j++) {
            if (letter === divideString[j]) {
              accum += 1
              let test = letter.repeat(j + 1)
              arrayTest.push(test.replace(letter, letter.toUpperCase()))
             
              return false
            }}}}})

  return arrayTest.join('-')
}

console.log(accum("ZpglnRxqenU"))
console.log(accum2("ZpglnRxqenU"))
console.log('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu')
//Output should be -> "A-Bb-Ccc-Dddd"


















// //take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
// //the longest possible, containing distinct letters.

// const longest = (s1, s2) => {
//   let test3 = s1 + s2
//   let test4 = test3.toLowerCase().split('')
// // new Set sirve para dejar solo elementos unicos (genera un objeto)
//   const uniqueSet = new Set(test3)
//   // [... Array] sirve para generar una array
// const backToArray = [... uniqueSet]
// backToArray.sort(function (a, b){
// if (a<b) {return -1}
// else if (a>b){return 1}
// else{return 0}
// })
// //otra opcion para filtrar
// let test = test4.filter((item,index)=> test4.indexOf(item)=== index)
// let final = backToArray.join('')
// return final

// }
// let a = "xyaabbbccccdefww"
// let b = "xxxxyyyyabklmopq"
// console.log(longest(a, b))









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