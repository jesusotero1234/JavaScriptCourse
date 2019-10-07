const person = [{
name: 'Juan',
age: 20,
},{
name: 'Pedro',
age: 22,
}, {
name: 'Nani',
age: 28
}]

const equalTo22 = person.filter((person)=> person.age === 22)

console.log(equalTo22)