import React, { Component } from "react";
import axios from "axios";

const ExpenseContext = React.createContext();
export const ExpenseConsumer = ExpenseProvider.Consumer;

class ExpenseProvider extends Component {
  state = {
    expenses: [],
    expense: {},
  };

  getExpenses = (budgetId) => {
    axios
      .get(`/api/budgets/${budgetId}/expenses`)
      .then((res) => {
        this.setState({ expenses: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  createExpense = (budgetId, history) => {
    axios
      .post(`/api/budgets/${budgetId}/expenses`)
      .then((res) => {
        this.setState({ expenses: [...expenses, res.data] });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateExpense = (budgetId, expenseId, history) => {
    axios
      .post(`/api/budgets/${budgetId}/expenses/${expenseId}`)
      .then((res) => {
        this.state.expenses.map((e) => {
          if (e.id === expense.id) {
            return res.data;
          }
          return e;
        });
        this.setState({ expense: [...expense, res.data] });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteExpense = (budgetId, expenseId, history) => {
    axios
      .post(`/api/budgets/${budgetId}/expense/${expenseId}`)
      .then((res) => {
        this.setState({
          expenses: this.state.expenses.filter((e) => e.id !== expenseId),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <ExpenseContext.Provider
        value={{
          ...this.state,
          getExpenses: this.getExpenses,
          createExpense: this.createExpense,
          deleteExpense: this.deleteExpense,
          updateExprese: this.updateExpense,
        }}
      >
        {this.props.children}
      </ExpenseContext.Provider>
    );
  }
}

export default ExpenseProvider;
