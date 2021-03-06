class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :user_id

      t.timestamps null: false
    end
    add_index :lists, [:user_id, :title], unique: true
  end
end
