// total cost calculation function

function expenseCalculation(foodExpense, rentExpense, clotheExpense) {
    const food = document.getElementById(foodExpense);
    const foodCost = parseFloat(food.value);

    const rent = document.getElementById(rentExpense);
    const rentCost = parseFloat(rent.value);

    const clothes = document.getElementById(clotheExpense);
    const clothesCost = parseFloat(clothes.value);

    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        return foodCost + rentCost + clothesCost;
    }
    else {
        return -1;
    }
}

////////////// Expense & new balance value Setting//////

document.getElementById('Calculation').addEventListener('click', function () {
    const income = document.getElementById('Total-Earning');
    const totalIncome = parseFloat(income.value);
    let totalCost = expenseCalculation('Cost-of-food', 'Cost-of-rent', 'Cost-of-cloth');
    if (!isNaN(totalIncome) && !isNaN(totalCost)) {
        if (totalIncome > 0 && totalCost != -1) {
            if (totalIncome >= totalCost) {
                const remainingBalance = totalIncome - totalCost;
                const expenses = document.getElementById('expenses');
                expenses.innerText = totalCost;
                const balance = document.getElementById('balance');
                balance.innerText = remainingBalance;
            }
            else {
                alert("Think");
            }

        }
        else {
            alert("Opps error");
        }

    }
    else {
        alert("String");
    }

})

/////////////  Calculation////////////////

document.getElementById('Saving').addEventListener('click', function () {
    let totalCost = expenseCalculation('Cost-of-food', 'Cost-of-rent', 'Cost-of-cloth');
    const income = document.getElementById('Total-Earning');
    const totalIncome = parseFloat(income.value);
    const remainingBalance = totalIncome - totalCost;
    const savingsPercent = document.getElementById('Savings-value');
    const saved = parseFloat(savingsPercent.value);

    if (!isNaN(saved) && saved > 0) {
        const finalSaving = (totalIncome * saved) / 100;



        if (remainingBalance >= finalSaving) {
            const afterSaving = remainingBalance - finalSaving;
            const savingsText = document.getElementById('after-savings');
            savingsText.innerText = afterSaving;
            let moneySaved = document.getElementById('Saved');
            moneySaved.innerText = finalSaving;
        }
        else {
            alert("opps you have not enough balance.");
        }

    }
    else {
        alert("Oppps error or show string");
    }

})