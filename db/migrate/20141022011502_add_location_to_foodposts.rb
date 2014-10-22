class AddLocationToFoodposts < ActiveRecord::Migration
  def change
    add_column :foodposts, :location, :string
  end
end
