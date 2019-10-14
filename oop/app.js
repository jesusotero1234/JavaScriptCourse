

const test1 = new Hangman('Cat crazy', 2)

let RemainguessesEL = document.querySelector('#remainGuesses')


const puzzleEL = document.querySelector('#showWord')
// remainGuesses.textContent = test1.getPuzzle()
puzzleEL.textContent = test1.puzzle
RemainguessesEL.textContent = test1.statusMessage
// test1.status === 'playing'?RemainguessesEL.textContent = test1.remainGuesses :RemainguessesEL.textContent = ''
console.log(test1.status)

document.querySelector('#guessInput').addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    test1.makeGuess(guess)
    puzzleEL.textContent = test1.puzzle
    // test1.status === 'playing'?RemainguessesEL.textContent = test1.remainGuesses :RemainguessesEL.textContent = ''
    RemainguessesEL.textContent = test1.statusMessage
    console.log(test1.status)
})




const getCountryDetails = (word, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.status === 200 && e.target.readyState === 4) {
            const data = JSON.parse(e.target.responseText)
             const country = data.find((country) => country.alpha2Code === word)
            callback(undefined,country)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place',undefined)
        }
    })

request.open('GET', 'http://restcountries.eu/rest/v2/all')
request.send()
}

const countryCode = 'MX'

getCountryDetails(countryCode, (error, country) =>{
if (error){
    console.log(`Error: ${error}`)
}
else{console.log(country)}

})