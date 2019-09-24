

let testScore= function  (studentsScore){

if ( studentsScore >= 90 && studentsScore <=100){

    PosibleScore = 'your score is A'
} else if ( studentsScore >=  80 && studentsScore <=89){

    PosibleScore = 'your score is B'
} 
else if ( studentsScore >=  79 && studentsScore <=70){

    PosibleScore = 'your score is C'
} 
else if ( studentsScore >=  60 && studentsScore <=69){

    PosibleScore = 'your score is D'
} else{

    PosibleScore = 'your score is E'
} 
    return `your grade is ${PosibleScore} (${studentsScore}%)`
}

console.log(testScore(85))