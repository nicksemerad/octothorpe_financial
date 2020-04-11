import React, { Component } from "react";
import axios from "axios";

const ExpenseContext = React.createContext();
export const ExpenseConsumer = ExpenseProvider.Consumer;

class ExpenseProvider extends Component {
  state = { expense: [] };

  getExpenses(id) {
    axios
      .get(`/api/budgets/${id}/expenses`)
      .then((res) => {
        this.setState({ expense: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createExpense = (expense, id, history) => {
    axios
      .post(`/api/budgets/${id}/expenses`, expense)
      .then((res) => {
        this.setState({ expense: [...expense, res.data] });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteExpense = (expense, id, history) => {
    axios
      .post(`/api/budgets/${id}/expense`, user)
      .then((res) => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleLogout = (history) => {
    axios
      .delete("/api/auth/sign_out")
      .then((res) => {
        this.setState({ user: null });
        history.push("/login");
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
        }}
      >
        {this.props.children}
      </ExpenseContext.Provider>
    );
  }
}

export default ExpenseProvider;
