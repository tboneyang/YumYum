class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
    	t.string :title
    	t.text :text
    	#ask Damian how to do Dates/Times

      t.timestamps
    end
  end
end
