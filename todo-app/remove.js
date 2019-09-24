const todos=[{
text: 'Order car food',
completed: false},
{text: 'Clean Kitchen',
completed: true},
{text: 'Buy food',
completed: true},
{text: 'Do work',
completed: false},
{text: 'Excercise',
completed: true
}]

// todos still to complete
const incompleteTodos = todos.filter(function(todos){
    return !todos.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todos){
const p = document.createElement('p')
p.textContent = todos.text
document.querySelector('body').appendChild(p)

})

//First excercise remove if contains a word 
// const ps = document.querySelectorAll('p')
// ps.forEach(function(p) {
//     if (p.textContent.includes('p1')) { debugger
//         p.remove()}
   
// });
