import React, {useState} from 'react'
import ExpensesItem from './ExpensesItem'
import Card from '../UI/Card'
import './NewExpenseItem.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const NewExpenseItem = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    /** Filtering data based on year & print the array using map */

    const filteredChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expenseData) => {
        return expenseData.date.getFullYear().toString() === filteredYear
    });
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filteredChangeHandler} 
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default NewExpenseItem;
