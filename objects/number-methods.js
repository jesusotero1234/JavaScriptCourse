let makeGuess = function (valor){
let min= 1
 let max= 5
 let randomnumber = Math.floor(Math.random()* (max-min + 1 )) + min
    return valor === randomnumber

}
console.log(makeGuess(3))