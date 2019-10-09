const Hangman = function (word, remainGuesses) {

    this.word = word.toLowerCase().split('')
    
    this.letterGuessed = []
    this.remainGuesses = remainGuesses
    this.status= 'playing'
    // console.log(this.letterGuessed)
}
Hangman.prototype.calculatestatus = function (){
    //  debugger
    let finished = true
    this.word.forEach((letter)=>{
if (this.letterGuessed.includes(letter)){

}else {finished = false}

    })
        
    if (this.remainGuesses ===  0) {
    this.status = 'failed'
        } else if (finished){
            this.status = 'finished'
        }
            
         else {this.status = 'playing'}
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
//check if there is a string being used
    if (typeof guess !== 'string') {
        // debugger
        throw Error('character must be a letter')
    }

    if (isUnique) {
        this.letterGuessed.push(guess)

    }

    if (isUnique && isBadGuess) {
     this.remainGuesses --
      
    }
this.calculatestatus()
}
    


