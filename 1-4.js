const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}
createTransaction({ type: 'credit', value: 50.5 })
createTransaction({ type: 'credit', value: 100 })
createTransaction({ type: 'debit', value: 40 })
createTransaction({ type: 'debit', value: 70 })


console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log( getAverageTransactionValue() )
console.log(getTransactionsCount())

let Credit = 0
let Debit = 0
for (let i = 0; i < user.transactions.length; i++) {
    
    if (user.transactions[i].type == 'credit') {
        Credit = Credit + user.transactions[i].value
    }
    else {
        Debit = Debit + user.transactions[i].value
    }

}
user.balance = Credit - Debit
console.log(user.balance)
function createTransaction(transaction) {

    user.transactions.push(transaction)

}
function getHigherTransactionByType(transaction) {
    let Higher = 0;
    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == transaction) {
            if (Higher < user.transactions[i].value) {
                Higher = user.transactions[i].value
            }
            else {
                Higher = Higher

            }
        }

    }
    return Higher
}
function getAverageTransactionValue() {
    let sum = 0
    let average = 0
    for (let i = 0; i < user.transactions.length; i++) {
        sum = sum + user.transactions[i].value
        average = sum / i


    }
    return average
}
function getTransactionsCount() {
    let count = 0
    for (let i = 0; i < user.transactions.length; i++) {
        count = i + 1
    }
    return count

}







