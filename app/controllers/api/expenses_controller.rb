class Api::ExpensesController < ApplicationController

  before_action :set_budget
  
  def index
    render json: @budget.expenses
  end

  def show
    @expense = @budget.expenses.find(params[:id])
    render json: @expense
  end

  def create
    @expense = @budget.expenses.new(expense_params)
    if @expense.save
      render json: @expense
    else
      render json: {errors: @expense.errors}, status: :unprocessable_entity
    end
  end

  def update
    @expense = @budget.expenses.find(params[:id])
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: {errors: @expense.errors}, status: :unprocessable_entity
    end
  end

    def destroy
      Expense.find(params[:id]).destroy
      render json: { message: 'Expense Deleted'}
    end

  private
  def expense_params
    params.require(:expense).permit(:billerName, :category, :amount, :freq, :nextBillDate)
  end

  def set_budget
    @budget = Budget.find(params[:id])
  end
end
