
import Hangman from './hangman'
import getPuzzle, {getCurrentCountry} from './request'
let RemainguessesEL = document.querySelector('#remainGuesses')
const puzzleEL = document.querySelector('#showWord')
let test1
document.querySelector('#guessInput').addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    test1.makeGuess(guess)
    render()
    console.log(test1.status)
})
const render = () => {
    puzzleEL.innerHTML = ''
    RemainguessesEL.textContent = test1.statusMessage

test1.puzzle.split().forEach((letter)=>{
       const letterEL = document.createElement('span')
       letterEL.textContent = letter
       puzzleEL.appendChild(letterEL)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    test1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()


getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})