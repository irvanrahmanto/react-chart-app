import React, {useState} from 'react'
import ExpensesItem from './ExpensesItem'
import Card from '../UI/Card'
import './NewExpenseItem.css'
import ExpensesFilter from './ExpensesFilter'

const NewExpenseItem = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filteredChangeHanlder = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filteredChangeHanlder} 
                />

                {props.items.map((expense) => (
                    <ExpensesItem 
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
                ))}
            </Card>
        </div>
    )
}

export default NewExpenseItem;
