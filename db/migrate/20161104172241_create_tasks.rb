class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id, null: false
      t.integer :list_id, null: false
      t.string :name, null: false
      t.boolean :completed, default: false
      t.date :start_date
      t.date :due_date
      t.integer :priority
      t.integer :estimate

      t.timestamps null: false
    end
    add_index :tasks, :user_id
    add_index :tasks, :list_id
  end
end
