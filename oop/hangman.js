const Hangman = function (word = [], guess) {

    this.word = word.toLowerCase().split('')
    this.guess = guess
    this.letterGuessed = ['r', 'e']

}


Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letters) => {
        if (this.letterGuessed.includes(letters) || letters === ' ') {
            puzzle += letters
        } else { puzzle += '*' }
    })

    return puzzle
}


const test1 = new Hangman('Perro', 5)
console.log(test1.getPuzzle())
const test2 = new Hangman('pelota', 7)
console.log(test2)