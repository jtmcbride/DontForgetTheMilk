class CreateSubtasks < ActiveRecord::Migration
  def change
    create_table :subtasks do |t|
      t.integer :task_id, null: false
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
