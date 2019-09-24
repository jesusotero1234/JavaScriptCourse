//let Celsius = (Fahrenheit-32)*(5/9)
let conversion= function(num) {
let Celsius = (num-32)*(5/9)
return Celsius
}
console.log(conversion(32))
console.log(conversion(68))