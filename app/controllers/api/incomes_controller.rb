class Api::IncomesController < ApplicationController

  before_action :set_budget

    def index
      render json: @budget.incomes
    end

    def show
      @income = @budget.incomes.find(parmam[:id])
      render json: @income
    end

    def create
      @income = @budget.incomes.new(income_params)
      if @income.save
        render json: @income
      else
        render json: { errors: @income.errors}, status: :unprocessable_entity
    end

    def update
      @income = @budget.incomes.find(params[:id])
      if @income.update(income_params)
        render json: @income
      else
        render json: { errors: @income.errors}, status: :unprocessable_entity
    end

    def destroy
      Income.find(params[:id]).destroy
      render json: { message: "Income Deleted" }
    end

    private

    def income_params
      params.require(:income).permit
      (:payerName, :category, :amount, :freq, :nextPaydate)

    def set_budget
      @budget = Budget.find(params[:budget_id])
    end
  end