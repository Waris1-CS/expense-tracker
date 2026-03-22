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

const BUDGET_LIMIT = 500;

function checkBudget() {
    const total = getTotalExpense()
    if (total > BUDGET_LIMIT) {
        console.log(`⚠️⚠️ Over budget by $${total - BUDGET_LIMIT}!`)
    }
    else {
        console.log(`✅ Within budget. $${BUDGET_LIMIT - total} remaining`)
    }
}

checkBudget()