import React, { Component } from 'react';
import { BudgetConsumer } from '../../providers/BudgetProvider';
import BudgetForm from './BudgetForm';
import { Button, Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
        <Link to={{ pathname: `/budgets/${this.props.match.params.id}/addExpense`, budget:this.props.budget }} >
        <Button
            class="ui primary button">
            Add Expense
        </Button>
        </Link>

        <Button 
            onClick={() => this.props.addIncome()}
            class="ui primary button">
            Add Income
        </Button>
        <Button 
            onClick={() => this.props.deleteBudget(this.props.match.params.id)}
            class="ui primary button">
            Delete Budget
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
            <h2>Goal: {goal}</h2>
            <br/>
        <Table celled striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell> Expense </Table.HeaderCell>
            <Table.HeaderCell> Category </Table.HeaderCell>
            <Table.HeaderCell> Amount </Table.HeaderCell>
            <Table.HeaderCell> Next Date </Table.HeaderCell>
            </Table.Row>    
        </Table.Header>
        <Table.Body>
            <Table.Row> 
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