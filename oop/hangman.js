const Hangman = function (word, guess){
this.word = word
this.guess = guess
}

const test1 = new Hangman ('juego', 5)
console.log(test1)
const test2 = new Hangman ('pelota', 7)
console.log(test2)