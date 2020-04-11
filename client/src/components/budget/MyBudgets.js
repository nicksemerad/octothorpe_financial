import React from 'react';
import BudgetForm from './BudgetForm';
import { Link } from 'react-router-dom';

export default class MyBudgets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      budgets:[],
      budgetItem:{
        text:'', key:''
      }
    }
  }
 render(){
   let style = {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2.3rem'
    }
    let container = {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '2rem',
      justifyContent: 'center'
    }
    let addBudget = {
      marginRight: '0.5rem',
      marginTop: '0.6rem'
    }
    let header = 'Your Budgets'
  return (
    <div>
      <div style={style}>
        <span>{header}</span>
      </div>
      <div style={container}>
        <p style={addBudget}>
          Create new budget 
        </p>
        <Link to={{ pathname: `/newBudget`}} >
            <button>
                New Budget
            </button>
        </Link>
      </div>
      <p>{this.state.budgets.text}</p>
      <addBudget 
        items={this.state.budget} 
        deleteBudget={this.deleteBudget} 
        updateBudget={this.updateBudget}
      />
    </div>
  );
 }
}