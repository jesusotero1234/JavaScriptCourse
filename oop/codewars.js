
//programa que chequea si dentro de la misma palabra hay silabas o consonantes repetidas
let isIsogram = function (word) {
  //...
  let test1 = word.toLowerCase().split('')
  let length1 = word.length
    return test1.some( function(word) {
        return test1.indexOf(word) !== test1.lastIndexOf(word)
})

}



console.log(isIsogram('prueba s'))