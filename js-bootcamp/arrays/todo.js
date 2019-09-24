const todo = ['buscar a nani','ir a comer', 'bañarme', 'tirar rico', 'dormir']

//delete 3rd Item
todo.splice(2,1)
// add a new item into the end
todo.push('comprar un piso')
//Remove the first item from the list
todo.shift()
console.log(`you have to ${todo.length} and todo`)

todo.forEach(function(item, index){
console.log(`${index+1}. ${item}`)
})

for (let count = 0; count < todo.length; count++){
console.log(`${count+1}. ${todo[count]}`)
}


