import React, { Component } from 'react';
import axios from 'axios'; 

const IncomeContext = React.createContext();
export const IncomeConsumer = IncomeContext.Consumer;

class IncomeProvider extends Component { 
  state = { incomes: [], income: {} }

  fetchIncomes = (budgetId) => {
    axios.get(`/api/budgets/${budgetId}/incomes`)
    .then( res => {
        this.setState({ incomes: res.data} )
    })
    .catch( err => {
        console.log(err)
    })
  }

  addIncome = ( budgetId, history ) => {
    axios.get(`api/budget/${budgetId}/incomes`) 
    .then( res => {
      const { incomes } = this.state;
      this.setState([...incomes, res.data ])
      history.push("/") 
    })
    .catch( err => {
      console.log(err)
    })

  }

  updateIncome = ( budgetId, incomeId, history ) => {
    axios.get(`api/budget/${budgetId}/incomes/${incomeId}`) 
    .then( res => {
      const { incomes } = this.state.incomes.map( i => {
          if(i.id === incomeId )
              return res.data;
          return i;
      });
      this.setState({ incomes });
      history.push('/')
  })
    .catch(err => {
      console.log(err)
    })


  }

  deleteIncome = ( budgetId, incomeId, history ) => {
    axios.get(`api/budget/${budgetId}/incomes/${incomeId}`)
    .then( res => {
      this.setState({ incomes: 
        this.state.incomes.filter(i => i.id !== incomeId)})
      history.push("/") 
    })
    .catch( err => {
      console.log(err)
    })
  }

  render () {
    return( 
      <IncomeContext.Provider value={{
        ...this.state,
        fetchIncomes: this.fetchIncomes,
        addIncome: this.addIncome,
        updateIncome: this.updateIncome,
        deleteIncome: this.deleteIncome,
      }}>
        { this.props.children }
      </IncomeContext.Provider>
    )
  }
}

export default IncomeProvider; 