import React, { Component } from "react";
import { IncomeConsumer } from "../../providers/IncomeProvider";
import { Button, Checkbox, Form } from 'semantic-ui-react';

class IncomeForm extends Component {
	state = { payerName: '', category: '', amount: '', freq: '', nextPayDate: ''  }

	componentDidMount() {
		if (this.props.budget.income) {
			const { payerName, category, amount, freq, nextPayDate } = this.props.budget.income
			this.setState({ payerName, category, amount, freq, nextPayDate })
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.props.budget.income) {
			this.props.updateIncome(this.props.budget.income.id, this.state)
			this.props.toggleForm()
		} else {
			this.props.addIncome(this.state)
		}
		this.setState({ payerName: '', category: '', amount: '', freq: '', nextPayDate: '' })
	}

	render() {
		const { payerName, category, amount, freq, nextPayDate } = this.state
		return(
			<Form onSubmit={this.handleSubmit}>
				<label>Payer Name</label>
                <Form.Field>
                    <input 
                        required
                        name='payerName'
                        value={payerName}
                        onChange={this.handleChange}
                        />
                </Form.Field>
                <Form.Field>
				<label>Category</label>
                    <input 
                        required
                        name='category'
                        value={category}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                <Form.Field>
				<label>Amount Paid</label>
                    <input 
                        required
                        name='amount'
                        value={amount}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                <Form.Field>
				<label>Frequency</label>
                    <input 
                        required
                        name='freq'
                        value={freq}
                        onChange={this.handleChange}
                        />
                    </Form.Field>
                <Form.Field>
				<label>Next Pay</label>
                    <input 
                        required
                        name='nextPayDate'
                        value={nextPayDate}
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

const ConnectedIncomeForm = (props) => (
	<IncomeConsumer>
		{ 
			value => 
			<IncomeForm {...props} {...value} />
		}
	</IncomeConsumer>  
)

export default ConnectedIncomeForm; 