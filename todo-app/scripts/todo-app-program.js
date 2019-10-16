let todos = readLocalStorage()

const filters = {
    searchText: '',
    hideCompleted: false
}

//todos still to complete
renderTodos(todos, filters)

document.querySelector('#FilterText').addEventListener('input', (e)=> {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#formTodo').addEventListener('submit',  (e) => {
    e.preventDefault()
    saveLocalStoragetodos(todos,e.target.elements.Addtodo.value.trim())
    // renderTodos(todos, filters)
    e.target.elements.Addtodo.value = ''
    document.location.assign(`/edit.html#${todos.pop().id}`)
 
})

document.querySelector('#checkboxtodo').addEventListener('change',  (e)=> {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

})
