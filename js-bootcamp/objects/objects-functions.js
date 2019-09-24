
let Fahrenheite = {
    temperature: 74
}


let Allconversion = function (temp){
return{
Fahrenheits: temp,
Celsius: (temp-32)*(5/9),
Kelvin: (temp-32)*(5/9) + 273.15
}
}
Allconversion2= Allconversion(Fahrenheite.temperature)
console.log(Allconversion2)