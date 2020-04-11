import React from 'react';
import { Link } from 'react-router-dom';
import { BudgetConsumer } from "../../providers/BudgetProvider";
import { Table } from 'semantic-ui-react';

class MyBudgets extends React.Component {
  state = { budgets: [] }
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
        <Table celled striped>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell> Budget Name </Table.HeaderCell>
            <Table.HeaderCell> Goal </Table.HeaderCell>
            </Table.Row>    
        </Table.Header>
        <Table.Body>
            <Table.Row> 
            {
              this.props.budgets.map( b => 
                <>
              <Table.Cell>{b.name}</Table.Cell>
              <Table.Cell>{b.goal}</Table.Cell>
              </>
                )
             }                                       
            </Table.Row>
        </Table.Body>
        </Table>
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

const ConnectedMyBudgets = (props) => (
	<BudgetConsumer>
		{ 
			value => 
			<MyBudgets {...props} {...value} />
		}
	</BudgetConsumer>  
)

export default ConnectedMyBudgets; 