class AddTimesToFoodposts < ActiveRecord::Migration
  def change
    add_column :foodposts, :start_time, :time
    add_column :foodposts, :end_time, :time
  end
end
