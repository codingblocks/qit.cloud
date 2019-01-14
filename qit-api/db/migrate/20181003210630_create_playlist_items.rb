class CreatePlaylistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_items do |t|
      t.references :playlist, foreign_key: true
      t.references :episode, foreign_key: true
      t.timestamps
    end
  end
end
