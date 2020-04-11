import React, { Component } from './node_modules/react';
import { ExpenseConsumer } from '../../providers/ExpenseProvider';
import ExpenseForm from './ExpenseForm';
import { Button, Table, Icon } from './node_modules/semantic-ui-react';

class ExpenseShow extends Component {
  state = { showForm: false }
  componentDidMount() {
	  this.props.getExpense(this.props.match.params.id)
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateExpense = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <ExpenseForm {...this.props} toggleForm={this.toggleForm} />
        :
        <>
        <Button 
            onClick={() => this.toggleForm()}
	        class="ui secondary button">
          Edit
        </Button>
        </>
         }
     </>
    )
  }
  
  render() {
    const { billerName, category, amount, freq, nextBillDate } = this.props.expense
      return(
        <div>
            <h1>Expense: {billerName}</h1>
            <br/>
        <Table celled striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell> Name </Table.HeaderCell>
            <Table.HeaderCell> Amount </Table.HeaderCell>
            <Table.HeaderCell> Next Date </Table.HeaderCell>
            <Table.HeaderCell> Frequency Billed</Table.HeaderCell>
            <Table.HeaderCell> Category </Table.HeaderCell>
            </Table.Row>    
        </Table.Header>
        <Table.Body>
            <Table.Row> 
                <Table.Cell> {billerName} </Table.Cell>               
                <Table.Cell> {amount} </Table.Cell>               
                <Table.Cell> {nextBillDate} </Table.Cell>               
                <Table.Cell> {freq} </Table.Cell>                             
                <Table.Cell> {category} </Table.Cell>                             
            </Table.Row>
        </Table.Body>
        </Table>
            {this.updateExpense()}
        </div>
      )
  }
}
  
const ConnectedExpenseShow = (props) => (
  <ExpenseConsumer> 
    {
      value =>
      <ExpenseShow {...props} {...value} />
    }
  </ExpenseConsumer>
)

export default ConnectedExpenseShow;