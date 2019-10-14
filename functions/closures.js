const createTipper = (tipp = 0.15) =>{
 return (billAmount) =>{
 return billAmount * tipp
 }
} 

const tip15  = createTipper()
console.log(createBill(200))