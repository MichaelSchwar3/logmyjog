class AddEmailToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null:false
    add_index :users, :email, unique:true
    add_index :users, :session_token, unique:true
  end
end
