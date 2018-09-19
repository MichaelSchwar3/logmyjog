class RemoveColumnsFromRuns < ActiveRecord::Migration[5.2]
  def change
    remove_column :runs, :duration
    remove_column :runs, :completed_run
  end
end
