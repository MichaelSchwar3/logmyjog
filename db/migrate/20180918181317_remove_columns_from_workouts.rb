class RemoveColumnsFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :start_time
  end
end
