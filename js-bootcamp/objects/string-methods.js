let isValidPassword = function(password){
 return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('asdfhjhjhholajhjhj'))
console.log(isValidPassword('123password'))
console.log(isValidPassword('password'))