class AddNameColumnToRuns < ActiveRecord::Migration[5.2]
  def change
    add_column :runs, :name, :string, null:false
  end
end
