import React, { useState } from 'react'
import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandeler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log("Data new : ", expenseData);
        setIsEditing(false);
    };

    const startEditHandler = () => {
        setIsEditing(true);
    };

    const stopEditHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} editStatus={stopEditHandler} />
            )} 
        </div>
    );
}

export default NewExpense;