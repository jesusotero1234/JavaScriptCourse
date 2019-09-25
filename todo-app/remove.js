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
    searchContent: ''
}

const FilterToDos = function (todos, filters) {
    const filterALL = todos.filter(function (todo) {
        return todo.text.ToLowercase().includes(filters.searchContent.ToLowercase())

    }
    )}

    const incompleteTodos = filterAll.filter(function (todos) {
        return !todos.completed
    })

    document.querySelector('#division1').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#division1').appendChild(summary)


filterAll.forEach(function (todos) {
    const p1 = document.createElement('p')
    p1.textContent = todos.text
    document.querySelector('#division1').appendChild(p1)

})
//todos still to complete
FilterToDos(todos, filters)





document.querySelector('#FilterText').addEventListener('input', function (e) {
    filters.searchContent = e.target.value
    FilterToDos(todos, filters)
})


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



//First excercise remove if contains a word 
// const ps = document.querySelectorAll('p')
// ps.forEach(function(p) {
//     if (p.textContent.includes('p1')) { debugger
//         p.remove()}

// });
