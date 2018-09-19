class AddRunnerColumnToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :user_id, :integer, null:false
    add_index :workouts, :user_id
  end
end
