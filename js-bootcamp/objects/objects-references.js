let MyAccount = {
name: 'Jesus Otero',
expenses: 0,
income: 0
}
let addExpenses = function (account, amount){
    account.expenses= account.expenses + amount
    }
// addIncome
let addIncome = function (account, amount){
account.income= account.income + amount
}

let ResetAccount = function (account){
     account.expenses = 0
     account.income = 0
}
addIncome(MyAccount,2000)
addExpenses(MyAccount,100)
addExpenses(MyAccount,100)
addExpenses(MyAccount,100)

let getAccountSummary = `Jesus has ${MyAccount.income - MyAccount.expenses} available,  ${MyAccount.expenses}$ in expenses and ${MyAccount.income}$ income`
console.log(getAccountSummary)
console.log(MyAccount)
// Reset account
ResetAccount(MyAccount)
console.log(MyAccount)