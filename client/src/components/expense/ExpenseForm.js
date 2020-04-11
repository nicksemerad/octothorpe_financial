import React, { Component } from "react";
import { ExpenseConsumer } from "../../providers/ExpenseProvider";
import { Button, Checkbox, Form } from 'semantic-ui-react';

class ExpenseForm extends Component {
	state = { billerName: '', category: '', amount: '', freq: '', nextBillDate: ''  }

	componentDidMount() {
		if (this.props.expense) {
			const { billerName, category, amount, freq, nextBillDate } = this.props.expense
			this.setState({ billerName, category, amount, freq, nextBillDate })
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if(this.props.expense) {
			this.props.updateExpense(this.props.expense, this.state.id)
		
		} else {
			this.props.createExpense(this.state)
		}
		this.setState({ billerName: '', category: '', amount: '', freq: '', nextBillDate: '' })
	}

	render() {
		const { billerName, category, amount, freq, nextBillDate } = this.state
		return(
			<Form onSubmit={this.handleSubmit}>
				<label>Biller Name</label>
                <Form.Field>
                    <input 
                        required
                        name='billerName'
                        value={billerName}
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
				<label>Amount Due</label>
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
				<label>Next Due</label>
                    <input 
                        required
                        name='nextBillDate'
                        value={nextBillDate}
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

const ConnectedExpenseForm = (props) => (
	<ExpenseConsumer>
		{ 
			value => 
			<ExpenseForm {...props} {...value} />
		}
	</ExpenseConsumer>  
)

export default ConnectedExpenseForm; 