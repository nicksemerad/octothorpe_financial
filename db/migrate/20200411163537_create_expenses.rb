class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :billerName
      t.string :category
      t.float :amount
      t.string :freq
      t.string :nextBillDate
      t.belongs_to :budget, null: false, foreign_key: true

      t.timestamps
    end
  end
end
