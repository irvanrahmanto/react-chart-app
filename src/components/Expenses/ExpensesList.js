import React from "react";
import ExpensesItem from "./ExpensesItem";
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return(
        <ul className="expenses-list">
            {props.items.map((expenseData) => (
                <ExpensesItem 
                    key={expenseData.id}
                    title={expenseData.title}
                    amount={expenseData.amount}
                    date={expenseData.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;