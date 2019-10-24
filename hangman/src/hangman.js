class Hangman {
    constructor(word,remainGuesses) {
        this.word= word.toLowerCase().split('')
        this.letterGuessed = []
        this.remainGuesses = remainGuesses
        this.status = 'playing'
    }
    calculatestatus() {

        let finished = true
        this.word.forEach((letter) => {
            if (this.letterGuessed.includes(letter) || letter === ' ' ){

            } else { finished = false }

        })

        if (this.remainGuesses <= 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }

        else { this.status = 'playing' }
    }
   get puzzle() {
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
    
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.letterGuessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        //check if there is a string being used
        if (typeof guess !== 'string') {
            // debugger
            throw Error('character must be a letter')
        }

        if (isUnique) {
            this.letterGuessed.push(guess)

        }

        if (isUnique && isBadGuess) {
            this.remainGuesses--

        }
        this.calculatestatus()
    }
   get  statusMessage() {

        if (this.status === 'playing') { return `Guesses left: ${this.remainGuesses}` }
        else if (this.status === 'failed') { return `Nice try! the word was "${this.word.join('')}"` }
        else { return 'Great work! You guessed the word' }

    }
}

export {Hangman as default }
