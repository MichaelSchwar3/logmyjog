class CreateRuns < ActiveRecord::Migration[5.2]
  def change
    create_table :runs do |t|
      t.string :location
      t.integer :distance, null:false
      t.integer :duration
      t.integer :runner_id, null:false
      t.boolean :completed_run, null:false
      t.timestamps
    end
    add_index :runs, :runner_id
  end
end
