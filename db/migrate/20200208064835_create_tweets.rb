class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :text
      t.integer :num_likes
      t.integer :num_retweets

      t.timestamps
    end
  end
end
