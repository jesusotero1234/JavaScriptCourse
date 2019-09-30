//Fetch existing todos from localStorage

const readLocalStorage = function (todos) {
    const textJSON = localStorage.getItem('newtodo')
    if (textJSON !== null) {
        return todos = JSON.parse(textJSON)
    } else { return [] }
}

//Save todos LocalSotrage
const saveLocalStoragetodos = function (todos, e) {
    todos.push({
        id: uuidv4(),
        text: e,
        completed: false
    })
    console.log(e)
    let JSONtodo = JSON.stringify(todos)
    return localStorage.setItem('newtodo', JSONtodo)

}
//Save todos localStorage
const saveTodos = function (todos) {
    localStorage.setItem('newtodo', JSON.stringify(todos))
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

//remove Item from the list when clicked

const removeItem = function (id) {
    const todoIndex = todos.findIndex(function (todos) {
        return todos.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//toggle the boolean if the checkbox has been marked

const toggleItem = function (id) {
    let todoIndex = todos.findIndex(function (todos) {
        return todos.id === id
    })
    if (todoIndex > -1) {
        if (todos[todoIndex].completed) {todos[todoIndex].completed = false}
        else if (!todos[todoIndex].completed){todos[todoIndex].completed = true}
        console.log(todos[todoIndex].completed)
    }
 
}
//Get the DOM elements for an individual note

const individualNote = function (todo) {
    //necesario para poder generar cada nota con todos los alementos que necesitamos
    const p = document.createElement('div')
    const checkboxtest = document.createElement('input')
    const indivButton = document.createElement('button')
    // Utilizar un anchor para cambiar de website
    const divforNotes = document.createElement('a')

const prueba = document.querySelector('#prueba')
    // esto de checboxtest es para crear un checkbox    
    checkboxtest.setAttribute('type', 'checkbox')

    //si el todo esta completado que se marque la casilla
    
    //cambiar a true cuando se le da click al checkbox
    checkboxtest.checked = todo.completed
    p.appendChild(checkboxtest)


    indivButton.textContent = 'x'
    indivButton.addEventListener('click', function () {
        if (!checkboxtest.checked) {
            removeItem(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        }
    })


    if (todo.text.length > 0) {
        divforNotes.textContent = todo.text
    }
    else { divforNotes.textContent = "No name written" }
    divforNotes.setAttribute('href', `/edit.html#${todo.id}`)
    //el orden que se escribe es el orden mostrado
    checkboxtest.addEventListener('change', function () {
        toggleItem(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    p.appendChild(divforNotes)
    p.appendChild(indivButton)


    return p
}

//DOM elements for the list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    return summary
}

