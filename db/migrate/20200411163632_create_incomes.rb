class CreateIncomes < ActiveRecord::Migration[6.0]
  def change
    create_table :incomes do |t|
      t.string :payerName
      t.string :category
      t.float :amount
      t.string :freq
      t.string :nextPayDate
      t.belongs_to :budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
