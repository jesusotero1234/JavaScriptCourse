const account = {
    name: 'Jesus Otero',
    expenses: [],
    addExpenses: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expenses) {

            totalExpenses = totalExpenses + expenses.amount

        })
        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount

        })

        return console.log(`${this.name} has $${totalIncome - totalExpenses}. $${totalIncome} in income and $${totalExpenses} in expenses`)

    },
    income: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }

}
account.addExpenses('renta', 500)
account.addExpenses('telefono', 45)
account.addIncome('salario', 2000)
console.log(account.getAccountSummary())
