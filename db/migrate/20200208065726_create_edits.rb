class CreateEdits < ActiveRecord::Migration[5.2]
  def change
    create_table :edits do |t|
      t.string :original_text
      t.string :current_text
      t.string :new_text
      t.integer :num_of_edits
      t.references :tweet, foreign_key: true

      t.timestamps
    end
  end
end
