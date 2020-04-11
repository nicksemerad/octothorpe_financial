import React, { Component } from 'react';
import axios from 'axios';

const BudgetContext = React.createContext()
export const BudgetConsumer = BudgetContext.Consumer;

class BudgetProvider extends Component {
  state = { budgets: [], budget: {} }

  componentDidMount() {
    axios.get('/api/budgets')
    .then( res => {
      this.setState({ budgets: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  getBudget = (id) => {
    axios.get(`/api/budgets/${id}`)
    .then( res => {
      this.setState({ budget: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  addBudget = (budget) => {
    axios.post('/api/budgets', budget)
    .then( res => {
      const { budgets } = this.state;
      this.setState({ budgets: [...budgets, res.data]})
      window.location.href = `/budgets/${res.data.id}`
    })
    .catch( err => {
      console.log(err);
    })
  }

  updateBudget = (id, budget) => {
    axios.put(`/api/budgets/${id}`, budget)
      .then( res => {
        const { budgets } = this.state.budgets.map( b => {
        if (b.id === id)
          return res.data;
        return b;
      });
      this.setState({ budgets });
      window.location.href = `/budgets/${res.data.id}`
    })
    .catch( err => {
      console.log(err);
    })
  }

  deleteBudget = (id) => {
    axios.delete(`/api/budgets/${id}`)
      .then( res => {
        const { budgets } = this.state;
        this.setState({ budgets: budgets.filter(b => b.id !== id) })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
     <BudgetContext.Provider value={{
        ...this.state,
        componentDidMount: this.componentDidMount,
        addBudget: this.addBudget,
        updateBudget: this.updateBudget,
        deleteBudget: this.deleteBudget,
        getBudget: this.getBudget,
        budget: this.state.budget,
        budgets: this.state.budgets
      }}>
        { this.props.children }
      </BudgetContext.Provider>
    )
  }
}

export default BudgetProvider;