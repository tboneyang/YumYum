class AddDateToFoodposts < ActiveRecord::Migration
  def change
    add_column :foodposts, :date, :date
  end
end
