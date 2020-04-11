import React, { Component } from 'react';
import { BudgetConsumer } from '../../providers/BudgetProvider';
import BudgetForm from './BudgetForm';

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
        <button 
            onClick={() => this.toggleForm()}
            type='submit' 
	        class="ui primary button">
          Edit
        </button>
      }
     </>
    )
  }
  
  render() {
    const { name, goal } = this.props.budget
      return(
        <div>
          <h1>Budget Show</h1>
            <h2>{name}</h2>
            <h3>{goal}</h3>
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