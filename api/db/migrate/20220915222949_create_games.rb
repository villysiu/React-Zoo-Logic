class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :header
      t.string :board
      t.string :solution
      
      t.timestamps
    end
  end
end
