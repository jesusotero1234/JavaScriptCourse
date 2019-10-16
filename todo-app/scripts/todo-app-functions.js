//Fetch existing todos from localStorage

const readLocalStorage = (todos) => {
    const textJSON = localStorage.getItem('newtodo')

    try {
        return textJSON ? JSON.parse(textJSON) : []
    }
    catch (e) {
        return []
    }

}

//Save todos LocalSotrage
const saveLocalStoragetodos = (todos, e) => {
    if (e.length > 0) {
        todos.push({
            id: uuidv4(),
            text: e,
            completed: false
        })
        let JSONtodo = JSON.stringify(todos)
        return localStorage.setItem('newtodo', JSONtodo)
    }
    else { throw Error('No blank notes allowed') }

}
//Save todos localStorage
const saveTodos = (todos) => {
    localStorage.setItem('newtodo', JSON.stringify(todos))
}

//Render aplication based on filters
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    )
    filteredTodos = filteredTodos.filter((todo) => {
        if (filters.hideCompleted) {
            return !todo.completed
        } else { return true }
    })
    const incompleteTodos = filteredTodos.filter((todos) => !todos.completed)
    document.querySelector('#division1').innerHTML = ''



    document.querySelector('#division1').appendChild(generateSummaryDOM(incompleteTodos))

if(filteredTodos.length > 0 ){
    filteredTodos.forEach((todo) => document.querySelector('#division1').appendChild(individualNote(todo)))
}
else{ const messageEl = document.createElement('p')
messageEl.classList.add('empty-message')
messageEl.textContent = 'No to-dos to show'
document.querySelector('#division1').appendChild(messageEl)
}
}

//remove Item from the list when clicked

const removeItem = (id) => {
    const todoIndex = todos.findIndex((todos) => todos.id === id)


    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//toggle the boolean if the checkbox has been marked

const toggleItem = function (id) {
    let todoIndex = todos.findIndex((todos) => todos.id === id)


    if (todoIndex > -1) {
        if (todos[todoIndex].completed) { todos[todoIndex].completed = false }
        else if (!todos[todoIndex].completed) { todos[todoIndex].completed = true }
        console.log(todos[todoIndex].completed)
    }

}
//Get the DOM elements for an individual note

const individualNote = (todo) => {
    //necesario para poder generar cada nota con todos los alementos que necesitamos
    const todoEL = document.createElement('label')
    const containerEL = document.createElement('div')
    const checkboxtest = document.createElement('input')
    const indivButton = document.createElement('button')
    // Utilizar un anchor para cambiar de website
    const divforNotes = document.createElement('span')
    // esto de checboxtest es para crear un checkbox    
    checkboxtest.setAttribute('type', 'checkbox')

    //si el todo esta completado que se marque la casilla

    //cambiar a true cuando se le da click al checkbox
    checkboxtest.checked = todo.completed
    containerEL.appendChild(checkboxtest)
    checkboxtest.addEventListener('change', function () {
        toggleItem(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    if (todo.text.length > 0) {
        divforNotes.textContent = todo.text
        containerEL.appendChild(divforNotes)
    }
    else { divforNotes.textContent = "No name written" }

    divforNotes.setAttribute('href', `/edit.html#${todo.id}`)
   
    todoEL.classList.add('list-item')
    containerEL.classList.add('list--item__container')
    todoEL.appendChild(containerEL)

    indivButton.textContent = 'remove'
    indivButton.classList.add('button', 'button--text')
    todoEL.appendChild(indivButton)
    indivButton.addEventListener('click', () => {
        if (!checkboxtest.checked) {
            removeItem(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        }
    })
    return todoEL
}

//DOM elements for the list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-little')
    const plural = incompleteTodos.length === 1? '' : 's'
    summary.textContent = `you have ${incompleteTodos.length} todo${plural} left`
    return summary
}

