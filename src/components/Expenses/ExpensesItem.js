import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpensesItem = (props) => {
    /** This method called array destructuring */
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log("Your title would be : ",title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpensesItem;