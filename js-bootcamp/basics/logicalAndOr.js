let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
console.log('Vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan){
console.log('some vegan options')
} else {console.log("Anything on the menue")}