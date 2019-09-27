let todos = readLocalStorage()

const filters = {
    searchText: '',
    hideCompleted: false
}

//todos still to complete
renderTodos(todos, filters)

document.querySelector('#FilterText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#formTodo').addEventListener('submit', function (e) {
    e.preventDefault()
    saveLocalStoragetodos(todos,e.target.elements.Addtodo.value)
    renderTodos(todos, filters)
    e.target.elements.Addtodo.value = ''
})

document.querySelector('#checkboxtodo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

})
