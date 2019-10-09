const Hangman = function (word, remainGuesses) {

    this.word = word.toLowerCase().split('')
    
    this.letterGuessed = []
    this.remainGuesses = remainGuesses
    // console.log(this.letterGuessed)
}


Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letters) => {


        if (this.letterGuessed.includes(letters) || letters === ' ') {
            puzzle += letters
        } else {
            puzzle += '*'


        }
    })
    return puzzle
}


Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.letterGuessed.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    // if (typeof guess !== 'string') {
    //     // debugger
    //     throw Error('character must be a letter')
    // }

    if (isUnique) {
        this.letterGuessed.push(guess)

    }

    if (isUnique && isBadGuess) {
     this.remainGuesses --
      
    }
    



}