import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./components/shared/Home";
import NoMatch from "./components/shared/NoMatch";
import Navbar from "./components/shared/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import BudgetShow from "./components/budget/BudgetShow";
import BudgetForm from "./components/budget/BudgetForm";
import ExpenseForm from "./components/expense/ExpenseForm";
import MyBudgets from "./components/budget/MyBudgets";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/budgets/:id" component={BudgetShow} />
          <Route exact path="/budgets/:budget_id/addExpense" component={ExpenseForm} />
          <ProtectedRoute exact path="/newBudget" component={BudgetForm} />
          <ProtectedRoute exact path="/myBudgets" component={MyBudgets} />
          <ProtectedRoute exact path="/secret" render={() => <h1>Secret</h1>} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
