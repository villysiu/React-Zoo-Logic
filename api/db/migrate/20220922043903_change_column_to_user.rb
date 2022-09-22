class ChangeColumnToUser < ActiveRecord::Migration[6.1]
  def up
    change_column :users, :level, :integer, default: 0
  end
  
  def down
    change_column :users, :level, :integer
  end
end
