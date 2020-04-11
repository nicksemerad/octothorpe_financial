import React, { Component } from './node_modules/react';
import { BudgetConsumer } from '../../providers/BudgetProvider';
import BudgetForm from './BudgetForm';
import { Button, Table, Icon } from './node_modules/semantic-ui-react';
import ExpenseForm from '../expense/ExpenseForm';
import IncomeForm from  '../income/IncomeForm';

class BudgetShow extends Component {
  state = { showForm: false }
  componentDidMount() {
	  this.props.getBudget(this.props.match.params.id)
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateBudget = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <BudgetForm {...this.props} toggleForm={this.toggleForm} />
        :
        <>
        <Button 
            onClick={() => this.toggleForm()}
	        class="ui secondary button">
          Edit
        </Button>
        <Button
            onClick={() => <ExpenseForm />}
            class="ui primary button">
            Add Expense
        </Button>
        <Button 
            onClick={() => <IncomeForm />}
            class="ui primary button">
            Add Income
            </Button>
        </>
         }
     </>
    )
  }
  
  render() {
    const { name, goal } = this.props.budget
      return(
        <div>
            <h1>Budget: {name}</h1>
            <br/>
        <Table celled striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell> Type </Table.HeaderCell>
            <Table.HeaderCell> Name </Table.HeaderCell>
            <Table.HeaderCell> Amount </Table.HeaderCell>
            <Table.HeaderCell> Next Date </Table.HeaderCell>
            <Table.HeaderCell> Category </Table.HeaderCell>
            </Table.Row>    
        </Table.Header>
        <Table.Body>
            <Table.Row> 
                <Table.Cell> </Table.Cell>               
                <Table.Cell> </Table.Cell>               
                <Table.Cell> </Table.Cell>               
                <Table.Cell> </Table.Cell>               
                <Table.Cell> </Table.Cell>               
            </Table.Row>
        </Table.Body>
        </Table>
            {this.updateBudget()}
        </div>
      )
  }
}
  
const ConnectedBudgetShow = (props) => (
  <BudgetConsumer> 
    {
      value =>
      <BudgetShow {...props} {...value} />
    }
  </BudgetConsumer>
)

export default ConnectedBudgetShow;