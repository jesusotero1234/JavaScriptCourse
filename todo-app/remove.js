const todos = [{
    text: 'Order car food',
    completed: false
},
{
    text: 'Clean Kitchen',
    completed: true
},
{
    text: 'Buy food',
    completed: true
},
{
    text: 'Do work',
    completed: false
},
{
    text: 'Excercise',
    completed: true
}]

const filters = {
    searchText: ''
}

// const FilterToDos = function (todos, filters) {
//     const filterALL = todos.filter(function (todos) {
//         return todos.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     }
//     )}
    const renderTodos = function (todos, filters) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
    p.textContent = todo.text
    document.querySelector('#division1').appendChild(p)

})}
//todos still to complete
renderTodos(todos, filters)

// todos.forEach(function (todos) {
//     const p = document.createElement('p')
//     p.textContent = todos.text
//     document.querySelector('#division1').appendChild(p)

// })

document.querySelector('#AddTodo').addEventListener('click', function (e) {
    console.log('buen trabajo perrita')
    console.log(e)
})

document.querySelector('#UserTodo').addEventListener('input', function (e) {
    console.log(e.target.value)

})

document.querySelector('#FilterText').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
