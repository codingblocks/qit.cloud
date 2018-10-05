class CreateQueueItems < ActiveRecord::Migration[5.2]
  def change
    create_table :queue_items do |t|
      t.references :user, foreign_key: true
      t.references :episode, foreign_key: true

      t.timestamps
    end
  end
end
