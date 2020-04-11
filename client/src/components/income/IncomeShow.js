import React, { Component } from 'react';
import { IncomeConsumer } from '../../providers/IncomeProvider';
import IncomeForm from './IncomeForm';
import { Button, Table, Icon } from 'semantic-ui-react';

class IncomeShow extends Component {
  state = { showForm: false }
  componentDidMount() {
	  this.props.getIncome(this.props.match.params.id)
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateIncome = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <IncomeForm {...this.props} toggleForm={this.toggleForm} />
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
    const { payerName, category, amount, freq, nextPayDate } = this.props.income
      return(
        <div>
            <h1>Income: {payerName}</h1>
            <br/>
        <Table celled striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell> Name </Table.HeaderCell>
            <Table.HeaderCell> Amount </Table.HeaderCell>
            <Table.HeaderCell> Next Date </Table.HeaderCell>
            <Table.HeaderCell> Frequency Paid</Table.HeaderCell>
            <Table.HeaderCell> Category </Table.HeaderCell>
            </Table.Row>    
        </Table.Header>
        <Table.Body>
            <Table.Row> 
                <Table.Cell> {payerName} </Table.Cell>               
                <Table.Cell> {amount} </Table.Cell>               
                <Table.Cell> {nextPayDate} </Table.Cell>               
                <Table.Cell> {freq} </Table.Cell>                             
                <Table.Cell> {category} </Table.Cell>                             
            </Table.Row>
        </Table.Body>
        </Table>
            {this.updateIncome()}
        </div>
      )
  }
}
  
const ConnectedIncomeShow = (props) => (
  <IncomeConsumer> 
    {
      value =>
      <ExpenseShow {...props} {...value} />
    }
  </IncomeConsumer>
)

export default ConnectedIncomeShow;