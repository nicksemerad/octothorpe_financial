import React, { Component } from "react";
import { BudgetConsumer } from "../../providers/BudgetProvider";

class BudgetForm extends Component {
	state = { name: '', goal: ''  }

	componentDidMount() {
		if (this.props.budget) {
			const { name, goal } = this.props.budget
			this.setState({ name, goal })
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.props.buget) {
			this.props.updateBudget(this.props.budget.id, this.state)
			this.props.toggleForm()
		} else {
			this.props.addBudget(this.state)
		}
		this.setState({ name: '', goal: '' })
	}

	render() {
		const { name, goal } = this.state
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Name</label>
				<input 
					required
					name='name'
					value={name}
					onChange={this.handleChange}
				/>
				<label>Description</label>
				<input 
					required
					name='goal'
					value={goal}
					onChange={this.handleChange}
				/>
				<button 
					type='submit' 
					class="ui primary button">
                        Submit
                </button>
			</form>
		)
	}
}

const ConnectedBudgetForm = (props) => (
	<BudgetConsumer>
		{ 
			value => 
			<BudgetForm {...props} {...value} />
		}
	</BudgetConsumer>  
)

export default ConnectedBudgetForm; 