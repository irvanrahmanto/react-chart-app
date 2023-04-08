import React from 'react'
import './ExpenseItem.css'

function ExpensesItem() {
    const expenseDate = new Date(2023, 2, 28);

    return (
        <div className='expense-item'>
            <div>March 27th 2022</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>IDR 100.000</div>
            </div>
        </div>
    );
}

export default ExpensesItem;
