class AddColumnToRuns < ActiveRecord::Migration[5.2]
  def change
    add_column :runs, :run_map, :string, null:false
  end
end
