class ChangeDistanceToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :runs, :distance, :float
  end
end
