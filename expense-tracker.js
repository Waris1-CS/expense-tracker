const expense = [];

function addExpense(name, amount) {
    expense.push({name, amount})
    console.log(`Added expense: ${name} - $${amount}`)
}

function getTotalExpense() {
    const total = expense.reduce((sum, item) => sum + item.amount, 0);
    return `Total Expense: $${total}`
}

addExpense("Airtime", 100);
addExpense("Food", 210);
addExpense("Groceries", 25);
addExpense("Transport", 50);
addExpense("Utilities", 150);

console.log(getTotalExpense())