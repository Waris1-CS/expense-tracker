const expense = [];

function addExpense(name, amount) {
    expense.push({name, amount})
    console.log(`Added expense: ${name} - $${amount}`)
}

addExpense("Airtime", 100);
addExpense("Food", 210);
addExpense("Groceries", 25);
addExpense("Transport", 50);

const getTotalExpense = () => {
    return expense.reduce((sum , item) => sum + item.amount, 0)
}

console.log(`The total expense is: $${getTotalExpense()}`)