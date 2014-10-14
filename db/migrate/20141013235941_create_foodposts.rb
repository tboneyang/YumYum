class CreateFoodposts < ActiveRecord::Migration
  def change
    create_table :foodposts do |t|
      t.string :content
      t.integer :user_id

      t.timestamps
    end
    add_index :foodposts, [:user_id, :created_at]
  end
end
