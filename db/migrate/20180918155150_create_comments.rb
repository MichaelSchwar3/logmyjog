class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null:false
      t.integer :author_id, null:false
      t.integer :run_id, null:false
      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :run_id
  end
end
