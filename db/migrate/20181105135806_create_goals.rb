class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :actions, array: true
      t.string :description
      t.string :evidence, array: true
      t.float :score
      t.string :tag
      t.string :title

      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
