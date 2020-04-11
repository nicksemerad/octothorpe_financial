class Api::BudgetsController < ApplicationController

  def index
    render json: Budget.all
  end

  def show
    @budget = Budget.find(params[:id])
    render json: @budget
  end

  def create
    @budget = current_user.budgets.new(budget_params)
    if @budget.save
      render json: @budget
    else
      render json: { errors: @budget.errors}, status: :unprocessable_entity
    end
  end

  def update
    @budget = Budget.find(params[:id])
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: { errors: @budget.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    Budget.find(params[:id]).destroy
    render json: { message: 'Budget Deleted' }
  end

  private

  def budget_params
    params.require(:budget).permit(:name, :goal)
  end

end
