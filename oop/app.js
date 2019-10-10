

const test1 = new Hangman('Cat', 2)

let RemainguessesEL = document.querySelector('#remainGuesses')


const puzzleEL = document.querySelector('#showWord')
// remainGuesses.textContent = test1.getPuzzle()
puzzleEL.textContent = test1.getPuzzle()
RemainguessesEL.textContent= test1.statusBack()
// test1.status === 'playing'?RemainguessesEL.textContent = test1.remainGuesses :RemainguessesEL.textContent = ''
console.log(test1.status)

document.querySelector('#guessInput').addEventListener('keypress',function(e){
const guess = String.fromCharCode(e.charCode)
test1.makeGuess(guess)
puzzleEL.textContent = test1.getPuzzle()
// test1.status === 'playing'?RemainguessesEL.textContent = test1.remainGuesses :RemainguessesEL.textContent = ''
RemainguessesEL.textContent= test1.statusBack()
console.log(test1.status)
})
