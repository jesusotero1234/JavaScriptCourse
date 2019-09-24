let tip = function(total, tip2= 0.2){
return 'your tip is: ' + total * tip2
}
console.log(tip(100, 0.3))

// segundo ejercicio con dinamics strings

let total2 = 40
let tip3= .25

let tip2 = function(total, tip2= 0.2){
    return 'your tip is: ' + total * tip2
    }
    console.log(tip2(`${total2}`, `${tip3}`))