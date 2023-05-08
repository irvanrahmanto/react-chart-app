import React from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const saveExpenseDataHandeler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log("Data new : ", expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
        </div>
    );
}

export default NewExpense;