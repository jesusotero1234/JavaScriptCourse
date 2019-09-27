//Fetch existing todos from localStorage

const readLocalStorage = function(todos){
const textJSON = localStorage.getItem('newtodo')
if (textJSON !== null) {
    return todos = JSON.parse(textJSON)
}else {return []}
}

//Save todos LocalSotrage
const saveLocalStoragetodos = function(todos,e){
todos.push({
    text: e,
    completed: false
})
console.log(e)
let JSONtodo = JSON.stringify(todos)
return localStorage.setItem('newtodo', JSONtodo)

}

//Render aplication based on filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        } else { return true }
    })
    const incompleteTodos = filteredTodos.filter(function (todos) {
        return !todos.completed
    })
    document.querySelector('#division1').innerHTML = ''


    
    document.querySelector('#division1').appendChild(generateSummaryDOM(incompleteTodos))


    filteredTodos.forEach(function (todo) {
        
        document.querySelector('#division1').appendChild(individualNote(todo))

    })
}

//Get the DOM elements for an individual note

const individualNote = function(todo){
    //necesario para poder generar cada nota con todos los alementos que necesitamos
    const p = document.createElement('div')
    const checboxtest = document.createElement('input')
    const indivButton = document.createElement('button')
    // crea un input que se mueve y asi se coloca a un lado 
    const divforNotes  = document.createElement('span')
    
// esto de checboxtest es para crear un checkbox    
checboxtest.setAttribute('type','checkbox')
p.appendChild(checboxtest)
    indivButton.textContent = 'x'
   
    if (todo.text.length > 0) {
        divforNotes.textContent = todo.text
    }
    else { divforNotes.textContent = "No name written" }
    //el orden que se escribe es el orden mostrado
    p.appendChild(divforNotes)
    p.appendChild(indivButton)
    return p
} 

//DOM elements for the list summary
const generateSummaryDOM = function(incompleteTodos){
const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    return summary
}