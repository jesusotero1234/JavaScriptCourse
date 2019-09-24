const todo2 = [{
    text: 'estudiar JavaScript',
    status: true,
},
{text: 'buscar a Nani',
status: false,
},
{text: 'Comer como cerdo',
status: false,
}]
//create a function to remove a todo by text value
// const deleteTodo2 = function (todo2,todo2Title){
// const index = todo2.findIndex(function(todo2){
// return todo2.text.toLowerCase() === todo2Title.toLowerCase()

// })
// console.log(index)
// if (index > -1 ){todo2.splice(index, 1)
// }}

// const check = deleteTodo2(todo2,'estudiar javascript')

// console.log(todo2)

const getThingsToDo = function (todo2){
return filter1= todo2.filter(function (todo2, index){
const searchStatus = todo2.status
return searchStatus === false
 })
}
console.log(getThingsToDo(todo2))

//Sort example

const SortTodo = function(todo2){
todo2.sort(function(a, b){
if(a.status === true && b.status === false ) { return -1
} else if (a.status === false && b.status === true ){
    return 1
} else { return 0}
    
})    

}

SortTodo(todo2)
console.log(todo2)