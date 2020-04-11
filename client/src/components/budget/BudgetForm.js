import React, { Component } from "react";
import { BudgetConsumer } from "../../providers/BudgetProvider";
import { Button, Checkbox, Form } from 'semantic-ui-react';

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
		if(this.props.budget) {
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
			<Form onSubmit={this.handleSubmit}>
				<label>Name</label>
                <Form.Field>
                    <input 
                        required
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        />
                </Form.Field>
                <Form.Field>
				<label>Budget Goal</label>
                    <input 
                        required
                        name='goal'
                        value={goal}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
				<Button 
					type='submit' 
					class="ui primary button">
                        Submit
                </Button>
			</Form>
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