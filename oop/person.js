// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {

constructor(firstName,lastName,age,position,likes){
    super(firstName,lastName,age,likes)
    this.position = position
}
getBio(){
    return `${this.firstName} ${this.lastName} is a ${this.position}`
}
getYearsLeft(){
    return 65 - this.age
}
}

class Student extends Person {
constructor (firstName,lastName,age, likes, grade){
super(firstName,lastName, age, likes)
this.grade = grade
}
updateGrade(grade2){
    return this.grade += grade2
    }
getBio(){
const status = this.grade >= 70 ? 'passing' : 'failing'
return `${this.firstName} is ${status} the class`
}
}

// const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())

// const person2 = new Person('Clancey', 'Turner', 51)
// console.l og(person2.getBio())

const person3= new Student('Jesus', 'Otero', 28, [], 70)
person3.updateGrade(-5)
console.log(person3.getBio())
console.log(person3)