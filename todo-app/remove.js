let todos = []

//{
//     text: 'Order car food',
//     completed: false
// },
// {
//     text: 'Clean Kitchen',
//     completed: true
// },
// {
//     text: 'Buy food',
//     completed: true
// },
// {
//     text: 'Do work',
//     completed: false
// },
// {
//     text: 'Excercise',
//     completed: true
// }]





const filters = {
    searchText: '',
    hideCompleted: false
}

const textJSON = localStorage.getItem('newtodo')
if (textJSON !== null) {
    todos = JSON.parse(textJSON)
}
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


    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#division1').appendChild(summary)


    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')

        if (todo.text.length > 0) {
            p.textContent = todo.text
        }
        else { p.textContent = "No name written" }

        document.querySelector('#division1').appendChild(p)

    })


}
//todos still to complete
renderTodos(todos, filters)

document.querySelector('#FilterText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#formTodo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.Addtodo.value,
        completed: false
    })
    console.log(e.target.elements.Addtodo.value)
    let JSONtodo = JSON.stringify(todos)
    localStorage.setItem('newtodo', JSONtodo)
    renderTodos(todos, filters)
    e.target.elements.Addtodo.value = ''
})

document.querySelector('#checkboxtodo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

})
