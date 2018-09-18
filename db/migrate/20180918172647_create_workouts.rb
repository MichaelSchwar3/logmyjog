class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name, null:false
      t.date :start_time, null:false
      t.text :description, null:false
      t.integer :run_id, null:false
      t.float :distance, null:false
      t.integer :duration, null:false
      t.timestamps
    end
    add_index :workouts, :run_id
  end
end
